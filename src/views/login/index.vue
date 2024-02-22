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
        <div class="login_password">
          <span>密码登录</span>
        </div>
        <div class="login_captcha">
          <span>验证码登录</span>
        </div>
      </div>
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="username"
            name="用户名"
            label="用户名"
            colon
            placeholder="请输入用户名"
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
        <div class="login_button" style="margin: 16px">
          <van-button round block type="primary" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
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
import { Image,Form } from "vant";
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
        border-bottom: 2px solid #ff4613;
        flex: 1;
        height: 35px;
        line-height: 35px;
      }
      .login_captcha {
        flex: 1;
        height: 35px;
        line-height: 35px;
      }
    }
  }
  .login_button{
    margin-top:20px;
  }
}
</style>
