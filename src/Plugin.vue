<template>
  <div class="DikaCurrencies">
    Currency
    <div>
        <select class="uk-select" v-model="model.selectedCurrency">
           <option 
              v-for="(key, value) in currencies" 
              v-bind:value="value"
              v-bind:key="value">
            {{ value }} ({{key}})
            </option>
        </select>
        <p class="uk-text-danger" v-if="error">{{ error.message }}</p>
    </div>
  </div>
</template>

<script>
import { getCurrencies } from './utils/currencyApi';

export default {
  mixins: [window.Storyblok.plugin],
  data: function() {
    return {
      currencies: {},
      error: false
    }
  },
  methods: {
    initWith() {
      return {
        // needs to be equal to your storyblok plugin name
        plugin: 'dikaso-currency-list',
        selectedCurrency: '',
      }
    },
    pluginCreated() {
      
    }
  },
  mounted() {
    getCurrencies()
      .then((res) => {
        this.error = false;
        this.currencies = JSON.parse(res)
      })
      .catch((err) => {
        this.error = err;
      });
  },
  watch: {
    'model': {
      handler: function (value) {
        this.$emit('changed-model', value);
      },
      deep: true
    }
  }
}
</script>

<style>
</style>
