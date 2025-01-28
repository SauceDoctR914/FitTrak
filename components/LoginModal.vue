<template>
  <div class="login-modal w-full max-w-md p-6 rounded-lg shadow-lg bg-midnight-200 space-y-6 mx-auto w-128 py-8 px-10">
    <div class="text-block">
      <div class="space-y-3 flex-col">
        <UButton
          icon="i-grommet-icons:github"
          class="flex justify-around align-center text-gray-700 hover:text-gray-950 w-full btn bg-gradient-card-light"
          variant="ghost"
        >GitHub</UButton>
        <UInput v-model="email" color="primary" variant="outline" placeholder="Email"></UInput>
        <UInput class="mt-6 w-full" v-model="password" color="primary" 
        variant="outline" placeholder="Search..."/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue';

const email = ref<string | null>('');
const password = ref<string | null>('');

onMounted(() => {
  const styles = getComputedStyle(document.documentElement);
  const vars = Array.from(styles).filter(prop => prop.includes('primary'));
  console.log('All primary CSS vars:', vars);
});

</script>


<style scoped></style>
