import { cn } from "@/lib/utils"

const SectionTitle :React.FC<{children: React.ReactNode, className?:string}> = ({children, className}) => {
  return (
    <h2 className={cn("text-xl md:text-2xl lg:text-3xl font-bold", className)}>
      {children}
    </h2>
  )
}

export default SectionTitle

//:React.FC<{children: React.ReactNode, className?:string}> এগুলা হলো টাইপস্ক্রিপ্টের টাইপ।

//React.FC দিয়ে বুঝায় React Functional Component

//className এর পরে ? হলো অপশনাল চেইনিং, অর্থাৎ className আসতেও পারে, নাও আসতে পারে।