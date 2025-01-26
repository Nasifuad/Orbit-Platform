import { create } from "zustand";

const store = (set) => ({
  jwt: null,
  setJwt: (token) =>
    set(() => {
      localStorage.setItem("token", token);
    }),
});
const userStore = (set) => ({
  user: null,
  setUser: (username) => set(() => ({ user: username })),
});

const useStore = create(store);
export const useUserStore = create(userStore);
export default useStore;
