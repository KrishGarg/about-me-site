import create from "zustand";

interface State {
  sidebar: boolean;
  toggleSidebar: () => void;
  setSidebar: (to: boolean) => void;
}

const useStore = create<State>((set) => ({
  sidebar: false,
  toggleSidebar: () => set((state) => ({ sidebar: !state.sidebar })),
  setSidebar: (to) => set((_) => ({ sidebar: to })),
}));

export default useStore;
