<template>
  <div class="page-view">
    <div class="panel">
      <demo-preview-code v-bind="Codes.install" />

      <demo-panel-devider />

      <demo-preview-code v-bind="Codes.main" />

      <demo-panel-devider />

      <demo-preview-code v-bind="Codes.app" />

      <demo-panel-devider />

      <demo-preview-code v-bind="Codes.someContainer" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PreviewCode from '@/components/common/PreviewCode.vue';
import PanelDevider from '@/components/common/PanelDevider.vue';
import Codes from '@/codes/getting-started';

export default defineComponent({
  components: {
    PreviewCode,
    PanelDevider
  },
  setup() {
    return {
      Codes
    };
  }
});
</script>

<style lang="scss" scoped>
.page-view {
  > .panel {
    width: 100%;
  }
  .panel-desc {
    padding: 0 15px;
    line-height: 1.7;
    .pg {
      margin: 10px 0 0 0;
      &:first-child {
        margin-top: 0;
      }
    }
    em {
      color: #2a9e64;
      font-style: normal;
    }
  }
  .panel-list {
    margin: 20px 10px;
    li {
      padding-top: 7px;
      &:first-child {
        padding-top: 0;
      }
    }
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
