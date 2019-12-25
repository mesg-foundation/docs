# Filter

Apply one or multiple conditions on the previous step's outputs.

All conditions should match to continue to the next step.

<param-table :parameter="{
  fields: [{
    name: 'conditions',
    description: 'Key-value map where the key references a data of the previous steps outputs and the value is the expected matching value.',
    fullType: 'map&lt;key, string&gt;'
  }]
}" :types="{}" />

## Example
```yaml
key: erc20-notification
steps:
  # ...
  - type: filter
    conditions:
      recipientID: "XXX"
      contractAddress: "0x420167d87d35c3a249b32ef6225872fbd9ab85d2"
  # ...
```