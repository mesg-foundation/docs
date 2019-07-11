<template>
  <section>
    <p v-html="fromMD(api.description)"></p>
    <ul>
      <li v-for="method in api.methods" :key="method.name">
        <a :href="`#${method.name}`">{{method.name}}</a>
      </li>
    </ul>
    <div v-for="method in api.methods" :key="method.name">
      <h2 :id="method.name">{{method.name}}</h2>
      <p v-html="fromMD(method.description)"></p>
      <vue-tabs>
        <v-tab title="Request">
          <h4>
            <Badge v-if="method.requestStreaming" text="stream" type="warn" />
            {{method.requestType}}
          </h4>
          <p v-html="fromMD(types[method.requestFullType].description)"></p>
          <v-param-table :parameter="types[method.requestFullType]" :types="types" />
        </v-tab>
        <v-tab title="Response">
          <h4>
            <Badge v-if="method.responseStreaming" text="stream" type="warn" />
            {{method.responseType}}
          </h4>
          <p v-html="fromMD(types[method.responseFullType].description)"></p>
          <v-param-table :parameter="types[method.responseFullType]" :types="types" />
        </v-tab>
      </vue-tabs>
    </div>
  </section>
</template>

<script>
import VParamTable from "./param-table";
const md = new require("markdown-it")();
export default {
  components: {
    VParamTable
  },
  props: {
    apifiles: {
      type: Object,
      required: true
    },
    typefiles: {
      type: Object,
      required: true
    }
  },
  computed: {
    api() {
      return this.apifiles.files[0].services[0];
    },
    types() {
      return {
        ...this.apifiles.files[0].messages.reduce(
          (prev, x) => ({ ...prev, [x.fullName]: x }),
          {}
        ),
        ...this.apifiles.files[0].enums.reduce(
          (prev, x) => ({ ...prev, [x.fullName]: x }),
          {}
        ),
        ...this.typefiles.files[0].messages.reduce(
          (prev, x) => ({ ...prev, [x.fullName]: x }),
          {}
        ),
        ...this.typefiles.files[0].enums.reduce(
          (prev, x) => ({ ...prev, [x.fullName]: x }),
          {}
        )
      };
    }
  },
  methods: {
    fromMD(text) {
      return md.render(text);
    }
  }
};
</script>
