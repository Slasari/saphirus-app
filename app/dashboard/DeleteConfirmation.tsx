'use client'

import React from 'react'
import { AlertTriangleIcon } from 'lucide-react'
export function DeleteConfirmation({ onConfirm, onCancel, productName }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg w-full max-w-md">
        <div className="flex items-center justify-center mb-6 text-red-600">
          <AlertTriangleIcon className="h-12 w-12" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 text-center mb-2">
          ¿Eliminar producto?
        </h3>
        <p className="text-center text-gray-500 mb-6">
          ¿Estás seguro de que deseas eliminar <strong>{productName}</strong>?
          Esta acción no se puede deshacer.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Sí, eliminar
          </button>
        </div>
      </div>
    </div>
  )
}