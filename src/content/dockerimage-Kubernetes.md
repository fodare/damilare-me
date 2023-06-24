---
title: Deploy a docker image to a GKE cluster
author: Dare O.
date: 2023-06-24
tag: Lessons
---

<h2 style="padding-bottom:1rem">Introduction</h2>

<a className="post-links" target="_blank" href="https://docs.docker.com/get-started/overview/"> *Docker*</a> is an open platform for developing, shipping, and running <a className="post-links" target="_blank" href="https://docs.docker.com/get-started/02_our_app/"> *containerized*</a> applications. <a className="post-links" target="_blank" href="https://kubernetes.io/"> *K8s*</a> is an open source system to help automate deployment of applications and manage containerized applications. Together, these two services help aid smooth application development and deployment process.

For this short blog, I created a simple proxy <a className="post-links" target="_blank" href="https://flask.palletsprojects.com/en/2.2.x/"> *Flask*</a> app to fetch random user account from <a className="post-links" target="_blank" href="https://randomuser.me/documentation"> *Randomuser API*</a> then containerized the application and pushed docker image to docker hub.

Please note the steps below are not ideal for a PROD env as there are more steps required to prepare and run a PROD-ready Kubernetes cluster.

<h2 style="padding-bottom:1rem">Prerequisites</h2>

1. Have your application docker-image on the docker hub.

2. A Google cloud account. <a className="post-links" target="_blank" href="https://cloud.google.com/free"> *Create a free account.*</a>

3. Have kubectl installed on your local machine. <a className="post-links" target="_blank" href="https://kubernetes.io/docs/tasks/tools/"> *Installation guide.*</a>

<h2 style="padding-bottom:1rem">Creating GKE K8s cluster</h2>

To create a K8s cluster on the Google Kubernetes Engine, navigate to your  <a className="post-links" target="_blank" href="https://console.cloud.google.com/"> *Google cloud console*</a> and follow the steps below.

- Click the `Create a GKE cluster` button from the console.

- In the top right corner of the cluster creation form, click the `Switch To Standard cluster` and then the `Create` button in the next view. Note this process might take some time.

<h2 style="padding-bottom:1rem">Connect to your K8s cluster </h2>

Once the cluster is ready, a green checkmark is displayed under the cluster status column. To connect to the cluster, follow the steps below.

- Click on the cluster name.

- At the top of the cluster info page, click on the `CONNECT` button. This presents a POUP window containing the gcloud container connection command. Example `gcloud container clusters get-xxxxxxxxx`.

- Copy the command and execute on your favourite CLI tool. Once executed, you have an active connection to the cluster.

<h2 style="padding-bottom:1rem">Created a deployment</h2>

To quickly deploy your docker image, fill in and execute the commands below.

<div className="code-highlight">
<pre className=code-text>
kubectl create deployment {deployment-name} --image={docker image of docker hub}
// example kubectl create deployment flask-app --image=fancyDockerId/docker-image:tag
</pre>
</div>

Expose the deployment so you can access your application.

<div className="code-highlight">
<pre className=code-text>
kubectl expose deployment {deployment-name} --type=LoadBalancer --port={ ideally the port your docker image is running on}
// example kubectl expose deployment flask-app --type=LoadBalancer --port=5000
</pre>
</div>

Get running service external IP address and open port by executing the command below.

<div className="code-highlight">
<pre className=code-text>
kubectl get svc

// Example response:
NAME         TYPE           CLUSTER-IP    EXTERNAL-IP     PORT(S)          AGE
flask-app    LoadBalancer   xx.xxx.x.20   xx.xxx.xx.118   5000:32763/TCP   xxm
kubernetes   ClusterIP      xx.xxx.x.1    <none>                443/TCP          xxm

</pre>
</div>

With the Cluster-IP of the LoadBalancer and it's port number, you can access your application view the web browser / Postman.

<h2 style="padding-bottom:1rem">Destroy cluster</h2>

Once you are ready to decommission your cluster. You can run the command below.
<div className="code-highlight">
<pre className=code-text>
kubectl delete all  -l app={label for your deployment / services}

// Example
kubectl delete all  -l app=flask-app
</pre>
</div>

There are ways to automate the deployment process above. This can be done by creating a deployment.yaml file then simply executing a `kubectl apply` command. Checkout this <a className="post-links" target="_blank" href="https://docs.docker.com/get-started/kube-deploy/"> *docker guide*</a> for more on automating deployment process.
