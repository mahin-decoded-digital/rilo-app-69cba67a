import { Users, Target, Heart, Lightbulb } from "lucide-react"

export default function AboutSection() {
  const values = [
    {
      icon: Users,
      title: "Client First",
      description:
        "Your success is our success. We listen, understand, and deliver solutions that exceed expectations.",
    },
    {
      icon: Target,
      title: "Results Driven",
      description:
        "Every project is designed with measurable outcomes. We focus on deliverables that impact your bottom line.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We stay ahead of trends and embrace new technologies to keep your business competitive and forward-thinking.",
    },
    {
      icon: Heart,
      title: "Passion",
      description:
        "Our team is fueled by genuine passion for digital craft. We pour heart and soul into every pixel and line of code.",
    },
  ]

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            About Decoded Digital
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Founded in 2012, Decoded Digital has grown from a small freelance
            operation into a full-service digital agency. We believe that every
            business deserves access to world-class digital services.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Our Story
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              It started with a simple idea: make high-quality digital services
              accessible to businesses of all sizes. Our founder, after years of
              working with Fortune 500 companies, saw a gap in the market where
              small and medium businesses were underserved.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we&apos;ve helped over 150 clients across industries—from
              ambitious startups to established enterprises. Our diverse team
              brings together expertise in design, development, marketing, and
              strategy.
            </p>
          </div>
          <div className="bg-primary/10 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Our Mission
            </h3>
            <p className="text-lg text-foreground italic">
              &ldquo;To empower businesses with digital solutions that are not
              just functional, but transformative. We decode complexity into
              clarity, turning digital challenges into competitive
              advantages.&rdquo;
            </p>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl font-semibold text-center text-foreground mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <value.icon className="h-7 w-7" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}