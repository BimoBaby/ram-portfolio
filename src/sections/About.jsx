import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import { SpotlightCard } from "@/components/SpotlightCard";
import { useGsapReveal } from "@/hooks/useGsapReveal";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Delivering maintainable, scalable code for long-term reliability.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering maximum responsiveness.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "I truly enjoy working with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Expanding my skills with the latest technologies and best practices.",
  },
];

export const About = () => {
  const revealRef = useGsapReveal();

  return (
    <section
      id="ram-about"
      className="py-32 relative overflow-hidden bg-background/70 backdrop-blur-[1px]"
    >
      <div ref={revealRef} className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground">
              Crafting the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p>
                I’m a software engineer with 3+ years of experience delivering
                high-quality software solutions that drive real business
                results. I specialize in React, Next.js, and Vue.js, building
                scalable applications from polished user interfaces to complex
                enterprise systems with a strong focus on performance,
                maintainability, and user experience.
              </p>
              <p>
                I focus on writing clean, efficient code while ensuring a great
                user experience. Outside of work, I spend time learning new
                technologies and enhancing my expertise to stay ahead in the
                fast-moving tech world.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border">
              <p className="text-lg font-medium italic text-foreground">
                "My goal is to create digital experiences that are not just
                functional, but truly enjoyable — products that clients love to
                use and co-developers enjoy maintaining."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 auto-rows-fr h-full min-h-[420px] lg:min-h-[480px]">
            {highlights.map((item) => (
              <SpotlightCard
                key={item.title}
                className="glass p-6 rounded-2xl h-full flex flex-col justify-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
