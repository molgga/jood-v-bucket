<template>
  <div class="sample-item">
    <div class="panel-avatar">
      <div class="avatar" :style="{ backgroundColor: color }">{{ viewState.avatar }}</div>
    </div>
    <div class="panel-info">
      <div class="name">
        <span class="label" :style="{ color: color }">{{ viewState.name }}</span>
      </div>
      <div class="desc">
        <span class="label">{{ viewState.description }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  props: {
    name: String,
    description: String,
    color: {
      type: String,
      default: '#cccccc'
    }
  },
  setup(props) {
    const viewState = computed(() => {
      const name = props.name || '-';
      const description = props.description || '';
      const avatar = name.slice(0, 1);
      return {
        name,
        description,
        avatar
      };
    });
    return {
      viewState
    };
  }
});
</script>

<style lang="scss" scoped>
.sample-item {
  display: flex;
  align-items: center;
  .panel-avatar {
    width: 36px;
    height: 36px;
    .avatar {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      color: #ffffff;
      font-size: 16px;
      font-weight: bold;
      border-radius: 50%;
    }
  }
  .panel-info {
    flex: 1;
    margin-left: 8px;
    min-width: 0;
    .label {
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .name {
      font-size: 14px;
      font-weight: 600;
    }
    .desc {
      color: #777777;
      font-size: 13px;
    }
  }
}
@media all and (max-width: 768px) {
  .sample-item {
    .panel-avatar {
      display: none;
    }
  }
}
</style>
