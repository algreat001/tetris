<script setup lang="ts">
import {config} from "@/config.ts";
</script>

<template>
  <div>
    <h1>{{ config.game.name }}</h1>
    <router-link to="/game">Start Game</router-link>
  </div>
</template>


<style scoped>

</style>