import {defineStore} from "pinia";
import {computed, ref} from "vue";

import {useFieldStores} from "@/stores/fieldStores.ts";

export const useGameStateStores = defineStore('gameState', () => {


  const init = () => {
    isGameOver.value = false;
    isWin.value = false;
    score.value = 0;
    lines.value = 0;
    level.value = 1;
    isInitialized.value = true;
    useFieldStores().init();
    start();
  }

  const timer = ref(0);

  function step() {
    isGameOver.value = useFieldStores().step();

    if (isGameOver.value) {
      stop();
    }
  }

  function addLine() {
    lines.value++;
  }

  function addScore() {
    score.value += 10;
    if (score.value > best.value) {
      best.value = score.value;
    }
    if (score.value > level.value * 1000) {
      level.value++;
      if (level.value >= 100) {
        isWin.value = true;
        stop();
        return;
      }
      stop();
      start();
    }
  }


  function rotate() {
    useFieldStores().rotate()
  }

  function left() {
    useFieldStores().move(-1);
  }

  function right() {
    useFieldStores().move(1);
  }

  function down() {
    step();
  }

  function start() {
    if (timer.value !== 0) {
      return;
    }
    timer.value = setInterval(step, (100 - level.value) * 10) as unknown as number;
  }

  function stop() {
    clearInterval(timer.value);
    timer.value = 0;
  }

  function pause() {
    if (!isInitialized.value || isGameOver.value) {
      return;
    }
    if (isPaused.value) {
      start();
    } else {
      stop();
    }
  }


  const isInitialized = ref(false);
  const isPaused = computed(() => timer.value === 0);
  const isGameOver = ref(false);
  const isWin = ref(false);
  const score = ref(0);
  const best = ref(0);
  const level = ref(1);
  const lines = ref(0);

  return {
    isPaused,
    isGameOver,
    isInitialized,
    lines,
    score,
    best,
    level,
    start,
    stop,
    left,
    right,
    rotate,
    down,
    pause,
    init,
    addLine,
    addScore,
  };
});