import { Model } from "mongoose";

export interface ICategory {
    title: string;
    description: string;
    thumbnail: string;
    // _id?: Types.ObjectId; // This is an ObjectId (ক্যাটাগরির objectID)
};

export type CategoryModel = Model<ICategory, Record<string, unknown>>;