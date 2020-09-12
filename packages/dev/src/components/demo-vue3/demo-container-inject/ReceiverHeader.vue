<template>
  <div class="receiver-header">
    <div class="my-count">
      <i class="icon material-icons">{{ viewState.countIcon }}</i>
      <span class="label">{{ viewState.countLabel }}</span>
    </div>

    <div
      class="my-chip"
      v-for="(model, index) in state.list"
      :key="model.uid + index"
      :style="{ backgroundColor: model.color }"
    >
      <span class="label">{{ model.name }}</span>
      <i class="icon material-icons" @click="onRemoveItem(model)">close</i>
    </div>
  </div>
</template>

<script lang="ts">
import { Subscription } from 'rxjs';
import { defineComponent, reactive, onMounted, onUnmounted, computed } from 'vue';
import { useJdBucketContainerRef } from '@jood/v-bucket';

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
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: -20px;
  padding: 10px 20px;
  .my-count {
    display: inline-flex;
    align-items: center;
    margin: 2px;
    padding: 5px 12px;
    color: #2f93ce;
    box-sizing: border-box;
    border-radius: 2px;
    background-color: #f9f9f9;
    .icon {
      font-size: 20px;
    }
    .label {
      padding-left: 6px;
      font-size: 14px;
    }
  }
  .my-chip {
    display: inline-flex;
    align-items: center;
    margin: 2px;
    padding: 5px 12px;
    color: #ffffff;
    box-sizing: border-box;
    border-radius: 20px;
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 5px;
      margin-right: -5px;
      width: 18px;
      height: 18px;
      font-size: 14px;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
  }
}
</style>
