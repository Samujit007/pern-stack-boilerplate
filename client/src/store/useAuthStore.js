import create from 'zustand';

const useAuthStore = create((set) => ({
  user: null,
  token: null,
  setUser: (user) => set({ user }),
  setToken: (token) => set({ token }),
  logout: () => {
    localStorage.removeItem('token');
    set({ user: null, token: null });
  },
  isLoggedIn: () => !!localStorage.getItem('token'),
}));

export default useAuthStore;
