import { LOADING_START, LOADING_STOP } from "./types";

export const loadingStart = (loadingStart) => ({
  type: LOADING_START,
});

export const loadingStop = (loadingStop) => ({
  type: LOADING_STOP,
});
