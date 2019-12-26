# Filter

Apply one or multiple conditions on the previous step's outputs.

All conditions should match to continue to the next step.

## Definition
<param-table :parameter="{
  fields: [{
    name: 'conditions',
    description: 'Key-value map where the key references a data of the previous steps outputs and the value is the expected matching value.',
    fullType: 'map&lt;key, string&gt;'
  }]
}" :types="{}" />

## Example
<<< @/guide/process/steps/filter.yml
