import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Treasure Uzoma - Portfolio",
    description:
        "3+ years of experience. Specialized in building products, while ensuring a seamless web experience for clients across Africa.",
    themeColor: "#061417",
    keywords: "Portfolio, Web Development, UX/UI design, Treasure Uzoma, TreasureUzoma, Frontend Developer, treasureuzoma, Treasure Dev, Treasure Uzoma Front-End Developer, Treasure Uzoma Programmer, Nigeria Programmer",
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
                url: "https://treasureuzoma.netlify.app/images/343ppm.jpg", 
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
                <meta name="google-site-verification" content="ZuNx7mDeY7yQfX8ZKLR4FBsXcFZPFWzbXILnaAGmdMo" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
                />
                <link
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet"
                />
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
