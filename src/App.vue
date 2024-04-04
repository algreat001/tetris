<script setup lang="ts">
import PageContainer from "@/components/PageContainer.vue";
</script>

<template>
  <page-container>
    <router-view v-slot="{ Component, route }" name="default">
      <template v-if="Component">
        <keep-alive>
          <component :is="Component" :key="route.path"/>
        </keep-alive>
      </template>
    </router-view>
  </page-container>
</template>

<style scoped>

</style>
