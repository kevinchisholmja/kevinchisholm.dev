export const metadata = {
  title: "Consulting — Kevin Chisholm",
  description: "Paid work I can help with. Inquiry only.",
};

const services = [
  {
    title: "AI Integration",
    description:
      "Adding AI capabilities to existing products — document processing, intelligent automation, conversational interfaces.",
  },
  {
    title: "Full-Stack Application Development",
    description:
      "Building web applications from scratch — architecture, database design, API development, and deployment.",
  },
  {
    title: "Technical Planning",
    description:
      "Helping non-technical founders and small teams make sound technology decisions before spending on development.",
  },
  {
    title: "SaaS Architecture Review",
    description:
      "Reviewing existing systems for scalability, security, and maintainability concerns before they become expensive problems.",
  },
];

export default function ConsultingPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <div className="mb-12 fade-up">
        <h1 className="text-3xl font-semibold text-ink tracking-tight">
          Consulting
        </h1>
        <p className="text-base text-muted mt-2">
          Paid work I can help with. All engagements start with a conversation.
        </p>
      </div>

      <div
        className="space-y-8 mb-12 fade-up"
        style={{ animationDelay: "0.08s" }}
      >
        {services.map((s) => (
          <div key={s.title} className="border-l-2 border-line pl-5">
            <h2 className="text-base font-semibold text-ink">{s.title}</h2>
            <p className="text-sm text-muted mt-1.5 leading-relaxed">
              {s.description}
            </p>
          </div>
        ))}
      </div>

      <div
        className="rounded-xl border border-line bg-surface p-6 fade-up"
        style={{ animationDelay: "0.16s" }}
      >
        <h2 className="text-base font-semibold text-ink mb-2">Get in touch</h2>
        <p className="text-sm text-muted leading-relaxed mb-4">
          I am not currently accepting orders through this site. If you would
          like to discuss a project, reach out directly and describe what you
          are trying to build.
        </p>
        <a
          href="mailto:kevinchisholmja@gmail.com"
          className="link inline-flex items-center text-sm font-medium text-accent"
        >
          kevinchisholmja@gmail.com →
        </a>
      </div>
    </div>
  );
}
