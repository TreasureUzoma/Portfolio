import { Metadata } from 'next';
export const metadata: Metadata = {
    title: "Treasure Uzoma - Portfolio",
    description:
        "3+ years of experience. Specialized in building products, while ensuring a seamless web experience for clients across Africa.",
    themeColor: "#061417"
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
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
