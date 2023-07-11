export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="max-w-2xl mx-auto py-12 px-4 prose-a:text-gray-100 prose-headings:text-gray-100 prose-strong:text-gray-100">
            {children}
        </div>
    )
}
