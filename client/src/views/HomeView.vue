<template>
  <div class="basis-8/12 mr-8">
    <div class="flex justify-between mb-6">
      <select @change="sortPost" class="basis-1/4 bg-white border-2 border-black p-2 mr-4" name="" id="">
        <option value="最新貼文">最新貼文</option>
        <option value="最舊貼文">最舊貼文</option>
      </select>
      <form @submit.prevent="searchResult" class="flex basis-3/4 bg-white border-2 border-black">
        <input v-model="search" class="grow px-4 py-2" type="text" placeholder="搜尋貼文">
        <button class="group bg-c-blue border-l-2 border-black hover:bg-c-yellow transition-colors p-2 ml-auto" type="submit">
          <Icon class="w-6 h-6 text-white group-hover:text-black" icon="mdi:magnify" />
        </button>
      </form>
    </div>
    <template v-if="posts.length > 0">
      <article v-for="post in posts" :key="post._id" class="bg-white border-2 border-b-4 border-black rounded-lg p-6 mb-4">
        <header class="flex items-center mb-4">
          <img class="w-10 border-2 border-black rounded-full mr-4" :src="post.user?.photo" alt="avatar">
          <div class="flex flex-col">
            <h3 class="font-bold hover:text-c-blue hover:underline"><a href="#">{{ post.user?.name }}</a></h3>
            <span class="text-xs text-c-gray">{{ new Date(post.createdAt).toLocaleString() }}</span>
          </div>
        </header>
        <div class="mb-4">
          <p>{{ post.content }}</p>
        </div>
        <img class="border-2 border-black rounded-lg mb-4" :src="post.image" alt="">
        <div>
          <a class="flex items-center" href="#">
            <Icon class="w-6 h-6 text-c-blue mr-2" icon="ph:thumbs-up-bold" />
            <span >{{ post.likes}}</span>
          </a>
        </div>
      </article>
    </template>

    <div v-else class="bg-white border-2 border-b-4 border-black rounded-lg">
      <div class="border-b-2 border-black p-4">
        <span class="inline-block w-2.5 h-2.5 bg-cd-red border border-neutral-500 rounded-full mr-2"></span>
        <span class="inline-block w-2.5 h-2.5 bg-cd-yellow border border-neutral-500 rounded-full mr-2"></span>
        <span class="inline-block w-2.5 h-2.5 bg-cd-green border border-neutral-500 rounded-full"></span>
      </div>
      <p class="text-c-gray text-center font-noto px-4 py-8">目前尚無動態，新增一則貼文吧！</p>
    </div>
    
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import axios from "axios";

  const posts = ref([]);

  const getPosts = (query = '') => {
    axios.get(`${import.meta.env.VITE_APP_API}/posts${query}`)
    .then(res => {
      posts.value = res.data.data;
    });
  }

  getPosts();

  const sortPost = (evt) => {
    const sortByTime = evt.target.value.includes('新') ? '' : '?sortByTime=asc'

    getPosts(sortByTime);
  }

  const search = ref('');
  const searchResult = () => {
    const q = `?q=${search.value}`;
    getPosts(q);
  }

</script>
