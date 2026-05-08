interface HeroProps {
    title: string
    subtitle: string
}

export function HeroSection({
    title,
    subtitle,
}: HeroProps) {
    return (
        <section className="py-24 text-center">
            <h1 className="text-5xl font-bold">
                {title}
            </h1>

            <p className="mt-4 text-xl text-gray-500">
                {subtitle}
            </p>
        </section>
    )
}