import { Course } from "@/model/course-model";

export async function getCourse(){
    const courses = await Course.find();
    // console.log(courses);
    return courses;
};
