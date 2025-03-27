import { Button } from "@/components/ui/button"
import { getCourse } from "@/controller/course-controller";

export default async function Home() {
  const courses = await getCourse();
  console.log(courses);
  return (
    <>
      <h1 className="text-2xl font-rubik font-bold">Welcome to Next JS</h1>
      <h1 className="text-2xl font-manrope font-bold">This is the 2nd headline</h1>
      <Button>Test Button</Button>
    </>
  );
}
