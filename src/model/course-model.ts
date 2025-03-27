import { CourseModel, ICourse } from "@/interface/course-interface";
import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema<ICourse>({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    required: true,
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  modules: [
    {
      required: true,
      type: Schema.ObjectId,
      ref: "Module",
    },
  ],
  testimonials: [
    {
      required: false,
      type: Schema.ObjectId,
      ref: "Testimonial",
    },
  ],
  instructor: {
    required: true,
    type: Schema.ObjectId,
    ref: "User",
  },
  quizzes: {
    required: false,
    type: Schema.ObjectId,
  },
  price: {
    required: true,
    type: Number,
  },
  active: {
    required: true,
    type: Boolean,
  },
  category: {
    required: true,
    type: Schema.ObjectId,
    ref: "Category",
  },
});

export const Course = mongoose.models.Course ?? mongoose.model<ICourse, CourseModel>("Course", courseSchema);
