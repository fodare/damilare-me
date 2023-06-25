---
title: Deploy a docker image to a GKE cluster
author: Dare O.
date: 2023-06-24
tag: Lessons
---

<h2 style="padding-bottom:1rem">Introduction</h2>

<a className="post-links" target="_blank" href="https://docs.docker.com/get-started/overview/"> *Docker*</a> is an open platform for developing, shipping, and running <a className="post-links" target="_blank" href="https://docs.docker.com/get-started/02_our_app/"> *containerized*</a> applications. <a className="post-links" target="_blank" href="https://kubernetes.io/"> *K8s*</a> is an open source system to help automate deployment of applications and manage containerized applications. Together, these two services help aid smooth application development and deployment process.

For this short blog, I created a simple proxy <a className="post-links" target="_blank" href="https://flask.palletsprojects.com/en/2.2.x/"> *Flask*</a> app to fetch random user account from <a className="post-links" target="_blank" href="https://randomuser.me/documentation"> *Randomuser API*</a> then containerized the application and pushed docker image to docker hub.

Please note the steps below are not ideal for a PROD env as there are more steps required to prepare and run a PROD-ready Kubernetes cluster. See <a className="post-links" target="_blank" href="https://kubernetes.io/docs/setup/production-environment/"> *Here*</a> for tips for prepreaing a PROD-grade k8s cluster.

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

<h2 style="padding-bottom:1rem">Create a deployment</h2>

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

There are ways to automate the deployment process above. This can be done by creating a deployment.yaml file then simply executing a `kubectl apply` command. Checkout this <a className="post-links" target="_blank" href="https://docs.docker.com/get-started/kube-deploy/"> *docker guide*</a> for more on automating deployment process.

Kubectl can help you create a deployment/service.yaml configuration file. If you can have a k8s cluster running, you can exec the command below from your project's working directory.

<div className="code-highlight">
<pre className=code-text>
kubectl get deployment {deployment name} -o yaml > deployment.yaml
kubectl get service {service name} -o yaml > service.yaml

// Example
kubectl get deployment flask-app -o yaml > deployment.yaml
kubectl get service flask-app -o yaml > service.yaml
</pre>
</div>

Refresh your project's DIR to view the new `.yaml` configuration files. These files can now be tracked as changes within your project.

For a smoother deployment process, I will recommend merging the contents of `service.yaml` into `deployments.yaml`, so you have a single deployment file to manage your cluster. Below is what my `deployment.yaml` file looks like after merging service configuration and deleting some unnecessary data(Values we need not specify as they were generated by gcloud.).
<div className="code-highlight">
<pre className=code-text>
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: flask-app
  name: flask-app
  namespace: default
  # uid: 590128ab-8de6-4ad4-8cc6-5368a7621557
spec:
  replicas: 1
  minReadySeconds: 45
  selector:
    matchLabels:
      app: flask-app
  strategy:
    rollingUpdate:
      maxSurge: 25%
      maxUnavailable: 25%
    type: RollingUpdate
  template:
    metadata:
      labels:
        app: flask-app
    spec:
      containers:
      - image: foloo12/flask-app:0.0.1
        imagePullPolicy: IfNotPresent
        name: flask-app
        resources: {}
      restartPolicy: Always
      terminationGracePeriodSeconds: 30
---
# Service Defination
apiVersion: v1
kind: Service
metadata:
  labels:
    app: flask-app
  name: flask-app
  namespace: default
  # uid: f2f4ab6a-9841-43be-bb4d-45ef36d543e3
spec:
  ports:
  # - nodePort: 30668
  - port: 5000
    protocol: TCP
    targetPort: 5000
  selector:
    app: flask-app
  sessionAffinity: None
  type: LoadBalancer
</pre>
</div>

With the `deployment.yaml` file, you can recreate your deployment/service or manage your cluster via the config file, so you need not manage them from Google Console thereby saving you time.
As an example, I would like to scale my deployment to 2 instances, so my cluster can deal with more requests, I can simply change the `spec.replicas` value to 2, exec the command below and commit changes to git.

<div className="code-highlight">
<pre className=code-text>
kubectl apply -f deployment.yaml

// Check if changes were applied.
kubectl get rs
// Number of replica set will == 2
</pre>
</div>

<h2 style="padding-bottom:1rem">Destroy cluster</h2>

Once you are ready to decommission services and deployments within your cluster, you can run the command below.
<div className="code-highlight">
<pre className=code-text>
// Get cluster info:

kubectl get all -o wide

// Delete:
kubectl delete all -l app={label for your deployment / services}
// -l means label

// Example
kubectl delete all -l app=flask-app
</pre>
</div>
