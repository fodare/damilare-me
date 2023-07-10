---
title: Deploy to Azure kubernetes cluster
author: Dare O.
date: 2023-07-09
tag: Lessons
---

<h2 style="padding-bottom:1rem">Introduction</h2>

Azure's version of container orchestration is Azure Kubernetes service, aka AKS. AKS is a fully managed Kubernetes service for deploying, managing, and scaling containerized applications.

This blog detail the steps to build docker images, provision an AKS cluster, push docker images to the docker hub, and deploy containerized applications to the provisioned cluster.

<h2 style="padding-bottom:1rem">Prerequisites</h2>

To deploy the sample application built for this blog, you will need the tools and accounts listed below.

1. Azure subscription. <a className="post-links" target="_blank" href="https://azure.microsoft.com/en-in/free/"> *Create a free account.*</a>

2. Kubectl.<a className="post-links" target="_blank" href="https://kubernetes.io/docs/tasks/tools/"> *Installation guide.*</a>

3. Docker <a className="post-links" target="_blank" href="https://docs.docker.com/desktop/install/linux-install/"> *Installation guide.*</a>

4. A Docker hub account. <a className="post-links" target="_blank" href="https://hub.docker.com/#!"> *Create a free account.*</a>

5. An Azure DevOps account.<a className="post-links" target="_blank" href="https://azure.microsoft.com/en-us/products/devops/"> *Create a free account*</a>

6. Terraform <a className="post-links" target="_blank" href="https://developer.hashicorp.com/terraform/tutorials/azure-get-started/install-cli"> *Installation guide.*</a>

7. Favourite IDE. e.g. VS Code

<h2 style="padding-bottom:1rem">Prepare your application code</h2>

The <a className="post-links" target="_blank" href="https://github.com/fodare/Azure-k8s-flask-app"> *sample application*</a> used in this blog is a simple Python Flask server with a front-end and back-end service. The front-end service receives HTTP requests and then proxies requests to the back-end service, which then fetches random users from <a className="post-links" target="_blank" href="https://randomuser.me/"> *randomuser.me.*</a>

Sample file structure.

```python
.
├── AKS-gateway-ingress.yaml
├── Azure-AKS
│   ├── main.tf
│   ├── output.tf
│   └── variables.tf
├── Azure-kubernete-iaac-pipeline.yml
├── Backend
│   ├── app.py
│   ├── deployment.yaml
│   ├── dockerfile
│   └── requirements.txt
├── backend-ci-cd-pipeline.yml
├── docker-compose.yaml
├── frontend
│   ├── app.py
│   ├── deployment.yaml
│   ├── dockerfile
│   ├── __pycache__
│   │   └── app.cpython-310.pyc
│   └── requirements.txt
├── frontend-ci-cd-pipeline.yml
└── ingress.yaml

```

<h2 style="padding-bottom:1rem">Testing locally</h2>

The sample application has a docker-compose file you can run to test the application locally. Follow the steps below to test on your local machine.

- Get a copy of the code.

`git clone https://github.com/fodare/Azure-k8s-flask-app.git`

- Navigate to root dir

`cd cd Azure-k8s-flask-app/`

- Start services

`sudo docker compose up -d`

- Test

`docker container ps -a`

```python

CONTAINER ID   IMAGE                  COMMAND                PORTS                                      NAMES
329911d5009c   foloo12/frontend:0.0.7 "python ./frontend/a…" 0.0.0.0:3000->5000/tcp, :::3000->5000/tcp  frontendservice
6172e925710f   foloo12/backend:0.0.7  "python ./backend/ap…" 0.0.0.0:3001->5001/tcp, :::3001->5001/tcp  backendservice

```

The front-end service is exposed on port 3000 on your local machine, you can from your local browser search <http://localhost:3000/frontendservice/user>. Request is proxied to the back-end service then to <a className="post-links" target="_blank" href="https://randomuser.me/"> *randomuser.me.*</a>

Front-end service verbs are:

- <http://localhost:3000/frontendservice/>
- <http://localhost:3000/frontendservice/user>
- <http://localhost:3000/frontendservice/user/gender/male>
- <http://localhost:3000/frontendservice/user/20>

<h2 style="padding-bottom:1rem">Provision AKS cluster</h2>

Running applications on an AKS cluster requires we create the cluster in the first place. There are multiple ways to provision an AKS cluster, but one of my favourite ways is to use a CI-CD pipeline that executes terraform commands. Check out some tips from this Microsoft blog <a className="post-links" target="_blank" href="https://learn.microsoft.com/en-us/azure/aks/learn/quick-kubernetes-deploy-terraform?tabs=azure-cli"> *here.*</a>

For the sample application, there is a `dir` named `Azure-AKS` (AKS config file). The `main.tf` file contains simple terraform definitions to create a resource group and create the cluster. Notice the `backend "azurerm""` definition is commented, this is because we would be using a pipeline variable to pass these values to create an Azure storage account to help store terraform state remotely.

Let's create a CI-CD pipeline to help automate the creation of an AKS cluster.

- <a className="post-links" target="_blank" href="https://dev.azure.com/"> *From Azure DevOps*</a>, create a new project.

- Create a service principal account.

```python
# From your CLI. 
az login
az ad sp create-for-rbac --role="Contributor" --scopes="/subscriptions/<<your azure_subscription id>>"
# Store the result safely
```

- Create a public key for ssh connection

```python
# From your cli
ssh-keygen -m PEM -t rsa -b 4096
# Do not store the pub file in your project dir.
```

- From Azure DevOps, `Project settings`,`Service connections`, create a new service connection for `Azure Resource Manager`, `Service principal (automatic)`

- Import the public pub file created earlier to pipeline secure files

  - `Pipeline` - `Library` - `Secure files`. Drag and drop or import the `.pub` file.

- Create a new Pipeline.
  - From the pipeline menu Click the `New pipeline`, select the location of the source code and use the `Starter pipeline`. Example github yaml, you can also use the sample code from <a className="post-links" target="_blank" href="https://github.com/fodare/Azure-k8s-flask-app/blob/main/Azure-kubernete-iaac-pipeline.yml"> *here*</a>. Comment out the `destroy` task as it deletes the cluster once executed. Uncomment the `vmImage` if you are using Azure's agent.
