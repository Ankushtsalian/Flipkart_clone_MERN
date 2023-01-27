import customFetch from "../../Utils/customFetch";
import errorMessage from "../../Utils/Erroe-Message";

export const verifyForgotPasswordThunk = async (url, formInput, thunkAPI) => {
  try {
    const response = await customFetch.post(url, formInput);

    alert(response.data.msg);

    console.log(response.data.msg);
    return response.data.msg.token;
  } catch (error) {
    const { errorStatusCode, message } = errorMessage(error);
    alert(message);
    return thunkAPI.rejectWithValue({ errorStatusCode, message });
  }
};

export const ResetPasswordThunk = async (url, formInput, thunkAPI) => {
  try {
    const response = await customFetch.post(url, formInput);

    alert(response.data);

    console.log(response.data);
    return response.data;
  } catch (error) {
    const { errorStatusCode, message } = errorMessage(error);
    alert(message);
    return thunkAPI.rejectWithValue({ errorStatusCode, message });
  }
};
