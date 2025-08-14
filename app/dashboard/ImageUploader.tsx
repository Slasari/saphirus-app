"use client";

import { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import Dropzone from "react-dropzone";
import { CheckCheck, X } from "lucide-react";

export default function ImageUploader({ onImagesChange }: { onImagesChange: (imgs: string[]) => void }) {
  const [images, setImages] = useState<string[]>([]);
  const [cropData, setCropData] = useState<{ src: string; crop: any; zoom: number; aspect: number } | null>(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);

  const handleDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      setCropData({
        src: reader.result as string,
        crop: { x: 0, y: 0 },
        zoom: 1,
        aspect: 4 / 3
      });
    };
    reader.readAsDataURL(file);
  };

  const onCropComplete = useCallback((_: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const getCroppedImg = useCallback(async () => {
    if (!cropData?.src || !croppedAreaPixels) return null;

    const image = await createImage(cropData.src);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) return null;

    canvas.width = croppedAreaPixels.width;
    canvas.height = croppedAreaPixels.height;

    ctx.drawImage(
      image,
      croppedAreaPixels.x,
      croppedAreaPixels.y,
      croppedAreaPixels.width,
      croppedAreaPixels.height,
      0,
      0,
      croppedAreaPixels.width,
      croppedAreaPixels.height
    );

    return canvas.toDataURL("image/png");
  }, [cropData, croppedAreaPixels]);

  const confirmCrop = async () => {
    const croppedImg = await getCroppedImg();
    if (croppedImg) {
      setImages((prev) => {
        const updated = [...prev, croppedImg];
        onImagesChange(updated);
        return updated;
      });
    }
    setCropData(null); // cerrar cropper
  };

  const cancelCrop = () => {
    setCropData(null);
  };

  const removeImage = (index: number) => {
    const updated = images.filter((_, i) => i !== index);
    setImages(updated);
    onImagesChange(updated);
  };

  return (
    <div>
      <Dropzone onDrop={handleDrop} accept={{ "image/*": [] }}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} className="border p-4 cursor-pointer">
            <input {...getInputProps()} />
            Arrastra o haz click para subir imagen
          </div>
        )}
      </Dropzone>

      {/* Recorte */}
      {cropData && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center z-50">
          <div className="relative w-[80vw] h-[80vh] bg-black">
            <Cropper
              image={cropData.src}
              crop={cropData.crop}
              zoom={cropData.zoom}
              aspect={cropData.aspect}
              onCropChange={(crop) => setCropData((prev) => ({ ...prev!, crop }))}
              onZoomChange={(zoom) => setCropData((prev) => ({ ...prev!, zoom }))}
              onCropComplete={onCropComplete}
            />
          </div>
          <div className="flex gap-4 mt-4">
            <button
              onClick={confirmCrop}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              <CheckCheck />
            </button>
            <button
              onClick={cancelCrop}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              <X />
            </button>
          </div>
        </div>
      )}

      {/* Vista previa */}
      <div className="flex gap-2 mt-4 flex-wrap">
        {images.map((src, i) => (
          <div key={i} className="relative">
            <img src={src} alt={`preview-${i}`} className="w-32 h-32 object-cover rounded" />
            <button
              onClick={() => removeImage(i)}
              className="absolute top-0 right-0 bg-red-500 text-white px-1 rounded"
            >
              <X />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Utilidad para crear un objeto Image desde base64 */
function createImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", (error) => reject(error));
    image.src = url;
  });
}