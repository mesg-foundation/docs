# Introduction

MESG is a framework for developers to build application efficiently. It relies on two specific tools:

- The engine called the **MESG Core**
- The **MESG Marketplace** to bootstrap your applications faster

MESG is centered around the concept of services made to be reusable within other applications and shared on a marketplace for others to use them.
MESG Services have two responsibilities:
- Executing **tasks** that your application triggers
- Sending **events** to your application

Your applications rely only on services managed by MESG Core, so you need to focus only on your application's business logic and nothing more.

### Why do I need MESG Core?

MESG Core is software that lets you:
- Create and manage the services that you want to run
- Manage the communication with these services with a standardized bi-directional API
- Manage the security and isolation of your services
- Route the different tasks and events that you want to listen to to the appropriate service

Your application is now only responsible for communicating with MESG Core, and uses only one API to access any service. 

### Architecture of your application with MESG

![Architecture](/schema.svg)

From left to right:
- Your application that sends tasks and receives events from MESG Core
- MESG Core that routes tasks and events and manages your services
- The MESG Services, executing tasks and emitting events based on their prescribed purpose

