<template>
  <div class="flex flex-col basis-4/12 bg-white border-2 border-black px-6 py-7">
    <RouterLink to="/post" class="text-white text-center bg-c-blue border-2 border-l-4 border-b-4 border-black rounded-lg hover:bg-c-yellow hover:text-black transition-colors py-2 mb-6" type="button">
      張貼動態
    </RouterLink>
    <div class="flex items-center mb-4 ml-2">
      <img class="border-2 border-black rounded-full mr-4" src="https://fakeimg.pl/40/" alt="">
      <h2 class="font-bold">邊緣小杰</h2>
    </div>
    <a class="group flex items-center mb-4 ml-2"
      href="#">
      <div class="bg-c-blue-100 border-2 border-black rounded-full
      group-hover:bg-c-blue 
      group-hover:text-white transition-colors mr-4 p-2">
        <Icon class="w-6 h-6" icon="mdi:bell-outline" />
      </div>
      <span class="font-bold group-hover:text-c-blue transition-colors">追蹤名單</span>
    </a>
    <a class="group flex items-center ml-2"
      href="#">
      <div class="bg-c-blue-100 border-2 border-black rounded-full
      group-hover:bg-c-blue  group-hover:text-white transition-colors mr-4 p-2">
        <Icon class="w-6 h-6" icon="ph:thumbs-up-bold" />
      </div>
      <span class="font-bold group-hover:text-c-blue transition-colors">我按讚的文章</span>
    </a>
  </div>
</template>