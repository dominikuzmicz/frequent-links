<template>
  <v-app>
    <v-app-bar
      app
      absolute
      color="primary"
      elevate-on-scroll
      dark
      scroll-target="#scrolling-techniques-7"
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <router-link to="/">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="./assets/logo.svg"
            transition="scale-transition"
            width="160"
          />
        </router-link>
      </div>
      <v-spacer></v-spacer>

    <div class="search-area">
        <v-text-field
          :append-outer-icon="mdi-layers-search-outline"
          clear-icon="mdi-close-circle"
          clearable
          type="text"
          color="secondary"
          outlined
          dense
        ></v-text-field>
    </div>
      <!-- <span v-if="!this.isMobile()">PC</span>
    <span v-if="this.isMobile()">Mobile</span> -->
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            {{ $t('navigationBar.sideMenuTitle') }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ $t('navigationBar.sideMenuSubTitle') }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list
        nav
        dense
        
      >
        <v-list-item-group
          v-model="group"
          color="primary"
        >
          <router-link to="/">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ $t('areas.homepage') }}</v-list-item-title>
            </v-list-item>
          </router-link> 
          <router-link to="/news">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-newspaper-variant-multiple-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ $t('areas.news') }}</v-list-item-title>
            </v-list-item>
          </router-link> 
          <router-link to="/departments">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-alpha-d-circle-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ $t('areas.departments') }}</v-list-item-title>
            </v-list-item>
          </router-link> 
          <router-link to="/toolbox">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-hammer-wrench</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ $t('areas.toolbox') }}</v-list-item-title>
            </v-list-item>
          </router-link> 
          <router-link to="/announcements">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-message-bulleted</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ $t('areas.announcements') }}</v-list-item-title>
            </v-list-item>
          </router-link> 
          <router-link to="/sections">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-book</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ $t('areas.sections') }}</v-list-item-title>
            </v-list-item>
          </router-link> 
          <router-link to="/about">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-information-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ $t('areas.about') }}</v-list-item-title>
            </v-list-item>
          </router-link> 
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view/>
    </v-main>
    <company-footer></company-footer>
  </v-app>
</template>

<style>
  a { 
    text-decoration: none; 
  }
  .search-area {
    width: 250px;
    display: inherit;
    margin-top: 23px;
  }
</style>

<script lang="ts">
import Vue from 'vue'
import CompanyFooter from './components/CompanyFooter.vue'
import DetectingMobileMixin from './helpers/DetectingMobileMixin.vue'

export default Vue.extend({
  name: 'App',
  components: {
    CompanyFooter
  },
  mixins: [DetectingMobileMixin],
  data: () => ({
    drawer: false,
    group: null,
  }),
});
</script>