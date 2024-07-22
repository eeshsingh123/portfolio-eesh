import Image from "next/image";

const Introduction = () => {
  return (
    <div className="flex flex-col pb-12 justify-center items-center">
      <Image
        src="/profile-picture.jpg"
        alt="Personal profile picture of Eesh"
        width={120}
        height={120}
        className="rounded-full border-2 border-blue-500"
        quality={100}
      />
      <div className="pt-2 font-bold text-xl">Eesh Singh</div>
      <div className="py-1 text-center">
        Hi, I build applications that solves problems using Artificial
        Intelligence. Currently working as a{" "}
        <span className="text-emerald-600 font-semibold">
          Product Lead at Deloitte
        </span>. Former Co-Lead for an Award-Winning Data Science and Analytics team at{" "}
        <span className="text-sky-600 font-semibold">Locobuzz</span>.
      </div>
    </div>
  );
};
export default Introduction;
