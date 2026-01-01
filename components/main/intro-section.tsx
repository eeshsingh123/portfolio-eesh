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
      <div className="pt-4 text-sm leading-relaxed max-w-lg">
        I build AI-powered solutions with experience in agents, workflows, and AI-assisted financial reporting. Framework agnostic with expertise in production AI evaluation and edge deployment.
      </div>
      <br />
      <div className="pt-2 text-sm leading-relaxed max-w-lg text-muted-foreground">
        This portfolio will be enriched with projects as we progress through 2026.
      </div>
    </div>
  );
};
export default Introduction;
