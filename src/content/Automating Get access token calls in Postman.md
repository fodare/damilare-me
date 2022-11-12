---
title: Automating Postman GET access token calls
author: Dare O.
date: 2022-11-12
tag: Lessons
---

<h2 style="padding-bottom:1rem">Introduction</h2>

<a className="post-links" target="_blank" href="https://www.postman.com/product/what-is-postman/"> Postman</a> Is an API platform for building, testing and also monitor APIs. Recently, a colleague was testing an API and to authorize himself had to click on the "Get New Access Token" on the parent collection before making other calls to resources available within the API collection.

So he asked if there are possibilities to automate the "Get New access tokens" when he makes HTTP calls to other resources within the API collection, and below I would like to share a method that can help achieve this.

<h2 style="padding-bottom:1rem">Step 1: Collection creation</h2>

Let's create a collection(More like a dir) to hold all the resource paths/calls for a sample API.

<a target="_self" href="https://raw.githubusercontent.com/fodare/media/main/Automate%20Postman%20access%20token/CreateCollection.png"><img className="posts-image" src="https://raw.githubusercontent.com/fodare/media/main/Automate%20Postman%20access%20token/CreateCollection.png" alt="Create postman collection"/></a>

<h2 style="padding-bottom:1rem">Step 2: Create enviroment variables</h2>

Postman environment variables can be treated as virtual memories to help you store values. Below is an image illustrating a quick step to create an environment variable.

<a target="_self" href="https://raw.githubusercontent.com/fodare/media/main/Automate%20Postman%20access%20token/CreateEnviromentVariable.png"><img className="posts-image" src="https://raw.githubusercontent.com/fodare/media/main/Automate%20Postman%20access%20token/CreateEnviromentVariable.png" alt="Create postman enviroment variables"/></a>

Once the step above is completed, do not forget to specify the correct environment variable to be used for your collection.

<h2 style="padding-bottom:1rem">Step 3: Edit collection pre-request script</h2>

Postman pre-request scripts can be used to execute JavaScript functions before a request/HTTP call is triggered to a specified resource path. Below is a short script that can help make "Get access token call", store and retrieve values from a specified environment variable.

<a target="_self" href="https://github.com/fodare/media/blob/main/Automate%20Postman%20access%20token/EditPreRequestScript.png?raw=true"><img className="posts-image" src="https://github.com/fodare/media/blob/main/Automate%20Postman%20access%20token/EditPreRequestScript.png?raw=true" alt="Edit postman pre-request script"/></a>

<a target="_self" href="https://github.com/fodare/media/blob/main/Automate%20Postman%20access%20token/preRequestScript.png?raw=true"><img className="posts-image" src="https://github.com/fodare/media/blob/main/Automate%20Postman%20access%20token/preRequestScript.png?raw=true" alt="Postman pre-request script"/></a>

You can add requests to the collection, and for each request, you can set its authorization/Auth type to <strong>inherit auth from parent</strong>.

RAW format for pre-request script:

<div className="code-highlight">
<pre className=code-text>
var tokenCreatedAt = pm.collectionVariables.get("tokenCreatedAt");

if (!tokenCreatedAt) {
    tokenCreatedAt = new Date(new Date().setDate(new Date().getDate() - 1))
}

var tokenExpiresIn = pm.collectionVariables.get("tokenExpiresIn");

if (!tokenExpiresIn) {
    tokenExpiresIn = 5000;
}

var tokenCreatedTime = (new Date() - Date.parse(tokenCreatedAt))

if (tokenCreatedTime >= tokenExpiresIn) {

    console.log("The token has expired. Attempting to request a new token.");

    pm.sendRequest({
        url: pm.variables.get("tokenURL"), // Read from enviroment variable value named tokenURL . In here you store the token endpoint.
        method: 'POST',
        header: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: {
            mode: 'urlencoded',
            urlencoded: [{
                    key: "username",
                    value: pm.environment.get("Username"), // create a new vlaue in the enviroment variable to hold API username.
                },
                {
                    key: "password",
                    value: pm.environment.get("Password"), // create a new vlaue in the enviroment variable to hold API password.
                },
            ]
        }
    }, function(error, response) {
        console.log("New access token is:"+response.json().access_token);
        
        pm.environment.set("API_token_created_At", new Date());
        pm.environment.set("API_token_jwt", response.json().access_token);

        var expiresIn = response.json().expires_in;
        
        if (expiresIn) {
            tokenExpiresIn = expiresIn * 1000;
        }
        
        pm.environment.set("API_token_expires_At", tokenExpiresIn);
    });
}
</pre>
</div>

I hope with the short script, you can save yourself some button clicks and sometime and help in a scenario where you would like to use Postman monitors.
