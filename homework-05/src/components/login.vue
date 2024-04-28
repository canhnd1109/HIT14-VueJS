<script setup>
import { defineEmits, reactive, defineProps } from "vue";
const emits = defineEmits(["login-handler" , "switch-register"]);

const account = reactive({
  email: "",
  password: "",
});

const errorLogin = reactive({
  email: {
    error: false,
    errorMsg: "",
  },
  password: {
    error: false,
    errorMsg: "",
  },
  errorMessage: {
    error: false,
    errorMeg: "",
  },
});

function loginHandler() {
  emits("login-handler", account , errorLogin);
}

function switchRegister() {
  emits("switch-register");
}

</script>
<template>
  <form>
    <h1>Login</h1>
    <input type="text" id="account" v-model="account.email" placeholder="Email" /> <br />
    <p v-if="errorLogin.email.error" class="form-error">
        {{ errorLogin.email.errorMsg }}
      </p>
    <input type="password" id="password" v-model="account.password" placeholder="Password"/> <br />
    <p v-if="errorLogin.password.error" class="form-error">
        {{ errorLogin.password.errorMsg }}
      </p>
      <p v-if="errorLogin.errorMessage.error" class="form-error">
        {{ errorLogin.errorMessage.errorMsg }}
      </p>
      <p class="form-feature" @click="switchRegister">Don't have an account?</p>
    <button @click.prevent ="loginHandler">Log in</button>
  </form>
</template>
<style>
    form h1 {
        color: #ffffff;
    }
    form input {
        width: 200px;
    }
    form input[type="text"]{
        margin-top: 50px;
        padding: 10px 15px;
        border: none;
        outline: none;
        border-radius: 5px;
    }
    form input[type="password"] {
        margin: 20px;
        padding: 10px 15px;
        border: none;
        outline: none;
        border-radius: 5px 
    }
    ::placeholder {
        color: #ffffff;
        font-size: 12px;
    }
    form input[type="text"]:focus , form input[type="password"]:focus {
        background-color: #514f4f;
    }
    form button {
        width: 100px;
        padding: 10px 15px;
        outline: none;
        border: none;
        background-color: #ffffff;
        color: #000000;
    }
    form button:hover {
        background-color: #000000;
        color: #ffffff;
    }
   form {
    background-color: rgb(40, 40, 40);
        height: 50vh;
        border-radius: 16px;
        width: 400px;
   }
</style>
