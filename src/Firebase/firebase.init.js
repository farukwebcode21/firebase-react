import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const initializeAuthenaticfation = () => {
    initializeApp(firebaseConfig);
}
export default initializeAuthenaticfation;