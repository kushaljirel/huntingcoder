import Image from "next/image";
import Link from "next/link";
import { Montserrat, Bitter } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });
const bitter = Bitter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center py-10">
      <h1
        className={`${montserrat.className} font-bold text-4xl text-orange-500 my-8 text-center mx-2 sm:text-5xl`}
      >
        Welcome to hunting coder
      </h1>
      <hr className="h-2 w-[90%] bg-orange-500" />
      <div className="flex flex-col items-center justify-center my-6">
        <Image
          className="border rounded-2xl"
          src={"/coderimage.avif"}
          alt="coder image"
          width={300}
          height={300}
        />
      </div>
      <h2 className="text-3xl font-bold text-gray-700 mt-12 text-right mx-auto">
        popular blog posts
      </h2>
      <div className="text-left  px-10">
        <h3 className="text-xl font-bold text-gray-800 mt-3 cursor-pointer">
          <Link href="/blogpost">This a blog post</Link>
        </h3>
        <p className={`${bitter.className} text-gray-700 text-lg`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
      <div className="text-left  px-10">
        <h3 className="text-xl font-bold text-gray-800 mt-3">
          This a blog post
        </h3>
        <p className={`${bitter.className} text-gray-700 text-lg`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
      <div className="text-left  px-10">
        <h3 className="text-xl font-bold text-gray-800 mt-3">
          This a blog post
        </h3>
        <p className={`${bitter.className} text-gray-700 text-lg`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
    </section>
  );
}
