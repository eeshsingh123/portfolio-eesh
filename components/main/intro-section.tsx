import Image from "next/image";

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
      
      <div className="pt-4 text-sm leading-relaxed max-w-lg space-y-3">
        <p>
          I build AI agents for financial services, specializing in:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>Agent development and workflows</li>
          <li>Financial document processing</li>
          <li>LLM evaluation for analytical reports</li>
          <li>On-device edge applications for local LLM inference</li>
        </ul>
        <p className="pt-2">
          <span className="font-medium">Frameworks:</span> LangChain, LangGraph, AWS Bedrock, LLaMA Index
        </p>
      </div>
      
      <div className="pt-4 text-sm text-muted-foreground italic">
        This portfolio will be enriched with projects as we progress through 2026.
      </div>
    </div>
  );
};

export default Introduction;