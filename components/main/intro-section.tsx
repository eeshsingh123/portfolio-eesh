import Image from "next/image";
import Link from "next/link";

const Introduction = () => {
  return (
    <div className="flex flex-col pb-8">
      <Image
        src="/profile-picture.jpg"
        alt="Personal profile picture of Eesh"
        width={100}
        height={100}
        className="rounded-full"
        quality={100}
      />
      <div className="pt-3 text-lg font-medium">Eesh Singh</div>
      <div className="pt-1 text-sm text-muted-foreground">
        Lead Software Engineer 2 at Deloitte
      </div>
      <div className="pt-4 text-sm leading-relaxed max-w-lg">
        I build AI Agents for financial services. I have an expertise in building agents, workflows, financial documents processing and LLM evaluation for auto-generated analytical reports.
        I also, have a keen interest in building on-device edge applications for local LLM inference.
        Frameworks that I have worked with but not limited to include LangChain, LangGraph, AWS Bedrock, LLaMA Index, etc.
      </div>
      <br />
      <div className="pt-2 text-sm leading-relaxed max-w-lg text-muted-foreground">
        This portfolio will be enriched with projects as we progress through 2026.
      </div>
    </div>
  );
};
export default Introduction;
