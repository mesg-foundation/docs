# Introduction

MESG is a framework for developers that let you build application efficiently. It relies on two specific tools:

- The engine called the **MESG Core**
- The **MESG Marketplace** to bootstrap your application faster

MESG is build with the concept of services that can be reused within other applications and shared on a marketplace to let other use them.
MESG Services have two responsibilities:
- Executing **tasks** that your application can triggers
- Sending **events** for your application

Your application only relies on these services managed by the MESG Core and you can now only focus on the business logic of your application.

### Why do I need MESG Core?

MESG Core is the software that let you:
- Create and manage the services that you want to run
- Manage the communication with these services with a standardized bi-directional API
- Manage the security and isolation of your services
- Route your different task/events that you want to listen to the adequate service

Your application is now only responsible to communicate with the MESG Core having one API to access any service. 

### Architecture of your application with MESG

![Architecture](/schema.svg)

From left to right:
- You application that send the tasks and receive the events from the MESG Core
- The MESG Core that does the routing for tasks and events and manage your services
- the MESG Services running, these are executing tasks and emit events based on their purpose

