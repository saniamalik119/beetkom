import React, { useState } from "react";

const Upload = ({
  title,
  onFileUpload,
  register,
  fieldName,
}) => {
  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];


    if (selectedFile) {
      const base64String = await convertFileToBase64(selectedFile);
      console.log("Helo i am here")
      onFileUpload(base64String);
      
    }
  };

  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = () => {
        const image = new Image();
        image.src = reader.result;
  
        image.onload = () => {
          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");
  
          // Set canvas dimensions to match the image
          canvas.width = image.width;
          canvas.height = image.height;
  
          // Draw the image onto the canvas in JPEG format with compression
          context.drawImage(image, 0, 0, image.width, image.height);
  
          canvas.toBlob(
            (blob) => {
              // Convert the compressed blob to a Base64-encoded string
              const reader = new FileReader();
              reader.onloadend = () => {
                const base64String = reader.result.split(",")[1];
                resolve(base64String);
              };
              reader.readAsDataURL(blob);
            },
            "image/jpeg",
            4 // Compression quality (adjust as needed)
          );
        };
      };
  
      reader.onerror = (error) => {
        reject(error);
      };
  
      reader.readAsDataURL(file);
    });
  };
  

  return (
    <div>
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        htmlFor="file_input"
      >
        {title}
      </label>
      <input
        {...register(fieldName)}
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id="file_input"
        type="file"
        onChange={handleFileChange}
      />
     
    </div>
  );
};

export default Upload;
