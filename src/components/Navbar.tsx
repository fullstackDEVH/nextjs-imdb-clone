import NavbarItem from "./NavbarItem";

const Navbar = () => {
    return (
        <div className="navbar dark:bg-gray-600 bg-amber-100 lg:text-lg py-4">
            <div className="flex justify-center gap-4">
                <NavbarItem title="Trending" param="fetchTrending" />
                <NavbarItem title="Top Rated" param="fetchTopRated" />

            </div>
        </div>
    )
}

export default Navbar;