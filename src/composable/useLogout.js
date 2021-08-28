import { ref } from "vue"
import { vueChatAuth } from "../firebase/config"

const error = ref(null)


const appLogout = async () => {
  error.value = null

  try {
    await vueChatAuth.signOut()
  } catch (err) {
    error.value = err.message
  }

}

const useLogout = () => {
  return { appLogout, error }
}

export default useLogout