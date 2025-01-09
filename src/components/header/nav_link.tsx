"use client"
import Navitem from "./nav_item";

const menuItems = [
    { name: "الرئسية", href: "/", isActive: true },
    { name: "الباقات", href: "/packages", isActive: false },
];

const Navlink = () => {
    return (
        <ul className="flex flex-col mt-4 text-lg lg:flex-row lg:space-x-9 lg:mt-0">
            {menuItems.map((item) => (
                <Navitem
                    name={item.name}
                    key={item.name}
                    href={item.href}
                />
            ))}
        </ul>
    )
}

export default Navlink