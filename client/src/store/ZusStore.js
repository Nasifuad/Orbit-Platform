// import { useQuery } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { create } from "zustand";

// Consolidated Zustand store

export const useStore = create((set) => ({
  user: null,
  setJwt: (token) => {
    localStorage.setItem("token", token);
  },
  setUser: (username) => set({ user: username }),
  logout: () => {
    localStorage.removeItem("token");
    set({ user: null });
  },
  isLoggedIn: () => !!localStorage.getItem("token"),
}));

export const useFetchUser = () => {
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
      if (!res.ok) {
        throw new Error("Failed to fetch user data");
      }
      console.log(res.json());
      return res.json();
    },
    onSuccess: (data) => {
      setUser(data.username);
    },
    onError: (error) => {
      console.error("Error fetching user data:", error);
    },
  });
};
