<script setup lang="ts">
import {onActivated, onDeactivated} from "vue";

import {config} from "@/config.ts";
import {useFieldStores} from "@/stores/fieldStores.ts";
import {useGameStateStores} from "@/stores/gameStateStore.ts";

import OneBrick from "@/components/OneBrick.vue";
import StatsPanel from "@/components/StatsPanel.vue";
import StopPanel from "@/components/StopPanel.vue";
import GameMenu from "@/components/GameMenu.vue";

const width = (useFieldStores().width + 2) * config.bricks.w + "px";

onActivated(() => {
  useGameStateStores().init();
  window.addEventListener("keydown", onKeyDown);
  console.log("GameField mounted")
})

onDeactivated(() => {
  window.removeEventListener("keydown", onKeyDown);
})


function onKeyDown(event: KeyboardEvent) {
  if (event.key === "p" || event.key === "P") {
    useGameStateStores().pause()
  }
  if (useGameStateStores().isPaused || useGameStateStores().isGameOver) {
    return;
  }
  if (event.key === "ArrowLeft") {
    useGameStateStores().left();
  }
  if (event.key === "ArrowRight") {
    useGameStateStores().right();
  }
  if (event.key === "ArrowUp") {
    useGameStateStores().rotate();
  }
  if (event.key === " " || event.key === "ArrowDown") {
    useGameStateStores().down();
  }
}

</script>

<template>
  <div class="game-field" v-if="useGameStateStores().isInitialized">
    <template v-for="x in useFieldStores().width">
      <template v-for="y in useFieldStores().height">
        <one-brick :x="x" :y="y" :type="useFieldStores().getCell(x,y)"/>
      </template>
    </template>
  </div>
  <stats-panel/>
  <stop-panel/>
  <game-menu/>
</template>


<style lang="sass" scoped>
.game-field
  position: relative
  width: v-bind(width)

</style>