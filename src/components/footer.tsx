import { TITLE } from "@/constants";
import { FOOTER_LINKS } from "@/constants/footer";
import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";
import { Fragment } from "react";

const Footer = () => {
    return (
        <div className="border-t bg-background mt-10">
            <div className="container py-20 flex justify-between">
                <h2 className="text-2xl font-bold">
                    <Link href="/">{TITLE}</Link>
                </h2>
                <div className="flex gap-10">
                    {FOOTER_LINKS.map((it, idx) => (
                        <Fragment key={it.title}>
                            {idx !== 0 && <Separator orientation="vertical" className="h-auto w-px bg-border" />}
                            <div>
                                <span>{it.title}</span>
                                <div className="flex flex-col gap-y-2 m-4">
                                    {it.links.map(link => (
                                        <Link href={link.href} key={link.href} target="_blank" rel="noopener noreferrer">{link.label}</Link>
                                    ))}
                                </div>
                            </div>
                        </Fragment>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer;