<template>
  <v-container class="toolbox">
    <v-row class="text-center">
      <v-icon color="primary" class="pr-3">mdi-hammer-wrench</v-icon>
      <h2>{{ $t('areas.toolbox') }}</h2>
    </v-row>
    <v-row>
      <v-text-field
        v-model="filter"
        :append-outer-icon="canFilter ? 'mdi-layers-search-outline' : ''"
        clear-icon="mdi-close-circle"
        clearable
        :label="$t('common.search')"
        type="text"
        color="secondary"
        @click:append-outer="filterToolbox"
        @click:clear="clearFilter"
        @keydown.enter="filterToolbox"
      ></v-text-field>
    </v-row>
    <v-row class="d-flex justify-space-around">
      <v-card v-for="category in filledCategories" :key="category.id"
        elevation="2"
        outlined
        shaped
        tile
        width="250"
        class="m-20"
      >
        <v-card-title><img :src="category.iconUrl" width="30" height="30">{{ category.name }}</v-card-title>
        <v-card-text>
          <v-list flat>
            <v-list-item-group>
              <v-list-item v-for="link in category.links" :key="link.id" :href="link.url" target="_blank">
                {{ link.name }}
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<style>
  .toolbox {
    padding: 30px 10%;
  }
  .v-card {
    margin: 10px !important;
  }
</style>

<script lang='ts'>
import Vue from 'vue'

declare interface ToolboxComponentData {
  filter: string,
  activeFilter: boolean,
  categories: Category[]
}

declare interface Category {
  id: string,
  name: string,
  iconUrl: string,
  links: Link[]
}

declare interface Link {
   id: string,
   name: string,
   url: string
}

export default Vue.extend({
  name: 'Toolbox',
  computed: {
    filledCategories(): Category[]{
      var data = this as ToolboxComponentData;
      if (this.filter?.length > 2 && data.activeFilter) {
        var filteredByCatName = data.categories.filter(cat => cat.name.includes(this.filter))
        var filteredByLinkName = [] as Category[];
        data.categories.forEach(cat => {
          var filteredCat = cat;
          filteredCat.links = filteredCat.links.filter(link => link.name.includes(this.filter))
          filteredByLinkName.push(filteredCat)
        })
        var result = [...new Set([...filteredByCatName, ...filteredByLinkName])]
        return result.filter(cat => cat.links.length > 0)
      }

      return data.categories.filter(cat => cat.links.length > 0)
    },
    canFilter(): boolean {
      return this.filter?.length > 0
    }
  },
  methods: {
    filterToolbox() {
      this.activeFilter = this.filter?.length > 2

      console.log('filter', this.categories)
    },
    clearFilter() {
      this.activeFilter = false
    },
  },
  data: () => ({
      filter: "",
      activeFilter: false,
      categories: [
        {
          id: '1',
          name: 'Fora dyskusyjne',
          iconUrl: 'https://img.icons8.com/ios/50/000000/comment-discussion.png',
          links: [
            {
              id: '11',
              name: 'Forum sztuki',
              url: 'https://classicprogrammerpaintings.com/'
            },
            {
              id: '12',
              name: 'Forum współczesne',
              url: 'https://twitter.com/'
            }
          ]
        },
        {
          id: '2',
          name: 'Zasoby O365',
          iconUrl: 'https://img.icons8.com/dotty/80/000000/office-365.png',
          links: [
            {
              id: '21',
              name: 'Office Apps',
              url: 'https://www.office.com/'
            },
            {
              id: '22',
              name: 'OneDrive',
              url: 'https://onedrive.live.com/'
            },
            {
              id: '23',
              name: 'Outlook',
              url: 'https://outlook.live.com/'
            },
            {
              id: '24',
              name: 'Sharepoint',
              url: 'https://www.office.com/'
            },
            {
              id: '25',
              name: 'Yammer',
              url: ''
            }
          ]
        },
        {
          id: '3',
          name: 'Projekty',
          iconUrl: 'https://img.icons8.com/ios/50/000000/project-management.png',
          links: [
            {
              id: '31',
              name: 'Biura',
              url: ''
            },
            {
              id: '32',
              name: 'Handel',
              url: ''
            },
            {
              id: '33',
              name: 'Hotele',
              url: ''
            }
          ]
        },
        {
          id: '4',
          name: 'Spółki',
          iconUrl: '',
          links: []
        },
        {
          id: '5',
          name: 'Wazne',
          iconUrl: '',
          links: []
        },
      ],
    }) as ToolboxComponentData
})
</script>
