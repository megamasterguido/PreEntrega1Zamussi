import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBC6u27QVmyQIC6jOcLOW6wB-dl51KUdbs",
    authDomain: "entrega-coderhouse-reactjs.firebaseapp.com",
    projectId: "entrega-coderhouse-reactjs",
    storageBucket: "entrega-coderhouse-reactjs.appspot.com",
    messagingSenderId: "940427818492",
    appId: "1:940427818492:web:6e2967b03e770d4cccee79"
};

export const app = initializeApp(firebaseConfig);