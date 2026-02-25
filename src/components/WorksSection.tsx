import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    year: "01",
    title: "Spikelance",
    description: "A full stack product for the Agency and businness owners to manage their projects, clients, team collaborations, Payments and much more services in all in one platform. This product is designed for the the Freelance and service based bussiness ",
    featured: false,
    link: "https://spikelance.vercel.app",
  },
  {
    year: "02",
    title: "TeamFLow",
    description: "Build an full Stack team and workload managment web app using the React, Supabase etc ",
    featured: false,
    link: "https://teamflow-advanced.vercel.app/",
  },
  {
    year: "03",
    title: "Gloventra",
    description: "Built an full stack ecommerce Web App with proper authentication system, Admins Dashboard, Seller/Buyer Roles, courses sections and many other functionalities.",
    featured: true,
    link: "https://gloventra-silk.vercel.app/",
  },
  {
    year: "04",
    title: "VirtueWear",
    description: "An Tryon Ecommerce platofrm where user can test the product on their image and then decide to add to cart or not ",
    featured: false,
    link: "https://tryonshop.vercel.app/",
  },
];

const WorksSection = () => {
  return (
    <section id="works" className="min-h-screen px-6 md:px-12 lg:px-20 py-24">
      <AnimatedSection className="text-center mb-16">
        <h2 className="heading-section mb-6">works</h2>
        <p className="text-body max-w-md mx-auto mb-6">
          Browse through diverse projects showcasing a blend of modern tech stacks, scalable architecture, and captivating user experiences
        </p>
        <a href="#" className="discover-btn inline-flex items-center gap-2">
          View All <ArrowUpRight size={16} />
        </a>
      </AnimatedSection>

      <div className="max-w-4xl mx-auto space-y-0">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 py-8 border-t ${
              project.featured ? "accent-card px-6 -mx-6 border-transparent" : "border-border"
            }`}
          >
            <span className={`text-sm font-mono shrink-0 w-16 ${project.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
              {project.year}
            </span>
            <div className="flex-1">
              <h3 className={`text-lg font-semibold mb-1 ${project.featured ? "text-primary-foreground" : "text-foreground"}`} style={{ fontFamily: 'var(--font-body)' }}>
                {project.title}
              </h3>
              <p className={`text-sm leading-relaxed ${project.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {project.description}
              </p>
            </div>
            {project.link ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className={`discover-btn shrink-0 ${project.featured ? "!border-primary-foreground/30 !text-primary-foreground hover:!bg-primary-foreground/10" : ""}`}>
                Discover
              </a>
            ) : (
              <button className={`discover-btn shrink-0 ${project.featured ? "!border-primary-foreground/30 !text-primary-foreground hover:!bg-primary-foreground/10" : ""}`}>
                Discover
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorksSection;
