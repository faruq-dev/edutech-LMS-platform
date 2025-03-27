import { IUser, UserModel } from "@/interface/user-interface";
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: false
    },
    socialMedia: {
        type: Object,
        required: false
    },
    profilePicture: {
        type: String,
        required: false
    }
});

export const  User = mongoose.models.User ?? mongoose.model<IUser, UserModel>('User', userSchema);