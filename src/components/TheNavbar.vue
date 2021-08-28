<template>
  <nav class="flex justify-between align-middle p-3 mt-2">
    <div>
      <p class="text-gray-100 font-semibold">Mostakimul Karim</p>
      <p class="text-gray-100 font-sans font-extralight">
        Email: mostakimulkarim@gmail.com
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
export default {
  setup() {
    const { error, appLogout } = useLogout();
    const router = useRouter();

    const logout = async () => {
      await appLogout();
      if (!error.value) {
        // console.log('User Loggedout!!!');
        router.push('/');
      }
    };

    return { logout };
  },
};
</script>

<style lang="scss" scoped></style>
