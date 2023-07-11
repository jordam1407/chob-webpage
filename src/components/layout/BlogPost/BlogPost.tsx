export default function BlogPost({
    authorName,
    authorTitle,
    title,
    date,
    children,
}: {
    authorName: string
    authorTitle: string
    title: string
    date: string
    children: React.ReactNode
}) {
    return (
        <main className="pb-16 lg:pb-24">
            <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
                <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg dark:format-invert">
                    <header className="mb-4 lg:mb-6 not-format">
                        <address className="flex items-center mb-6 not-italic">
                            <div className="inline-flex items-center mr-3 text-sm text-gray-100">
                                <div>
                                    <a
                                        href="linkedin.com/in/jordammendes/"
                                        target="_blank"
                                        rel="author"
                                        className="text-xl font-bold text-neutral-100">
                                        {authorName}
                                    </a>
                                    <p className="text-base font-light text-neutral-100">{authorTitle}</p>
                                    <p className="text-base font-light text-neutral-100">
                                        <time dateTime="2022-02-08" title="February 8th, 2022">
                                            {date}
                                        </time>
                                    </p>
                                </div>
                            </div>
                        </address>
                        <h1 className="mb-4 text-3xl font-extrabold leading-tight text-neutral-100 lg:mb-6 lg:text-5xl">
                            {title}
                        </h1>
                    </header>
                    {children}
                </article>
            </div>
        </main>
    )
}
