"use client"
import Navitem from "./nav_item";

const menuItems = [
    { name: "الرئسية", href: "/", isActive: true },
    { name: "الباقات", href: "/packages", isActive: false },
    { name: "الدعم الفني", href: "http://support.masa.sa", isActive: false },
];

const Navlink = () => {
    return (
        <ul className="flex flex-col mt-4 text-lg lg:flex-row lg:mt-0">
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