<script setup lang="ts">
import {useFieldStores} from "@/stores/fieldStores.ts";

import OneBrick from "@/components/OneBrick.vue";
</script>

<template>
  <div class="next-figure">
    <div class="figure">
      <template v-for="(line, x) in useFieldStores().nextFigure">
        <template v-for="(cell, y) in line">
          <one-brick :x="x" :y="y" :type="cell"/>
        </template>
      </template>
    </div>
  </div>
</template>


<style lang="sass" scoped>
.next-figure
  position: relative
  display: flex
  justify-content: center
  align-items: center
  width: 100px
  height: 100px

.figure
  position: relative
  width: 50px
  height: 50px
</style>