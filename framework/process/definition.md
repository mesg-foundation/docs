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

A process has a list of steps.
Each step indicates a specific action to do.
There is currently three types of steps:

- [Trigger](./steps/trigger): an event or a task's result that will trigger the process.
  - Should be the first step of the process.
  - Only one trigger is possible per process.
  - It triggers the process when a matching event or a task's result is emitted.
- [Task](./steps/task): defines the task to execute of a given instance of a service.
  - A process should have at least one task and can have as many as you want.
- [Filter](./steps/filter): stop the execution of the process if a condition doesn't match.
  - A process can have as many filters as you want.
  - Filters are optional.

<nav class="cards">
  <a href="./steps/trigger">
    <img src="/trigger.svg" class="icon-card">
    <h4>Trigger</h4>
    <p>React to an event or a task's result</p>
  </a>
  <a href="./steps/task">
    <img src="/task.svg" class="icon-card">
    <h4>Task</h4>
    <p>Execute a service's task</p>
  </a>
  <a href="./steps/filter">
    <img src="/filter.svg" class="icon-card">
    <h4>Filter</h4>
    <p>Add condition on data</p>
  </a>
</nav>

## Example

Here is an example of typical process.

<<< @/framework/process/definition.yml

## Environmental variable

You can override any value in the process file during the compilation by using the following syntax:

```
$(env:XXXX)
```

Where `XXXX` is the name of the variable that you can override while running the compile command with the flag `--env XXXX=value`.

<style>
nav.cards	{
  display: flex;
  justify-content: space-between;
}
nav.cards > a {
  color: #2c3e50;
  flex: 1;
  text-align: center;	
  padding: 2em 1em;
  margin: 1em	;
  border: solid 1px #dfe2e5;
  border-radius: 3px;
  box-shadow: 0 0 4px 0 #dfe2e5;
  display: flex;
  flex-direction: column;
}
nav.cards > a:first-child	{ margin-left: 0; }
nav.cards > a:last-child	{ margin-right: 0; }	
nav.cards > a:hover	{
  text-decoration: none!important;
  border-color: #3eaf7c;
  box-shadow: 0 0 10px 0 #dfe2e5;
}
nav.cards > a > h4 {
  margin-bottom: .5em;
}
nav.cards > a > p {
  font-size: 75%;
}
nav.cards > a > img {
  height: 60px;
}
</style>