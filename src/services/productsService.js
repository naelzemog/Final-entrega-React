import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase/config";

// Referencia a la colección "products" (la usan todas las funciones)
const productsRef = collection(db, "products");

/* ------------------------------ TRAER TODOS ------------------------------ */
export const getProducts = async () => {
  try {
    const snapshot = await getDocs(productsRef);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error al traer productos:", error);
    throw error;
  }
};

/* ----------------------------- TRAER POR ID ------------------------------ */
export const getProductById = async (id) => {
  try {
    const snapshot = await getDoc(doc(productsRef, id));

    if (snapshot.exists()) {
      return { id: snapshot.id, ...snapshot.data() };
    }
    return null;
  } catch (error) {
    console.error("Error al traer producto por ID:", error);
    throw error;
  }
};

/* --------------------------- FILTRAR POR CATEGORÍA ----------------------- */
export const getByCategory = async (category) => {
  try {
    const queryRef = category
      ? query(productsRef, where("category", "==", category))
      : productsRef;

    const snapshot = await getDocs(queryRef);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error al filtrar productos:", error);
    throw error;
  }
};

/* ---------------------------- ALTA DE PRODUCTO --------------------------- */
export const createProduct = async (productData) => {
  try {
    const docRef = await addDoc(productsRef, productData);
    return docRef.id;
  } catch (error) {
    console.error("Error al crear producto:", error);
    throw error;
  }
};
