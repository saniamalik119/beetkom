import React from "react";

const Upload = ({
  title,
  onFileUpload,
  register,
  fieldName,
  required,
  
}) => {
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    onFileUpload(selectedFile);
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
        {...register(fieldName, {
          required: required ? `This is required` : false,
        })}
       
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id="file_input"
        type="file"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default Upload;
