<script setup lang="ts">
import GameField from "@/components/GameField.vue";
import {config} from "@/config.ts";
</script>

<template>
  <div class="game">
    <h1>{{ config.game.name }}</h1>
    <game-field/>
  </div>
</template>

<style lang="sass" scoped>
.game
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  text-align: center

</style>