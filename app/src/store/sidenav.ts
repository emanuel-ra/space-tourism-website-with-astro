import { create } from "zustand";

interface SideNavBar {
  open: boolean;
  setOpen: () => void;
}

export const useSideNavStore = create<SideNavBar>((set, get) => {
  return {
    open: false,
    setOpen: () => {
      const { open } = get();
      set({ open: !open });
    },
  };
});
