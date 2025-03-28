import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { getCourse } from "@/controller/course-controller";
import CourseCard from "./courses/_components/CourseCard";

const Homepage = async () => {
  const courses = await  getCourse(); // Data fetched from mongoDB
  // console.log(courses);
  return (
    <div className="container mx-auto font-rubik">
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32 grainy">
        <div className="container mx-auto flex max-w-[64rem] flex-col items-center gap-4 text-center relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-2xl sm:-top-72 animate-pulse-slow"
          >
            <div
              style={{
                clipPath:
                  "polygon(50% 0%, 61% 19%, 100% 23%, 77% 50%, 100% 77%, 61% 81%, 50% 100%, 39% 81%, 0% 77%, 23% 50%, 0% 23%, 39% 19%)",
              }}
              className="relative left-[calc(50%-10rem)] aspect-[1100/600] w-[34rem] -translate-x-1/2 rotate-[15deg] bg-gradient-to-bl from-[#a1c4fd] to-[#c2e9fb] opacity-25 sm:left-[calc(50%-28rem)] sm:w-[68rem] animate-pulse-slow"
            />
          </div>

          {/* Banner text and buttons */}
          <span className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium border shadow-lg mb-2 animate-bounce">
            Hey, Welcome to Tutor LMS!
          </span>
          <h1 className="font-heading text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            Educate. Elevate. Empower.
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 my-2">
            “One lesson, many paths — that’s where real learning lives.”
          </p>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <Link
              href="/courses"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              Explore Courses
            </Link>
            <Link
              href=""
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "lg",
                })
              )}
            >
              Become An Instructor
            </Link>
          </div>
        </div>
      </section>


      {/* Categories Section */}
      <section
        id="categories"
        className="container space-y-6  py-8  md:py-12 lg:py-24"
      >
        <div className="flex items-center justify-between">
          <SectionTitle>Categories</SectionTitle>

          <Link
            href={""}
            className=" text-sm font-medium  hover:opacity-80 flex items-center gap-1"
          >
            Browse All <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
        <div className="mx-auto grid justify-center gap-4 grid-cols-2  md:grid-cols-3 2xl:grid-cols-4">
          {/* {categories.map((category) => {
            return (
              <Link
                href={`/categories/${category._id}`}
                key={category._id}
                className="relative overflow-hidden rounded-lg border bg-background p-2 hover:scale-105 transition-all duration-500 ease-in-out"
              >
                <div className="flex  flex-col gap-4 items-center justify-between rounded-md p-6">
                  <Image
                    src={`/assets/images/categories/${category?.thumbnail}`}
                    alt={category?.title}
                    width={150}
                    height={150}
                  />
                  <h3 className="font-bold">{category.title}</h3>
                </div>
              </Link>
            );
          })} */}
        </div>
      </section>

      {/* Courses */}
      <section id="features" className="container space-y-6 md:py-12 lg:py-24">
        <div className="flex items-center justify-between">
          <SectionTitle>Courses</SectionTitle>
          <Link
            href={"/courses"}
            className=" text-sm font-medium  hover:opacity-80 flex items-center gap-1"
          >
            Browse All <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
          {courses.map((course) => {
            return <CourseCard key={course?._id?.toString()} course={course} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Homepage;
