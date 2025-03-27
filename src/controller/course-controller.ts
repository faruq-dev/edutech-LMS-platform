import { ICourse } from "@/interface/course-interface";
import { Category } from "@/model/category-model";
import { Course } from "@/model/course-model";
import { Module } from "@/model/module-model";
import { Testimonial } from "@/model/testimonial-model";
import { User } from "@/model/user-model";

export async function getCourse(): Promise<ICourse[]>{
    const courses = await Course.find()
    .populate({
        path: 'category',
        model: Category
    })
    .populate({
        path: 'modules',
        model: Module
    })
    .populate({
        path: 'testimonials',
        model: Testimonial
    })
    .populate({
        path: 'instructor',
        model: User
    })
    
    return courses;
};

//এখানে আমরা : Promise<ICourse[]> এর মাধ্যমে getCourse() ফাংশনের রিটার্ন টাইপ অর্থাৎ সে কোন টাইপের ডাটা রিটার্ন করবে সেটার টাইপ বলে দিলাম, যেহেতু getCourse() ফাংশনটা একটা Promise রিটার্ন করে তাই :Promise লিখলাম এবং যেহেতু ICourse টাইপের অ্যারে অফ অবজেক্ট রিটার্ন করে তাই জেনেরিকের ভেতর লিখলাম <ICourse[]> 

// ICourse[] এটার মানে হলো ICourse টাইপের একটা অ্যারে।

// readme.txt ফাইলে পপুলেট এর টপিক ব্যাখ্যা করা আছে

