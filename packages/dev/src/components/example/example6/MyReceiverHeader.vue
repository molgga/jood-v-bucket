<template>
  <div class="my-receiver-header">
    <div class="aside">count: {{ state.size }} / max: {{ state.max }}</div>
    <div class="spacer"></div>
    <div class="bside">isMaximum: {{ state.isMaximum }}</div>
  </div>
</template>

<script lang="ts">
import { Subscription } from 'rxjs';
import { defineComponent, reactive, onMounted, onUnmounted } from '@vue/composition-api';
import { useJdBucketContainerRef } from '@/lib-package';

export default defineComponent({
  setup() {
    const containerRef = useJdBucketContainerRef();
    const containerListener = new Subscription();

    const state = reactive({
      size: containerRef.getList().length,
      max: containerRef.max,
      isMaximum: containerRef.isMaximum
    });

    const onChangeState = () => {
      state.size = containerRef.getList().length;
      state.max = containerRef.max;
      state.isMaximum = containerRef.isMaximum;
    };

    onMounted(() => {
      const observeState = containerRef.observeChangeState().subscribe(onChangeState);
      containerListener.add(observeState);
    });

    onUnmounted(() => {
      containerListener.unsubscribe();
    });

    return {
      state
    };
  }
});
</script>

<style lang="scss" scoped>
.my-receiver-header {
  display: flex;
  > .spacer {
    flex: 1;
  }
}
</style>
