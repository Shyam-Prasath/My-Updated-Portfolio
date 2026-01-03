import RelatedProject from "@/components/Skills/RelatedProject";
import ShareProject from "@/components/Skills/ShareProject";
import TagButton from "@/components/Skills/TagButton";
import { getImagePath } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Connect360 | Shyam Prasath",
};

const Connect360Page = () => {
    return (
        <section className="overflow-hidden pb-[120px] pt-[180px]">
        <div className="container">
            <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-8/12">
                <article>
                <h1 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
                    Connect360 — Decentralized Social & Collaboration Platform
                </h1>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white/10">
                    <div className="flex flex-wrap items-center">
                    <div className="mb-5 mr-10 flex items-center">
                        <div className="mr-4 relative h-10 w-10 overflow-hidden rounded-full">
                        <Image
                            src={getImagePath("/images/tracebloom/Avatar.svg")}
                            alt="avatar"
                            fill
                        />
                        </div>
                        <span className="text-base font-medium text-body-color">
                            By <span className="text-black dark:text-white">Shyam Prasath</span>
                        </span>
                    </div>
                    <p className="mb-5 flex items-center text-base font-medium text-body-color">
                        Aug 2025 • Full Stack + Web3 Collaboration Platform
                    </p>
                    </div>
                    <span className="inline-flex rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">
                        Decentralized Communication
                    </span>
                </div>
                <p className="mb-10 text-lg leading-relaxed text-body-color">
                    Connect360 is a decentralized social networking and collaboration
                    platform designed for secure communication, real-time
                    interaction, and document sharing. It blends Web3 authentication,
                    modern UI/UX, and real-time technologies to create a trustless,
                    privacy-first collaboration environment.
                </p>
                <div className="mb-10 overflow-hidden rounded">
                    <div className="relative aspect-[97/44] w-full">
                    <Image
                        src={getImagePath("/images/tracebloom/Connect360.png")}
                        alt="Connect360 Dashboard"
                        fill
                        className="object-cover"
                    />
                    </div>
                </div>
                <p className="mb-8 text-lg leading-relaxed text-body-color">
                    Users can connect via wallet-based or OTP authentication, chat
                    securely, initiate peer-to-peer video calls, exchange files, and
                    collaborate in a fully decentralized ecosystem. The platform
                    ensures secure identity ownership and encrypted communication
                    using blockchain and WebRTC technologies.
                </p>
                <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">
                    Core Features & Capabilities
                </h3>
                <ul className="mb-10 list-disc list-inside text-body-color text-lg">
                    <li>MetaMask wallet login with Ethereum / Polygon support</li>
                    <li>Email & OTP-based authentication with expiry handling</li>
                    <li>Role-based redirection after profile completion</li>
                    <li>Real-time chat with file & folder uploads</li>
                    <li>Peer-to-peer WebRTC video calling</li>
                    <li>Connection request management with notifications</li>
                    <li>Decentralized document sharing via IPFS / cloud storage</li>
                </ul>
                <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
                        <p className="text-center text-base font-medium italic text-body-color">
                        “Connect360 redefines digital collaboration by combining
                        blockchain-based identity, real-time communication, and secure
                        file sharing into a single decentralized platform.”
                        </p>
                        <span className="absolute left-0 top-0 z-[-1]">
                        <svg
                            width="132"
                            height="109"
                            viewBox="0 0 132 109"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            opacity="0.5"
                            d="M33.0354 90.11C19.9851 102.723 -3.75916 101.834 -14 99.8125V-15H132C131.456 -12.4396 127.759 -2.95278 117.318 14.5117C104.268 36.3422 78.7114 31.8952 63.2141 41.1934C47.7169 50.4916 49.3482 74.3435 33.0354 90.11Z"
                            fill="url(#paint0_linear_111:606)"
                            />
                            <path
                            opacity="0.5"
                            d="M33.3654 85.0768C24.1476 98.7862 1.19876 106.079 -9.12343 108.011L-38.876 22.9988L100.816 -25.8905C100.959 -23.8126 99.8798 -15.5499 94.4164 0.87754C87.5871 21.4119 61.9822 26.677 49.5641 38.7512C37.146 50.8253 44.8877 67.9401 33.3654 85.0768Z"
                            fill="url(#paint1_linear_111:606)"
                            />
                            <defs>
                            <linearGradient
                                id="paint0_linear_111:606"
                                x1="94.7523"
                                y1="82.0246"
                                x2="8.40951"
                                y2="52.0609"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="white" stopOpacity="0.06" />
                                <stop
                                offset="1"
                                stopColor="white"
                                stopOpacity="0"
                                />
                            </linearGradient>
                            <linearGradient
                                id="paint1_linear_111:606"
                                x1="90.3206"
                                y1="58.4236"
                                x2="1.16149"
                                y2="50.8365"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="white" stopOpacity="0.06" />
                                <stop
                                offset="1"
                                stopColor="white"
                                stopOpacity="0"
                                />
                            </linearGradient>
                            </defs>
                        </svg>
                        </span>
                        <span className="absolute bottom-0 right-0 z-[-1]">
                        <svg
                            width="53"
                            height="30"
                            viewBox="0 0 53 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                            opacity="0.8"
                            cx="37.5"
                            cy="37.5"
                            r="37.5"
                            fill="#4A6CF7"
                            />
                            <mask
                            id="mask0_111:596"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="75"
                            height="75"
                            >
                            <circle
                                opacity="0.8"
                                cx="37.5"
                                cy="37.5"
                                r="37.5"
                                fill="#4A6CF7"
                            />
                            </mask>
                            <g mask="url(#mask0_111:596)">
                            <circle
                                opacity="0.8"
                                cx="37.5"
                                cy="37.5"
                                r="37.5"
                                fill="url(#paint0_radial_111:596)"
                            />
                            <g opacity="0.8" filter="url(#filter0_f_111:596)">
                                <circle
                                cx="40.8089"
                                cy="19.853"
                                r="15.4412"
                                fill="white"
                                />
                            </g>
                            </g>
                            <defs>
                            <filter
                                id="filter0_f_111:596"
                                x="4.36768"
                                y="-16.5881"
                                width="72.8823"
                                height="72.8823"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                            >
                                <feFlood
                                floodOpacity="0"
                                result="BackgroundImageFix"
                                />
                                <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                                />
                                <feGaussianBlur
                                stdDeviation="10.5"
                                result="effect1_foregroundBlur_111:596"
                                />
                            </filter>
                            <radialGradient
                                id="paint0_radial_111:596"
                                cx="0"
                                cy="0"
                                r="1"
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(37.5 37.5) rotate(90) scale(40.2574)"
                            >
                                <stop stopOpacity="0.47" />
                                <stop offset="1" stopOpacity="0" />
                            </radialGradient>
                            </defs>
                        </svg>
                        </span>
                    </div>

                <div className="flex flex-wrap items-center justify-between">
                    <div className="mb-5">
                        <h4 className="mb-3 text-sm font-medium text-body-color">
                            Technologies Used
                        </h4>
                        <div className="flex flex-wrap">
                            <TagButton text="React" />
                            <TagButton text="Next.js" />
                            <TagButton text="WebRTC" />
                            <TagButton text="Socket.IO" />
                            <TagButton text="MetaMask" />
                            <TagButton text="IPFS" />
                            <TagButton text="Tailwind CSS" />
                            <TagButton text="Node.js/Express.js" />
                            <TagButton text="Cloudinary" />
                            <TagButton text="MongoDB" />
                        </div>
                    </div>

                    <div className="mb-5">
                    <h5 className="mb-3 text-sm font-medium text-body-color sm:text-left">
                        Project URL
                    </h5>
                    <div className="flex sm:justify-end">
                        <ShareProject
                            githubUrl="https://github.com/Shyam-Prasath/Connect-360-Frontend"
                            liveUrl="https://connect-360-frontend.vercel.app/login"
                        />
                    </div>
                    </div>
                </div>
                </article>
            </div>

            <aside className="w-full px-4 lg:w-4/12">

                <div className="mb-10 mt-12 rounded-sm bg-white p-6 shadow-three dark:bg-gray-dark dark:shadow-none lg:mt-0">
                    <div className="flex items-center justify-between">
                    <input
                        type="text"
                        placeholder="Search here..."
                        className="mr-4 w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    />
                    <button
                        aria-label="search button"
                        className="flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-sm bg-primary text-white"
                    >
                        <svg
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M19.4062 16.8125L13.9375 12.375C14.9375 11.0625 15.5 9.46875 15.5 7.78125C15.5 5.75 14.7188 3.875 13.2812 2.4375C10.3438 -0.5 5.5625 -0.5 2.59375 2.4375C1.1875 3.84375 0.40625 5.75 0.40625 7.75C0.40625 9.78125 1.1875 11.6562 2.625 13.0937C4.09375 14.5625 6.03125 15.3125 7.96875 15.3125C9.875 15.3125 11.75 14.5938 13.2188 13.1875L18.75 17.6562C18.8438 17.75 18.9688 17.7812 19.0938 17.7812C19.25 17.7812 19.4062 17.7188 19.5312 17.5938C19.6875 17.3438 19.6562 17 19.4062 16.8125ZM3.375 12.3438C2.15625 11.125 1.5 9.5 1.5 7.75C1.5 6 2.15625 4.40625 3.40625 3.1875C4.65625 1.9375 6.3125 1.3125 7.96875 1.3125C9.625 1.3125 11.2812 1.9375 12.5312 3.1875C13.75 4.40625 14.4375 6.03125 14.4375 7.75C14.4375 9.46875 13.7188 11.125 12.5 12.3438C10 14.8438 5.90625 14.8438 3.375 12.3438Z"
                            fill="white"
                        />
                        </svg>
                    </button>
                    </div>
                </div>
                <div className="mb-10 rounded-sm bg-white shadow-three dark:bg-gray-dark">
                <h3 className="border-b px-8 py-4 text-lg font-semibold dark:border-white/10">
                    Other Projects
                </h3>
                <ul className="p-8">
                    <li className="mb-6 border-b pb-6 dark:border-white/10">
                    <RelatedProject
                        title="TraceBloom"
                        image={getImagePath("/images/tracebloom/Thumbnail.png")}
                        slug="/TraceBloom"
                        date="Oct 2025"
                    />
                    </li>
                    <li className="mb-6 border-b pb-6 dark:border-white/10">
                    <RelatedProject
                        title="Web3 Deployer"
                        image={getImagePath("/images/tracebloom/Web3deployer.png")}
                        slug="/Web3Deployer"
                        date="Feb 2025"
                    />
                    </li>
                    <li className="mb-6 border-b pb-6 dark:border-white/10">
                    <RelatedProject
                        title="MediBook"
                        image={getImagePath("/images/tracebloom/Medibook.png")}
                        slug="/MediBook"
                        date="May 2024"
                    />
                    </li>
                    <li className="mb-6 border-b pb-6 dark:border-white/10">
                    <RelatedProject
                        title="TechStrike"
                        image={getImagePath("/images/tracebloom/Techstrike.png")}
                        slug="/TechStrike"
                        date="July 2025"
                    />
                    </li>
                    <li>
                    <RelatedProject
                        title="Real-Time Chat Application"
                        image={getImagePath("/images/tracebloom/Realchat.png")}
                        slug="/RealTime"
                        date="Sep 2023"
                    />
                    </li>
                </ul>
                </div>
                <div className="mb-10 rounded-sm bg-white shadow-three dark:bg-gray-dark dark:shadow-none">
                    <h3 className="border-b border-body-color border-opacity-10 px-8 py-4 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
                    Project Categories
                    </h3>
                    <ul className="px-8 py-6">
                    <li>
                        <a
                        href="#"
                        className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary"
                        >
                        Decentralized Social Apps
                        </a>
                    </li>
                    <li>
                        <a
                        href="#"
                        className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary"
                        >
                        Real-Time Communication
                        </a>
                    </li>
                    <li>
                        <a
                        href="#"
                        className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary"
                        >
                        Web3 Authentication
                        </a>
                    </li>
                    <li>
                        <a
                        href="#"
                        className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary"
                        >
                        Collaboration Platforms
                        </a>
                    </li>
                    <li>
                        <a
                        href="#"
                        className="mb-3 inline-block text-base font-medium text-body-color hover:text-primary"
                        >
                        Full Stack Systems
                        </a>
                    </li>
                    </ul>
                </div>
                <div className="rounded-sm bg-white shadow-three dark:bg-gray-dark">
                <h3 className="border-b px-8 py-4 text-lg font-semibold dark:border-white/10">
                    Tags
                </h3>
                <div className="flex flex-wrap px-8 py-6">
                    <TagButton text="Web3" />
                    <TagButton text="MetaMask" />
                    <TagButton text="Socket.IO" />
                    <TagButton text="WebRTC" />
                    <TagButton text="Decentralized Storage" />
                    <TagButton text="Secure Communication" />
                    <TagButton text="Cloudinary" />
                </div>
                </div>
            </aside>
            </div>
        </div>
        </section>
    );
};

export default Connect360Page;