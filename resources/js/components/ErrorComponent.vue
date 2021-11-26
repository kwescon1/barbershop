<template>
  <div v-if="errorExists" class="">
    <span class="">Attempted Action Failed</span>
    <p v-if="manualErrors">{{ manualErrors }}</p>
    <div v-if="serverErrors">
      <ul v-for="(errors, index) in serverErrors" :key="index" class="px-4">
        <li class="">
          {{ errors }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["manualErrors", "serverErrors", "errorExists"],
};
</script>

<style>
</style>