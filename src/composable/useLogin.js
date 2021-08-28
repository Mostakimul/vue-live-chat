import { ref } from 'vue';
import { vueChatAuth } from '../firebase/config';

const error = ref(null);

const appLogin = async (yourEmail, yourPassword) => {
  error.value = null;

  try {
    const res = await vueChatAuth.signInWithEmailAndPassword(yourEmail, yourPassword)
    error.value = null
    console.log(res);
    return res
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
  }
};

const useLogin = () => {
  return { error, appLogin };
};

export default useLogin;
