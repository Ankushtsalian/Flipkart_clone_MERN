import { toastError } from "./toastMessage";

const errorMessage = (error, thunkAPI) => {
  const message =
    (error.response && error.response.data && error.response.data.msg) ||
    error.message ||
    error.toString();
  toastError(message);
  if (error.response.status !== 400)
    return { errorStatusCode: error.response.status, message };
  if (error.response.status === 400) return { errorStatusCode: 0, message };
};

export default errorMessage;
