<template>
  <div class="jd-bucket-check">
    <slot :state="state">check: {{ state.isSelected }}</slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, onUnmounted } from '@vue/composition-api';
import { useJdBucketItemRef } from '../../composables/bucket';
import { Subscription } from 'rxjs';

export default defineComponent({
  name: 'JdBucketCheck',
  setup() {
    const itemRef = useJdBucketItemRef();
    const bucketListener = new Subscription();

    const state = reactive({
      isSelected: itemRef.isSelected
    });

    const onStateChange = () => {
      state.isSelected = itemRef.isSelected;
    };

    onMounted(() => {
      const observe1 = itemRef.observeChangeState().subscribe(onStateChange);
      bucketListener.add(observe1);
    });

    onUnmounted(() => {
      bucketListener.unsubscribe();
    });

    return {
      state
    };
  }
});
</script>

<style lang="scss" scoped></style>
