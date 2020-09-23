<template>
  <div class="custom-bucket-container-indicate">
    <div v-if="isBlock" class="block"></div>
    <div v-if="isInsertable" class="insertable">
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
    <div v-if="isEmpty" class="empty">
      <div class="item">
        <v-icon class="icon">highlight_alt</v-icon>
        <div class="desc">오른쪽 아이템을 여기에 넣으세요!</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    isBlock: {
      type: Boolean,
      default: false
    },
    isInsertable: {
      type: Boolean,
      default: false
    },
    isEmpty: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.custom-bucket-container-indicate {
  .label {
    padding: 5px;
    font-size: 11px;
  }
  > .block {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.25);
    z-index: 10;
  }
  > .insertable {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    user-select: none;
    pointer-events: none;
    animation: indicate-dash 30s linear;
    animation-iteration-count: infinite;
    z-index: 10;
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
      stroke-dasharray: 8;
    }
  }

  > .empty {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #999999;
    text-align: center;
    user-select: none;
    pointer-events: none;
    .icon {
      font-size: 48px;
      color: #cccccc;
    }
  }
}

@keyframes indicate-dash {
  to {
    stroke-dashoffset: -1000;
  }
}
</style>
