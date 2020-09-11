<template>
  <div class="jd-bucket-check">
    <slot :state="state">check: {{ state.isSelected }}</slot>
  </div>
</template>

<script lang="ts">
import { Subscription } from 'rxjs';
import { defineComponent, reactive, onMounted, onUnmounted } from 'vue';
import { useJdBucketItemRef } from '../composables';

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
