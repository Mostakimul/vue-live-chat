<template>
  <form class="m-2">
    <textarea
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
      class="w-full p-2 outline-none border-none mb-2 font-sans"
      placeholder="type and hit enter to send..."
    ></textarea>
  </form>
</template>

<script>
import { ref } from "vue";
import getUser from "../composable/getUser";
import { timestamp } from "../firebase/config";
export default {
  setup() {
    const message = ref("");
    const { user } = getUser();
    // console.log(`After user: ${user.value.email}`);

    const handleSubmit = async () => {
      const chat = {
        name: user.value.displayName,
        message: message.value,
        created_at: timestamp(),
      };
      console.log(chat);
      message.value = "";
    };
    return { message, handleSubmit };
  },
};
</script>

<style lang="scss" scoped></style>
