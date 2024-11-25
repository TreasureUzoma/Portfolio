import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Treasure Uzoma - Portfolio",
    description:
        "3+ years of experience. Specialized in building products, while ensuring a seamless web experience for clients across Africa.",
    keywords: "Treasure Uzoma, Portfolio, Web Developer, TreasureUzoma, Frontend Developer, treasureuzoma, Treasure Dev, Treasure Uzoma Front-End Developer, Treasure Uzoma Programmer, Nigeria Programmer, Treasure Uzoma Portfolio",
    robots: "index, follow",
    icons: [
        { rel: "icon", url: "/images/favicon.ico" }, 
        { rel: "apple-touch-icon", url: "/images/favicon.ico" },
    ],
    openGraph: {
        title: "Treasure Uzoma - Portfolio",
        description: "3+ years of experience in web development.",
        url: "https://treasureuzoma.netlify.app", 
        images: [
            {
                url: "https://treasureuzoma.netlify.app/images/screenshot.png", 
                alt: "Treasure Uzoma Portfolio Preview",
            },
        ],
    },
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                {/* for google-site-generation, generate yours from google cloud console, for seo */}
                <meta name="google-site-verification" content="ZuNx7mDeY7yQfX8ZKLR4FBsXcFZPFWzbXILnaAGmdMo" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Rubik&display=swap"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Lexend&display=swap"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
