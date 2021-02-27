import Firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'
// import { seedDatabase } from '../seed'

const config = {
  // add firebase config data here
}

const firebase = Firebase.initializeApp(config)

// seedDatabase(firebase)

export { firebase }
