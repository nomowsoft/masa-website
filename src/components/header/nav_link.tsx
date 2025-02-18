"use client"
import Navitem from "./nav_item";

const menuItems = [
    { id: 1, name: "الرئسية", href: "/", isActive: true },
    { id: 2, name: "الخدمات", href: "#", isActive: false },
    { id: 3, name: "القطاعات", href: "#", isActive: false },
    { id: 4, name: "قصص النجاح", href: "#", isActive: false },
];

const Navlink = () => {
    return (
        <ul className="flex flex-col mt-4 text-lg lg:flex-row lg:mt-0">
            {menuItems.map((item) => (
                <Navitem
                    name={item.name}
                    key={item.id}
                    href={item.href}
                />
            ))}
        </ul>
    )
}

export default Navlink