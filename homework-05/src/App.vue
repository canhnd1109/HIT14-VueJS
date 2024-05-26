<script setup>
import { $api } from "./api/server.js";
import { reactive, onBeforeMount, ref } from "vue";
import loginForm from "./components/login.vue";
import registerForm from "./components/register.vue";
import profileForm from "./components/profile.vue";
import changPasswordForm from "./components/changepassword.vue";

const user = reactive({});

const isLogin = ref(true);
const isLogout = ref(false);
const loginSuccess = ref(false);
const changePasswordForm = ref(false);
onBeforeMount(async () => {
  try {
    const res = await $api.get("user/me");
    Object.assign(user, res.data.data);
  } catch (error) {
    console.log(error.message);
  }
});

async function loginHandler(account, errorLogin) {
  try {
    const res = await $api.post("auth/login", account);
    console.log(res.data);
    if (res.data.status === "SUCCESS") {
      loginSuccess.value = true;
      isLogin.value = false;
    }
    localStorage.setItem("hit14-vuejs:access-token", res.data.data.accessToken);

    const userRes = await $api.get("user/me");
    Object.assign(user, userRes.data.data);
    console.log(user);
  } catch (error) {
    console.log(error);

    if (!error.response.data.message.email) {
      errorLogin.errorMessage.error = true;
      errorLogin.errorMessage.errorMsg = error.response.data.message;

      errorLogin.email.error = false;
      errorLogin.password.error = false;
    } else {
      errorLogin.email.error = true;
      errorLogin.email.errorMsg = error.response.data.message.email;

      errorLogin.password.error = true;
      errorLogin.password.errorMsg = error.response.data.message.password;
    }
  }
}

async function registerHandler(newAccount, errorRegister, registerSuccessful) {
  try {
    const res = await $api.post("auth/register", newAccount);
    console.log(res);
    errorRegister.fullName.error = false;
    errorRegister.email.error = false;
    errorRegister.password.error = false;
    registerSuccessful.value = true;
    console.log(registerSuccessful.value);
  } catch (error) {
    console.log(error);
    errorRegister.fullName.error = true;
    errorRegister.fullName.errorMsg = error.response.data.message.fullName;

    errorRegister.email.error = true;
    if (
      error.response.data.message ===
      `User with ${newAccount.email} is already exist`
    ) {
      errorRegister.email.errorMsg = error.response.data.message;
    } else errorRegister.email.errorMsg = error.response.data.message.email;

    errorRegister.password.error = true;
    errorRegister.password.errorMsg = error.response.data.message.password;
  }
}

async function changePassword(password) {
  try {
    const res = await $api.post("/user/change-password", password);
    console.log(res);
    console.log(password);
  } catch (error) {
    console.log(error);
  }
}

function logOut() {
  localStorage.removeItem("hit14-vuejs:access-token");
  loginSuccess.value = !loginSuccess.value;
  changePasswordForm.value = false;
  // isLogout.value = !isLogout.value;
  isLogin.value = !isLogin.value;
}

function switchLogin() {
  isLogin.value = true;
}

function switchRegister() {
  isLogin.value = false;
}

</script>

<template>
  <div>
    <div class="nav">
      <div v-if="!loginSuccess" class="before-login">
        <button @click="isLogin = true" class="btn--login">LOGIN</button>
        <button @click="isLogin = false" class="btn--register">REGISTER</button>
      </div>
      <div v-if="loginSuccess" class="after-login">
        <div @click="isLogout = !isLogout" class="avatar">
          <img :src="user.avatar" alt="" />
        </div>
        <div v-if="isLogout" class="after-login-wrap">
          <div @click="changePasswordForm = false" class="after-login-features">
            Profile
          </div>
          <div @click="changePasswordForm = true" class="after-login-features">
            Change password
          </div>
          <div @click="logOut" class="after-login-features">Log out</div>
        </div>
      </div>
    </div>
    <div class="content">
      <loginForm
        v-if="isLogin && !loginSuccess"
        @login-handler="loginHandler"
        @switch-register="switchRegister"
        class="login-form"
      >
      </loginForm>
      <registerForm
        v-if="!isLogin && !loginSuccess"
        @register-handler="registerHandler"
        @switch-login="switchLogin"
        class="register-form"
      />
      <profileForm
        v-if="loginSuccess && !changePasswordForm"
        :fullName="user.fullName"
        :email="user.email"
        :avatar="user.avatar"
        :createdDate="user.createdDate"
      />
      <changPasswordForm
        v-if="changePasswordForm"
        @change-password-handler="changePassword"
      />
    </div>
  </div>

</template>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  font-family: "Kanit", sans-serif;
}

.nav {
  background-color: #db9538;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 8px 16px;
}

.nav button {
  margin: 0 16px;
  border: none;
  outline: none;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.register-form {
  position: relative;
}

form {
  background-color: #db9538;
  width: 500px;
  border-radius: 30px;
  padding: 30px;
  .form-wrap {
    width: 80%;

    label {
      color: #a8cd9f;
    }
    input {
      width: 90%;
      padding: 8px 16px;
      margin-bottom: 12px;
    }
    input[type="button"] {
      padding: 8px 16px;
      text-align: center;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      cursor: pointer;
    }

    .form-error {
      color: rgb(255, 91, 91);
      margin: 0 0px 12px 0;
    }
    .form-feature {
      cursor: pointer;
      display: inline-block;
      margin: 0 0 10px 0;
    }
    .form-feature:hover {
      color: #e2f4c5;
    }
  }
}

.after-login {
  position: relative;
  cursor: pointer;
  .avatar {
    width: 50px;
    height: 50px;
    img {
      width: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }
  .after-login-wrap {
    position: absolute;
    width: 150px;
    background-color: #db9538;
    color: #e2f4c5;
    top : 145%;
    right: -15px;
    text-align: center;
  }
  .after-login-features {
    border: 1px solid;
    padding: 8px 0;
  }
}
</style>
