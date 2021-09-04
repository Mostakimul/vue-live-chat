<template>
  <div class="bg-pink-700 w-3/4 mx-auto rounded-md">
    <div>
      <TheNavbar />
      <ChatContainer class="text-left" />
      <AppChatForm />
    </div>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
import ChatContainer from "../components/ChatContainer.vue";
import getUser from "../composable/getUser";
import { watch } from "vue";
import { useRouter } from "vue-router";
import AppChatForm from "../components/AppChatForm.vue";
export default {
  components: {
    TheNavbar,
    ChatContainer,
    AppChatForm,
  },
  setup() {
    const { user } = getUser();
    const router = useRouter();

    watch(user, () => {
      if (!user.value) {
        router.push({ name: "Welcome" });
      }
    });
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
