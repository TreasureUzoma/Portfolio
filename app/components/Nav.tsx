const Nav = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-5 bg-transparent bg-opacity-60 backdrop-filter backdrop-blur-md">
            <div className="flex justify-center w-full">
                <div className="flex items-center justify-between my_fixed_width items-center">
                    <b className="text-base font-bold font-lexend">
                        Treasure Uzoma ⚡
                    </b>
                    <a
                        href="https://www.github.com/TreasureUzoma"
                        target="_blank"
                    >
                        <i className="fab fa-github text-[1.28rem]"></i>
                    </a>
                </div>
            </div>
        </nav>
    );
};
export default Nav;
