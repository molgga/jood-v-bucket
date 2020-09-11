<template>
  <div class="sample-item">
    <div class="panel-avatar">
      {{ viewState.avatar }}
    </div>
    <div class="panel-info">
      <div class="name">
        <span class="label">{{ viewState.name }}</span>
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
