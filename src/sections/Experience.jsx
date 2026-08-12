import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SpotlightCard } from "@/components/SpotlightCard";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    period: "2024 — Present",
    role: "System Developer - Frontend",
    company: "YouCode Technologies Corporation",
    description:
      "Created and maintained responsive web applications using Vue.js and Next.js: School Management Information System and Event Management System.",
    technologies: ["Vue.js", "JavaScript", "Next.js", "Tailwind CSS", "MySQL"],
    current: true,
  },
  {
    period: "2023 — 2024",
    role: "Software Engineer",
    company: "Sharks Billiard League Association",
    description:
      "Built a terminal application for managing league standings and player statistics.",
    technologies: ["React", "Tailwind CSS", "MySQL"],
    current: false,
  },
  {
    period: "2020 — 2023",
    role: "Junior Frontend Developer",
    company: "Manila Power Technologies Incorporated",
    description:
      "Contributed to the development of Online BMR Launcher, a web application for improving operational efficiency. Collaborated with cross-functional teams to deliver software solutions.",
    technologies: ["React", "JavaScript", "MySQL"],
    current: false,
  },
  {
    period: "2017 — 2020",
    role: "Freelance Developer",
    company: "Self-Employed",
    description:
      "Delivered custom web solutions for thesis projects and small business websites. Gained experience in client communication and project management.",
    technologies: ["JavaScript", "PHP", "HTML", "MySQL"],
    current: false,
  },
];

export const Experience = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const line = lineRef.current;
    if (!section || !line) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      gsap.set(line, { scaleY: 1 });
      gsap.set(itemsRef.current, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );

      itemsRef.current.forEach((item, i) => {
        if (!item) return;
        gsap.fromTo(
          item,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            delay: i * 0.05,
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="ram-exp"
      ref={sectionRef}
      className="py-32 relative overflow-hidden bg-background/70 backdrop-blur-[1px]"
    >
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Experience leads
            <span className="font-serif italic font-normal text-white">
              {" "}
              to progress
            </span>
          </h2>
          <p className="text-muted-foreground">
            A timeline of my professional growth, from curious beginner to
            frontend system developer — leading and sharing passion and purpose.
          </p>
        </div>

        <div className="relative">
          <div
            ref={lineRef}
            className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 origin-top"
            style={{ transform: "scaleY(0)" }}
          />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={exp.period}
                ref={(el) => {
                  itemsRef.current[idx] = el;
                }}
                className="relative grid md:grid-cols-2 gap-8"
              >
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <SpotlightCard className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </SpotlightCard>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
