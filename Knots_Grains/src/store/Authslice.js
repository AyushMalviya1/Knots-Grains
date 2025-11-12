import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    name: "",
    email: "",
    contact: "",
    password: "",
    bio: "",
    location: "",
    skills: [],
    experience: "",
    image: "",
};

export const Authslice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.contact = action.payload.contact;         
            state.password = action.payload.password;
            state.bio = action.payload.bio;
            state.skills = action.payload.skills;
            state.experience = action.payload.experience;
            state.location = action.payload.location;
            state.image = action.payload.image || "";
        },
        logout: (state) => {
            state.status = false;
            state.name = "";
            state.email = "";
            state.contact = "";
            state.password = "";
            state.bio = "";
            state.skills = [];
            state.experience = "";
            state.location = "";
            state.image = ""; 
        }     
    }
});

export const { login, logout } = Authslice.actions;
export default Authslice.reducer;
