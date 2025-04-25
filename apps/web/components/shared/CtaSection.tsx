import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface CtaSectionProps {
  title: string
  description: string
  primaryButtonText: string
  primaryButtonLink: string
  secondaryButtonText: string
  secondaryButtonLink: string
  bgColor?: string
}

export default function CtaSection({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  bgColor = "bg-[#34485F]",
}: CtaSectionProps) {
  return (
    <section className={`${bgColor} py-16 px-4 md:px-6 lg:px-8 relative overflow-hidden`}>
      <div className="liquid-shape liquid-shape-1"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
            <p className="text-white/90 mb-6">{description}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href={primaryButtonLink}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#E77A50] text-white rounded-lg hover:bg-[#d06a43] transition-colors"
            >
              {primaryButtonText}
            </Link>
            <Link
              href={secondaryButtonLink}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#34485F] rounded-lg hover:bg-gray-100 transition-colors"
            >
              {secondaryButtonText} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
