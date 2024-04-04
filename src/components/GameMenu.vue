<script setup lang="ts">
import {useRouter} from "vue-router";

import {useGameStateStores} from "@/stores/gameStateStore.ts";

const router = useRouter()

function onNewGame() {
  useGameStateStores().init()
}

function onMainScreen() {
  useGameStateStores().stop()
  useGameStateStores().init();
  router.push("/")
}

</script>

<template>
  <div class="panel">
    <button @click="onNewGame">New game</button>
    <button @click="onMainScreen">Main screen</button>
  </div>
</template>


<style lang="sass" scoped>
.panel
  position: absolute
  z-index: 1
  display: flex
  flex-direction: column
  align-items: stretch
  gap: 16px
  background: rgba(white, 0.5)
  padding: 16px
  border-radius: 8px
  top: 16px
  left: 16px
  font-weight: bold
  color: #031048
  width: 150px

</style>