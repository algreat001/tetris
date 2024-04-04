<script setup lang="ts">
import {config, TypeBrick} from "@/config.ts";

interface BrickProps {
  x: number;
  y: number;
  type: TypeBrick;
}

const props: BrickProps = defineProps<BrickProps>()

const top = props.y * config.bricks.w + "px"
const left = props.x * config.bricks.h + "px"

</script>

<template>
  <div :style="`top:${top}; left:${left}; width:${config.bricks.w}px; height:${config.bricks.h}px; background-color:${config.bricks[props.type ?? 0].color}`" class="brick" />
</template>


<style lang="sass" scoped>
.brick
  position: absolute
  z-index: 1
</style>