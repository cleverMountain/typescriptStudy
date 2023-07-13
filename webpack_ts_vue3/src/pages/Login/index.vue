<template>
  <div class="login">
    <a-form
      class="form"
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onFinish"
    >
      <a-form-item
        label="Username"
        name="username"
        :rules="[{ required: true, message: '请输入用户名' }]"
      >
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: '请输入密码' }]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
        <div class="register">
          <a-checkbox v-model:checked="formState.remember"
          >记住密码</a-checkbox
        >
        <div @click="registerUser">没有账号?点击注册</div>
        </div>
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" html-type="submit">登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
import { useRoute, useRouter } from "vue-router"

interface FormState {
  username: string;
  password: string;
  remember: boolean;
}
const formState = reactive<FormState>({
  username: "",
  password: "",
  remember: true,
});
const onFinish = (values: FormState): void => {
  console.log("Success:", values);
   router.push('/home')
};

const router = useRouter()
const registerUser = (): void => {
  router.push('/register')
}
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .ant-form {
    width: 30%;
    height: 40%;
  }
  .register {
    display: flex;
    justify-content: space-between;
    > div {
      cursor: pointer;
    }
  }
}
</style>

