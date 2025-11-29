import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Content */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-4">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Master real-world skills — fast.
              </h1>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Project-based online courses, interactive video lessons, and mentor support so you can build a portfolio
                that lands jobs.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="rounded-2xl shadow-lg transition-all hover:shadow-xl">
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-2xl shadow-sm transition-all hover:shadow-md bg-transparent"
              >
                Browse Courses
              </Button>
            </div>
          </div>

          {/* Right Column - Device Mockup */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-[400px] w-full max-w-lg overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/20 shadow-2xl ring-1 ring-border/50 sm:h-[500px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-4 text-6xl opacity-20">📱</div>
                  <p className="text-sm text-muted-foreground">Device Mockup</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -right-8 -top-8 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute -bottom-8 -left-8 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
