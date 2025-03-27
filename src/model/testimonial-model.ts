import { ITestimonial, TestimonialModel } from "@/interface/testimonial-interface";
import mongoose, { Schema } from "mongoose";

const testimonialSchema = new Schema<ITestimonial> ({
    content : {
        type : String,
        required : true
    },
    user: {
        type : Schema.ObjectId,
        ref: "User",
        required : true
    },
    courseId: {
        type : Schema.ObjectId,
        ref: "Course"
    },
    rating :{
        type : Number,
        required : true
    }
});

export const Testimonial = mongoose.models.Testimonial ?? mongoose.model<ITestimonial, TestimonialModel>('Testimonial', testimonialSchema);