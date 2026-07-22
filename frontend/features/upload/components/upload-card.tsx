"use client";

import { useRouter } from "next/navigation";

import FileDropzone from "./file-dropzone";
import VideoPreview from "./video-preview";

import { useVideoMetadata } from "../hooks/use-video-metadata";

import { useProjectStore } from "@/lib/project/project-store";

export default function UploadCard() {
  const router = useRouter();

  const {
    metadata,
    loadVideo,
    reset,
  } = useVideoMetadata();

  const { setVideo, updateStatus } = useProjectStore();

  const handleFileSelected = async (file: File) => {
    await loadVideo(file);
  };

  const handleRemoveVideo = () => {
    reset();
  };

  const handleGenerateCaptions = () => {
    if (!metadata) return;

    setVideo({
  id: crypto.randomUUID(),
  name: metadata.name,
  size: metadata.size,
  duration: metadata.duration,
  width: metadata.width,
  height: metadata.height,
  thumbnail: metadata.thumbnail,
  videoUrl: URL.createObjectURL(metadata.file),
});

    updateStatus("editing");

    router.push("/editor");
  };

  return (
    <div className="mx-auto w-full max-w-5xl rounded-2xl border bg-card p-6 shadow-sm">
      {!metadata ? (
        <FileDropzone
          onFileSelect={handleFileSelected}
        />
      ) : (
        <VideoPreview
          metadata={metadata}
          onRemove={handleRemoveVideo}
          onGenerateCaptions={handleGenerateCaptions}
        />
      )}
    </div>
  );
}