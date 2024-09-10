// store.ts
import {create} from 'zustand';

interface SidebarState {
  isOpen: boolean;
  toggleSidebar: () => void;
  setSidebarOpen: (isOpen: boolean) => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  isOpen: true,
  toggleSidebar: () => set((state) => {
    const newState = !state.isOpen;
    localStorage.setItem('sidebar-open', newState.toString());
    return { isOpen: newState };
  }),
  setSidebarOpen: (isOpen: boolean) => {
    localStorage.setItem('sidebar-open', isOpen.toString());
    set({ isOpen });
  },
}));
