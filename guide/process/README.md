# Orchestration system

MESG Orchestrator is an event-driven task-orchestration system that manages the connections between the events and tasks of services by following the steps described by processes.

It lets you build and run complex applications by describing their business logic, then the Engine executes them for you.

<!-- TODO: Add schema on process -->

## What is a process

Processes are [nondeterministic finite](https://en.wikipedia.org/wiki/Nondeterministic_finite_automaton) [state machines](https://en.wikipedia.org/wiki/Finite-state_machine) that perform state transition when matching events or a task's results occur but don't support the cycle.

Process can be graphically represented as [UML activity diagram](https://en.wikipedia.org/wiki/Activity_diagram) with actions and conditions, but without cycles and concurrency. Graphic representation is a very good first step to conceptualize an application before implementing it.

A [process](process-file.md) is a list of steps that describes a specific business logic.

Step can be one of the following:
- Event trigger
- Task's result trigger
- Execute a task
- Condition on the data

Only the first step of a process is and must be an event or a task's result trigger.

## More

Processes are both internal and on the [the gRPC API](../../api/process.md) graphs where each step is actually one or more node. This graph structure is adaptable to any business logic.

The current implementation of the Orchestration system is only compatible with directed tree graph. We plan to improve it and also create new ways to compile processes with more complex yaml files, [domain-specific languages](https://en.wikipedia.org/wiki/Domain-specific_language) and a GUI.

::: tip Want more?
If you find yourself limited by the processes, you can always use [`@mesg/application`](https://www.npmjs.com/package/@mesg/application) to interact with the [MESG API](/api/service).
:::