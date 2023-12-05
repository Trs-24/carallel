"use client"

import styles from "./menu.module.css"
import { GoHome } from "react-icons/go"
import { LuBook } from "react-icons/lu"
import { BsCheck2Circle } from "react-icons/bs"
import { AiOutlineTool } from "react-icons/ai"
import { FcOnlineSupport } from "react-icons/fc"
import { PATHNAMES } from "@/lib/constants"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Menu = () => {
    const pathname = usePathname()

    const menuItems = [
        {
            icon: <GoHome />,
            label: PATHNAMES.home.label,
            path: PATHNAMES.home.path
        },
        {
            icon: <LuBook />,
            label: PATHNAMES.library.label,
            path: PATHNAMES.library.path
        },
        {
            icon: <BsCheck2Circle />,
            label: PATHNAMES.plan.label,
            path: PATHNAMES.plan.path
        },
        {
            icon: <AiOutlineTool />,
            label: PATHNAMES.tools.label,
            path: PATHNAMES.tools.path
        },
        {
            icon: <FcOnlineSupport />,
            label: PATHNAMES.support.label,
            path: PATHNAMES.support.path
        }
    ]

    return (
        <div className={styles.main}>
            {menuItems.map((el) => (
                <Link
                    href={el.path}
                    key={el.label}
                    className={`${styles.menuItem} ${pathname === el.path ? styles.active : ""}`}
                >
                    {el.icon}
                    <span>{el.label}</span>
                </Link>
            ))}
        </div>
    )
}

export default Menu
