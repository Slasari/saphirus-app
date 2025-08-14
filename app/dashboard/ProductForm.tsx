"use client";

import React, { useEffect, useState } from "react";
import { XIcon } from "lucide-react";
import ImageUploader from "./ImageUploader";
import { URL_UPLOAD_IMAGE } from "../helpers/variables/variables";
export function ProductForm({ product, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    description: "",
    price: "",
    image: "",
  });
  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState({});
  // Inicializar el formulario con los datos del producto si estamos editando
  useEffect(() => {
    if (product) {
      setFormData(product);
    }
  }, [product]);
  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Limpiar error cuando el usuario escribe
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const uploadImage = async () => {
    const uploaederURLS: string[] = [];
    const token = localStorage.getItem("user");
    for (const [index, img] of images.entries()) {
      const fileName = `product-${Date.now()}-${index}.png`;
      const res = await fetch(URL_UPLOAD_IMAGE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({imageBase64: img, fileName})
      });
      const data = await res.json()
      uploaederURLS.push(data.url)
      console.log(uploaederURLS)
    }
  };
  // Validar el formulario antes de enviar
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "El nombre es obligatorio";
    }
    if (!formData.description.trim()) {
      newErrors.description = "La descripción es obligatoria";
    }
    if (!formData.price.trim()) {
      newErrors.price = "El precio es obligatorio";
    }
    if (!formData.image.trim()) {
      newErrors.image = "La URL de la imagen es obligatoria";
    } else if (!formData.image.match(/^https?:\/\/.+\..+/)) {
      newErrors.image = "Introduce una URL de imagen válida";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSave(formData);
    }
  };
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-light text-gray-900">
          {product ? "Editar Producto" : "Añadir Nuevo Producto"}
        </h2>
        <button
          onClick={onCancel}
          className="text-gray-500 hover:text-gray-700"
        >
          <XIcon className="h-6 w-6" />
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-3 py-2 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Descripción
            </label>
            <textarea
              id="description"
              name="description"
              rows={3}
              value={formData.description}
              onChange={handleChange}
              className={`w-full px-3 py-2 border ${
                errors.description ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-600">{errors.description}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Precio
            </label>
            <input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="$0.00"
              className={`w-full px-3 py-2 border ${
                errors.price ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
            />
            {errors.price && (
              <p className="mt-1 text-sm text-red-600">{errors.price}</p>
            )}
          </div>
          <ImageUploader onImagesChange={setImages} />
          <button onClick={uploadImage}>HOU YI</button>
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              URL de la Imagen
            </label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://ejemplo.com/imagen.jpg"
              className={`w-full px-3 py-2 border ${
                errors.image ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
            />
            {errors.image && (
              <p className="mt-1 text-sm text-red-600">{errors.image}</p>
            )}
          </div>
          {formData.image && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Vista previa
              </label>
              <img
                src={formData.image}
                alt="Vista previa"
                className="h-32 w-32 object-cover rounded-md"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://via.placeholder.com/150?text=Error+de+imagen";
                }}
              />
            </div>
          )}
        </div>
        <div className="mt-8 flex justify-end space-x-3">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-[#04707b] cursor-pointer"
          >
            {product ? "Actualizar Producto" : "Añadir Producto"}
          </button>
        </div>
      </form>
    </div>
  );
}
