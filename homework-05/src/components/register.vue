<script setup>
import { reactive, ref, defineEmits , watch} from "vue";

const newAccount = reactive({
  fullName: "",
  email: "",
  password: "",
});

const errorRegister = reactive({
  fullName: {
    error: false,
    errorMsg: "",
  },
  email: {
    error: false,
    errorMsg: "",
  },
  password: {
    error: false,
    errorMsg: "",
  },
});

const registerSuccessful = ref(false);

const emits = defineEmits(["register-handler", "switch-login"]);

function registerHandler() {
  emits("register-handler", newAccount, errorRegister, registerSuccessful);
}

function switchLogin() {
  emits("switch-login");
}

const passwordRequired = reactive({
  "least-8-chars": false,
  "least-1-letter": false,
  "least-1-numberic": false,
});

watch(newAccount, () => {
  const regexLetter = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
  const regexNumber = /^(?=.*\d).+$/;

  if (newAccount.password.length >= 8) passwordRequired["least-8-chars"] = true;
  else passwordRequired["least-8-chars"] = false;

  if (regexLetter.test(newAccount.password))
    passwordRequired["least-1-letter"] = true;
  else passwordRequired["least-1-letter"] = false;

  if (regexNumber.test(newAccount.password))
    passwordRequired["least-1-numberic"] = true;
  else passwordRequired["least-1-numberic"] = false;
});
</script>
<template>
  <form action="" class="register">
    <h1 style="color: aliceblue;">Register</h1>
    <input
      id="name"
      placeholder="Enter your full name"
      v-model="newAccount.fullName"
      required
        @blur="registerErrorHandler"
    />
    <br />
    <p v-if="errorRegister.fullName.error" class="form-error">
        {{ errorRegister.fullName.errorMsg }}
      </p>
    <input
      id="email"
      placeholder="Enter your email"
      v-model="newAccount.email"
      required
    />
    <br />
    <p v-if="errorRegister.email.error" class="form-error">
        {{ errorRegister.email.errorMsg }}
      </p>
    <input
      type="password"
      placeholder="Enter password"
      v-model="newAccount.password"
      id="password"
      required
    />
    <br />
    <p v-if="errorRegister.password.error" class="form-error">
        {{ errorRegister.password.errorMsg }}
      </p>
    <ul class="password-required">
      Password required:
      <li :class="{ done: passwordRequired['least-8-chars'] }">At least 8 characters</li>
      <li :class="{ done: passwordRequired['least-1-letter'] }">At least 1 letter character (uppercase or lowercase)</li>
      <li :class="{ done: passwordRequired['least-1-numberic'] }">At least 1 numeric character.</li>
    </ul>
    <p v-if="registerSuccessful" class="register-succesful">
        Register Succesful!
      </p>
      <p class="form-feature" @click="switchLogin">Have an account?</p>
      <input type="button" value="REGISTER" @click.prevent="registerHandler" />
  </form>
</template>
<style>
    .register {
        background-color: rgb(40, 40, 40);
        height: 70vh;
    }

    .register ul li {
      font-size: 12px;
      display: flex;
      margin:5px 70px;
    }

     .register input{
        padding: 10px 15px;
        border: none;
        outline: none;
        border-radius: 5px;
    }

    .register #name {
      margin-bottom: 15px;
    }

    .register input[type="button"] {
      background-color: rgb(255, 255, 255);
      color: rgb(40, 40, 40);
      border: 1px solid rgb(40, 40, 40);
      padding: 10px 15px;
      border-radius: 5px;
      cursor: pointer;
      font-size: 15px;
      font-weight: bold;
    }
    .register input[type="button"]:hover {
      background-color: rgb(0, 0, 0);
      color: rgb(255, 255, 255);
      border: none;
      outline: none;
    }
    input:focus {
      background-color: grey;
    }
</style>
