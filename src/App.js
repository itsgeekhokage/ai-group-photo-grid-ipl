import { useEffect, useState } from 'react';
import './App.css';
import bg from "./assets/video.mp4";
import { db } from './config/firebase';
import { collection } from 'firebase/firestore';
import { onSnapshot } from "firebase/firestore";

function App() {

  // setImageList(newlist.slice(-4));
  // const newEle = alldata.map(item => item.link);
  // console.log(alldata)
  // const nextEle = newEle.pop();
  // setImgEle(nextEle)
  // console.log(nextEle);

  const [imagelist, setImageList] = useState(["", "", "", ""]);
  const [prevList, setPrevList] = useState([]);
  const [imgEle, setImgEle] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "images"), (snapshot) => {
      const alldata = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      const newlist = alldata.map(item => item.link);
      console.log(newlist);

      const newElements = newlist.filter(item => !prevList.includes(item));
      console.log("", newElements)

      setImageList(prevImageList => [
        ...newElements,
        ...prevImageList.slice(0, 3)
      ]);

      setPrevList(newlist);
    });

    return () => unsubscribe();
  }, []);




  return (
    <div className='gridPage'>
      <video autoPlay muted loop className='video'>
        <source src={bg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container">
        {/* {
            imagelist.map((item, ind) => <img key={ind}
            src={item} alt='' />)
          } */}
        <div className="imageContainer">
          <img src={imagelist[0]} alt='' />
          <img src='' alt=''></img>
          <img src={imagelist[1]} alt='' />
          <img src={imagelist[2]} alt='' />
          <img src={imagelist[3]} alt='' />
        </div>
        <img src={imgEle} alt='' className="test" />
      </div>
    </div>
  );
}

export default App;
