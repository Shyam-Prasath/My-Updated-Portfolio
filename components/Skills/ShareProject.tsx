type ShareProjectProps = {
  githubUrl?: string;
  liveUrl?: string;
};

const ShareProject = ({ githubUrl, liveUrl }: ShareProjectProps) => {
  return (
    <>
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Repository"
          className="bg-gray-light dark:bg-gray-dark mb-3 inline-flex h-9 w-9 items-center justify-center rounded-sm text-body-color duration-300 hover:bg-primary hover:text-white dark:hover:bg-primary sm:ml-3"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0.5C5.73 0.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.95.57.1.78-.25.78-.55v-2.02c-3.2.7-3.87-1.38-3.87-1.38-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.72-1.53-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.67.41.36.78 1.08.78 2.18v3.23c0 .3.2.65.79.54 4.56-1.53 7.84-5.85 7.84-10.94C23.5 5.74 18.27.5 12 .5z" />
          </svg>
        </a>
      )}

      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Live Project"
          className="bg-gray-light dark:bg-gray-dark mb-3 ml-3 inline-flex h-9 w-9 items-center justify-center rounded-sm text-body-color duration-300 hover:bg-primary hover:text-white dark:hover:bg-primary"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
            <path d="M5 5h6V3H3v8h2V5zm14 14h-6v2h8v-8h-2v6zM5 13H3v8h8v-2H5v-6z" />
          </svg>
        </a>
      )}
    </>
  );
};

export default ShareProject;
