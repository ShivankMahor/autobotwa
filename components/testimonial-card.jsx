import { Star } from "lucide-react"

export function TestimonialCard({ name, role, company, avatar, rating, testimonial, course }) {
  return (
    <div className="group bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center gap-4 mb-4">
        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary font-semibold text-lg overflow-hidden">
          {avatar ? (
            <img src={avatar || "/placeholder.svg"} alt={name} className="h-full w-full object-cover" />
          ) : (
            name.charAt(0)
          )}
        </div>
        <div>
          <h4 className="font-semibold text-foreground">{name}</h4>
          <p className="text-xs text-muted-foreground">
            {role} {company && `at ${company}`}
          </p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted"}`}
          />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-foreground mb-6 leading-relaxed">{testimonial}</p>

      {/* Course Badge */}
      {course && (
        <div className="mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
            {course}
          </span>
        </div>
      )}
    </div>
  )
}
