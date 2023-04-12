import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

//firebaseConfig lấy từ Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCsuztkr8YieOe75cD_L7Fj_dLW1ERrRo4",
    authDomain: "alta-tuan1-fe744.firebaseapp.com",
    projectId: "alta-tuan1-fe744",
    storageBucket: "alta-tuan1-fe744.appspot.com",
    messagingSenderId: "491621800357",
    appId: "1:491621800357:web:87b9dbe2c04573755e704c",
    measurementId: "G-J9HGNZC35N"
};

try {
    firebase.initializeApp(firebaseConfig);
} catch (error) {
    console.log(error);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();



