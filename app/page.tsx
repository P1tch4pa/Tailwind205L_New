
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { checkLogin } from "@/utils/login";

type Status = "done" | "learning" | "soon";

const topics: {
  title: string;
  description: string;
  status: Status;
}[] = [
  {
    title: "UX/UI Fundamentals",
    description:
      "Design web interfaces that are easy to use, guided by UX research.",
    status: "done",
  },
  {
    title: "HTML, CSS and JavaScript",
    description:
      "Build web pages from the ground up: structure them with HTML, style them with CSS, and add interactivity with JavaScript and DOM manipulation.",
    status: "done",
  },
  {
    title: "React Web Applications",
    description:
      "Learn the core ideas of React: Virtual DOM, components, props, state, and hooks. Practice is still ongoing.",
    status: "learning",
  },
  {
    title: "Back-End Interface Preparation",
    description:
      "Connecting the front end to a back end. This topic has not been covered yet.",
    status: "soon",
  },
];

const statusStyle: Record<
  Status,
  { label: string; dot: string; chip: string }
> = {
  done: {
    label: "Completed",
    dot: "bg-emerald-500",
    chip: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  },
  learning: {
    label: "In progress",
    dot: "bg-amber-400",
    chip: "bg-amber-50 text-amber-700 ring-amber-200",
  },
  soon: {
    label: "Coming soon",
    dot: "bg-slate-300",
    chip: "bg-slate-100 text-slate-500 ring-slate-200",
  },
};

const affiliations = [
  "Computer Science and Software Development",
  "Innovation Dept. (CSI)",
  "School of Information Technology (SIT)",
  "Sripatum University (SPU)",
];

const careerGoal = {
  title: "Aspiring Front-End Developer",
  description:
    "My goal is to become a Front-End Developer who creates responsive, user-friendly, and visually appealing web applications using React and Next.js.",
  skills: ["React", "Next.js", "Responsive Design", "UX/UI"],
};

export default function Home() {
  const router = useRouter();
  useEffect(() => checkLogin(router, "/"), [router]);

  const [imgError, setImgError] = useState(false);

  return (
<div className="px-4 pt-4 md:pt-6">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-8 md:grid-cols-[380px_minmax(0,1fr)]">

        {/* Left Column */}
        <div className="flex flex-col gap-6 md:sticky md:top-8">

          {/* Profile Card */}
          <aside className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-blue-900/5 ring-1 ring-blue-100">

            {/* Banner */}
            <div className="h-28 bg-gradient-to-r from-blue-500 to-sky-400" />

            <div className="-mt-16 flex flex-col items-center px-6 pb-8">
              {imgError ? (
                <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-white bg-blue-100 text-2xl font-bold text-blue-600 shadow-lg">
                  Fahxaii
                </div>
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src="/assets/img/human.png"
                  alt="Phitchapa Suwanna"
                  onError={() => setImgError(true)}
                  className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-lg"
                />
              )}

              <h2 className="mt-4 text-center text-2xl font-bold text-slate-900">
                Phitchapa Suwanna
              </h2>

              <p className="text-sm font-medium text-blue-600">
                ( Fahxaii )
              </p>

              <ul className="mt-6 w-full space-y-2">
                {affiliations.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl bg-blue-50 px-4 py-2.5 text-center text-sm text-slate-700 ring-1 ring-blue-100"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Career Goal Card */}
          <section className="rounded-3xl bg-white p-6 shadow-xl shadow-blue-900/5 ring-1 ring-blue-100">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>

              <div className="min-w-0">
                <p className="text-xs font-semibold tracking-wider text-blue-600">
                  MY CAREER GOAL
                </p>
                <h2 className="mt-1 text-lg font-bold leading-snug text-slate-900">
                  {careerGoal.title}
                </h2>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              {careerGoal.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {careerGoal.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700 ring-1 ring-blue-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column - Course Timeline */}
        <main className="min-w-0 rounded-3xl bg-white p-6 shadow-xl shadow-blue-900/5 ring-1 ring-blue-100 md:p-10">
          <h1 className="text-3xl font-bold leading-tight text-blue-600 md:text-4xl">
            CSI205 Front-End
            <br />
            Software Development
          </h1>

          <div className="mt-4 h-1 w-16 rounded-full bg-sky-300" />

          <ol className="relative mt-8 space-y-8">
            {/* Vertical Timeline Line */}
            <div
              aria-hidden="true"
              className="absolute bottom-2 left-[7px] top-2 w-0.5 bg-blue-100"
            />

            {topics.map((topic) => {
              const s = statusStyle[topic.status];

              return (
                <li key={topic.title} className="relative pl-10">
                  {/* Timeline Dot */}
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 top-1.5 h-4 w-4 rounded-full ring-4 ring-white ${s.dot}`}
                  />

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3 className="text-lg font-semibold text-slate-900">
                      {topic.title}
                    </h3>

                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ${s.chip}`}
                    >
                      {s.label}
                    </span>
                  </div>

                  <p
                    className={`mt-2 leading-relaxed text-slate-600 ${
                      topic.status === "soon"
                        ? "italic text-slate-400"
                        : ""
                    }`}
                  >
                    {topic.description}
                  </p>
                </li>
              );
            })}
          </ol>
        </main>
      </div>
    </div>
  );
}
