import "./App.css";
import { useState } from "react";
import Acceuil from "./pages/acceuil.js";
import Contact from "./pages/contact.js";

function App() {
  let [page, setPage] = useState("acceuil");

  const changePage = () => {
    if (page === "acceuil") {
      setPage("contact");
    } else {
      setPage("acceuil");
    }
  };
  let nowPage = page === "acceuil" ? <Acceuil /> : <Contact />;
  return (
    <div className="App">
      {nowPage}
      <button onClick={changePage}>Change the page</button>
    </div>
  );
}

export default App;
