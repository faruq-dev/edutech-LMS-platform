import { IModule, ModuleModel } from "@/interface/module-interface";
import mongoose, { Schema } from "mongoose";

const moduleSchema = new Schema<IModule>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    duration : {
        type: Number,
        required: true
    },
    status : {
        type: String,
        required: true
    },
    course : {
        type: Schema.ObjectId,
        ref: 'Course',
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    lessionIds:{
        type: [Schema.ObjectId],
        ref: 'Lession',
        required: true
    }
});

export const Module = mongoose.models.Module ?? mongoose.model<IModule, ModuleModel>('Module', moduleSchema);