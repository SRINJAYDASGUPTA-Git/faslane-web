import Footer from "@/components/shared/Footer"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex h-screen flex-col bg-[#f6f6f6]">

            <main className="flex-1 ">
                {children}
            </main>
            <Footer />
        </div>
    )
}
