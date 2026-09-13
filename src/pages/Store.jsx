import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useSharedStore = create(
  persist(
    (set) => ({
      sharedData: '',

      setSharedData: (data) => set({ sharedData: data }),
    }),
    {
      name: 'refrain-user',
    }
  )
);

export default useSharedStore;