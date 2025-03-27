import { Model, Types } from "mongoose";

export interface ICourse {
    title: string;
    subtitle: string;
    description: string;
    thumbnail: string;
    module: Types.ObjectId[]; // This is an array of ObjectIds (কোর্সের মধ্যে থাকা মডিউলগুলোর objectID)
    testimonials: Types.ObjectId[]; // This is an array of ObjectIds (কোর্সের মধ্যে থাকা টেস্টিমোনিয়ালগুলোর objectID)
    instrustor: Types.ObjectId; // This is an ObjectId (কোর্সের ইন্সট্রাক্টরের objectID)
    quizzes: Types.ObjectId; // This is an ObjectId (কোর্সের কুইজের objectID)
    price: number;
    active: boolean;
    category: Types.ObjectId; // This is an ObjectId (কোর্সের ক্যাটাগরির objectID)
    // _id?: Types.ObjectId; // This is an ObjectId (কোর্সের objectID)
}

export type CourseModel = Model<ICourse, Record<string, unknown>>;