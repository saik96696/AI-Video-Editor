"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

type FileDropzoneProps = {
  onFileSelect: (file: File) => void;
};

export default function FileDropzone({
  onFileSelect,
}: FileDropzoneProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      onFileSelect(acceptedFiles[0]);
    }
  }, [onFileSelect]);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({
    maxSize: 1024 * 1024 * 500,
    multiple: false,
    onDrop,
    accept: {
      "video/*": [],
    },
    maxFiles: 1,
  });

  return (
    <div
      {...getRootProps()}
      className={`rounded-xl border-2 border-dashed p-10 text-center cursor-pointer transition ${
        isDragActive
          ? "border-blue-500 bg-blue-50"
          : "border-gray-300 hover:border-blue-400"
      }`}
    >
      <input {...getInputProps()} />

      <h3 className="text-xl font-semibold">
        Drag & Drop your video here
      </h3>

      <p className="mt-2 text-sm text-muted-foreground">
        or click to browse
      </p>

      <p className="mt-4 text-xs text-muted-foreground">
        MP4 • MOV • AVI • MKV
      </p>
    </div>
  );
}