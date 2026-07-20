import type { Metadata } from "next";
import { GraduationCap, Users } from "lucide-react";
import { pageMetadata } from "@/lib/seo";
import { education, leadership } from "@/data/education";
import { Section } from "@/components/Section";
import { Badge } from "@/components/Badge";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = pageMetadata({
  title: "Education",
  description: "B.S. Electrical and Computer Engineering at UT Austin, graduating May 2027.",
  path: "/education",
});

export default function EducationPage() {
  return (
    <Section eyebrow="Background" title="Education">
      <Reveal>
        <div className="rounded-2xl border border-border bg-elevated p-8 sm:p-10">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <GraduationCap className="h-6 w-6" aria-hidden />
            </span>
            <div>
              <h3 className="font-heading text-xl font-semibold sm:text-2xl">{education.school}</h3>
              <p className="mt-1 text-accent">{education.degree}</p>
              <p className="mt-1 text-sm text-muted">
                {education.location} &middot; Expected {education.graduation}
              </p>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-sm font-medium uppercase tracking-widest text-muted">
              Relevant Coursework
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {education.coursework.map((course) => (
                <Badge key={course}>{course}</Badge>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {leadership.length > 0 && (
        <div className="mt-14">
          <Reveal>
            <p className="mb-6 text-sm font-medium uppercase tracking-widest text-muted">
              Leadership
            </p>
          </Reveal>
          <div className="space-y-6">
            {leadership.map((role, i) => (
              <Reveal key={role.organization} delay={i * 0.05}>
                <div className="rounded-2xl border border-border bg-elevated p-8">
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Users className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <h3 className="font-heading text-lg font-semibold">{role.role}</h3>
                        <span className="text-sm text-muted">
                          {role.startDate} &ndash; {role.endDate}
                        </span>
                      </div>
                      <p className="mt-1 text-accent">{role.organization}</p>
                      <ul className="mt-4 space-y-2">
                        {role.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3 text-muted">
                            <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted" aria-hidden />
                            <span className="leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
