<template>
  <div class="custom-bucket-remove">
    <button @click="onClickRemove">X</button>
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
    const onClickRemove = () => {
      emit('remove', { itemRef });
    };
    return {
      onClickRemove
    };
  }
});
</script>

<style lang="scss" scoped>
</style>
