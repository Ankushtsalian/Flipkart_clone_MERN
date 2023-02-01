import customFetch from "../../Utils/customFetch";
import errorMessage from "../../Utils/Error-Message";
import { toastSuccess } from "../../Utils/toastMessage";
import { handleReset } from "./Auth-Slice";

export const loginUserThunk = async (url, formInput, thunkAPI) => {
  try {
    const response = await customFetch.post(url, formInput, {
      withCredentials: true,
    });

    console.log(response.data.user);

    toastSuccess(response.data.msg);

    return response.data.user;
  } catch (error) {
    const { errorStatusCode, message } = errorMessage(error);

    return thunkAPI.rejectWithValue({ errorStatusCode, message });
  }
};

export const registerUserThunk = async (url, formInput, thunkAPI) => {
  try {
    const response = await customFetch.post(url, formInput);

    toastSuccess(response.data.msg);

    return response.data.msg;
  } catch (error) {
    const { errorStatusCode, message } = errorMessage(error);

    return thunkAPI.rejectWithValue({ errorStatusCode, message });
  }
};

export const verifyForgotPasswordThunk = async (url, formInput, thunkAPI) => {
  try {
    const response = await customFetch.post(url, formInput);

    toastSuccess(response.data.msg);

    console.log(response.data.msg);
    return response.data.msg.token;
  } catch (error) {
    const { errorStatusCode, message } = errorMessage(error);

    return thunkAPI.rejectWithValue({ errorStatusCode, message });
  }
};

export const ResetPasswordThunk = async (url, formInput, thunkAPI) => {
  try {
    const response = await customFetch.post(url, formInput);

    toastSuccess(response.data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    const { errorStatusCode, message } = errorMessage(error);

    return thunkAPI.rejectWithValue({ errorStatusCode, message });
  }
};

export const verifyEmailThunk = async (url, formInput, thunkAPI) => {
  try {
    const response = await customFetch.post(url, formInput);
    toastSuccess(response.data.msg);
    return response.data.msg;
  } catch (error) {
    const { errorStatusCode, message } = errorMessage(error);

    return thunkAPI.rejectWithValue({ errorStatusCode, message });
  }
};

export const logoutUserThunk = async (url, thunkAPI) => {
  try {
    const response = await customFetch.get(url, {
      withCredentials: true,
    });
    thunkAPI.dispatch(handleReset());

    return Promise.resolve();
  } catch (error) {
    return Promise.reject();
  }
};
