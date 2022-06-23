import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAWPjnXw0lJdlDnDiqs2NgmB2p8yX_QjoQ",
    authDomain: "notable-bbabd.firebaseapp.com",
    projectId: "notable-bbabd",
    storageBucket: "notable-bbabd.appspot.com",
    messagingSenderId: "523193277357",
    appId: "1:523193277357:web:42ac5e2ee51d8a19d95f24",
    measurementId: "G-3BYLQNZ0NR"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);
  export const storage = getStorage(app);