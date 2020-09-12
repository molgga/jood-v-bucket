<template>
  <div class="page-view">
    <div class="panel">
      <demo-panel class="panel-imgs" title="@jood/v-bucket">
        <div class="preview-imgs">
          <div class="mg">
            <img
              src="https://user-images.githubusercontent.com/2731262/90954882-91865400-e4b3-11ea-8e28-920a165c499a.gif"
              alt="@jood/v-bucket sample image 1"
            />
          </div>
          <div class="mg">
            <img
              src="https://user-images.githubusercontent.com/2731262/90954928-e924bf80-e4b3-11ea-9a98-75fe7cd69355.gif"
              alt="@jood/v-bucket sample image 2"
            />
          </div>
        </div>
      </demo-panel>

      <demo-panel-devider />

      <demo-preview-code v-bind="Codes.install" />

      <demo-panel-devider />

      <demo-preview-code v-bind="Codes.main" />

      <demo-panel-devider />

      <demo-preview-code v-bind="Codes.app" />

      <demo-panel-devider />

      <demo-preview-code v-bind="Codes.someContainer" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Codes from '@/codes/getting-started';

export default defineComponent({
  setup() {
    return {
      Codes
    };
  }
});
</script>

<style lang="scss" scoped>
.page-view {
  > .panel {
    width: 100%;
  }
  .panel-imgs {
    .preview-imgs {
      display: flex;
      margin: 0 -5px;
      .mg {
        flex: 1;
        margin: 0 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #e9e9e9;
        > img {
          display: block;
          max-width: 100%;
        }
      }
    }
  }
  .panel-desc {
    padding: 0 15px;
    line-height: 1.7;
    .pg {
      margin: 10px 0 0 0;
      &:first-child {
        margin-top: 0;
      }
    }
    em {
      color: #2a9e64;
      font-style: normal;
    }
  }
  .panel-list {
    margin: 20px 10px;
    li {
      padding-top: 7px;
      &:first-child {
        padding-top: 0;
      }
    }
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
