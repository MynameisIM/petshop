import { initializeApp } from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyDQi7fT7FnnKFoJ7TnMIeSp0weKE_H1KGM",
    authDomain: "test-vue-petstore.firebaseapp.com",
    databaseURL: "https://test-vue-petstore.firebaseio.com",
    projectId: "test-vue-petstore",
    storageBucket: "test-vue-petstore.appspot.com",
    messagingSenderId: "563758756188",
    appId: "1:563758756188:web:b631cf99e9171d60f0d199"
});

export const db = app.database();

export const productsRef = db.ref('products');