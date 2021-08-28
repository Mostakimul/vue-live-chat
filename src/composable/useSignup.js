import { ref } from 'vue';
import { vueChatAuth } from '../firebase/config';

const error = ref(null);

const appSignup = async (yourEmail, yourPassword, displayName) => {
  error.value = null;

  try {
    // create user
    const res = await vueChatAuth.createUserWithEmailAndPassword(
      yourEmail,
      yourPassword
    );

    if (!res) {
      throw new Error('Can not complete sign up!');
    }
    // console.log(res);
    // update name
    await res.user.updateProfile({ displayName });
    // make error to null
    error.value = null;
    // console.log(res.user);
    return res;
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
  }
};

const useSignup = () => {
  return { error, appSignup };
};

export default useSignup;
