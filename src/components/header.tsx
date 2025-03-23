import { Separator } from "@/components/ui/separator";
import Link from 'next/link';
import { TITLE } from "@/constants";
import { MENU_ITEMS } from "@/constants/header";
import { Fragment } from "react";

const Header = () => {
    return (
        <div className="h-16 border-b bg-background">
            <div className="container flex justify-between items-center h-full">
                <h1 className="text-2xl font-bold">
                    <Link href="/">{TITLE}</Link>
                </h1>
                <div className="flex gap-4 h-1/3" >
                    {MENU_ITEMS.map((it, idx) => (
                        <Fragment key={it.href}>
                            {idx !== 0 && <Separator orientation="vertical" />}
                            <Link href={it.href}>{it.label}</Link>
                        </Fragment>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Header;
