import "./dropDownMenu.css";

export const DropDownMenu = () => {

  return  (
    <div className="dropDownMenu">
      <div className="column">
        <h2 className="title">Restaurantes</h2>
        <h2 className="title">Domicilios</h2>
        <h2 className="title">Tiendas</h2>
        <h2 className="title">Experiencias</h2>
      </div>
      <div className="column">
        <h2 className="text">Conózcanos</h2>
        <h2 className="text">Impacto y sostenibilidad</h2>
        <h2 className="text">Contacto</h2>
        <h2 className="text">Trabaje con nosotros</h2>
        <h2 className="text">Bonos de regalo</h2>
        <h2 className="text">Noticias Sakami</h2>
        <h2 className="text">PQRS</h2>

      </div>
    </div>
  )
}
