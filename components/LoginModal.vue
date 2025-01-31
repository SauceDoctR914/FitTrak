<template>
  <div class="login-modal w-full max-w-md p-6 rounded-lg shadow-lg bg-midnight-200 space-y-6 mx-auto w-128 py-8 px-10">
    <div class="text-block">
      <div class="space-y-3 flex-col">
        <label for="button text-white">Click button below to login with GitHub</label>
        <UButton
          v-if="!isGitHubLogin"
          icon="i-grommet-icons:github"
          class="flex justify-around align-center text-gray-700 hover:text-gray-950 w-full btn bg-gradient-card-light"
          variant="ghost"
          @click.prevent="setGitHubLogin"
        >GitHub</UButton>
        <UInput v-model="email" color="primary" variant="outline" placeholder="E-mail"></UInput>
        <UInput class="mt-6 w-full" v-model="password" color="primary" 
        variant="outline" placeholder="Password"/>
        <UButton
          v-if="!isGitHubLogin"
          :icon="isGitHubLogin ? 'i-grommet-icons:github' : ''"
          class="flex mt-6 justify-around align-center text-gray-700 hover:text-gray-950 w-full btn bg-gray-300"
          variant="ghost"
          @click.prevent="setGitHubLogin"
        >{{loginText}}</UButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed} from 'vue';

const email = ref<string | null>('');
const password = ref<string | null>('');
const isGitHubLogin = ref<boolean | null>(null);

const loginText = computed<string>(() => 
  isGitHubLogin ? 'Github Login' : 'Login'
);

onMounted(() => {
  const styles = getComputedStyle(document.documentElement);
  const vars = Array.from(styles).filter(prop => prop.includes('primary'));
  console.log('All primary CSS vars:', vars);
});

const setGitHubLogin = () => {
  isGitHubLogin.value = !isGitHubLogin.value
}



</script>


<style scoped></style>
