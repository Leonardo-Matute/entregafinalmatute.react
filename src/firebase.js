import firebase from 'firebase/app';
import 'firebase/firestore';

// Configuración de Firebase
const firebaseConfig = {
  // Aquí debes agregar la configuración específica de tu proyecto Firebase
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Obtén una instancia de Firestore
const firestore = firebase.firestore();

export default firestore;
