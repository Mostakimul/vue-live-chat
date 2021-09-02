import { ref } from "vue";
import { vueChatAuth } from "../firebase/config";

const user = ref(vueChatAuth.currentUser)

vueChatAuth.onAuthStateChanged(_user => {
  console.log(`User is${_user}`);
  user.value = _user
  // console.log(`After ${user.value.displayName}`);
})

const getUser = () => {
  return {user}
}


export default getUser