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
      <div className="pt-2 font-bold text-2xl">Eesh Singh</div>
      <div className="py-4 text-center text-xl">
        Hi, I am a passionate{" "}
        <span className="text-blue-700 font-semibold">Application Developer</span>.
        Currently working as a{" "}
        <span className="text-emerald-600 font-semibold">
          Product Lead at Deloitte
        </span>{" "}
        . Former Co-Lead for an Award-Winning Data Science and Analytics team at{" "}
        <span className="text-sky-600 font-semibold">Locobuzz</span>. I have a keen
        interest in exploring the AI domain and developing applications that
        make a positive impact.
      </div>
    </div>
  );
};
export default Introduction;
