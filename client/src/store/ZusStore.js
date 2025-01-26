import { create } from "zustand";

const store = (set) => ({
  tasks: [
    {
      id: 1,
      title: "Task 1",
      description: "Description 1",
    },
    {
      id: 2,
      title: "Task 2",
      description: "Description 2",
    },
  ],
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
});
const userStore = (set) => ({
  user: null,
  setUser: (user) => set({ user: user.usernmae }),
});

const useStore = create(store);
export const useUserStore = create(userStore);
export default useStore;
