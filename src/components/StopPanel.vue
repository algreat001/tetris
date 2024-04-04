<script setup lang="ts">
import {computed} from "vue";

import {useGameStateStores} from "@/stores/gameStateStore.ts";

const isShow = computed(() => useGameStateStores().isPaused || useGameStateStores().isGameOver);

</script>

<template>
  <div class="panel" v-if="isShow">
    <div v-if="useGameStateStores().isPaused && !useGameStateStores().isGameOver">Paused</div>
    <div v-if="useGameStateStores().isGameOver">Game Over</div>
  </div>
</template>


<style lang="sass" scoped>
.panel
  position: absolute
  z-index: 2
  background: rgba(white, 0.5)
  padding: 16px
  border-radius: 8px
  font-weight: bold
  color: #031048
  top: calc(100svh / 2 - 100px)
  min-width: 150px
  min-height: 100px
  display: flex
  justify-content: center
  align-items: center

</style>