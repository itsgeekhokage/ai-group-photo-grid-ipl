import { useEffect } from 'react';
import './App.css';
import bg from "./assets/video.mp4";
import { db } from './config/firebase';
import { collection} from 'firebase/firestore';
import { onSnapshot } from "firebase/firestore";

function App() {

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "images"), (snapshot) => {
      const alldata = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      const newlist = alldata.map(item => item.link)
      console.log(newlist.slice(0,4));
    });

    return () => unsubscribe();
  }, []);


  return (
    <div className='gridPage'>
      <video autoPlay muted loop className='video'>
        <source src={bg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="main">

      </div>
    </div>
  );
}

export default App;
