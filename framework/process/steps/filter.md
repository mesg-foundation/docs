# Filter

Apply one or multiple conditions on the previous step's outputs.

All conditions should match to continue to the next step.

## Definition
<param-table :parameter="{
  fields: [{
    name: 'type',
    fullType: '&quot;filter&quot;'
  }, {
    name: 'conditions',
    description: 'Key-value map where the key references a data of the previous step\'s outputs and the value is the expected matching value.&lt;br&gt;&lt;b&gt;OR&lt;/b&gt; an array of Condition for advanced filtering.',
    fullType: 'map&lt;string, Condition&gt; OR Condition[]'
  }]
}" :types="{}" />

## Simple conditions

The simplest way to set conditions is to use a `map<string, Condition>` where the key references a data of the previous step\'s outputs and the value is the expected matching value.

The condition value can be any of the following types:
- `string`
- `bool`
- `number`

### Example
```yaml
- type: filter
  conditions:
    previousTaskOutput_1: "hello" # the value of this output must be "hello"
    previousTaskOutput_2: 10      # the value of this output must be 10
    previousTaskOutput_3: true    # the value of this output must be true
```

## Advanced conditions

Advanced conditions offer the possibility to use predicates other than only equal, and to reference data inside `object` or `array` of the previous step\'s outputs.

Advanced conditions are defined as follow:
```yaml
- type: filter
  conditions:
    - key: foo      # the key to reference
      predicate: EQ # the predicate to apply
      value: bar    # the value to use, can be of type `string`, `bool`, and `number`
```

### Key

The parameter `key` is the path of data to access.
To write a path, you need to follow a simplified JSON path format:
- `KEY_NAME` to access a key.
- `.` to access data in an object.
- `[INDEX]` to access an element in an array at the index `INDEX`. (You might get a runtime error if your index is out of bounds).

#### Examples
  - `foo`: Access the variable `foo`.
  - `foo.bar`: Access the variable `bar` in the object `foo`.
  - `foo[0]`: Access the first element of the array `foo`.
  - `foo[0].bar[1]`: Access the second element of the array `bar` contained in the first element of the array `foo`.
  - `foo[0][1]`: Access the second element in the first element of the array `foo`.

```yaml
- type: filter
  conditions:
    - key: foo
      predicate: EQ
      value: 2
    - key: data.foo[0].x
      predicate: EQ
      value: 2
```

### Predicate

The following predicates are available:

- `EQ`: The value must be exactly equal to the data. Works with types `string`, `bool`, and `number`.
- `GT`: The value must be greater than the data. Works only with types `number`.
- `GTE`: The value must be greater than or equal to the data. Works only with types `number`.
- `LT`: The value must be lesser than the data. Works only with types `number`.
- `LTE`: The value must be lesser than or equal to the data. Works only with types `number`.
- `CONTAINS`: The value must be contained in the data. Works only with `string` or  **repeated** data.

#### Examples
```yaml
# value of `foo` must be between 10 and 20
- type: filter
  conditions:
    - key: foo
      predicate: GTE
      value: 10
    - key: foo
      predicate: LTE
      value: 20
```
```yaml
# value of `logs` must be contains "hello"
- type: filter
  conditions:
    - key: logs # logs is an array of string
      predicate: CONTAINS
      value: error
    - key: message # message is a string
      predicate: CONTAINS
      value: hello
```

## Example
<<< @/framework/process/steps/filter.yml
