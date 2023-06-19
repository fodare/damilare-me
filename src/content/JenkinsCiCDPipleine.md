---
title: Simple Jenkins CI-CD pipeline
author: Dare O.
date: 2023-06-18
tag: Lessons
---

<h2 style="padding-bottom:1rem">Introduction</h2>

<a className="post-links" target="_blank" href="https://www.jenkins.io"> *Jenkins*.</a> is an open-source automation server that can help automate some parts of your development phase. Jenkins provides good continuous integration and continuous delivery solution, and some of its benefits are easy installation, configuration, and customizable plugins.

Jenkins helps to automate some development tasks from integration - deployment. Wherever a developer commits changes to a source control system, Jenkins will trigger a build based on a set of defined instructions within a pipeline. The build process checkouts the new commit(s), run some predefined tests, and depending on the test result(s), a notification is triggered to developers, or the agent continues to the next phase.

This blog details a short description of creating a pipeline, building a docker image, and pushing to docker hub.

<h2 style="padding-bottom:1rem">Installation</h2>

Typically, Jenkins is a standalone application that can run on various types of OS. I prefer the docker installation as it's faster and requires less maintenance. Please visit <a className="post-links" target="_blank" href="https://www.jenkins.io/doc/book/installing/docker/"> *Docker installation*</a> and <a className="post-links" target="_blank" href="https://www.jenkins.io/doc/book/installing/"> *Other installation*</a> for other types of available installations guides(Windows, macOS, Linux.).

<h2 style="padding-bottom:1rem">Creating a pipleline</h2>

Jenkins provides two options for accessing the application, a web interface and a REST API interface. Using the web interface you can create a pipeline with the steps below.

<h3 style="padding-bottom:1rem">Configure Tools</h3>

From the dashboard click on `Manage Jenkins` then `Tools`.  At the bottom of the page, you can edit the docker installation by giving the installation a unique name and clicking the `Install automatically` check box like below.

<a target="_self" href="https://github.com/fodare/media/blob/main/JenkinsPipeline/Docker-installation.png?raw=true"><img className="posts-image" src="https://github.com/fodare/media/blob/main/JenkinsPipeline/Docker-installation.png?raw=true" alt="Adding docker tools."/></a>

<h3 style="padding-bottom:1rem">Add a pipeline</h3>

From the dashboard, click on the `New item` menu, provide desired pipeline name, and select the `Pipeline` option like below.

<a target="_self" href="https://github.com/fodare/media/blob/main/JenkinsPipeline/Creating-pipeline.png?raw=true"><img className="posts-image" src="https://github.com/fodare/media/blob/main/JenkinsPipeline/Creating-pipeline.png?raw=true" alt="Create new pipeline"/></a>

<h3 style="padding-bottom:1rem">Configure your pipeline</h3>

Once the pipeline is ready, you will be routed to a new view of the newly created pipeline when you can administrate the new pipeline. Click on the `Configure` menu to edit the pipeline's configuration.

- Pipeline Definition = `Pipeline script from SCM`
- SCM = `Git` (Configure GitHub connection here.)
- Script Path = `Jenkinsfile`

If you would like the pipeline to be executed at certain intervals, you can check the `Build periodically` checkbox and configure the desired build interval.

<h3 style="padding-bottom:1rem">Create docker hub connection</h3>

To grant Jenkins access to your docker repository, you need to create a stored credential within Jenkins, so you can use this credential when executing docker commands later in your Jenkins file.

To create a credential, follow the steps below:

- From the dashboard, click on `Manage Jenkins`.
- Under `Security` click `Credentials` and under `Credentials` click `global` to add new credentials.
- Click the `Add Credentials` button and select `Username with password`
- Scope = `Global`
- Username = `Your docker id`
- Password = `Your docker hub password`
- ID = `Unique name to identify credetials`
- Click the `Create button`

<h3 style="padding-bottom:1rem">Prepare your Jenkinsfile</h3>

Jenkinsfile contains the instructions and steps Jenkins is to execute to help fetch, build, test, and deploy your application.
At the root of your application folder, create a file with the name `Jenkinsfile`. There are two types of syntax namely `declarative` and `scripted` you can follow when scripting your build process.

Declarative syntax

<div className="code-highlight">
<pre className=code-text>
pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                # Steps to build your application.
            }
        }
        stage('Test') {
            steps {
                # Steps to test your application.
            }
        }
        stage('Deploy') {
            steps {
                # Steps to deploy your appliaction.
            }
        }
    }
}
</pre>
</div>

Scripted syntax

<div className="code-highlight">
<pre className=code-text>
node {  
    stage('Build') {
       # Steps to build your application.
    }
    stage('Test') {
        # Steps to test your application.
    }
    stage('Deploy') {
        # Steps to deploy your appliaction.
    }
}
</pre>
</div>

An example for Jenkins file to help build a docker image and push to docker hub looks like below.

<div className="code-highlight">
<pre className=code-text>
pipeline {
#  agent any
 agent {docker {image 'maven:3.6.3'}}
 environment{
  dockerHome = tool 'myDocker'
  mavenHome = tool 'myMaven'
  PATH = "$dockerHome/bin:$mavenHome/bin:$PATH"
 }
 stages{
  stage('Checkout'){ // Automatic jenkins behaviour
   steps{
    sh 'mvn --version'
    sh 'docker version'
    echo "Build"
    echo "Path - $PATH"
    echo "BUILD_NUMBER - $env.BUILD_NUMBER"
    echo "Build Id - $env.BUILD_ID"
    echo "Build Tag - $env.BUILD_TAG"
   }
  }
  stage('Compile'){
   steps{
    sh "mvn clean compile"
   }
  }
  stage('Test'){
   steps{
    sh "mvn test"
   }
  }
  stage('Intergation Test'){
   steps{
    sh "mvn failsafe:integration-test failsafe:verify"
   }
  }
  stage('Package .jar'){
   steps{
    sh "mvn package -DskipTests" # Pacakage application
   }
  }
  stage('Build docker image'){
   steps{
    // sh "docker build -t {your docker is}}/{your docker repository}:$env.BUILD_TAG"
    script{
     docker.build("{your docker is}}/{your docker repository}:${env.BUILD_TAG}")
    }
   }
  }
  stage('Push docker image'){
   steps{
    script{
     docker.withRegistry('','Docker-hub') {
      dockerImage.push();
      dockerImage.push('latest')
     }
    }
   }
  }
  # What happens for every build.
 }
 post {
  always{
   echo 'Build finished. Please see result below.'
  }
  success {
   echo 'Build finished successfully!'
  }
  failure {
   echo 'Build failed. Please checkout build logs!'
  }
 }
}
</pre>
</div>

Depending on your application, you can best find jenkins file for your application on the internet. Commit changes to Git and navigate back to Jenkins UI.

<h3 style="padding-bottom:1rem">Trigger manual build</h3>

Independent of the build interval selected during your pipeline configuration, you can also trigger a build by following the steps below.

- From the dashboard, click on your pipeline.
- On the left pane, click `Build Now` menu.

Once build is successful, you should have a new docker image within your docker repository on docker hub and if there are any changes to your code / application, the build process will tell if there are breaking changes or if new images are pushed to docker hub.
