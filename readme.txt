কিভাবে mongoDB সার্ভারের সাথে nextJS প্রজেক্ট connection করবো? ****************************

1: প্রথমেই একদম root ফোল্ডারে .env নামে একটা ফাইল করে তাতে MONGODB_CONNECTION_STRING= লিখে এরপর এখানে mongoDB থেকে পাওয়া কানেকশন string টা বসাতে হবে পাসওয়ার্ড সহ। কানেকশন স্ট্রিং এর mongodb.net/ অংশের ঠিক পরেই ? এর আগে momngoDB ডাটাবেজের নামটা দিতে হবে, এই প্রজেক্টে আমাদের mongoDB ডাটাবেজের নাম eduTechDB

2: src ফোল্ডারে service নামে একটা ফোল্ডার করে তার ভেতর db.ts বা mongo.ts নামে একটা ফাইল করতে হবে, এই ফাইলের মাধ্যমেই আমরা momgoDB ডাটাবেজের সাথে nextJS প্রজেক্টের কানেকশন করব। আআম্ররা এক্ষেত্রে mongoose ব্যবহার করব, mongoose হলো mongoDB ঈর একটা লাইব্রেরি (ODM).

3: প্রথমেই mongoose ইনস্টন করে নিব npm i mongoose কমান্ড দিয়ে, এরপর db.ts ফাইলে mongoose থেকে mongoose কে ইমপোর্ট করতে হবে।

4: এরপর আমরা এই ফাইলে dbConnect() নামে একটা async ফাংশন লিখব যার ভেতর try{} এর ভেতর আমরা conn নামে একটা ভেরিয়েবল নিলাম এবং সেই ভ্যারিয়েবলে await করে mongoose.connect() নামে একটা মেথড (mongoose এর মেথড) কল করলাম এবং এর ভেতরে String(process.env.MONGODB_CONNECTION_STRING) লিখলাম, এখানে MONGODB_CONNECTION_STRING টা হলো সেই ভেরিয়েবল টাইপের জিনিস যা .env ফাইল থেকে এসেছে।

কোড স্যাম্পলঃ
export async function dbConnect() {
  try{
    const conn = await mongoose.connect(
      String(process.env.MONGODB_CONNECTION_STRING)
    );
    console.log("Database connection successful");
    return conn;
  }
  catch(err){
    console.error("Database connection failed", err);
  }
}

5: এরপর (main) এর layout.tsx ফাইলে গিয়ে dbConnect() ফাংশনকে ইমপোর্ট করে নিয়ে তাকে await dbConnect() এভাবে কল করলেই ডাটাবেজ কানেক্ট হয়ে যাবে, তবে layout.tsx এর RootLayout ফাংশনকে async করে নিতে হবে


***************************************************************************************************

*** ডাটাবেজ কানেকশন করার পরের কাজ হচ্ছে ডাটাবেজ মডেল/স্ট্রাকচার তৈরী করাঃ
1: এরজন্য প্রথমেই src ফোল্ডারে model নামে একটা ফোল্ডার নিতে হবে, এরপর সে ফোল্ডারে আমাদের সকল মডেল গুলো থাকবে যেমন course-model.ts বা category-model.ts

2: প্রতিটা মডেল ফাইলে আমাদেরকে mongoose এবং Schema কে ইমপোর্ট করে আনতে হবে mongoose থেকে (যেমনঃ import mongoose, { Schema } from "mongoose";)

3: https://drive.google.com/file/d/1o2o6BtdfBErDg8JcJfaoplVmFOaM4GiN/view এই ভিডিওতে ডাটাবেজ মডেল/স্ট্রাকচার তৈরী করার বিস্তারিত আছে


**************************************************************************************************

ডাটাবেজ মডেল/স্ট্রাকচার তৈরী করার পর interface তৈরী করতে হবেঃ
1: এরজন্য প্রথমেই src ফোল্ডারে interface নামে একটা ফোল্ডার নিতে হবে, এরপর সে ফোল্ডারে আমাদের সকল interface গুলো থাকবে যেমন course-interface.ts বা category-interface.ts

2: নিয়ম হলো আগে ইন্টারফেস বানিয়ে তারপর ডাটাবেজ মডেল বানানো, কিন্ত স্যার আমাদের উলটা দিক থেকে বুঝিয়েছে

3: https://drive.google.com/file/d/1o2o6BtdfBErDg8JcJfaoplVmFOaM4GiN/view এই ভিডিওতে ১ ঘন্টা ৩ মিনিটথেকে interface তৈরী করার বিস্তারিত আছে

**************************************************************************************************

