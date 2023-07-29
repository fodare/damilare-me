---
title: Basic Ansible configurations
author: Dare O.
date: 2023-07-29
tag: Lessons
---

<h2 style="padding-bottom:1rem">Introduction</h2>

<a className="post-links" target="_blank" href="https://docs.ansible.com/ansible/latest/index.html"> *Ansible*</a> is an open-source automation tool that can help configure systems, deploy software, and orchestrate complex workflows. It includes modules that help automate the creation, management, and scaling across a given tech stack.

Ansible can help you manage configurations of resources within your infrastructure landscape, be it cloud native resources or on-premise resources and a hybrid type of setup at scale.

This short blog detail steps to help configure and run simple Ansible playbooks.

<h2 style="padding-bottom:1rem">Prerequisites</h2>

For this short blog, we use a simple terraform project to help provision test AWS EC2 instance, then run some simple Ansible playbooks. To follow along, you will need to fulfil the prerequisites below.

- Ansible installed on your local machine. <a className="post-links" target="_blank" href="https://docs.ansible.com/ansible/latest/installation_guide/index.html"> *See installation guide*</a>

- Some AWS EC2 instances running. <a className="post-links" target="_blank" href="https://github.com/alfonsof/terraform-aws-examples"> *Terraform samples*</a>

- Ansible VS Code extension. (Not mandatory)

<h2 style="padding-bottom:1rem">Ansible Configuration</h2>

Ansible is an agentless, stateless automation tool that you install on a single host (referred to as the control node). From the control node (e.g. local machine), Ansible can manage an entire array of resources (aka managed nodes) remotely with SSH, PowerShell remoting, and numerous other means of transport, all from a simple command-line interface.

Once the installation is complete, you can create a new file directory to hold all your Ansible configuration files, inventory, playbooks, and variables.

<h3 style="padding-bottom:1rem">Install AWS Dynamic Inventory Plugin
</h3>

As you create new, destroy and toy with resources within your infrastructure, managing your static Ansible inventory list becomes error-prone and difficult. Ansible dynamic inventory uses an external inventory system to help fetch remote resources based on search criteria. Ansible supports two ways to connect with external inventory: Inventory plugins and inventory scripts.

- <a className="post-links" target="_blank" href="https://docs.ansible.com/ansible/latest/collections/amazon/aws/docsite/aws_ec2_guide.html"> *See installation guide here*</a>

- Create a new subdirectory with sample name `inventory` and create new file with the extension `aws_ec2.yml`, example `ec2Invertory.aws_ec2.yml`

Sample content below fetches all instance within a specific region and has tag with name `Env`.

<div className="code-highlight">
<pre className=code-text>
plugin: aws_ec2
regions:
 - eu-central-1
keyed_groups:
- key: tags.Env
</pre>
</div>

<h3 style="padding-bottom:1rem">Create basic config file </h3>

- Create a new file with extension `.cfg`. Example `ansible.cfg`. You can paste the content below in the new config file

<div className="code-highlight">
<pre className=code-text>
[defaults]
inventory = inventory/ec2Invertory.aws_ec2.yml # dir to the invetory file
remote_user = ec2-user # Default aws ec2 username
private_key_file = ~/AWS-keypairs/default-ec2.pem # patch to aws keypair
host_key_checking = False
retry_files_enabled = False
interpreter_python = auto_silent
enable_plugins = auto
# inventory = ./ansible_hosts # use this for static inventory type of config
</pre>
</div>

<h3 style="padding-bottom:1rem">Test connection </h3>

To test Ansible is able to reach your managed nodes, you can run the sample Ansible CLI command below. The command will return a graph of all resources that matches the keyed_groups values.

`ansible-inventory --graph`

<h3 style="padding-bottom:1rem">Sample playbook</h3>

Create a new subdirectory with sample name `playbooks` then create a new file with name `ping.yaml` with below sample content. When executed, it returns the python version installed on your instance.

<div className="code-highlight">
<pre className=code-text>
---
- hosts: all
  tasks:
     - name: Execute shell command
       shell: python  --version
       register: uname_result # Capture it result in a register
     - debug: msg="{{uname_result.stderr}}" # print the result in the ansible console
</pre>
</div>

To execute the playbook, you can run the sample command below. From the `playbooks` dir.

`ansible-playbook playbooks/ping.yml`

Depending on your goal, you can always create your playbook(s), then execute them to achieve desired configuration state. You can of course find sample Ansible playbooks <a className="post-links" target="_blank" href="https://github.com/ansible/ansible-examples"> *here*</a>.
