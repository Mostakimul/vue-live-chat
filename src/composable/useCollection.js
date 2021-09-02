import { ref } from "vue";
import { vueChatFirestore } from "../firebase/config";

const useCollection = (collection) => {
  const error = ref(null)

  const addChat = async (doc) => {
    error.value = null

    try {
      await vueChatFirestore.collection(collection).add(doc)
    } catch (err) {
      console.log(err.message);
      error.value = 'Message can not be sent!'
    }
  }

  return {error, addChat}

}

export default useCollection