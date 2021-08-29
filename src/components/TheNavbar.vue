<template>
  <nav v-if="user" class="flex justify-between align-middle p-3 mt-2">
    <div class="text-left">
      <p class="text-gray-100 font-semibold">{{ user.displayName }}</p>
      <p class="text-gray-100 font-sans font-extralight">
        Email: {{ user.email }}
      </p>
    </div>
    <button
      @click="logout"
      class="self-center px-4 py-1 bg-gray-100 font-semibold"
    >
      Logout
    </button>
  </nav>
</template>

<script>
import { useRouter } from 'vue-router';
import useLogout from '../composable/useLogout';
import getUser from '../composable/getUser';
export default {
  setup() {
    const { error, appLogout } = useLogout();
    const router = useRouter();
    const { user } = getUser();

    const logout = async () => {
      await appLogout();
      if (!error.value) {
        // console.log('User Loggedout!!!');
        router.push('/');
      }
    };

    return { logout, user };
  },
};
</script>

<style lang="scss" scoped></style>
