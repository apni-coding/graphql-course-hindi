import React from "react";

const repositories = [
  {
    name: "1. Roadmap of GraphQL",
    user: "apni-coding",
    repo: "graphql-course-hindi",
    branch: "main",
    notesUrl: "https://example.com/notes/introduction-to-react.pdf",
  },
];

const RepoList = ({ setIsRepoShow }) => {
  const handleDownloadZip = (user, repo, branch) => {
    const url = `https://github.com/${user}/${repo}/archive/refs/heads/${branch}.zip`;
    triggerDownload(url, `${repo}-${branch}.zip`);
  };

  const handleDownloadNotes = (notesUrl, title) => {
    if (!notesUrl) {
      alert(`No PDF notes available for: ${title}`);
      return;
    }
    triggerDownload(notesUrl);
  };

  const triggerDownload = (url, filename) => {
    const a = document.createElement("a");
    a.href = url;
    if (filename) a.download = filename;
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section className="repo‑wrapper">
      <h1 className="repo‑title">📦 Class-wise Code & Notes Downloader</h1>

      <ul className="repo‑list">
        {repositories.map((r, index) => (
          <li key={`${r.repo}-${r.branch}`} className="repo‑item">
            <div className="repo‑info">
              <p className="repo‑name">{r.name}</p>
              <a
                className="repo‑link"
                href={`https://github.com/${r.user}/${r.repo}/tree/${r.branch}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code on GitHub →
              </a>
            </div>

            <div className="repo‑actions">
              <button
                className="download‑btn"
                onClick={() => handleDownloadZip(r.user, r.repo, r.branch)}
              >
                ⬇️ Download Code ZIP
              </button>
              <button
                className="download‑btn"
                onClick={() => handleDownloadNotes(r.notesUrl, r.name)}
              >
                📄 Download PDF Notes
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="center">
        <button className="home-cta" onClick={() => setIsRepoShow(false)}>
          Go to Curriculum
        </button>
      </div>
    </section>
  );
};

export default RepoList;
