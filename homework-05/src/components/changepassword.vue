<template>
    <form action="" class="changePw">
        <h1>Change Password</h1>
        <input type="password" name="curpass" id="curpass" v-model="password.currentPassword" placeholder="Enter your current password">
        <input type="password" name="newpass" id="newpass" v-model="password.newPassword" placeholder="Enter your new password">
        <ul>
            Password required:
            <li>At least 8 characters</li>
            <li>At least 1 letter character (uppercase or lowercase)</li>
            <li>At least 1 numeric character</li>
        </ul>
        <button @click.prevent="changePassword">Change</button>
    </form>
</template>

<script setup>
    import { defineEmits, reactive, watch } from "vue";
    const emits = defineEmits(["change-password-handler"]);

    const password = reactive({
        currentPassword: "",
        newPassword: "",
    });

    function changePassword() {
        emits("change-password-handler", password);
    }
</script>

<style>
   .changePw {
    height: 57vh;
   }

   .changePw ul li{
        display: flex;
        margin-left: 15%;
        font-size: 15px;
   }
</style>
