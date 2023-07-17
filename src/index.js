import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import AppCounter from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <AppCounter/>
  </React.StrictMode>
);
import React, { useEffect } from 'react';
import firestore from './firebase';

const MyComponent = () => {
  useEffect(() => {
    // Ejemplo de consulta a Firestore
    const fetchData = async () => {
      try {
        const snapshot = await firestore.collection('users').get();
        snapshot.forEach((doc) => {
          console.log(doc.id, '=>', doc.data());
        });
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>My Component</h1>
      {/* Aquí puedes renderizar el contenido de tu componente */}
    </div>
  );
};

export default MyComponent;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();