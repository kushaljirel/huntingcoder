import { Montserrat, Bitter } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });
const bitter = Bitter({ subsets: ["latin"] });

const page = () => {
  return (
    <div
      className={`${montserrat.className} mx-auto my-10 max-w-screen-lg px-4 sm:px-6 lg:px-8`}
    >
      <h1 className="text-4xl font-bold text-center text-orange-600">
        About us
      </h1>

      <h2 className="text-green-400 text-3xl font-semibold mt-8 mb-2">
        Introduction
      </h2>
      <p className={`${bitter.className} text-base`}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque minus
        distinctio reiciendis tenetur ut enim dolorum impedit praesentium cum
        earum. Rem nemo beatae neque architecto cum ea unde iusto, at enim,
        fugit magni repellendus.
      </p>

      <h2 className="text-green-400 text-3xl font-semibold mt-8 mb-2">
        Our Mission
      </h2>
      <ul className="list-disc list-inside">
        <li className="text-blue-700">service 1</li>
        <li className="text-blue-700">service 2</li>
        <li className="text-blue-700">service 3</li>
        <li className="text-blue-700">service 4</li>
        <li className="text-blue-700">service 5</li>
      </ul>

      <h2 className="text-green-400 text-3xl font-semibold mt-8 mb-2">
        Our Vision
      </h2>
      <p className={`${bitter.className} text-base`}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque minus
        distinctio reiciendis tenetur ut enim dolorum impedit praesentium cum
        earum. Rem nemo beatae neque architecto cum ea unde iusto, at enim,
        fugit magni repellendus.
      </p>

      <h2 className="text-green-400 text-3xl font-semibold mt-8 mb-2">
        Our Values
      </h2>
      <ul className="list-disc list-inside">
        <li className="text-blue-700">value 1</li>
      </ul>
    </div>
  );
};

export default page;
