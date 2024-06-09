import './mainOptions.css';


import { CiCreditCard2, CiCalendarDate, CiPhone, CiMenuBurger, CiMap } from "react-icons/ci";

export const MainOptions = () => {
    return (
        <div className="mainOptions">
            <div className="iconOpt">
                <CiCreditCard2 className="icon" />
                <h3 className="text">Bonos</h3>
            </div>
            <div className="iconOpt">
                <CiCalendarDate className="icon" />
                <h3 className="text">Reservas</h3>
            </div>
            <div className="iconOpt">
                <CiMap className="icon" />
                <h3 className="text">Domicilio</h3>
            </div>
            <div className="iconOpt">
                <CiPhone className="icon" />
                <h3 className="text">Contacto</h3>
            </div>
            <div className="iconOpt menu">
                <CiMenuBurger className="icon" />
                <h3 className="text">Menú</h3>
            </div>

        </div>
    )
}