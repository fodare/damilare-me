---
title: Creating a VM with IIS webserver on Azure
author: Dare O.
date: 2022-04-24
tag: Lessons
---

<h2 style="color:#92BA92; padding-bottom:1rem">Introduction</h2>

Creating web servers is one of the first steps to high availability through redundancies. A Webserver falls into a type of Virtual Machine(VM). There are multiple ways to automate the creation process or configuration of VMs, tools such as Terraform, Ansible, Chef, Puppet, Azure Resource Manager template and many more can be used to help automate and manage Azure VMs more efficiently. However, the article below are steps to help create a VM from the Azure portal.


<h2 style="color:#92BA92; padding-bottom:1rem">Steps to creating VM </h2>

In this example we would be creating a virtual Windows server, configuring its NSG(Network security group), setting up a server manager and publishing a dummy custom web page.

1. Under *Azure Services*, we'll see the *Virtual machines*. Remember, there are multiple different ways to search *Virtual machines*, just in case for whatever reason something changes within the Azure portal.

2. Select *Virtual Machines*, from the very top left, with the plus symbol next to it.

3. Create a *resource group*(Use the desired name) and click okay.

4. Put in the *virtual machine name*. (i.e. {desired web server name}).

5. Fill in the region(Enter the region closest to you).

6. For the *availability options*, you can keep it for no redundancy at this moment.

7. Select *VM image*. For this post, we would be using Windows Server 2019 Datacenter Generation 1.

8. For the *virtual machine sizes*, leave it at the default or select the desired size depending on the application.

9. Put the *username* and *password* (Keep this safe).

<h2 style="color:#92BA92; padding-bottom:1rem">Integrating the Virtual Machine with Your Network Security Group</h2>

In the next steps, we would be configuring the VMs NSG, this can as well be integrated with the newly created resource group so you do not have to create an NSG for individual resource within a resource group. To do this follow the steps below.

1. Now it has the inbound ports. By default, allow selected ports to keep it as RDP for now.

2. The licensing will probably be only applicable if you have this special Windows license.

3. Click *Click Review and Create*.

4. Once the validation is completed and there are no errors, hit *Create*.

<h2 style="color:#92BA92; padding-bottom:1rem">Connecting to the Virtual Machine</h2>

Once the provisioning is completed, we can then connect to the VM via RDP / ssh to configure our web server. To connect to the VM follow the steps below.

1. Navigate to the newly created resource.

2. Select the virtual machine, click *Connect* and select the option for RDP to download the RDP file.

3. Open the *RDP file* and click connect.

4. Try and utilize the credentials created earlier.

<h2 style="color:#92BA92; padding-bottom:1rem">Setting up the server Manager</h2>

To add a role from the server manager. You can either do this from *Add roles and features* or *Manage* (top right corner).

1. Select the option *Add roles and Features*.

2. Click *Next* and keep it at the default setting, *role-based or feature-based installation*.

3. Click *Next* and keep *Server* as *{Server name used in step 4 above}*.

4. Scroll down to *Web server IIS*. Click *Add feature* and click *Next*.

5. Keep clicking *Next* and click *Install*.

6. Once successfully installed, click *close*.

7. Navigate back to *Tools*, click *Internet services IIS manager* to access the installed web service.

8. To add a custom page, right-click *Sites*, and then switch over to content view, under website.

<h2 style="color:#92BA92; padding-bottom:1rem">Setting up the server Manager</h2>

1. Access the file explorer, and then navigate to the directory that has your web content. From there, click *PC*, click *Windows*, click *Inetpub* then click *wwwroot*.

2. Right-click in an empty area, and create a new text file.

3. Type in "Server says hello" as an example.

4. Click *File*, choose *Save As* "index.html" and click save.

To  see the webpage

1. Go back to the portal, and click *Home*, Click *Virtual machines* under *Azure services*.

2. Select the virtual machine *your server name*.

3. Under *networking*, click *Add an inbound port rule*

4. *Source*: "any.

5. *Source port ranges*: "*"

6. *Destination*: any.

7. *Destination port ranges*: 80, 443.

8. *Protocol*: "any"

9. Your priority numbers are going to be the opposite, so the lower the number, the higher priority. Enter "HTTP access" below Name

10. Hit *add*.

Once the new rule has been created you will receive a notification showing the rule was successfully added. You can test the website by going to the public IP address of the VM, this would load the index.html file created earlier.