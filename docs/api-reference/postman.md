# Documentation Postman Collection

Mywebsite Documentation has its own [Postman Collection](https://learning.postman.com/docs/collections/collections-overview/) to help you understand how to use the Mywebsite API.

This collection is:
* **Connect-oriented** – It doesn’t take into account legacy API services.
* **Sandbox-oriented** – It doesn’t provide production-only features.
* **Non-exhaustive** – It’s only meant to get you started, with key endpoints and attributes.

Before using the collection, ensure you already have the credentials for your Sandbox from Mywebsite.

<div style="display: flex; justify-content: center; margin: 20px 0;">
<div class="postman-run-button"
data-postman-action="collection/fork"
data-postman-visibility="public"
data-postman-var-1="35140470-4903f1b6-82b2-439d-9ca3-88a9e211a627"
data-postman-collection-url="entityId=35140470-4903f1b6-82b2-439d-9ca3-88a9e211a627&entityType=collection&workspaceId=47a606ac-be53-487b-ab8f-1a9f2669d7fa"></div>
</div>

<component is="script">
  (function (p,o,s,t,m,a,n) {
    !p[s] && (p[s] = function () { (p[t] || (p[t] = [])).push(arguments); });
    !o.getElementById(s+t) && o.getElementsByTagName("head")[0].appendChild((
      (n = o.createElement("script")),
      (n.id = s+t), (n.async = 1), (n.src = m), n
    ));
  }(window, document, "_pm", "PostmanRunObject", "https://run.pstmn.io/button.js"));
</component>

If you’re new to Postman, the sections below may help you get started:
* [Fork the collection](#fork-the-collection)
* [Set up your environment](#set-up-your-environment)
* [Pull the collection changes](#pull-collection-changes)

<div class="custom-block notenew">

<img src="/assets/img/code-white.png" alt="books icon" class="admonitions" /> 

**Reading – Postman Documentation**

The [Postman Documentation](https://learning.postman.com/docs/introduction/overview/) may provide more information on how to take advantage of the collection!

</div>

## Fork the collection

By clicking on the Run with Postman button, you’ll be invited to fork the collection. It consists of duplicating the collection to play with it without impacting the source collection and other users.

<img src="./illus/fork_collection.png" alt="Fork collection popup screenshot" height="320px" data-zoomable />

<div class="custom-block bestpracticenew">

<img src="/assets/img/code-white.png" alt="Bulb icon" class="admonitions" /> 

**Tip – Watch collection**

Make sure you tick the “Watch original collection” checkbox. You’ll be notified when the collection is updated so you can pull the changes into your collection.

</div>

Once the copy of the collection is available in your Postman workspace, you may set up your environment.

## Set up your environment

You need to create an environment to start using your collection. 

In the Postman Environment section, you can either:
* Create a new environment, in which you will add the relevant variables listed below, or
* Import [this environment](https://www.postman.com/restless-crater-540300/workspace/mywebsite-doc-public/environment/35140470-eec9e7d5-c109-4d8e-97c7-d399260a7561?action=share&creator=35140470) that you can download. It contains empty variables for you to fill in.

Then enter your environment URL and your credentials sent to you by Mywebsite in the variables:

| Variable | Description |
| --- | --- |
| `baseUrl` | Your Sandbox environment URL. |
| `client_id` | Your API authentication credentials provided to you by Mywebsite. |
| `client_secret` | Your API authentication credentials provided to you by Mywebsite. |

In addition, the following variables are necessary for some features:

| Variable | Description |
| --- | --- |
| `cardPrint` | If you plan on issuing cards, you will need this value provided upon setting up your Card Program. |
| `tariffId` | The fees applied to the Wallet, as defined by your contract with Mywebsite. This field is usually required to create Wallets but may have a default value set by Mywebsite. |

As you use the collection, the environment variables will automatically be defined by the scripts included in each request.

## Structure of the collection

The collection is organized for you to navigate through the various illustrated uses.

| Folder | Description | 
| --- | --- |
| **Authentication** | Contains the `POST /oauth/token` endpoint for you to generate the access token necessary to authenticate all the Mywebsite API requests. We made it easily accessible as your token expires after 1 hour. |
| **Starter endpoints** | Contains some of the essential endpoints to get started with the Mywebsite API. For more advanced features, please contact Mywebsite or refer to the API Documentation. |
| **Quickstart** | Contains the endpoints for the [Quickstart](/guide/overview/tinker.html) article, guiding you through your first testing of the Mywebsite API. |
| **Use cases** | Contains the endpoints to run the step-by-step guides available in the [Use Cases](/use-cases/prerequisites/introduction) section of the documentation. |

## Pull collection changes

The collection is constantly updated as the Mywebsite API and the documentation evolve. 

If you’re watching the collection, you may have received a notification in Postman or an email indicating that the collection has been modified. 

<img src="./illus/update_notif.png" alt="Pull changes notifs screenshot" height="200px" data-zoomable />

To retrieve the modification, you may use the pull changes command for your collection. A tab opens in your forked collection to import all the changes made to your collection. More information is available in the [Postman Documentation](https://learning.postman.com/docs/collaborating-in-postman/using-version-control/forking-elements/#pull-updates-from-a-parent-element).