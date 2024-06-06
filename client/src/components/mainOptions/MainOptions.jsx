import './mainOptions.css';

import { BsCreditCard } from "react-icons/bs";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { RiEBike2Line } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";


export const MainOptions = () => {
    return (
        <div className="mainOptions">
            <div className="iconOpt">
                <BsCreditCard className="icon" />
                <h3 className="text">Bonos</h3>
            </div>
            <div className="iconOpt">
                <IoCalendarNumberOutline className="icon" />
                <h3 className="text">Reservas</h3>
            </div>
            <div className="iconOpt">
                <RiEBike2Line className="icon" />
                <h3 className="text">Domicilio</h3>
            </div>
            <div className="iconOpt">
                <FiPhone className="icon" />
                <h3 className="text">Contacto</h3>
            </div>

        </div>
    )
}