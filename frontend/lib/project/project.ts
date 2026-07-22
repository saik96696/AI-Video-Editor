export type ProjectStatus =
  | "idle"
  | "uploading"
  | "processing"
  | "editing"
  | "exporting";

export interface ProjectVideo {
  id: string;
  name: string;
  size: number;
  duration: number;
  width: number;
  height: number;
  thumbnail?: string;
}

export interface Project {
  id: string;
  name: string;

  createdAt: string;
  updatedAt: string;

  status: ProjectStatus;

  video: ProjectVideo | null;
}