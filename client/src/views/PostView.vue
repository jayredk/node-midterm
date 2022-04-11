<template>
  <div class="relative z-10 basis-8/12 mr-8">
    <h2 class="text-xl font-azeret text-center font-bold bg-white border-2 border-black py-4 mb-4 after:w-full after:h-16 after:content-[''] after:absolute after:top-1 after:right-1 after:-z-10 after:bg-white after:border-2 after:border-black ">
      張貼動態
    </h2>
    <div class="bg-white border-2 border-b-4 border-black rounded-lg p-6 mb-4">
      <p class="mb-2">貼文內容</p>
      <textarea v-model="content" class="w-full h-40 border-2 border-black resize-none p-4 mb-4" placeholder="輸入您的貼文內容"></textarea>
      <div class="flex border-2 border-black mb-4">
        <input @input="validation" v-model.lazy="uploadImg" class="w-full p-4" type="text" placeholder="請輸入圖片網址">
        <button class="shrink-0 text-white bg-c-blue border-l-2 border-black hover:bg-c-yellow hover:text-black transition-colors px-4 py-2" type="button">確定</button>
      </div>
      <p v-show="validated === false && uploadImg !== ''" class="text-c-red text-center mb-4">圖片網址錯誤或圖片不存在</p>
      <img v-show="validated" :src="uploadImg" class="border-2 border-black rounded-lg mb-4" alt="">
      <div class="w-60 mx-auto">
        <button @click="post" :disabled="!uploadImg || !validated" class="w-full text-white bg-c-blue border-2 border-l-4 border-b-4 border-black rounded-lg hover:bg-c-yellow hover:text-black transition-colors disabled:opacity-60 disabled:bg-c-blue disabled:text-white py-2" type="button">送出貼文</button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import axios from "axios";
  import Swal from 'sweetalert2';

  const content = ref('')

  const uploadImg = ref('')
  const validated = ref(null)

  const debounce = (func, delay) => {
    // timeout 初始值
    let timeout = null;
    return function(){
      let context = this;  // 指向 myDebounce 這個 input
      let args = arguments;  // KeyboardEvent
      clearTimeout(timeout)

      timeout = setTimeout(function(){
        func.apply(context, args)
      }, delay)
    }
  }
  const validation = debounce((evt) => {
    // console.log(uploadImg.value.match(/https?:\/\//g));
    if (uploadImg.value.match(/https?:\/\//g)) {
      validated.value = true
    } else {
      validated.value = false
    }
  }, 1000)

  const post = () => {
    axios.post(`${import.meta.env.VITE_APP_API}/posts`, {
      "name":"curry",
      "image": uploadImg.value,
      "content": content.value,
      "likes":0,
      "comments":0,
      "type":"person",
      "tags":["心情"]
    })
    .then(res => {
      Swal.fire(
        '張貼成功！',
        '',
        'success'
      )
    })
    .catch(err => {
      Swal.fire(
        '張貼失敗',
        `${err.response.data.message}`,
        'error'
      )
      console.log(err)
    })
  }

</script>
