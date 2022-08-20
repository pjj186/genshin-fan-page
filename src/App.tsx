import { Reset } from "styled-reset";
import Header from "./components/Header";

function App() {
  return (
    <div className="w-screen h-screen">
      <Reset />
      <div>
        <video loop autoPlay muted className="w-screen absolute -z-10">
          <source src="/video/genshinvideo.mp4" type="video/mp4" />
        </video>
      </div>
      <Header />
      <div>
        <h3>모험이 가득한 신비한 세계로 떠나자!</h3>
      </div>
    </div>
  );
}

export default App;
