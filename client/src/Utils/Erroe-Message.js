const errorMessage = (error, thunkAPI) => {
  const message =
    (error.response && error.response.data && error.response.data.msg) ||
    error.message ||
    error.toString();
  alert(message);
  if (error.response.status !== 400)
    return { errorStatusCode: error.response.status, message };
  return;
};

export default errorMessage;
