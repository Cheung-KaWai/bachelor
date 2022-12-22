import create from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

export const useConfigurationStore = create((set) => ({
  room: {},
  floorPoints: [],
  sortedPoints: [],
  check: -1,
  offset: -1,
  update: (name, value) => set({ [name]: value }),
  addFloorpoints: (points) => set((state) => ({ floorPoints: [...state.floorPoints, ...points] })),
}));

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Store", useConfigurationStore);
}
