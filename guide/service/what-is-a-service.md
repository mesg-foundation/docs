# What is a Service?

A Service is a normalized bi-directional communication layer used to channel communications between exterior technologies and Core.

There are no limits to what you can connect with Services, as long as it can run inside Docker \(as long as it can run on a computer\). If you need more details about how to connect dependencies to your service check out the [Dockerize the Service](dockerize-the-service.md) page.

Services can be purchased or sold as Modules in the [MESG Marketplace](https://mesg.com/marketplace). The Marketplace connects developers wanting to streamline development with others looking to earn MESG Tokens for creating useful Services. 

Services use two types of communication: receiving tasks and submitting events. 

## Receiving Tasks

Tasks are designed to receive information from Core and the Application that you run. Tasks can have multiple parameters as inputs and multiple outputs with varying data. You can visualize a task as a simple function that can return any kind of object.

You could have a task that takes a name as an input, and perhaps shows `success` as an output. This task factors the type of name with its probability like this:`{ "type": "female", "proabiliy": 92.34% }` but, could also have an `error` output with a type of error like this: `{ "message": "This doesn't looks like a name" }`.

Click here for more information on how info how to create [tasks](listen-for-tasks.html).

## Submitting Events

Events are data that a Service emits in real time.   
  
Let's say you are working with a webserver. An event could be when there is a request with data in the payload, or it could be different events for each of the different routes of your API, or could be in a blockchain context when a smart contract emits an event.

For more info on how to create events, learn more on our [Emit an Event](emit-an-event.md) page.

## Share Services 

New Services can be created and shared. Alternatively, builders can use already-created Services without coding by using our [Awesome](https://github.com/mesg-foundation/awesome) repository.   
   

