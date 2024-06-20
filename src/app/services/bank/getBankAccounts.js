import axios from "axios";

const API_URL = "http://18.222.247.130:3000/api/bank-account";

// Función para obtener el token de autenticación almacenado localmente
const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

// Configuración de instancia de Axios con interceptores para el token
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para agregar el token a todas las solicitudes
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export async function getBankAccount() {
  try {
    const response = await axiosInstance.get();
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
        "Error al obtener las cuentas bancarias del usuario"
    );
  }
}

export async function postBankAccount (account) {
  const {data} = await axios.post("http://3.22.169.23:3000/bank-account", account)
  return data
} 
