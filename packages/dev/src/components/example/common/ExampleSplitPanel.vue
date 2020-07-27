<template>
  <div class="example-full-panel">
    <slot></slot>
    <div class="aside" :style="styles.aside">
      <slot name="aside"></slot>
    </div>
    <div class="bside" :style="styles.bside">
      <slot name="bside"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api';

export default defineComponent({
  props: {
    width: {
      type: String,
      default: '320px'
    }
  },
  setup(props) {
    const styles = computed(() => {
      const width = props.width || '';
      const aside: any = {};
      const bside: any = {};
      if (width) {
        aside.right = width;
        bside.width = width;
      } else {
        aside.right = 0;
        bside.width = 0;
      }
      return {
        aside,
        bside
      };
    });
    return {
      styles
    };
  }
});
</script>

<style lang="scss" scoped>
.example-full-panel {
  width: 100%;
  .aside {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    overflow-y: auto;
  }
  .bside {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    overflow-y: auto;
    box-sizing: border-box;
    border-left: 1px solid #e0e0e0;
  }
}
@media all and (max-width: 768px) {
  .example-full-panel {
    .aside {
      right: 50% !important;
    }
    .bside {
      width: 50% !important;
    }
    ::v-deep .bucket-container {
      padding: 5px;
    }
    ::v-deep .panel-wrap {
      padding-left: 5px;
      padding-right: 5px;
      overflow: hidden;
      .panel-item {
        .body {
          display: block;
          .body-opt {
            width: auto;
          }
        }
      }
    }
  }
}
</style>
