<template>
  <div class="login_content">
    <div class="login_img">
      <van-image
        width="186"
        src="https://award.xmcdn.com/yx/fe-passport/last/dist/images/new-logo-m@2x_2909eca.png"
      />
    </div>
    <div class="login_main">
      <div class="tab">
        <div
          @click="captchaorpassword = !captchaorpassword"
          :class="{ login_password: true, action: captchaorpassword }"
        >
          <span>密码登录</span>
        </div>
        <div
          @click="captchaorpassword = !captchaorpassword"
          :class="{ login_captcha: true, action: !captchaorpassword }"
        >
          <span>验证码登录</span>
        </div>
      </div>
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="phone"
            name="手机号"
            label="手机号"
            colon
            placeholder="请输入手机号"
          />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            colon
            placeholder="请输入密码"
          />
        </van-cell-group>
        <div style="margin: 16px">
          <van-button
            color="#F86442"
            round
            block
            type="primary"
            native-type="submit"
          >
            提交
          </van-button>
        </div>
      </van-form>
      <van-checkbox class="login_check" v-model="checked">
        <span>首次登录会自动创建新账号，且代表同意</span>
        <a>《用户服务协议》</a>
        <span>和</span>
        <a>《隐私政策》</a>
      </van-checkbox>
      <van-divider :style="{ color: '#666' }" class="login_divider">
        其他登录方式
      </van-divider>
      <div class="other_login">
        <van-icon class="login_icon" name="qq" />
        <van-icon class="login_icon" name="weibo" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "login",
});
</script>
<script setup lang="ts">
import { useRouter } from "vue-router";
import { showNotify } from "vant";
import { ref } from "vue";
import { zmm_getLogin } from "../../api/login.ts";

const router = useRouter();
const checked = ref<boolean>(true);
const captchaorpassword = ref<boolean>(true);
const phone = ref<string>("");
const password = ref<string>("");

const onSubmit = () => {
  if (!phone.value) {
    showNotify("请输入手机号");
    return;
  }
  if (!password.value) {
    showNotify("请输入密码");
    return;
  }
  if (!checked.value) {
    showNotify("请勾选协议");
    return;
  }
  getLoginHandle();
};

const getLoginHandle = async () => {
  try {
    const result = await zmm_getLogin({
      phone: phone.value,
      password: password.value,
    });
    // console.log(result);
    localStorage.setItem("token", result.token);
    router.push({ path: "/" });
  } catch (error) {
    console.log(error);
    showNotify("网络错误，请重试");
  }
};
</script>

<style scoped lang="less">
.login_content {
  padding: 30px 40px 0px 40px;
  text-align: center;
  .login_img {
    text-align: center;
    width: 310rox;
    margin-bottom: 20px;
  }
  .login_main {
    .tab {
      display: flex;
      font-size: 13px;
      .login_password {
        flex: 1;
        height: 35px;
        line-height: 35px;
      }
      .login_captcha {
        flex: 1;
        height: 35px;
        line-height: 35px;
      }
      .action {
        color: #ff4613;
        border-bottom: 2px solid #ff4613;
      }
    }
  }
  .login_check {
    align-items: flex-start;
    font-size: 12px;
  }
  .login_divider {
    margin-top: 250px;
  }
  .other_login {
    display: flex;
    justify-content: space-around;
  }
}
</style>
