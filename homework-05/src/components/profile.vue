<script setup>
import { defineProps } from "vue";
const props = defineProps(["fullName", "email", "avatar", "createdDate"]);
</script>
<template>
  <div>
    <div class="profile-wrap">
      <div class="avatar">
        <img :src="props.avatar" alt="" />
      </div>
      <div class="infor">
        <p class="name"><span>Tên đầy đủ:</span> {{ props.fullName }}</p>
        <p class="email"><span>Email:</span> {{ props.email }}</p>
        <p class="created-date">
          <span>Ngày tạo:</span> {{ props.createdDate }}
        </p>
      </div>
    </div>
  </div>
</template>
<style>
  .profile-wrap {
    background-color: #db9538;
    width: 500px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    border-radius: 30px;
    color: #ffffff;
  .avatar {
      width: 100px;
      height: 100px;
      margin-right: 30px;
  }
  .avatar img {
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
  .infor {
    font-size: 18px;
    span {
      text-decoration: underline;
    }
  }
}
</style>
