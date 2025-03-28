import { Model, Types } from "mongoose";
import { ICategory } from "./category-interface";
import { IUser } from "./user-interface";
import { ITestimonial } from "./testimonial-interface";
import { IModule } from "./module-interface";

export interface ICourse {
    title: string;
    subtitle: string;
    description: string;
    thumbnail: string;
    modules: IModule[]; // This is an array of ObjectIds (কোর্সের মধ্যে থাকা মডিউলগুলোর objectID)
    testimonials: ITestimonial[]; // This is an array of ObjectIds (কোর্সের মধ্যে থাকা টেস্টিমোনিয়ালগুলোর objectID)
    instructor: IUser; // This is an ObjectId (কোর্সের ইন্সট্রাক্টরের objectID)
    quizzes: Types.ObjectId; // This is an ObjectId (কোর্সের কুইজের objectID)
    price: number;
    active: boolean;
    category: ICategory; 
    _id?: Types.ObjectId; // This is an ObjectId (কোর্সের objectID)
}

export type CourseModel = Model<ICourse, Record<string, unknown>>;