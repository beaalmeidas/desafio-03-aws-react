// SETUP DO FIREBASE PARA A AUTENTICAÇÃO

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyAvPrvoR6u-DNoA56gG7Eg2DwM_gMRrSoc",
  authDomain: "fb-project-personal-portfolio.firebaseapp.com",
  projectId: "fb-project-personal-portfolio",
  storageBucket: "fb-project-personal-portfolio.firebasestorage.app",
  messagingSenderId: "340900891681",
  appId: "1:340900891681:web:c9133799e52e5f21206760",
  measurementId: "G-P72DWP0T7D"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;