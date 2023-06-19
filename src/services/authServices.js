import axiosInstance from "../configs/axios";

class authService {
  static loginUser = async (email, password) => {
    const response = await axiosInstance.post("/Account/Login", {
      email,
      password,
    });

    if (response?.data?.Success) {
      localStorage.setItem("accessToken", response?.data?.AccessToken);
      localStorage.setItem("refreshToken", response?.data?.RefreshToken);
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response?.data?.AccessToken}`;
    } else {
      toast.error(response?.data?.Message);
    }

    return response?.data;
  };

  static refreshToken = async (token, refreshToken) => {
    const response = await axiosInstance.post("/Account/RefreshToken", {
      AccessToken: token,
      RefreshToken: refreshToken,
    });

    if (response?.data?.Success) {
      localStorage.setItem("accessToken", response?.data?.AccessToken);
      localStorage.setItem("refreshToken", response?.data?.RefreshToken);
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response?.data?.AccessToken}`;
    } else {
      toast.error(response?.data?.Message);
    }

    return response?.data;
  };
}

export default authService;
