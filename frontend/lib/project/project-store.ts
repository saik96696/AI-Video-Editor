import { create } from "zustand";

import { EMPTY_PROJECT } from "./constants";
import type { Project, ProjectVideo } from "./project";

interface ProjectStore {
  project: Project;

  setProject(project: Project): void;

  setVideo(video: ProjectVideo): void;

  updateStatus(status: Project["status"]): void;

  reset(): void;
}

export const useProjectStore = create<ProjectStore>((set) => ({
  project: EMPTY_PROJECT,

  setProject: (project) =>
    set({
      project,
    }),

  setVideo: (video) =>
    set((state) => ({
      project: {
        ...state.project,
        video,
      },
    })),

  updateStatus: (status) =>
    set((state) => ({
      project: {
        ...state.project,
        status,
      },
    })),

  reset: () =>
    set({
      project: EMPTY_PROJECT,
    }),
}));