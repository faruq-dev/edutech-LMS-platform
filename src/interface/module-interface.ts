import { Model, Types } from "mongoose";

export interface IModule {
    title: string;
    description: string;
    duration: number;
    status: string;
    course: Types.ObjectId;
    slug: string;
    lessionIds: Types.ObjectId[];
};

export type ModuleModel = Model<IModule, Record<string, unknown>>;