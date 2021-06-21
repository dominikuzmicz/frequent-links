
<template>
  <v-footer
    light
    padless
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-col
        class="pt-4 text-center"
        cols="12"
      >
        <v-divider></v-divider>
        <div class="company-info py-4">
          {{ company.name }} <br/>
          {{ company.address }} <br/>
          REGON: {{ company.regon }} <br/>
          NIP: {{ company.nip }} <br/>
          KRS: {{ company.krs }}
        </div>
        <v-divider></v-divider>
      </v-col>
      <v-col
        class="py-4 text-center company-info"
        cols="12"
      >
        {{ $t('footer.terms') }}
      </v-col>
    </v-row>
  </v-footer>
</template>

<style>
  .company-info {
    font-size: 0.8em !important;
    line-height: 1.1em !important;
  }
</style>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'CompanyFooter',
    data: () => ({
      company: {
        name: 'Budget Airlines',
        address: '15270 SW Holly Hill Rd, Hillsboro, OR 97123, Stany Zjednoczone',
        regon: '123456789',
        nip: '987654321',
        krs: '0000000000'
      }
    }),
  })
</script>
