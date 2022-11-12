---
title: Automating Postman GET access token calls
author: Dare O.
date: 2022-11-12
tag: Lessons
---

<h2 style="padding-bottom:1rem">Introduction</h2>

<a className="post-links" target="_blank" href="https://www.postman.com/product/what-is-postman/"> Postman</a> Is an API platform for building, testing and also monitor APIs. Recently, a colleague was testing and API and to authorize himself had to click on the "Get New Access Token" on the parent collection before making other calls to resources available within the API collection.

So he asked if there are possibilities to automate the "Get New access tokens" when he makes HTTP calls to other resources within the API collection, and below I would like to share a method that can help achieve this.

<h2 style="padding-bottom:1rem">Step 1: Collection creation</h2>

Let's create a collection(More like a dir) to hold all the resource paths/calls for a sample API.
