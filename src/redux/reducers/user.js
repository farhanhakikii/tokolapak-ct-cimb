<<<<<<< HEAD
import userTypes from '../types/user'

const {ON_LOGIN_FAIL, ON_LOGIN_SUCCESS, ON_LOGOUT_SUCCESS} = userTypes
=======
import userTypes from "../types/user";

const { ON_LOGIN_FAIL, ON_LOGIN_SUCCESS, ON_LOGOUT_SUCCESS } = userTypes;
>>>>>>> 6dba32738aaf227d6a159edcd2d87bf720b06f33

const init_state = {
  id: 0,
  username: "",
  fullName: "",
  address: {},
  role: "",
  errMsg: "",
};

export default (state = init_state, action) => {
  switch (action.type) {
<<<<<<< HEAD
    case  ON_LOGIN_SUCCESS:
=======
    case ON_LOGIN_SUCCESS:
>>>>>>> 6dba32738aaf227d6a159edcd2d87bf720b06f33
      const { username, fullName, role, id } = action.payload;
      return {
        ...state,
        username,
        fullName,
        role,
        id,
      };
    case ON_LOGIN_FAIL:
<<<<<<< HEAD
      return { ...state, errMsg: action.payload}
    case "ON_REGISTER_FAIL":
      return { ...state, errMsg: action.payload}
    case ON_LOGOUT_SUCCESS:
      return { ...init_state}
=======
      return { ...state, errMsg: action.payload };
    case "ON_REGISTER_FAIL":
      return { ...state, errMsg: action.payload };
    case ON_LOGOUT_SUCCESS:
      return { ...init_state };
>>>>>>> 6dba32738aaf227d6a159edcd2d87bf720b06f33
    default:
      return { ...state };
  }
};
