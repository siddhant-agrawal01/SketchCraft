import { CloudUpload } from "lucide-react";
import React from "react";

const ImageUplaod = () => {
  return (
    <div className="mt-10 bg-red-500">
      <div className="bg-blue-300 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="p-7 border border-dashed rounded-md shadow-md">

            <CloudUpload className = 'h-10' />

        </div>
        <div>input</div>
      </div>
    </div>
  );
};

export default ImageUplaod;
