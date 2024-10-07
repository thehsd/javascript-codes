import { create } from "zustand";

const useCounter = create((set) => ({
  count: 1,
  increaseData: (payload) => {
    set((state) => ({
      count: state.count + 1,
    }));
  },
  decreaseData: () => {
    set((state) => ({
      count: state.count - 1,
    }));
  },
}));
export default useCounter;
