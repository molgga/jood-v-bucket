<template>
  <v-app id="app">
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
      <v-list dense>
        <v-list-group value="true">
          <template v-slot:activator>
            <v-list-item-title>Examples</v-list-item-title>
          </template>
          <v-list-item v-for="(example, index) in exampleLinks" :key="index" link :to="example.to">
            <v-list-item-content>
              <v-list-item-title>{{ example.label }}</v-list-item-title>
              <v-list-item-subtitle v-if="example.description">{{ example.description }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" color="blue darken-2" app dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="app-title">@jood/v-bucket</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="onGoDocument">
        <v-icon>library_books</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container class="fill-height app-body-container">
        <router-view class="app-body" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { exampleLinks } from '@/components/example';

export default defineComponent({
  setup() {
    const drawer: any = null;

    const onGoDocument = () => {
      window.open('https://molgga.github.io/jood-v-bucket/documents');
    };

    return {
      drawer,
      exampleLinks,
      onGoDocument
    };
  }
});
</script>

<style lang="scss" scoped>
.app-title {
  font-weight: bold;
}
.app-body-container {
  align-items: flex-start;
}
.app-body {
  display: flex;
  width: 100%;
  align-self: stretch;
}
</style>
