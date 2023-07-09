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

To successfully deploy to the AKS cluster, you will need the tools/applications listed below.

1. Azure subscription. <a className="post-links" target="_blank" href="https://azure.microsoft.com/en-in/free/"> *Create a free account.*</a>

2. Kubectl.<a className="post-links" target="_blank" href="https://kubernetes.io/docs/tasks/tools/"> *Installation guide.*</a>

3. Docker <a className="post-links" target="_blank" href="https://docs.docker.com/desktop/install/linux-install/"> *Installation guide.*</a>

4. A Docker hub account. <a className="post-links" target="_blank" href="https://hub.docker.com/#!"> *Create a free account.*</a>

5. An Azure DevOps account.<a className="post-links" target="_blank" href="https://azure.microsoft.com/en-us/products/devops/"> *Create a free account*</a>

6. Terraform <a className="post-links" target="_blank" href="https://developer.hashicorp.com/terraform/tutorials/azure-get-started/install-cli"> *Installation guide.*</a>

7. Favourite IDE. e.g. VS Code
