import { CategoryModel, ICategory } from "@/interface/category-interface";
import mongoose, { Schema } from "mongoose";

const catSchema = new Schema<ICategory>({
    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: false,
    },

    thumbnail: {
        type: String,
        required: true,
    }
});

export const Category = mongoose.models.Category ?? mongoose.model<ICategory, CategoryModel>("Category", catSchema);