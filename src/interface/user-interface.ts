import { Model } from "mongoose";

export interface IUser {
    name: string;
    email: string;
    password: string;
    role: string;
    bio: string;
    socialMedia: object;
    profilePicture: string;
    // _id?: Types.ObjectId; // This is an ObjectId (ইউজারের objectID)
};

export type UserModel = Model <IUser, Record<string, unknown>>;