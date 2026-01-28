import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const samplePapers = [
  {
    title: "RIGVid",
    year: 2025,
    link: "https://rigvid-robot.github.io/",
  },
  {
    title: "Mindmap",
    year: 2025,
    link: "https://arxiv.org/abs/2509.20297v2",
  },
  {
    title: "OpenVLA",
    year: 2025,
    link: "https://arxiv.org/abs/2406.09246",
  },
  {
    title: "Diffusion Policy",
    year: 2025,
    link: "https://arxiv.org/abs/2303.04137",
  },
  {
    title: "Flow Matching",
    year: 2025,
    link: "https://arxiv.org/abs/2210.02747",
  },
  {
    title: "Dobb-E",
    year: 2025,
    link: "https://arxiv.org/abs/2311.16098",
  },
]

function groupByYear(papers) {
  return papers.reduce((acc, p) => {
    ;(acc[p.year] = acc[p.year] || []).push(p)
    return acc
  }, {})
}

export default function Papershelf() {
  const grouped = groupByYear(samplePapers)
  const years = Object.keys(grouped).sort((a, b) => b - a)

  return (
    <section className="papershelf">
      <Head>
        <title>Keshav — Papershelf</title>
      </Head>

      <div className="papers-content">
        <Link
          href="/"
          className="nav-link"
          style={{ marginBottom: "12px", display: "inline-block" }}
        >
          ← Home
        </Link>
        <h2>Collection of Papers I've Learned From</h2>

        {years.map((yr) => (
          <section key={yr} className="paper-year-section">
            <h3 className="paper-year">{yr}</h3>

            <div className="paper-grid">
              {grouped[yr].map((p, i) => (
                <a
                  key={`${yr}-${i}`}
                  className="paper-title"
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <article className="paper-card">
                    {p.title}
                  </article>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  )
}
