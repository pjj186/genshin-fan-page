import { Reset } from "styled-reset";
import Header from "./components/Header";

function App() {
  return (
    <div className="w-screen h-screen">
      <Reset />
      <Header />
      <div>
        <video autoPlay muted className="w-screen absolute -z-10">
          <source src="/video/genshinvideo.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default App;
