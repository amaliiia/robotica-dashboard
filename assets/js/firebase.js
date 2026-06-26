// assets/js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// Substitua pelas chaves reais que o Firebase forneceu no Passo 1
const firebaseConfig = {
    apiKey: "AIzaSyCEya-6SI5eqWR-VsTvhVtqPigphf1bfaA",
    authDomain: "robotica-dashboard.firebaseapp.com",
    projectId: "robotica-dashboard",
    storageBucket: "robotica-dashboard.firebasestorage.app",
    messagingSenderId: "827351180846",
    appId: "1:827351180846:web:3034ad66e352ca69da61bf"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
// Inicializa o banco de dados (Firestore)
export const db = getFirestore(app);