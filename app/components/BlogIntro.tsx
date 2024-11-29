const BlogIntro = () => {
    return (
        <section>
            <div className="flex justify-center py-5">
                <div className="my_fixed_width">
                    <h2 className="text-2xl font-bold font-clash">
                        Blog
                        <span className="inline-block animate-bounce">✍️</span>
                    </h2>
                    <p className="text-sm text-[#808e91] font-rubik my-3">
                        I write cool stories about tech, lifestyle and general
                        knowledge <a
                            href="https://treasureuzomablog.vercel.app"
                            target="_blank"
                            className="text-green hover:text-[rgba(52,175,203,0.8)] font-bold"
                        >
                             here.
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};
export default BlogIntro;
