<template>
  <div class="mt-5">
    <div v-if="showLogin">
      <LoginForm @loggedIn="enterChat" />

      <p class="mt-2">
        Don't have an account?
        <span @click="showLogin = false" class="cursor-pointer text-red-600"
          >Create new account</span
        >
      </p>
    </div>
    <div v-else>
      <SignupForm @signedup="enterChat" />
      <p class="mt-2">
        Already have an account?
        <span @click="showLogin = true" class="cursor-pointer text-red-600"
          >Login to your account</span
        >
      </p>
    </div>
  </div>
</template>

<script>
import SignupForm from "../components/SignupForm.vue";
import LoginForm from "../components/LoginForm.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  components: {
    SignupForm,
    LoginForm,
  },
  setup() {
    const showLogin = ref(true);
    const router = useRouter();

    const enterChat = () => {
      router.push({ name: "Chatroom" });
    };

    return { showLogin, enterChat };
  },
};
</script>
