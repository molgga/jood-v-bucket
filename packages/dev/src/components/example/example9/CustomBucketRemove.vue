<template>
  <div class="custom-bucket-remove">
    <button @click="onRemoveClick" @touchend="onRemoveTouch">X</button>
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
    const onRemoveClick = () => {
      emit('remove', { itemRef });
    };
    const onRemoveTouch = (evt: TouchEvent) => {
      evt.preventDefault();
      evt.stopPropagation();
      emit('remove', { itemRef });
    };
    return {
      onRemoveClick,
      onRemoveTouch
    };
  }
});
</script>

<style lang="scss" scoped></style>
