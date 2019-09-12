# Orchestration system

The orchestration system let you build an application by orchestrating the communication between your services.

Processes are the base of this orchestration system. They contain all the instruction to connect your services.

Processes are made to replace the [Application](../application/) and are automatically managed by the Engine to be ready to be distributed.

## What's a process

A process is a specific event that triggers a series of instructions connected.

A process is a graph of execution where each node is a specific instruction.

Instruction can be one of the following:
- Listening to an event
- Listening to a result
- Execute a task
- Conditions on data
- Conversion of the data

## How to compare a process with something familiar

A process is comparable to something familiar in development architecture.

### State machine

Like a [State machine](https://en.wikipedia.org/wiki/Finite-state_machine), processes have different states that are triggered by specific events (the events of your services or tasks' results). It is an excellent way to understand processes and how you can orchestrate your services.

**Differences:**
- State machines allow iteration in their processes, making them fully Turing complete. MESG Processes doesn't support this feature and can only execute a top to bottom tree graph.
- State machines don't support choice, and choices are represented as a state with transitions making it quite complicated. MESG Processes have filters making "transition" possible only if specific criteria valid.

### Activity diagram

[Activity diagram](https://en.wikipedia.org/wiki/Activity_diagram) is a representation of a process, including choice, iteration, and concurrency. This representation is quite similar to a representation of an MESG Process.

**Differences:**
- Activity diagram is just a representation and cannot process any application. It is more a conceptualization tool. Once conceptualized, implementing it in an MESG Process should be trivial.
- Activity diagram supports iteration where MESG doesn't.