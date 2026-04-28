import { m as useUserStore, n as navigateTo } from './server.mjs';
import { u as useDataStore } from './dataStore-B0c5KwuX.mjs';
import { ref } from 'vue';

const useAuth = () => {
  const userStore = useUserStore();
  const dataStore = useDataStore();
  const loadingLogin = ref(false);
  const loadingRegister = ref(false);
  const login = async (credentials) => {
    try {
      loadingLogin.value = true;
      await userStore.login(credentials);
      await navigateTo("/user/dashboard");
      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: (error == null ? void 0 : error.message) || "Login failed"
      };
    } finally {
      loadingLogin.value = false;
    }
  };
  const register = async (data) => {
    try {
      loadingRegister.value = true;
      data.confirm_password = data.password;
      await dataStore.createItem("register", data);
      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: (error == null ? void 0 : error.message) || "Registration failed"
      };
    } finally {
      loadingRegister.value = false;
    }
  };
  const logout = async () => {
    await userStore.logout();
    await navigateTo("/login");
  };
  return {
    login,
    register,
    logout,
    loadingLogin,
    loadingRegister
  };
};

export { useAuth as u };
//# sourceMappingURL=useAuth-Byn3I6j5.mjs.map
