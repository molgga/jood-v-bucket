<template>
  <div class="receiver-header">
    <v-chip class="my-count" :color="viewState.countColor" :outlined="true" :label="true">
      <v-avatar left>
        <v-icon>{{ viewState.countIcon }}</v-icon>
      </v-avatar>
      {{ viewState.countLabel }}
    </v-chip>

    <v-chip
      v-for="(model, index) in state.list"
      :key="model.uid + index"
      class="my-item"
      :color="model.color"
      text-color="#ffffff"
      close
      @click:close="onRemoveItem(model)"
    >{{ model.name }}</v-chip>
  </div>
</template>

<script lang="ts">
import { Subscription } from 'rxjs';
import { defineComponent, reactive, onMounted, onUnmounted, computed } from '@vue/composition-api';
import { useJdBucketContainerRef } from '@/lib-package';

export default defineComponent({
  setup() {
    const containerRef = useJdBucketContainerRef();
    const containerListener = new Subscription();
    const state = reactive({
      list: containerRef.getList(),
      max: containerRef.max
    });
    const viewState = computed(() => {
      const current = state.list.length;
      const total = state.max;
      const isMoreable = current < total;
      return {
        countColor: isMoreable ? '#32ade6' : '#dd4444',
        countIcon: isMoreable ? 'add_shopping_cart' : 'remove_shopping_cart',
        countLabel: total === -1 ? current : `${current}/${total}`
      };
    });
    const onChangeState = () => {
      state.list = containerRef.getList();
      state.max = containerRef.max;
    };
    const onRemoveItem = (model: any) => {
      containerRef.removeByModel(model);
    };

    onMounted(() => {
      const observeState = containerRef.observeChangeState().subscribe(onChangeState);
      containerListener.add(observeState);
    });
    onUnmounted(() => {
      containerListener.unsubscribe();
    });

    return {
      state,
      viewState,
      onRemoveItem
    };
  }
});
</script>

<style lang="scss" scoped>
.receiver-header {
  margin-bottom: -20px;
  padding: 10px 20px;
  .my-count {
    margin: 2px 8px 2px 2px;
  }
  .my-item {
    margin: 2px;
  }
}
</style>
