<!-- login 登录 -->
<template>
  <div class="login">
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" />
    </header>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          :type="isEye ? '' : 'password'"
          name="密码"
          label="密码"
          placeholder="密码"
          :right-icon="isEye ? 'closed-eye' : 'eye-o'"
          :rules="[{ required: true, message: '请填写密码' }]"
          @click-right-icon="isEye = !isEye"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit"> 提交 </van-button>
      </div>
    </van-form>
    <div class="mt-8 flex">
      <van-checkbox v-model="checked" shape="square">记住账号</van-checkbox>
      <RouterLink to="/forgetPwd">忘记密码？</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const title = t('msg.a1');
const username = ref('');
const password = ref('');
const checked = ref(false);
const isEye = ref(false);
const onSubmit = (values) => {
  console.log('submit', values);
};
</script>
<style scoped>
.login {
  padding: 12px;
}
.logo {
  display: block;
  margin: 0 auto 12px;
  width: 125px;
  height: 125px;
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 40px;
}
</style>
