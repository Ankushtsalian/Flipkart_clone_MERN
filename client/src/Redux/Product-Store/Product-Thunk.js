import { Header } from "../../Utils/axiosHeader";
import customFetch from "../../Utils/customFetch";
import errorMessage from "../../Utils/Error-Message";
import { toastSuccess } from "../../Utils/toastMessage";

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
    const {
      data: { product, distinctSchemaObjects },
    } = await customFetch.get(url, productType, {
      withCredentials: true,
    });

    console.log(distinctSchemaObjects);

    return { product, distinctSchemaObjects };
  } catch (error) {
    const { errorStatusCode, message } = errorMessage(error);

    return thunkAPI.rejectWithValue({ errorStatusCode, message });
  }
};
