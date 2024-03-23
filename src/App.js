import './App.css';
import bg from "./assets/video.mp4";

function App() {
  return (
    <div className='gridPage'>
      <video height={"768px"} width={"1024px"} autoPlay muted loop className='video'>
        <source src={bg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default App;
