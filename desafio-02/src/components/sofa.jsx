
//eslint-disable-next-line
import React, { useState } from 'react'
import '../style/sofaStyle.css';
import SofaImg from '../assets/sofa.png';
import Angulo from '../assets/angulo.png';
import Xis from '../assets/xis.png'
import SofaGif from '../assets/Sofá.gif'



function Sofa() {
    const [alterarImage, setAlterarImage] = useState(Angulo);
    const [imagem3d, setImagem3d] = useState(false)

    return <div> 
        <div className="page">
            <div className="angulo" onClick={()=> {setImagem3d(!imagem3d)}}>
                <img src={alterarImage} alt="angulo" onClick={() => {setAlterarImage(imagem3d == true ? Angulo : Xis)}}/>
            </div>

            <div className="sofa" >
                <img src={imagem3d == true ? SofaGif : SofaImg} alt="sofa" />
            </div>

            <div className="informacao">
                <div className="code">CÓDIGO: 42404</div>
                <div className="name">Sofá Margot II - Rosé</div>
                <div className="value">R$ 4.000</div>
                <button>Adicionar à cesta</button>
            </div>
        </div>


    </div>
}

export default Sofa