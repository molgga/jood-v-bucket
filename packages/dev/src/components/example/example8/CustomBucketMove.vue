<template>
  <div class="custom-bucket-move">
    <button class="action" @click="onClickMove('first')">first</button>
    <button class="action" @click="onClickMove('up')">up</button>
    <button class="action" @click="onClickMove('down')">down</button>
    <button class="action" @click="onClickMove('last')">last</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useJdBucketItemRef } from '@/lib-package';

export default defineComponent({
  components: {},
  props: {
    model: {
      type: Object,
      default: null
    }
  },
  setup(props, context) {
    const { emit } = context;
    const itemRef = useJdBucketItemRef();
    const onClickMove = (direction: string) => {
      emit(direction, { direction, itemRef });
    };
    return {
      onClickMove
    };
  }
});
</script>

<style lang="scss" scoped>
.custom-bucket-move {
  .action {
    display: block;
    margin: 2px 0;
    padding: 0 1px;
    font-size: 12px;
    line-height: 12px;
  }
}
</style>
