<template>
  <div class="bg-pink-700 w-3/4 mx-auto rounded-md">
    <h3
      class="bg-gray-100 mx-auto inline-block mt-3 py-1 px-4 rounded font-semibold text-lg"
    >
      Login Form
    </h3>
    <form @submit.prevent="logIn" class="py-6">
      <input
        v-model="yourEmail"
        class="p-2 my-3 block mx-auto w-2/4 focus:outline-none"
        type="email"
        placeholder="Your Email"
        required
      />
      <input
        v-model="yourPassword"
        class="p-2 my-3 block mx-auto w-2/4 focus:outline-none"
        type="password"
        placeholder="Your Password"
        required
      />

      <button class="bg-gray-100 py-1 px-4 font-semibold">Submit</button>
    </form>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
  setup() {
    const yourEmail = ref('');
    const yourPassword = ref('');

    const logIn = () => {
      console.log(yourEmail.value);
    };

    return { yourEmail, yourPassword, logIn };
  },
};
</script>
