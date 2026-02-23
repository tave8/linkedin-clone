import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import PublishOffcanvas from "./components/PublishOffcanvas";
import MicroProfileNavbar from "./components/MicroProfileNavbar";
import ProfileOffcanvas from "./components/ProfileOffcanvas";

function App() {
  return (
    <>
      <MyNavbar />
      <ProfileOffcanvas />
      <PublishOffcanvas />
    </>
  );
}

export default App;
