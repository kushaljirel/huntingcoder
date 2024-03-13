"use client";

import { Montserrat, Bitter } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
const bitter = Bitter({ subsets: ["latin"] });

const page = () => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [index, setIndex] = useState(2);

  useEffect(() => {
    fetchMoreData();
  }, []);

  const fetchMoreData = async () => {
    try {
      setIndex((prevIndex) => prevIndex + 1);
      const res = await fetch(`http://localhost:3000/api/blogs?count=${index}`);
      let data = await res.json();
      const count = data.allcount;
      data = data.fileList;

      setTimeout(() => {
        setItems((prevItems) => [...prevItems, ...data]);
        count != items.length ? setHasMore(true) : setHasMore(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
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
    </InfiniteScroll>
  );
};

export default page;
