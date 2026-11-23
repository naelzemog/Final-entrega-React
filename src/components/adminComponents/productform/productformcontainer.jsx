import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductFormUI } from "./productformui.jsx";
import { validateProduct } from "../../../utils/validateProduct";
import { uploadImage } from "../../../services/uploadImage";
import { createProduct } from "../../../services/productsService";
import "./productform.css";

export const ProductFormContainer = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [file, setFile] = useState(null);
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0] || null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors({});
    setLoading(true);

    // Validar inputs
    const newErrors = validateProduct({ ...product, file });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
      // 1) Subir la imagen a imgbb
      const imageUrl = await uploadImage(file);

      // 2) Armar el producto
      const productData = {
        ...product,
        price: Number(product.price),
        image: imageUrl,
      };

      // 3) Guardarlo en Firestore
      const id = await createProduct(productData);

      // 4) Limpiar el formulario y navegar a la página de éxito
      setProduct({ name: "", price: "", category: "", description: "" });
      setFile(null);
      navigate(`/admin/products/success/${id}`, { replace: true });
    } catch (error) {
      setErrors({ general: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProductFormUI
      product={product}
      errors={errors}
      loading={loading}
      onChange={handleChange}
      onFileChange={handleFileChange}
      onSubmit={handleSubmit}
    />
  );
};
