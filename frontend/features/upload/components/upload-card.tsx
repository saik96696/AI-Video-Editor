"use client";

import { useEffect, useState } from "react";
import FileDropzone from "./file-dropzone";
import VideoPreview from "./video-preview";
import { useVideoMetadata } from "../hooks/use-video-metadata";

export default function UploadCard() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const {
    metadata,
    loading,
    loadVideo,
  } = useVideoMetadata();

  useEffect(() => {
    if (selectedFile) {
      loadVideo(selectedFile);
    }
  }, [selectedFile, loadVideo]);

  return (
    <div className="rounded-xl border bg-card p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        Upload Your Video
      </h2>

      <FileDropzone
        onFileSelect={setSelectedFile}
      />

      {loading && (
        <p className="mt-6 text-muted-foreground">
          Reading video...
        </p>
      )}

      {metadata && (
        <VideoPreview metadata={metadata} />
      )}
    </div>
  );
}