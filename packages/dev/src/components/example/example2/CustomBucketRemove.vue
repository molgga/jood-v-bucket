<template>
  <div class="custom-bucket-remove">
    <button class="action" @click="onClickRemove">X</button>
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
      console.log('#########');
      emit('remove', { itemRef });
    };
    return {
      onClickRemove
    };
  }
});
</script>

<style lang="scss" scoped>
.custom-bucket-remove {
  height: 100%;
  .action {
    height: 100%;
  }
}
</style>
