import create from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

export const useConfigurationStore = create((set) => ({
  room: {},
  floorPoints: [],
  sortedPoints: [],
  check: -1,
  offset: -1,
  update: (name, value) => set({ [name]: value }),
  addFloorpoints: (points) =>
    set((state) => ({ floorPoints: [...state.floorPoints, ...points] })),
}));

export const useRoomConfiguration = create((set) => ({
  floor: "hooverstone",
  wall: "#fff",
  showWalls: true,
  showDoors: true,
  showWindows: true,
  showObjects: false,
  showOpenings: false,
  showFloor: true,
  update: (name, value) => set({ [name]: value }),
}));

export const useUserConfiguration = create((set) => ({
  user: {},

  update: (name, value) => set({ [name]: value }),
}));

export const useTableconfiguration = create((set) => ({
  showTableConfiguration: false,
  width: 0.9,
  length: 2,

  currentTable: "square",
  currentEdge: "edge1",
  tableTexture: "Wood1",

  currentLeg: "leg1",
  legTexture: "metal3",

  rotation: "null",

  update: (name, value) => set({ [name]: value }),
}));

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Store", useConfigurationStore);
  mountStoreDevtool("Store2", useRoomConfiguration);
  mountStoreDevtool("Store3", useUserConfiguration);
  mountStoreDevtool("Store4", useTableconfiguration);
}
