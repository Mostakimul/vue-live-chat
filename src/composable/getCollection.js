import { ref } from "vue"
import { vueChatFirestore } from "../firebase/config"

const getCollection = (collection) => {
  const documents = ref(null)
  const error = ref(null)

  let collectionRef = vueChatFirestore.collection(collection).orderBy('created_at')

  collectionRef.onSnapshot((snap) => {
    let chats = []
    snap.docs.forEach((doc) => {
      doc.data().created_at && chats.push({...doc.data(), id:doc.id })
    })
    documents.value = chats
    error.value = null
  }, (err) => {
    console.log(err.message);
    documents.value = null
    error.value = 'Can not fetch chats!'
  })

  return { documents, error }
}

export default getCollection