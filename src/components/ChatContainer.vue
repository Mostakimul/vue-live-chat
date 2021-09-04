<template>
  <div class="bg-gray-200 py-7 px-5">
    <!-- if finds any error -->
    <div v-if="error">
      {{ error }}
    </div>

    <!-- check if we have documents -->
    <div v-if="documents" class="max-h-96 overflow-auto">
      <div v-for="doc in formatDate" :key="doc.id" class="my-4">
        <span class="block text-gray-400 text-xs mb-1">{{
          doc.created_at
        }}</span>
        <span class="font-bold mr-1">{{ doc.name }}:</span>
        <span class="text-sm">{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from "../composable/getCollection";
import { formatDistanceToNow } from "date-fns";
import { computed } from "vue";
export default {
  setup() {
    const { documents, error } = getCollection("messages");

    // computed for date
    const formatDate = computed(() => {
      if (documents.value) {
        return documents.value.map((doc) => {
          let time = formatDistanceToNow(doc.created_at.toDate());
          return { ...doc, created_at: time };
        });
      }
    });

    return { error, documents, formatDate };
  },
};
</script>

<style lang="scss" scoped>
</style>