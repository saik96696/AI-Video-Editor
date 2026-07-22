import { create } from "zustand";

import type { PlaybackState } from "./playback";
import { DEFAULT_PLAYBACK_STATE } from "./constants";

interface PlaybackStore extends PlaybackState {
  setPlaying: (playing: boolean) => void;

  setCurrentTime: (time: number) => void;

  setDuration: (duration: number) => void;

  setVolume: (volume: number) => void;

  setPlaybackRate: (rate: number) => void;

  reset: () => void;
}

export const usePlaybackStore = create<PlaybackStore>((set) => ({
  ...DEFAULT_PLAYBACK_STATE,

  setPlaying: (playing) =>
    set({
      isPlaying: playing,
    }),

  setCurrentTime: (time) =>
    set({
      currentTime: time,
    }),

  setDuration: (duration) =>
    set({
      duration,
    }),

  setVolume: (volume) =>
    set({
      volume,
    }),

  setPlaybackRate: (rate) =>
    set({
      playbackRate: rate,
    }),

  reset: () =>
    set(DEFAULT_PLAYBACK_STATE),
}));