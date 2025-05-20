import { create } from 'zustand';

interface UserState {
  user: any | null;
  setUser: (user: any | null) => void;
}

export const useStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));