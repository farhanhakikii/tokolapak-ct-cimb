import Axios from "axios";
import { API_URL } from "../../constants/API";
import Cookie from "universal-cookie";
import userTypes from "../types/user"
import user from "../reducers/user";

const { ON_LOGIN_SUCCESS, ON_LOGIN_FAIL, ON_LOGOUT_SUCCESS } = userTypes;
const cookieObj = new Cookie();

export const loginHandler = (userData) => {
    return (dispatch) => {
        const { username, password } = userData;
        Axios.get(`${API_URL}/users`, {
            params: {
                username,
                password,
            },
        })
            .then((res) => {
                if (res.data.length > 0) {
                    alert("Login Berhasil")
                    dispatch({
                        type: ON_LOGIN_SUCCESS,
                        payload: res.data[0],
                    });
                } else {
                    alert("Login Gagal");
                    dispatch({
                        type: ON_LOGIN_FAIL,
                        payload: "Username atau password salah",
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
};
export const userKeepLogin = (userData) => {
    return (dispatch) => {
        Axios.get(`${API_URL}/users`, {
            params: {
                id: userData.id,
            },
        })
            .then((res) => {
                if (res.data.length > 0) {
                    dispatch({
                        type: ON_LOGIN_SUCCESS,
                        payload: res.data[0],
                    });
                } else {
                    dispatch({
                        type: ON_LOGIN_FAIL,
                        payload: "Username atau password salah",
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
};
export const logoutHandler = () => {
    cookieObj.remove("authData");
    return {
        type: ON_LOGOUT_SUCCESS,
    };
};
export const registerHandler = (userData) => {
    return (dispatch) => {
        Axios.get(`${API_URL}/users`, {
            params: {
              username: userData.username,
            },
          })
            .then((res) => {
              if (res.data.length > 0) {
                alert("Username sudah digunakan")
                dispatch({
                  type: "ON_REGISTER_FAIL",
                  payload: "Username sudah digunakan",
                });
              } else {
                Axios.post(`${API_URL}/users`, userData)
                  .then((res) => {
                    console.log(res.data);
                    alert("Berhasil mendaftarkan akun")
                    dispatch({
                      type: ON_LOGIN_SUCCESS,
                      payload: res.data,
                    });
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }
            })
            .catch((err) => {
              console.log(err);
            });
          };
}
