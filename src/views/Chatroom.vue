<template>
  <div class="bg-pink-700 w-3/4 mx-auto rounded-md">
    <TheNavbar />
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue';
import getUser from '../composable/getUser';
import { watch } from 'vue';
import { useRouter } from 'vue-router';
export default {
  components: {
    TheNavbar,
  },
  setup() {
    const { user } = getUser();
    const router = useRouter();

    watch(user, () => {
      if (!user.value) {
        router.push({ name: 'Welcome' });
      }
    });
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
