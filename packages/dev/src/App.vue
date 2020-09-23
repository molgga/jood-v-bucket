<template>
  <demo-layout
    class="layout"
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
html,
body {
  margin: 0;
  padding: 0;
  font-size: 15px;
  height: 100%;
}
body a {
  color: #2a9e64;
}
#app {
  height: 100%;
}
</style>
<style lang="scss" scoped>
.layout {
  ::v-deep(.ly-body) {
    position: relative;
    height: 100%;
  }
  ::v-deep(.ly-content) {
    position: relative;
    height: 100%;
  }
}
</style>
