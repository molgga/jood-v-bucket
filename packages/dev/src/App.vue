<template>
  <div>
    <demo-layout
      title="@jood/v-bucket"
      @goGithub="onGoGithub"
      @goNpm="onGoNpm"
      @goDoc="onGoDocument"
    >
      <template #menu>
        <nav class="menu-wrap">
          <demo-menu :menuList="menuList" />
        </nav>
      </template>
      <router-view class="app-body" />
    </demo-layout>
  </div>
</template>

<script lang="ts">
import { demoLinks } from '@/components/demo-vue3';

export default {
  setup() {
    const onGoDocument = () => {
      openTo('https://molgga.github.io/jood-v-bucket/documents');
    };

    const onGoGithub = () => {
      openTo('https://github.com/molgga/jood-v-bucket');
    };

    const onGoNpm = () => {
      openTo('https://www.npmjs.com/package/@jood/v-bucket');
    };

    const openTo = (url: string) => {
      window.open(url);
    };

    const menuList = [
      {
        to: '/',
        label: 'Getting started'
      },
      ...demoLinks
    ];

    return {
      menuList,
      demoLinks,
      onGoGithub,
      onGoNpm,
      onGoDocument
    };
  }
};
</script>

<style>
body {
  font-size: 15px;
}
body .v-application a {
  color: #2a9e64;
}
</style>
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
  padding-top: 40px;
  padding-bottom: 100px;
  box-sizing: border-box;
  align-self: stretch;
}
.app-bar {
  box-shadow: none !important;
  background-color: #41af7d !important;
}
</style>
