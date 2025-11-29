import { Check } from "lucide-react"

export function PricingCard({ tier, price, features, recommended }) {
  return (
    <div
      className={`group relative rounded-xl bg-background p-6 shadow-sm transition-all duration-700 hover:scale-105 hover:-translate-y-2 hover:shadow-xl ${
        recommended ? "ring-2 ring-primary" : "border"
      }`}
    >
      {recommended && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center rounded-full border border-primary bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
            Recommended
          </span>
        </div>
      )}

      <div className="mb-4">
        <h3 className="text-xl font-semibold text-foreground">{tier}</h3>
        <div className="mt-2 flex items-baseline gap-1">
          <span className="text-4xl font-bold text-foreground">${price}</span>
          <span className="text-sm text-muted-foreground">/month</span>
        </div>
      </div>

      <ul className="mb-6 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className="mt-0.5 size-5 shrink-0 text-primary" />
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full rounded-2xl px-4 py-2.5 text-sm font-medium transition-all duration-700 group-hover:scale-105 group-hover:shadow-lg ${
          recommended
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground"
        }`}
      >
        Get Started
      </button>
    </div>
  )
}
