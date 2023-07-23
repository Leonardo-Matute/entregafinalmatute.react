import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import MainRouter from './routes/MainRouter';
import { firestore } from 'firebase/firestore';


ReactDOM.render(
  <React.StrictMode>
    <MainRouter />
  </React.StrictMode>,
  document.getElementById('root')
);


const MyComponent = () => {
  useEffect(() => {
   
    const fetchData = async () => {
      try {
        
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>My Component</h1>
      {}
    </div>
  );
};

export default MyComponent;

