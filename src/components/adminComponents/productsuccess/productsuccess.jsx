import { Link, useParams } from "react-router-dom";
import "./productsuccess.css";

export const ProductSuccess = () => {
  const { id } = useParams();

  return (
    <section className="success-page">
      <div className="success-icon">✅</div>

      <h2>Producto cargado con éxito</h2>
      <p>ID de producto: {id}</p>
      <p>Podés cargar otro haciendo click en el botón.</p>

      <div className="success-actions">
        <Link className="btn bg-success primary" to="/admin">
          Cargar otro producto
        </Link>
        <Link className="btn bg-primary primary" to="/">
          Ver tienda
        </Link>
      </div>
    </section>
  );
};
