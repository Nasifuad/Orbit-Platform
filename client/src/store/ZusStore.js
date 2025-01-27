import { useQuery } from "@tanstack/react-query";
import { create } from "zustand";

// Consolidated Zustand store
const useStore = create((set) => ({
  user: null,
  setJwt: (token) => {
    localStorage.setItem("token", token);
  },
  setUser: (username) => set({ user: username }),
  logout: () => set({ user: null }),
}));

const useFetchUser = () => {
  const setUser = useStore((state) => state.setUser);

  useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5050/api/profile", {
        method: "GET",
        headers: {
          Authorization: token,
        },
      });
      const data = await res.json();
      setUser(data.username); // Update the user state in the store
    },
  });
};

export { useStore, useFetchUser };
