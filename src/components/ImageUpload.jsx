import { useState } from "react";

export default function ImageUpload({ setValue, setPreview, preview, buttonClass }) {
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleImage(file);
  };

  const handleImage = (file) => {
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);           
      setValue("image", file);    
    }
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className="border-dashed border-2 p-4 rounded-lg text-center"
    >
      <p>Drop an image here or upload:</p>

      <label
        htmlFor="file-select"
        className={`cursor-pointer inline-block px-4 py-2 rounded mt-5 hover:brightness-110 ${buttonClass}`}
      >
        Select File
      </label>

      <input
        type="file"
        id="file-select"
        onChange={(e) => handleImage(e.target.files[0])}
        className="hidden"
      />

      {preview && (
        <img
          src={preview}
          className="h-32 mt-2 object-contain mx-auto pic-default"
          alt="Uploaded preview"
        />
      )}
    </div>
  );
}
