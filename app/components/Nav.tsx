const Nav = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-5 bg-transparent bg-opacity-60 backdrop-filter backdrop-blur-md">
            <div className="flex justify-center w-full">
                <div className="flex items-center justify-between my_fixed_width items-center">
                    <span className="text-base font-bold font-clash">
                        Treasure Uzoma ⚡
                    </span>
                    <a
                        href="https://www.github.com/TreasureUzoma"
                        target="_blank"
                    >
                        <i className="fab fa-github text-[1.28rem] hover:text-[1.33rem]"></i>
                    </a>
                </div>
            </div>
        </nav>
    );
};
export default Nav;
