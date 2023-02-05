import { Header } from "../../Utils/axiosHeader";
import customFetch from "../../Utils/customFetch";
import errorMessage from "../../Utils/Error-Message";
import { toastSuccess } from "../../Utils/toastMessage";
import { handleReset } from "./Product-Slice";

export const createProductThunk = async (url, product, thunkAPI) => {
  try {
    const response = await customFetch.post(url, product, {
      withCredentials: true,
    });
    toastSuccess(response.data.msg);

    return response.data.user;
  } catch (error) {
    const { errorStatusCode, message } = errorMessage(error);

    return thunkAPI.rejectWithValue({ errorStatusCode, message });
  }
};

export const productFileThunk = async (url, formData, thunkAPI) => {
  try {
    const {
      data: {
        image: { src },
        public_id,
      },
    } = await customFetch.post(url, formData, Header(true));

    return { src, public_id };
  } catch (error) {
    const { errorStatusCode, message } = errorMessage(error, thunkAPI);
    return thunkAPI.rejectWithValue({ errorStatusCode, message });
  }
};
export const getProductThunk = async (url, productType, thunkAPI) => {
  try {
    const response = await customFetch.get(url, productType, {
      withCredentials: true,
    });
    return response.data.product;
  } catch (error) {
    const { errorStatusCode, message } = errorMessage(error);

    return thunkAPI.rejectWithValue({ errorStatusCode, message });
  }
};
// export const registerUserThunk = async (url, formInput, thunkAPI) => {
//   try {
//     const response = await customFetch.post(url, formInput);

//     toastSuccess(response.data.msg);

//     return response.data.msg;
//   } catch (error) {
//     const { errorStatusCode, message } = errorMessage(error);

//     return thunkAPI.rejectWithValue({ errorStatusCode, message });
//   }
// };

// export const verifyForgotPasswordThunk = async (url, formInput, thunkAPI) => {
//   try {
//     const response = await customFetch.post(url, formInput);

//     toastSuccess(response.data.msg);

//     return response.data.msg.token;
//   } catch (error) {
//     const { errorStatusCode, message } = errorMessage(error);

//     return thunkAPI.rejectWithValue({ errorStatusCode, message });
//   }
// };

// export const ResetPasswordThunk = async (url, formInput, thunkAPI) => {
//   try {
//     const response = await customFetch.post(url, formInput);

//     toastSuccess(response.data);

//     return response.data;
//   } catch (error) {
//     const { errorStatusCode, message } = errorMessage(error);

//     return thunkAPI.rejectWithValue({ errorStatusCode, message });
//   }
// };

// export const verifyEmailThunk = async (url, formInput, thunkAPI) => {
//   try {
//     const response = await customFetch.post(url, formInput);

//     toastSuccess(response.data.msg);

//     return response.data.msg;
//   } catch (error) {
//     const { errorStatusCode, message } = errorMessage(error);

//     return thunkAPI.rejectWithValue({ errorStatusCode, message });
//   }
// };

// export const logoutUserThunk = async (url, thunkAPI) => {
//   try {
//     const response = await customFetch.get(url, {
//       withCredentials: true,
//     });

//     thunkAPI.dispatch(handleReset());

//     return Promise.resolve();
//   } catch (error) {
//     return Promise.reject();
//   }
// };
