<template>
  <Navbar />
  <main class="front-bg p-12">
    <div class="container">
      <div class="flex justify-between items-start">
        <RouterView />
        <UserPanel />
      </div>
    </div>
  </main>
</template>

<script setup>
  import Navbar from '@/components/Navbar.vue';
  import UserPanel from "@/components/UserPanel.vue";
  // import HomeView from "@/views/HomeView.vue";
</script>

<style>
  .front-bg {
    background-image: url("../assets/images/bg.png");
    background-repeat: repeat;
    background-size: 60px 60px;
    min-height: calc(100vh - 67px);
  }
</style>