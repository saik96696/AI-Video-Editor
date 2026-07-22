import type { PlaybackState } from "./playback";

export const DEFAULT_PLAYBACK_STATE: PlaybackState = {
  isPlaying: false,

  currentTime: 0,

  duration: 0,

  volume: 1,

  playbackRate: 1,
};