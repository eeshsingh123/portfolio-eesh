import Link from "next/link";
import { FaGithub, FaYoutube } from "react-icons/fa";

const ProjectsSection = () => {
  const projects = [
    {
      title: "PrepGuardian",
      description: "An adaptive AI interview coach and system design mentor built on Google's Live API and ADK for real-time multimodal interaction.",
      github: "https://github.com/eeshsingh123/PrepGuardian",
      youtube: "https://youtu.be/XdhQKwrN2tA",
      tags: ["Gemini Live ADK", "Python", "React", "FastAPI"]
    }
  ];

  return (
    <section className="flex flex-col pt-2">
      <h2 className="text-sm text-muted-foreground mb-4 font-medium uppercase tracking-wider">Projects</h2>
      <div className="space-y-8">
        {projects.map((project) => (
          <div key={project.title} className="flex flex-col space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">{project.title}</h3>
              <div className="flex gap-3 text-muted-foreground">
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                  aria-label={`${project.title} GitHub repository`}
                >
                  <FaGithub className="w-5 h-5" />
                </Link>
                <Link
                  href={project.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors text-red-600/80 hover:text-red-600"
                  aria-label={`${project.title} YouTube demo`}
                >
                  <FaYoutube className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground max-w-lg">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground font-medium border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
