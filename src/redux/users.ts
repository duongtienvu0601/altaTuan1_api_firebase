// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// export const fetchUsers = createAsyncThunk(
//   'users/fetchUsers',
//   async (id) => {
//     const response = await fetch(`http://localhost:3000/api/sinhvien/${id}`);
//     const data = await response.json();
//     return data;
//   }
// );

// const usersSlice = createSlice({
//   name: "users",
//   initialState: [

//   ],
//   reducers: {
//     setUsers: (state, action) => {
//       return action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUsers.fulfilled, (state, action) => {
//         return action.payload;
//       });
//   },
// });

// export const { setUsers } = usersSlice.actions;

// export const selectUsers = (state: { users: any; }) => state.users;

// export default usersSlice.reducer;

