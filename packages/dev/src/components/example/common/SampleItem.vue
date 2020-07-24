<template>
  <div class="sample-item">
    <div class="panel-avatar">
      <v-avatar :color="avatarColor" size="36">
        <span class="white--text headline">{{ viewState.avatar }}</span>
      </v-avatar>
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
import { defineComponent, computed } from '@vue/composition-api';

const TEST_COLORS = [
  '#01a9b4',
  '#99b898',
  '#eebb4d',
  '#709fb0',
  '#fb7813',
  '#726a95',
  '#f54291',
  '#ff847c',
  '#35d0ba',
  '#679b9b',
  '#bb596b',
  '#ad6989',
  '#ffb367',
  '#7d5a5a',
  '#565d47'
];

export default defineComponent({
  props: {
    name: String,
    description: String
  },
  setup(props) {
    const avatarColor = TEST_COLORS[Math.round(Math.random() * TEST_COLORS.length - 1)];
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
      avatarColor,
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
</style>
