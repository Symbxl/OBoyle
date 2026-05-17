const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=O%27Boyle+Landscaping";

const reviews = [
  {
    text: "O'Boyle's does very good quality work. They're responsive and prompt — always on time, finish on schedule, and the crew is professional and open to suggestions. We've been more than happy with every project they've handled for our property.",
    name: "Michael R.",
    date: "March 12, 2025",
    initials: "MR",
    avatar: "bg-clay-500"
  },
  {
    text: "Three generations of know-how really shows. They walked the property with us, came back with a thoughtful design, and the install was clean from start to finish. The yard looks completely different — in the best way.",
    name: "Susan H.",
    date: "October 4, 2024",
    initials: "SH",
    avatar: "bg-moss-600"
  },
  {
    text: "Always busy, but they call first to set up a good time and do exactly what they say they're going to do. Honest, communicative, and the work speaks for itself. Wouldn't use anyone else in Bloomfield.",
    name: "Daniel C.",
    date: "August 21, 2024",
    initials: "DC",
    avatar: "bg-sand-600"
  }
];

function StarRow() {
  return (
    <div className="flex items-center gap-0.5 text-[#FBBC04]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleG({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden>
      <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
      <path fill="#FF3D00" d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
      <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
      <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
    </svg>
  );
}

export default function ReviewsSection() {
  return (
    <section className="bg-moss-50/40 py-20 md:py-24">
      <div className="container-x">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-white px-4 py-2 ring-1 ring-moss-100 shadow-soft">
            <GoogleG size={16} />
            <span className="text-sm font-semibold text-moss-900">Google Reviews</span>
            <span aria-hidden className="h-4 w-px bg-moss-200" />
            <span className="flex items-center gap-0.5" aria-label="3.5 out of 5 stars">
              {[0, 1, 2].map((i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FBBC04" aria-hidden>
                  <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
              <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden>
                <defs>
                  <linearGradient id="halfStarReviewsPill">
                    <stop offset="50%" stopColor="#FBBC04" />
                    <stop offset="50%" stopColor="#E5E7EB" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#halfStarReviewsPill)"
                  d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                />
              </svg>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#E5E7EB" aria-hidden>
                <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </span>
            <span className="text-sm font-bold text-moss-900">3.5</span>
          </div>

          <h2 className="h-display mt-6 text-3xl md:text-4xl lg:text-5xl">What Our Clients Say</h2>
          <p className="mt-4 max-w-2xl text-lg text-moss-900/70">
            Don&apos;t just take our word for it — hear from the homeowners we&apos;ve worked with across Essex County.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="flex flex-col rounded-2xl bg-white p-6 md:p-7 ring-1 ring-moss-100 shadow-soft"
            >
              <div className="flex items-start justify-between">
                <StarRow />
                <GoogleG size={22} />
              </div>

              <p className="mt-5 text-moss-900/85 leading-relaxed">
                {r.text}{" "}
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-moss-700 hover:text-moss-800"
                >
                  Read more
                </a>
              </p>

              <div className="mt-6 pt-5 border-t border-moss-100 flex items-center gap-3">
                <div
                  className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-white text-sm font-bold ${r.avatar}`}
                  aria-hidden
                >
                  {r.initials}
                </div>
                <div>
                  <div className="font-semibold text-moss-900">{r.name}</div>
                  <div className="text-xs text-moss-900/60">{r.date}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-moss-700 hover:text-moss-900"
          >
            <GoogleG size={16} />
            See all reviews on Google
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
