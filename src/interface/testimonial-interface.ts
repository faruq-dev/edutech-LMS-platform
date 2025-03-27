import { Model, Types } from "mongoose";

export interface ITestimonial {
    content: string;
    user: Types.ObjectId;
    courseId: Types.ObjectId;
    rating: number;
};


export type TestimonialModel = Model<ITestimonial, Record<string, unknown>>;