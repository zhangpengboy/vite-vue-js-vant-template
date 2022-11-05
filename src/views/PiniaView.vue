<template>
  <div class="pinia">
    <div class="counter">
      <p>当前数量：{{ count }}</p>
      <van-button style="margin-top: 10px" @click="accumulate" type="success">累加</van-button>
    </div>
  </div>
</template>

<script>
import { useCounterStore } from '@/store';

export default {
  setup() {
    const counterStore = useCounterStore();
    // 获取单个 state 时，需要使用 computed，否则数据不是响应式
    const count = computed(() => counterStore.count);
    const accumulate = () => counterStore.accumulate();
    return {
      /**
       * store
       */
      count,
      /**
       * methods
       */
      accumulate,
    };
  },
};
</script>

<style lang="less">
@media (min-width: 1024px) {
  .pinia {
    display: flex;
    align-items: center;
    min-height: 100vh;

    .counter {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
