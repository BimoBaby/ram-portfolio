import { ArrowUpRight } from "lucide-react";
import { SpotlightCard } from "@/components/SpotlightCard";
import { useGsapReveal } from "@/hooks/useGsapReveal";

const featured = [
  {
    title: "alPar Trading Inc",
    description:
      "A modern business website built with React, Tailwind CSS, Vite, and Supabase for backend services.",
    image: "/projects/alpar.png",
    tags: ["React", "Tailwind CSS", "Vite", "Supabase"],
    link: "https://alpar-trading.vercel.app/",
  },
  {
    title: "My Shopify",
    description:
      "Mini e-commerce platform with a user-friendly interface for seamless shopping experiences.",
    image: "/projects/myshopify.png",
    tags: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    link: "https://myshopify-frontend.vercel.app/",
  },
];

const secondary = [
  {
    title: "School Management Information System",
    description:
      "A full-featured enrollment solution with real-time attendance tracking and analytics dashboard.",
    image: "/projects/project2.png",
    tags: ["Next.js", "JavaScript", "Laravel 10", "MySQL"],
    link: "https://youguard.ph/",
  },
  {
    title: "Event Management System",
    description:
      "A comprehensive event management platform with real-time registration, scheduling, and reservation features.",
    image: "/projects/project1.png",
    tags: ["Vue.js", "JavaScript", "Laravel 10", "MySQL"],
    link: "https://www.eventmanage.biz/events/n1OLK8jAEe3Y/view",
  },
  {
    title: "User Management System",
    description: "An admin panel for user management.",
    image: "/projects/usermanagesys.jpg",
    tags: ["React", "TypeScript", "Node.js"],
    link: "https://user-management-system-rho-three.vercel.app/",
  },
  {
    title: "Manila Power Home Website",
    description:
      "A modern, responsive website for Manila Power with clean design and easy navigation.",
    image: "/projects/project3.png",
    tags: ["JavaScript", "CSS", "HTML"],
    link: "https://manilapower.net/",
  },
  {
    title: "RAMWebX",
    description: "A sample business website using the Duda platform.",
    image: "/projects/duda.png",
    tags: ["Duda"],
    link: "https://ramwebx.multiscreensite.com/",
  },
  {
    title: "Online Enrollment System",
    description:
      "Originally built for thesis — real-time enrollment, scheduling, and admin tools.",
    image: "/projects/project4.png",
    tags: ["PHP", "MySQL", "JavaScript"],
  },
];

function ProjectCard({ project, featured: isFeatured }) {
  const content = (
    <>
      <div
        className={`relative overflow-hidden ${isFeatured ? "aspect-[16/10]" : "aspect-video"}`}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
        {project.link && (
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
              <ArrowUpRight className="w-5 h-5" />
            </span>
          </div>
        )}
      </div>

      <div className={`space-y-3 ${isFeatured ? "p-7" : "p-5"}`}>
        <div className="flex items-start justify-between gap-3">
          <h3
            className={`font-semibold group-hover:text-primary transition-colors ${isFeatured ? "text-2xl" : "text-lg"}`}
          >
            {project.title}
          </h3>
          <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0" />
        </div>
        <p className="text-muted-foreground text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  const className = `group glass rounded-2xl overflow-hidden h-full ${isFeatured ? "glow-border" : ""}`;

  if (project.link) {
    return (
      <SpotlightCard as="a" href={project.link} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </SpotlightCard>
    );
  }

  return <SpotlightCard className={className}>{content}</SpotlightCard>;
}

export const Projects = () => {
  const revealRef = useGsapReveal();

  return (
    <section id="ram-projects" className="py-32 relative overflow-hidden bg-background/70 backdrop-blur-[1px]">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div ref={revealRef} className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Projects with
            <span className="font-serif italic font-normal text-white">
              {" "}
              purpose and excellence.
            </span>
          </h2>
          <p className="text-muted-foreground">
            Flagship production systems first — then a selection of recent
            builds that solve real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {featured.map((project) => (
            <ProjectCard key={project.title} project={project} featured />
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {secondary.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
