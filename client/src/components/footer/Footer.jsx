import './footer.css'

import { CiInstagram, CiFacebook } from "react-icons/ci";

export const Footer = () => {
    return(
        <footer className="footer">
            <div className="textContent">
                <div className="column">
                    <h2 className='text'>Conózcanos</h2>
                    <h2 className='text'>Impacto y sostenibilidad</h2>
                    <h2 className='text'>Contacto</h2>
                    <h2 className='text'>Trabaje con nosotros</h2>
                </div>
                <div className="column">
                    <h2 className='text'>Bonos de regalo</h2>
                    <h2 className='text'>Noticias Sakami</h2>
                    <h2 className='text'>Escribanos sus peticiones, quejas o reclamos</h2>
                    <h2 className='text'>Términos y condiciones</h2>
                    <h2 className='text'>Politica de tratamiento de datos</h2>
                    <h2 className='text'>Politica de sostenibilidad y conciencia</h2>
                    <h2 className='text'>Procedimiento de devoluciones</h2>
                </div>
            </div>
            <div className="column">
                <CiInstagram className="icon"/>
                <CiFacebook className="icon"/>
            </div>
        </footer>
    )
}