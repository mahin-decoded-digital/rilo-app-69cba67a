import {
  Globe,
  Palette,
  Smartphone,
  BarChart3,
  Code2,
  Megaphone,
} from "lucide-react"
import ServiceCard from "./ServiceCard"

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Custom websites and web applications built with cutting-edge technologies. From simple landing pages to complex e-commerce platforms.",
  },
  {
    icon: Palette,
    title: "Brand Design",
    description:
      "Memorable brand identities that tell your story. Logo design, color palettes, typography, and comprehensive brand guidelines.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications that deliver seamless experiences across iOS and Android devices.",
  },
  {
    icon: BarChart3,
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies including SEO, PPC, social media management, and content marketing to grow your online presence.",
  },
  {
    icon: Code2,
    title: "Custom Software",
    description:
      "Tailored software solutions designed to streamline your operations and solve unique business challenges with precision.",
  },
  {
    icon: Megaphone,
    title: "Social Media",
    description:
      "Engaging social media strategies that build communities, increase brand awareness, and drive meaningful customer interactions.",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business thrive in the
            modern landscape. We combine creativity with technology to deliver
            exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              className={index >= 3 ? "lg:hidden" : ""}
            />
          ))}
          {/* Show remaining cards on larger screens */}
          {services.slice(3).map((service) => (
            <ServiceCard
              key={`desktop-${service.title}`}
              icon={service.icon}
              title={service.title}
              description={service.description}
              className="hidden lg:block"
            />
          ))}
        </div>
      </div>
    </section>
  )
}