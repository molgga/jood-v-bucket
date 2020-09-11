export default {
  install: {
    title: 'package install',
    description: '',
    lang: 'bash',
    code: `$ npm install @jood/v-bucket
# or $ yarn add @jood/v-bucket`
  },
  main: {
    title: 'main.ts',
    description: '',
    lang: 'typescript',
    code: `import '@jood/v-bucket/dist/v-bucket.css';`
  },
  app: {
    title: 'App.vue',
    description: '',
    lang: 'html',
    code: `
  <template>
    <div>
      <jd-bucket-selection-indicate />
      <some-view testGroupName="A" />
      <some-view testGroupName="B" />
    </div>
  </template>
  
  <script lang="ts">
  import { provideJdBucketRef, JdBucketSelectionIndicate } from '@jood/v-bucket';
  import SomeView from './SomeView.vue';
  export default {
    components: {
      JdBucketSelectionIndicate,
      SomeView,
    },
    setup() {
      provideJdBucketRef();
      return {}
    }
  }
  </script>
    `
  },
  someContainer: {
    title: 'SomeView.vue',
    description: '',
    lang: 'html',
    code: `
    <template>
    <div>
      <h2>group - {{ testGroupName }}</h2>
      <div class="test-wrap">
        <div class="test-one">
          <h3>receiver 1</h3>
  
          <jd-bucket-container
            v-model="receiver1.list"
            :groupName="testGroupName"
            :receiver="true"
            :useGhostBar="true"
          >
            <jd-bucket-item
              v-for="(item, index) in receiver1.list"
              :key="\`\${index}_\${item.id}\`"
              :model="item"
              class="test-item"
              >{{ item }}</jd-bucket-item
            >
          </jd-bucket-container>
        </div>
        <div class="test-one">
          <h3>receiver 2</h3>
          <jd-bucket-container
            v-model="receiver2.list"
            :groupName="testGroupName"
            :receiver="true"
            :useGhostBar="true"
          >
            <jd-bucket-item
              v-for="(item, index) in receiver2.list"
              :key="\`\${index}_\${item.id}\`"
              :model="item"
              class="test-item"
              >{{ item }}</jd-bucket-item
            >
          </jd-bucket-container>
        </div>
        <div class="test-one">
          <h3>sender</h3>
          <jd-bucket-container v-model="sender1.list" :groupName="testGroupName" :receiver="false">
            <jd-bucket-item
              v-for="item in sender1.list"
              :key="item.id"
              :model="item"
              class="test-item"
              >{{ item }}</jd-bucket-item
            >
          </jd-bucket-container>
        </div>
      </div>
    </div>
  </template>
  <script lang="ts">
  import { reactive } from 'vue';
  import { JdBucketContainer, JdBucketItem } from '@jood/v-bucket';
  function createTestList(len = 5) {
    return Array.from(Array(len)).map((item, index) => {
      return { id: index };
    });
  }
  export default {
    components: {
      JdBucketContainer,
      JdBucketItem,
    },
    props: {
      testGroupName: {
        type: String,
        default: 'A',
      },
    },
    setup() {
      const receiver1 = reactive({ list: createTestList(Math.floor(Math.random() * 5)) });
      const receiver2 = reactive({ list: createTestList(Math.floor(Math.random() * 5)) });
      const sender1 = reactive({ list: createTestList() });
      return {
        receiver1,
        receiver2,
        sender1,
      };
    },
  };
  </script>
  <style lang="scss">
  .test-wrap {
    display: flex;
    width: 100%;
  }
  .test-one {
    flex: 1;
  }
  .test-item {
    margin: 2px;
    padding: 5px;
    border: 1px solid #cccccc;
    &.is-selected {
      border-color: #ff0000;
    }
  }
  </style>
`
  }
};
