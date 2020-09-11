<template>
  <div class="custom-bucket-move">
    <v-tooltip top>
      <span>first</span>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          class="action"
          :color="iconColor"
          fab
          dark
          x-small
          @click="onClickMove('first')"
        >
          <v-icon class="first">first_page</v-icon>
        </v-btn>
      </template>
    </v-tooltip>

    <v-tooltip top>
      <span>up</span>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          class="action"
          :color="iconColor"
          fab
          dark
          x-small
          @click="onClickMove('up')"
        >
          <v-icon class="up">expand_less</v-icon>
        </v-btn>
      </template>
    </v-tooltip>

    <v-tooltip top>
      <span>down</span>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          class="action"
          :color="iconColor"
          fab
          dark
          x-small
          @click="onClickMove('down')"
        >
          <v-icon class="down">expand_more</v-icon>
        </v-btn>
      </template>
    </v-tooltip>

    <v-tooltip top>
      <span>last</span>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          class="action"
          :color="iconColor"
          fab
          dark
          x-small
          @click="onClickMove('last')"
        >
          <v-icon class="last">first_page</v-icon>
        </v-btn>
      </template>
    </v-tooltip>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useJdBucketItemRef } from '@jood/v-bucket';

export default defineComponent({
  components: {},
  props: {
    model: {
      type: Object,
      default: null
    },
    iconColor: {
      type: String,
      default: '#cccccc'
    }
  },
  setup(props, context) {
    const { emit } = context;
    const itemRef = useJdBucketItemRef();
    const onClickMove = (direction: string) => {
      emit(direction, { direction, itemRef });
    };
    return {
      onClickMove
    };
  }
});
</script>

<style lang="scss" scoped>
.custom-bucket-move {
  .first {
    transform: rotate(90deg);
  }
  .last {
    transform: rotate(-90deg);
  }
  .action {
    margin: 0 3px;
    width: 18px;
    height: 18px;
    box-shadow: none;
    ::v-deep .v-btn__content .v-icon {
      width: 14px;
      height: 14px;
      font-size: 14px;
    }
  }
}
</style>
