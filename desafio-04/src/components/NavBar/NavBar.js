import "./navBar.css";
import FotoPerfil from "./../../assets/Foto.png";
import Xis from "./../../assets/Vector.png";

function NavBar() {
  return (
    <>
      <div className="navbar">
        <img className="perfil" src={FotoPerfil} alt="foto de perfil" />
        <div className="text">
          <p>Cecilia Sassaki </p>
          <div className="dot">
            <p className="online">Online</p>
          </div>
        </div>
        <img className="vector" src={Xis} alt="vector" />
      </div>
    </>
  );
}

export default NavBar;
