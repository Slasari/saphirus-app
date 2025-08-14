"use client";
import React, { useEffect, useState } from "react";
import { URL_ADMIN, URL_PRODUCTS } from "../helpers/variables/variables";
import { useRouter } from "next/navigation";
import { products as initialProducts } from "./testproduct";
import { DeleteConfirmation } from "./DeleteConfirmation";
import { ProductTable } from "./ProductTable";
import { ProductForm } from "./ProductForm";
import { Button } from "../components/Button";

const Dashboard = () => {
  const router = useRouter();
  async function checkadmin() {
    const token = localStorage.getItem("user");
    if (!token) {
      return router.push("/login");
    }
    const adminInfo = await fetch(`${URL_ADMIN}`, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const admin = await adminInfo.json();
    console.log(admin);
  }
  useEffect(() => {
    checkadmin();
  }, []);

  // Estado para gestionar productos
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1)
  const [totalProducts, setTotalProducts] = useState(0)

  useEffect(() => {
     fetch(
          `${URL_PRODUCTS}?page=${page}`,
          { cache: "no-cache" }
        ).then((r) => r.json().then((response) => {setProducts(response.data[0].products); setTotalProducts(response.data[0].total_count)})); 
  }, [page])
  const nextPage = () => {
      if(8 * page < totalProducts){
        return (<Button variant="secondary" onClick={() =>  setPage(state => state + 1)}>SIGUIENTE</Button>)
      }
      return (<Button variant="disabled">SIGUIENTE</Button>)
    }
    const prevPage = () => {
      if(page > 1){
        return (<Button variant="secondary" onClick={() => setPage(state => state - 1)}>ANTERIOR</Button>)
      } 
      return (<Button variant="disabled">ANTERIOR</Button>)
    }
  // Estado para el producto que se está editando actualmente
  const [editingProduct, setEditingProduct] = useState(null);
  // Estado para mostrar/ocultar el formulario
  const [showForm, setShowForm] = useState(false);
  // Estado para el producto que se va a eliminar
  const [deletingProductId, setDeletingProductId] = useState(null);
  // Estado para mensajes de notificación
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: "",
  });
  // Función para añadir un nuevo producto
  const addProduct = (product) => {
    const newProduct = {
      ...product,
      id: products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1,
    };
    setProducts([...products, newProduct]);
    setShowForm(false);
    showNotification("Producto añadido con éxito", "success");
  };
  // Función para actualizar un producto existente
  const updateProduct = (updatedProduct) => {
    setProducts(
      products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
    setEditingProduct(null);
    setShowForm(false);
    showNotification("Producto actualizado con éxito", "success");
  };
  // Función para eliminar un producto
  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
    setDeletingProductId(null);
    showNotification("Producto eliminado con éxito", "success");
  };
  // Función para mostrar notificaciones
  const showNotification = (message, type) => {
    setNotification({
      show: true,
      message,
      type,
    });
    setTimeout(() => {
      setNotification({
        show: false,
        message: "",
        type: "",
      });
    }, 3000);
  };
  // Función para iniciar la edición de un producto
  const startEditing = (product) => {
    setEditingProduct(product);
    setShowForm(true);
  };
  // Función para iniciar el proceso de eliminación
  const startDeleting = (id) => {
    setDeletingProductId(id);
  }
    return (
      <div className="pt-24 pb-16 px-6 md:px-12 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-light text-gray-900">
              Panel de Administración
            </h1>
            <button
              onClick={() => {
                setEditingProduct(null);
                setShowForm(true);
              }}
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-[#04707b] transition-colors cursor-pointer"
            >
              Añadir Producto
            </button>
          </div>
          {/* Notificación */}
          {notification.show && (
            <div
              className={`mb-6 p-4 rounded-md ${
                notification.type === "success"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {notification.message}
            </div>
          )}
          {/* Tabla de productos */}
          <ProductTable
            products={products}
            onEdit={startEditing}
            onDelete={startDeleting}
            page= {page}
            prevPage= {prevPage}
            nextPage= {nextPage}
          />
          {/* Formulario para añadir/editar productos */}
          {showForm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-8 rounded-lg w-full max-w-2xl">
                <ProductForm
                  product={editingProduct}
                  onSave={editingProduct ? updateProduct : addProduct}
                  onCancel={() => setShowForm(false)}
                />
              </div>
            </div>
          )}
          {/* Confirmación para eliminar */}
          {deletingProductId && (
            <DeleteConfirmation
              onConfirm={() => deleteProduct(deletingProductId)}
              onCancel={() => setDeletingProductId(null)}
              productName={
                products.find((p) => p.id === deletingProductId)?.name
              }
            />
          )}
        </div>
      </div>
    );
  };

export default Dashboard;
