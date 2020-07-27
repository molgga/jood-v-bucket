<template>
  <div class="jd-bucket-container-indicate" :class="classes">
    <div v-if="isInsertable" class="insert-overlay">
      <svg
        class="insert-overlay-svg"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        xml:space="preserve"
      >
        <rect
          class="insert-overlay-rect"
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="transparent"
        />
      </svg>
    </div>
    <div v-if="isBlock" class="block-overlay"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api';

export default defineComponent({
  props: {
    isInsertable: {
      type: Boolean,
      default: false
    },
    isBlock: {
      type: Boolean,
      default: false
    },
    isEnter: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const classes = computed(() => {
      return { 'is-enter': props.isEnter };
    });
    return {
      classes
    };
  }
});
</script>

<style lang="scss" scoped>
.jd-bucket-container-indicate {
  .insert-overlay {
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    user-select: none;
    pointer-events: none;
    animation: indicate-dash 30s linear;
    animation-iteration-count: infinite;
    z-index: 5;
    .insert-overlay-svg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .insert-overlay-rect {
      stroke: #4ca4ff;
      stroke-width: 2px;
      stroke-dasharray: 12;
    }
  }
  .block-overlay {
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background-color: rgba(255, 255, 255, 0.45);
    z-index: 5;
  }

  &.is-enter {
    .insert-overlay {
      .insert-overlay-rect {
        stroke: #ea3d45;
      }
    }
  }
}

@keyframes indicate-dash {
  to {
    stroke-dashoffset: -2000;
  }
}
</style>
