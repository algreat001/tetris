<script setup lang="ts">
import {useGameStateStores} from "@/stores/gameStateStore.ts";

import NextFigure from "@/components/NextFigure.vue";
</script>

<template>
  <div class="panel">
    <div>Best: {{ useGameStateStores().best }}</div>
    <div>Score: {{ useGameStateStores().score }}</div>
    <div>Level: {{ useGameStateStores().level }}</div>
    <div>Lines: {{ useGameStateStores().lines }}</div>
    <div>Next:</div>
    <next-figure/>
  </div>
</template>


<style lang="sass" scoped>
.panel
  position: absolute
  z-index: 1
  display: flex
  flex-direction: column
  align-items: center
  background: rgba(white, 0.5)
  padding: 16px
  border-radius: 8px
  top: 16px
  right: 16px
  font-weight: bold
  color: #031048
  width: 150px

</style>