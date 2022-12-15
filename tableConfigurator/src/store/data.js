import create from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

export const useConfigurationStore = create((set) => ({
  room: {},
  update: (name, value) => set({ [name]: value }),
}));

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Store", useConfigurationStore);
}
