# Introduction

MESG is a framework for developers to build applications efficiently. It relies on two specific tools:

- The **MESG SDK** that connects services together
- The **MESG Marketplace** to bootstrap applications faster

MESG is centered around the concept of services made to be reusable within other applications and shared on a marketplace for others to use them.
MESG Services have two responsibilities:
- [Executing **tasks**](/guide/service/listen-for-tasks.md) that an application triggers
- [Sending **events**](/guide/service/emit-an-event.md) to an application

[Applications](/guide/application/) rely only on [services](/guide/service/) managed by the MESG Engine, so developers can focus on applications' business logic and nothing more.

### Why use the MESG SDK?

The tools within the SDK:
- Create and manage services 
- Manage communication between all services with a standardized bi-directional API
- Manage the security and isolation of services
- Route the various tasks and events to listen to the appropriate service

Applications are only responsible for communicating with the MESG Engine and use only one API to access any service. 

### Architecture of applications with MESG

![Architecture](/schema.svg)

From left to right:
- An [application](/guide/application/) that sends tasks and receives events from the MESG Engine
- The MESG Engine that routes tasks and events and manages services
- [MESG Services](/guide/service/), executing tasks and emitting events based on their prescribed purpose

