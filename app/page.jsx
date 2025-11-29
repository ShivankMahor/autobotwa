import { Hero } from "@/components/hero"
import { FeatureCard } from "@/components/feature-card"
import { PricingCard } from "@/components/pricing-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { Footer } from "@/components/footer"
import { BookOpen, Users, Award } from "lucide-react"
import Navbar from "@/components/navbar"
export default function Page() {
  return (
    <main>
      <Navbar/>
      <Hero />
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground">Why Learn With Us</h2>
          <p className="mt-2 text-muted-foreground">Everything you need to succeed</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<BookOpen className="h-6 w-6" />}
            title="Project-Based Learning"
            desc="Build real-world projects that showcase your skills to employers."
          />
          <FeatureCard
            icon={<Users className="h-6 w-6" />}
            title="Expert Mentorship"
            desc="Get personalized feedback and guidance from industry professionals."
          />
          <FeatureCard
            icon={<Award className="h-6 w-6" />}
            title="Career Support"
            desc="Access job boards, resume reviews, and interview preparation resources."
          />
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground">Simple, Transparent Pricing</h2>
          <p className="mt-2 text-muted-foreground">Choose the plan that fits your learning goals</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          <PricingCard
            tier="Starter"
            price={29}
            features={[
              "Access to 5 courses",
              "Interactive video lessons",
              "Community forum access",
              "Basic project templates",
              "Certificate of completion",
            ]}
            recommended={false}
          />
          <PricingCard
            tier="Professional"
            price={79}
            features={[
              "Access to all courses",
              "Interactive video lessons",
              "1-on-1 mentor sessions",
              "Premium project templates",
              "Career coaching calls",
              "Job board access",
            ]}
            recommended={true}
          />
          <PricingCard
            tier="Enterprise"
            price={199}
            features={[
              "Everything in Professional",
              "Unlimited mentor sessions",
              "Custom learning paths",
              "Team collaboration tools",
              "Priority support",
              "Dedicated account manager",
            ]}
            recommended={false}
          />
        </div>
      </section>

      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-foreground">What Our Students Say</h2>
            <p className="mt-2 text-muted-foreground">Real stories from learners who transformed their careers</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            <TestimonialCard
              name="Sarah Chen"
              role="Frontend Developer"
              company="TechCorp"
              rating={5}
              course="Complete Web Development Bootcamp"
              testimonial="This platform completely changed my career trajectory. The project-based approach helped me build a portfolio that landed me my dream job within 3 months of completing the course. The mentor support was invaluable!"
            />
            <TestimonialCard
              name="Marcus Johnson"
              role="Product Designer"
              company="DesignStudio"
              rating={5}
              course="UI/UX Design Masterclass"
              testimonial="I've tried many online courses, but this is the first one that truly felt interactive and engaging. The feedback from mentors was incredibly detailed, and the community is so supportive. Worth every penny!"
            />
            <TestimonialCard
              name="Priya Patel"
              role="Data Analyst"
              company="DataFlow Inc"
              rating={5}
              course="Data Science Fundamentals"
              testimonial="The hands-on projects were exactly what I needed to transition from finance to data science. I appreciated how each lesson built upon the last, and the career coaching sessions helped me nail my interviews."
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
