<template>
  <div>
    <JgsHead />
    <JgsSearch />
  </div>

</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "login",
});
</script>
<script setup lang="ts">
import JgsHead from "../../components/JgsHead/index.vue";
import JgsSearch from "../../components/JgsSearch/index.vue";
</script>

<style scoped></style>
