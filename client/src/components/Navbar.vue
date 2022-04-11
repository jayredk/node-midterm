<template>
  <header class="text-black bg-white border-b-3 border-black py-4">
    <div class="container">
      <RouterLink to="/" class="flex justify-between items-center">
        <h1 class="text-2xl font-paytone">MetaWall</h1>
        <div class="flex items-center">
          <img class="border-2 border-black rounded-full mr-2" src="https://fakeimg.pl/24/" alt="">
          <h3 class="font-azeret font-bold border-b-2 border-black">Member</h3>
        </div>
      </RouterLink>
    </div>
  </header>
</template>

<style scoped>
  .border-b-3 {
    border-bottom-width: 3px;
  }
</style>