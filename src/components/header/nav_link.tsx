"use client"
import Navitem from "./nav_item";

const menuItems = [
    { id: 1, name: "الرئيسية", href: "/", isActive: true },
    { id: 2, name: "الخدمات", href: "/services", isActive: false },
    { id: 3, name: "القطاعات", href: "/sectors", isActive: false },
    { id: 4, name: "الشركاء", href: "/partners", isActive: false },
    // { id: 5, name: "قصص النجاح", href: "/success_story", isActive: false },
];

const Navlink = ({ closeMenu }: { closeMenu?: () => void }) => {
    return (
        <ul className="flex flex-col mt-4 text-lg lg:flex-row lg:mt-0">
            {menuItems.map((item) => (
                <Navitem
                    name={item.name}
                    key={item.id}
                    href={item.href}
                    closeMenu={closeMenu}
                />
            ))}
        </ul>
    )
}

export default Navlink