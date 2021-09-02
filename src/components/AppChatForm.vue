<template>
  <form class="m-2">
    <textarea
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
      class="w-full p-2 outline-none border-none mb-2 font-sans"
      placeholder="type and hit enter to send..."
    ></textarea>
    <div>{{ error }}</div>
  </form>
</template>

<script>
import { ref } from "vue";
import useCollection from "../composable/useCollection";
import getUser from "../composable/getUser";
import { timestamp } from "../firebase/config";
export default {
  setup() {
    const message = ref("");
    const { user } = getUser();
    // console.log(`After user: ${user.value.email}`);
    const { addChat, error } = useCollection("messages");

    // handle chat
    const handleSubmit = async () => {
      const chat = {
        name: user.value.displayName,
        message: message.value,
        created_at: timestamp(),
      };
      // console.log(chat);
      await addChat(chat);
      if (!error.value) {
        message.value = "";
      }
    };

    return { message, handleSubmit, error };
  },
};
</script>

<style lang="scss" scoped></style>
