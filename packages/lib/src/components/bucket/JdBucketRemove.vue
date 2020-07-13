<template>
  <div class="jd-bucket-remove">
    <button @click="handleRemove">remove</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useJdBucketContainerRef, useJdBucketItemRef } from '../../composables/bucket';

export default defineComponent({
  name: 'JdBucketRemove',
  props: {},
  setup() {
    const containerRef = useJdBucketContainerRef();
    const itemRef = useJdBucketItemRef();
    const handleRemove = () => {
      containerRef.removeByModel(itemRef.model);
    };
    return {
      handleRemove
    };
  }
});
</script>

<style lang="scss" scoped></style>
