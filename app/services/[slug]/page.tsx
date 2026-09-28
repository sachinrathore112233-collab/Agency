import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { createPageMetadata, serializeJsonLd, siteConfig } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.id }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = services.find((item) => item.id === params.slug);
  if (!service) return {};

  return createPageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    pathname: service.href,
  });
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = services.find((item) => item.id === params.slug);
  if (!service) notFound();

  const relatedServices = services.filter((item) =>
    service.related.includes(item.id),
  );
  const pageUrl = new URL(service.href, siteConfig.url).toString();
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: new URL("/services", siteConfig.url).toString(),
      },
      { "@type": "ListItem", position: 3, name: service.title, item: pageUrl },
    ],
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: service.title,
    serviceType: service.title,
    description: service.metaDescription,
    url: pageUrl,
    provider: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <div className="min-h-screen bg-brand-black pt-24 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqSchema) }}
      />

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-10 font-mono text-xs text-brand-muted">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="hover:text-artsy-yellow">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/services" className="hover:text-artsy-yellow">Services</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-white">{service.title}</li>
          </ol>
        </nav>

        <header className="max-w-4xl pb-16 sm:pb-20">
          <p className="mb-4 font-mono text-xs font-bold uppercase tracking-widest text-artsy-yellow">
            Wixgo Agency / Services
          </p>
          <h1 className="font-space text-4xl font-black leading-tight sm:text-6xl">
            {service.h1}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-brand-muted sm:text-lg">
            {service.intro}
          </p>
          <Link
            href="/#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-artsy-ink bg-artsy-yellow px-6 py-3 font-mono text-xs font-black uppercase tracking-wider text-artsy-ink shadow-brutal-sm transition-transform hover:-translate-y-0.5"
          >
            Discuss a project <ArrowRight className="h-4 w-4" />
          </Link>
        </header>

        <section aria-labelledby="deliverables-heading" className="border-y border-white/10 py-12 sm:py-16">
          <h2 id="deliverables-heading" className="font-space text-2xl font-bold sm:text-3xl">
            What this service can include
          </h2>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {service.features.map((feature) => (
              <li key={feature} className="border-l-2 border-artsy-yellow py-2 pl-4 text-sm leading-relaxed text-white/85">
                {feature}
              </li>
            ))}
          </ul>
        </section>

        <div className="grid gap-12 py-14 sm:py-20">
          {service.sections.map((section, index) => (
            <section
              key={section.heading}
              aria-labelledby={`service-section-${index}`}
              className="grid gap-6 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-12"
            >
              <h2 id={`service-section-${index}`} className="font-space text-2xl font-bold sm:text-3xl">
                {section.heading}
              </h2>
              <div>
                <p className="leading-relaxed text-brand-muted">{section.body}</p>
                <ul className="mt-5 grid gap-3">
                  {section.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-white/85">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-artsy-yellow" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>

        <section aria-labelledby="faq-heading" className="border-t border-white/10 py-14 sm:py-20">
          <h2 id="faq-heading" className="font-space text-3xl font-bold sm:text-4xl">
            Frequently asked questions
          </h2>
          <div className="mt-8 grid gap-7 md:grid-cols-2">
            {service.faqs.map((faq) => (
              <article key={faq.question}>
                <h3 className="font-space text-lg font-bold">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <nav aria-label="Related services" className="border-t border-white/10 py-12">
          <h2 className="font-space text-2xl font-bold">Related services</h2>
          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
            {relatedServices.map((related) => (
              <li key={related.id}>
                <Link href={related.href} className="inline-flex items-center gap-2 text-sm text-artsy-yellow hover:text-white">
                  {related.title} <ArrowRight className="h-4 w-4" />
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/services" className="mt-6 inline-block text-sm text-brand-muted underline underline-offset-4 hover:text-white">
            View all services
          </Link>
        </nav>
      </div>
    </div>
  );
}