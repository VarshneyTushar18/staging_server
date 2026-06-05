import Link from "next/link";
import Style from "./breadcrumbs.module.css";
import { FaAngleRight } from "react-icons/fa";

export default function Breadcrumb({ pageName, parentName, parentHref }) {
    const pageLabel =
        typeof pageName === "string" && pageName.length > 72
            ? `${pageName.slice(0, 72)}…`
            : pageName;

    return (
        <div className={Style.BreadcrumbBg}>
            <div className="container">
                <div className="row">
                    <ul className={`breadcrumb flex space-x-2 ${Style.trail}`}>
                        {/* Home */}
                        <li>
                            <Link href="/">Home</Link>
                        </li>

                        {/* Parent */}
                        {parentName && (
                            <>
                                <FaAngleRight />
                                <li>
                                    {parentHref ? (
                                        <Link href={parentHref}>{parentName}</Link>
                                    ) : (
                                        parentName
                                    )}
                                </li>
                            </>
                        )}

                        {/* Page name */}
                        <FaAngleRight />
                        <li className={Style.pageName}>{pageLabel}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
