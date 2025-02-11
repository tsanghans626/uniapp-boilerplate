<route type="page" lang="json5">
{
  layout: 'theme', // 使用主题
  style: {
    navigationBarTitleText: '登录请求示例'
  }
}
</route>

<template>
  <button @click="login">登录请求</button>
  <button @click="getList">获取列表数据</button>
  <button @click="tokenInvalid">token 失效</button>
</template>

<script setup lang="ts">
import { loginApi, getListApi } from '@/api/loginApi'
import { useUserStore } from '@/store'
const store = useUserStore()

// 登录请求
const login = () => {
  loginApi({
    username: 'uniLin',
    password: '111111'
  })
}

// 获取 列表数据
const getList = () => {
  getListApi()
  getListApi()
  getListApi()
}

// token 失效
const tokenInvalid = () => {
  store.setUserInfo({
    accessToken: ''
  })
}
</script>

<style>
/* 暗黑模式 start */
.wot-theme-dark {
  color: #f5f5f5;
  background: black;
  --theme-bg-color: #1b1b1b;
}
</style>
