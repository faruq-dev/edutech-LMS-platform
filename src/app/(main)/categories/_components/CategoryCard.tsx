import { ICategory } from "@/interface/category-interface";
import Image from "next/image";
import Link from "next/link";

const CategoryCard:React.FC<{category:ICategory}> = ({category}) => {
  return (
    <div className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-fit">
      <Link
        href={`/categories/${category._id}`}
        className="relative overflow-hidden rounded-lg border bg-background p-2 hover:scale-105 transition-all duration-500 ease-in-out"
      >
        <div className="flex  flex-col gap-4 items-center justify-between rounded-md p-6">
          <Image
            src={`/assets/images/categories/${category?.thumbnail}`}
            alt={category?.title}
            width={180}
            height={150}
          />
          <h3 className="font-bold">{category.title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
