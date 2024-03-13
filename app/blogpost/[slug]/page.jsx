
import { Bitter } from "next/font/google";
const bitter = Bitter({ subsets: ["latin"] });

async function getBlog(slug) {
  const response = await fetch(
    `http://localhost:3000/api/getblog?slug=${slug}`,
    {
      cache: "no-store",
    }
  );
  const data = await response.json();
  return data;
}

const page = async ({ params: { slug } }) => {
  const blog = await getBlog(slug);
  const markup = { __html: blog.description };

  return (
    <div className="flex flex-col justify-center items-center my-12 mx-8">
      <div className="max-w-fit text-left">
        <h3 className="text-2xl font-bold text-gray-800 my-4">{blog.title}</h3>
        <p className={`${bitter.className} text-gray-700 text-lg max-w-2xl`}>
          {blog && <div dangerouslySetInnerHTML={markup} />}
        </p>
      </div>
    </div>
  );
};

export default page;
