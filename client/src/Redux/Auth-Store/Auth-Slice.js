import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  loginUserThunk,
  registerUserThunk,
  ResetPasswordThunk,
  verifyEmailThunk,
  verifyForgotPasswordThunk,
} from "./Auth-Thunk";

const initialState = {
  isLoading: false,
  loginModalOpen: true,
  priceRange: [0, 100],
  isPriceChanged: false,
  isLoginPage: true,
  isForgotPassword: false,
  isResetPassword: false,
  email: "",
  password: "",
  errorStatusCode: 0,
  emailVerified: false,
};

export const loginUser = createAsyncThunk(
  "user/loginUser",
  (formInput, thunkAPI) => {
    return loginUserThunk("/login", formInput, thunkAPI);
  }
);

export const registerUser = createAsyncThunk(
  "user/registerUser",
  (formInput, thunkAPI) => {
    return registerUserThunk("/register", formInput, thunkAPI);
  }
);

export const verifyForgotPassword = createAsyncThunk(
  "auth/verifyForgotPassword",
  (formInput, thunkAPI) => {
    return verifyForgotPasswordThunk("/forgot-password", formInput, thunkAPI);
  }
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  (formInput, thunkAPI) => {
    return ResetPasswordThunk("/reset-password", formInput, thunkAPI);
  }
);

export const verifyEmail = createAsyncThunk(
  "auth/verifyEmail",
  (formInput, thunkAPI) => {
    return verifyEmailThunk("/verify-email", formInput, thunkAPI);
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    handleLoginClose: (state) => {
      state.loginModalOpen = !state.loginModalOpen;
    },
    handleLoginSignupToggle: (state) => {
      state.isLoginPage = !state.isLoginPage;
      state.isForgotPassword = false;
      state.isResetPassword = false;
    },
    handlePriceChange: (state, { payload }) => {
      state.priceRange = payload;
      state.isPriceChanged = true;
    },
    handleResetPriceRange: (state) => {
      state.priceRange = [0, 100];
    },
    handleForgotPassword: (state) => {
      state.isForgotPassword = !state.isForgotPassword;
      state.isResetPassword = false;
    },
    handleResetPassword: (state) => {
      state.isForgotPassword = false;
      state.isResetPassword = true;
      state.isLoginPage = false;
    },
    handleName: (state, { payload }) => {
      state.name = payload;
    },
    handleEmail: (state, { payload }) => {
      state.email = payload;
    },
    handlePassword: (state, { payload }) => {
      state.password = payload;
    },

    handleReset: (state) => {
      state.isForgotPassword = false;
      state.isResetPassword = false;
      state.email = "";
      state.password = "";
      state.isLoading = false;
      state.errorStatusCode = 0;
      state.emailVerified = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      // state.errorMessage = "";
      // state.errorStatusCode = 0;
      state.isLoading = false;

      // state.tokenLog = payload;
      // addTokenToLocalStorage(state.tokenLog);
    });

    builder.addCase(
      loginUser.rejected,
      (state, { payload: { errorStatusCode, message } }) => {
        // state.isLoginPage = !state.isLoginPage;
        // removeTokenFromLocalStorage();
        state.isLoading = false;
        // state.tokenLog = "";
        // state.errorMessage = message;
        state.errorStatusCode = errorStatusCode;
      }
    );
    builder.addCase(verifyForgotPassword.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(verifyForgotPassword.fulfilled, (state, { payload }) => {
      // state.errorMessage = "";
      // state.errorStatusCode = 0;
      state.isLoading = false;
      // state.tokenLog = payload;
      // addTokenToLocalStorage(state.tokenLog);
    });

    builder.addCase(
      verifyForgotPassword.rejected,
      (state, { payload: { errorStatusCode, message } }) => {
        state.isLoginPage = !state.isLoginPage;
        // removeTokenFromLocalStorage();
        state.isLoading = false;
        // state.tokenLog = "";
        // state.errorMessage = message;
        state.errorStatusCode = errorStatusCode;
      }
    );

    builder.addCase(resetPassword.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(resetPassword.fulfilled, (state, { payload }) => {
      state.isResetPassword = false;

      state.password = "";
      // state.errorMessage = "";
      state.errorStatusCode = 0;
      state.isLoading = false;
      // state.tokenLog = payload;
      // addTokenToLocalStorage(state.tokenLog);
    });

    builder.addCase(
      resetPassword.rejected,
      (state, { payload: { errorStatusCode, message } }) => {
        state.isResetPassword = errorStatusCode !== 400 || false;
        state.email = "";
        state.password = "";
        state.errorStatusCode = errorStatusCode;

        // removeTokenFromLocalStorage();
        state.isLoading = false;
        // state.tokenLog = "";
        // state.errorMessage = message;
      }
    );

    builder.addCase(verifyEmail.pending, (state) => {
      state.isLoading = true;
      state.loginModalOpen = false;
    });

    builder.addCase(verifyEmail.fulfilled, (state, { payload }) => {
      // state.isResetPassword = false;
      state.emailVerified = true;
      // state.password = "";
      // state.errorMessage = "";
      state.errorStatusCode = 0;
      state.isLoading = false;
      state.loginModalOpen = true;

      // state.tokenLog = payload;
      // addTokenToLocalStorage(state.tokenLog);
    });

    builder.addCase(
      verifyEmail.rejected,
      (state, { payload: { errorStatusCode, message } }) => {
        // state.isResetPassword = errorStatusCode !== 400 || false;
        // state.email = "";
        // state.password = "";
        state.errorStatusCode = errorStatusCode;

        // removeTokenFromLocalStorage();
        state.isLoading = false;
        // state.tokenLog = "";
        // state.errorMessage = message;
      }
    );
  },
});

export const {
  handleLoginClose,
  handlePriceChange,
  handleResetPriceRange,
  handleLoginSignupToggle,
  handleForgotPassword,
  handleVerifyForgotPassword,
  handleResetPassword,
  handleName,
  handleEmail,
  handlePassword,
  handleReset,
} = authSlice.actions;
export default authSlice.reducer;
