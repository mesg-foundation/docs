# Process file

A process file is a YAML definition that describes the connections between events and tasks of services with a step-by-step system.

It is structured in the following way:

<param-table :parameter="{
  fields: [{
    name: 'name',
    description: 'Name of the process.',
    fullType: 'string'
  }, {
    name: 'steps',
    label: 'repeated',
    description: 'Steps to execute.',
    fullType: 'Step'
  }]
}" :types="{}" />

## Steps

A process has multiple steps, and each step indicates a specific action to do.
- [**Trigger**](./steps/trigger): that listen for a specific event or result.
  - Should be the first step in the process.
  - Only one trigger is possible per process.
- [**Task**](./steps/task): executes a specific task from a given instance of a service.
  - You can create as many tasks as you want.
  - A process should have at least one task.
- [**Filter**](./steps/filter): breaks the flow of your process if a condition doesn't match.
  - You can create as many filters as you want.
  - Filters are optional.


<nav class="cards">
  <a href="./steps/trigger">
    <img src="/trigger.svg">
    <h4>Trigger</h4>
    <p>React to a specific event</p>
  </a>
  <a href="./steps/task">
    <img src="/task.svg">
    <h4>Task</h4>
    <p>Execute a service's task</p>
  </a>
  <a href="./steps/filter">
    <img src="/filter.svg">
    <h4>Filter</h4>
    <p>Accept only specific data</p>
  </a>
</nav>

## Example

This is an example of process-file.

<<< @/guide/process/process-file.yml

## Environmental variable

You can override any value in the process file during the compilation by using the following syntax:

```
$(env:XXXX)
```

Where `XXXX` is the name of the variable that you can override while running the compile command with the flag `--env XXXX=value`.
