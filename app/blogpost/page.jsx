"use client";

import { Montserrat, Bitter } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";
const bitter = Bitter({ subsets: ["latin"] });

const page = () => {
  const [items, setItems] = useState([]);

  useEffect( () => {
    fetchMoreData();
  }, []);

  const fetchMoreData = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/blogs`);
      let data = await res.json();
      setItems([...data])
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <div className="flex flex-col items-center justify-center py-10">
        {items.map((item, index) => {
          return (
            <div key={index} className="text-left px-10">
              <h3 className="text-2xl font-bold text-gray-800 mt-3 cursor-pointer">
                <Link href={`/blogpost/${item.slug}`}>{item.title}</Link>
              </h3>
              <p
                className={`${bitter.className} text-gray-700 text-lg max-w-3xl`}
              >
                {item.metadesc.substr(0, 100)}...
              </p>
            </div>
          );
        })}
      </div>
  );
};

export default page;
