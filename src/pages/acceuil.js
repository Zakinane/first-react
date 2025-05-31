import Formulaire from "../components/formulaire.js";
import Header from "../components/header.js";
import Boutton from "../components/button.js";

function acceuil() {
  return (
    <div className="Acceuil">
      <Header />
      <Formulaire />
      <Boutton texte="Hey" couleur='red' />
    </div>
  );
}

export default acceuil;
