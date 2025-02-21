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
        Hi, I build applications that solve problems using Artificial
        Intelligence. Currently working as a{" "}
        <span className="text-emerald-600 font-semibold">
          Product Lead at Deloitte
        </span>
      </div>
      <div className="py-1 text-center">
        I have hands-on experience working with AI frameworks like LangChain to build AI agents from scratch. I've developed chatbots that efficiently process large-scale enterprise data for financial use cases, ensuring accurate and reliable responses. My work focuses on creating intelligent systems that streamline data ingestion and enhance decision-making.
      </div>
    </div>
  );
};
export default Introduction;
