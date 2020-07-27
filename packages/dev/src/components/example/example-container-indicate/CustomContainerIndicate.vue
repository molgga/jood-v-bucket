<template>
  <div class="custom-container-indicate">
    <div v-if="isBlock" class="block">
      <span class="label">block</span>
    </div>
    <div v-if="isInsertable" class="insertable">
      <span class="label">insertable</span>
    </div>
    <div v-if="isEmpty" class="empty">
      custom-bucket-container-indicate
      <br />
      isEmpty: {{ isEmpty }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

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
.custom-container-indicate {
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
    background-color: rgba(0, 0, 0, 0.1);
  }
  > .insertable {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 5px solid #ff0000;
    box-sizing: border-box;
    user-select: none;
    pointer-events: none;
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
    font-size: 13px;
    color: #999999;
    text-align: center;
    user-select: none;
    pointer-events: none;
  }
}
</style>
