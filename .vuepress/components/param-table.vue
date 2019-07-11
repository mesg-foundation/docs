<template>
  <table>
    <tr v-if="!noHeaders">
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
    <tr v-for="field in parameter.fields" :key="field.name">
      <td>
        <em>{{field.name}}</em>
      </td>
      <td
        colspan="2"
        v-if="types[field.fullType] && field.fullType !== parameter.fullName"
        style="padding: 0"
      >
        <div style="padding: .75em .5em" v-if="field.label === 'repeated'">
          <strong>Type: Array</strong>
        </div>
        <table v-if="types[field.fullType].values" style="margin: 0px">
          <tr v-for="(value, i) in types[field.fullType].values">
            <td>{{value.name}}</td>
            <td>{{value.number}}</td>
            <td>{{value.description}}</td>
          </tr>
        </table>
        <param-table
          v-else
          no-headers
          :parameter="types[field.fullType]"
          :types="types"
          style="margin: 0px"
        />
      </td>
      <template v-else>
        <td>
          <strong
            v-if="field.label === 'repeated'"
          >{{field.fullType === parameter.fullName ? "self" : field.fullType}}[]</strong>
          <strong v-else>{{field.fullType === parameter.fullName ? "self" : field.fullType}}</strong>
        </td>
        <td v-html="field.description" />
      </template>
    </tr>
  </table>
</template>

<script>
const md = new require("markdown-it")();
export default {
  name: "param-table",
  props: {
    parameter: {
      type: Object,
      required: true
    },
    types: {
      type: Object,
      required: true
    },
    "no-headers": {
      type: Boolean,
      default: false
    }
  },
  methods: {
    fromMD(text) {
      return md.render(text);
    }
  }
};
</script>

<style>
table {
  width: 100%;
}
tr td:nth-child(3) {
  min-width: 300px;
}
tr:nth-child(2n) {
  background: rgba(73, 30, 140, 0.05);
}
</style>
