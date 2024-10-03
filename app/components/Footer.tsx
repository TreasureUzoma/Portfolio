const Footer = () => {
    const iconStyle = "rounded-full border border-1 border-[#0a1c20] px-4 p-3 text-sm bg-[#0a1c20] text-[#34afcb] hover:border-[#34afcb] hover:bg-[#34afcb] hover:text-[#0a1c20]";
    return (
        <footer>
            <div className="flex justify-center py-3 font-rubik">
                <div className="my_fixed_width text-center py-5">
                    <h2 className="font-bold text-2xl font-clash">
                        <span>Start a project</span>
                        <span className="animate-bounce inline-block">🚀</span>
                    </h2>
                    <p className="text-[#808e91] font-rubik text-sm my-2">
                        Interested in working together? We should queue up a
                        time to chat. I’ll buy the coffee.
                    </p>
                    <hr className="my-[2.7rem] border-[#4c5a5d] inline-block w-[65%]" />
                    <div className=" flex justify-center items-center flex-col md:space-x-4 md:flex-row md:flex-wrap">
                        <div className="flex justify-center items-center space-x-4 mb-4 md:mb-0">
                            <a
                                href="https://www.facebook.com/profile.php?id=100085862181551"
                                className={iconStyle}
                            >
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a
                                href="https://twitter.com/TreasureUzoma1"
                                className={iconStyle}
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a
                                href="https://www.instagram.com/naira_jasper"
                                className={iconStyle}
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                        <div className="flex justify-center items-center space-x-4">
                            <a
                                href="https://www.github.com/TreasureUzoma"
                                className={iconStyle}
                            >
                                <i className="fab fa-github"></i>
                            </a>
                            <a
                                href="https://wa.me/+2349133354993"
                                className={iconStyle}
                            >
                                <i className="fab fa-whatsapp"></i>
                            </a>
                            <a
                                href="mailto: treasureuzoma650@gmail.com"
                                className={iconStyle}
                            >
                                <i className="fa fa-envelope"></i>
                            </a>
                        </div>
                    </div>
                    <div className="text-white font-bold text-sm mt-[5rem] my-[2rem]">
                        <p>&copy; twentytwentyfour</p>
                        <p className="mt-4">Treasure Uzoma</p>
                    </div>
                    <small className="py-3">Design inspired by <a href="https://vickyjay.vercel.app" target="_blank" className="font-bold"
                        > VickyJay</a>
                    </small>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
