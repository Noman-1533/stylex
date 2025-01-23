// import Demo from "./demo/demo";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "./feature";

function App() {
  return (
    <>
      <span className="fixed top-0  w-full z-50 bg-white ">
        <Header />
      </span>
      <main className="mt-20 md:mt-28">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
