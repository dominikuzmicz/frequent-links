<template>
  <v-list-item>
    <v-list-item-icon>
      <v-icon>{{ props.icon }}</v-icon>
    </v-list-item-icon>
    <v-list-item-title>{{ props.title }}</v-list-item-title>
  </v-list-item>
  <v-
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>