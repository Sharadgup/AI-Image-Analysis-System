import React, { useCallback } from 'react';
import { Upload } from 'lucide-react';

interface ImageUploadProps {
  onImageSelect: (file: File) => void;
}

export function ImageUpload({ onImageSelect }: ImageUploadProps) {
  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      onImageSelect(file);
    }
  }, [onImageSelect]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onImageSelect(file);
    }
  }, [onImageSelect]);

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors"
    >
      <Upload className="mx-auto h-12 w-12 text-gray-400" />
      <h3 className="mt-2 text-sm font-medium text-gray-900">Upload an image</h3>
      <p className="mt-1 text-xs text-gray-500">Drag and drop or click to select</p>
      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="hidden"
        id="file-upload"
      />
      <label
        htmlFor="file-upload"
        className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer"
      >
        Select Image
      </label>
    </div>
  );
}