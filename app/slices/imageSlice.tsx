// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import storage from '@react-native-firebase/storage';

// export const fetchImageUrl = createAsyncThunk(
//   'images/fetchImageUrl',
//   async (path: string, { rejectWithValue }) => {
//     try {
//       const reference = storage().ref(path);
//       const url = await reference.getDownloadURL();
//       return url;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// const imageSlice = createSlice({
//   name: 'images',
//   initialState: {
//     imageUrl: null,
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchImageUrl.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchImageUrl.fulfilled, (state, action) => {
//         state.loading = false;
//         state.imageUrl = action.payload;
//       })
//       .addCase(fetchImageUrl.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default imageSlice.reducer;
