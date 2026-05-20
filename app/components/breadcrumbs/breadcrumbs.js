import Link from "next/link";
import Style from "./breadcrumbs.module.css";
import { FaAngleRight } from "react-icons/fa";

export default function Breadcrumb({ pageName, parentName }) {
    return (
        <div className={Style.BreadcrumbBg}>
            <div className="container">
                <div className="row">
                    <ul className="breadcrumb flex space-x-2">
                        {/* Home */}
                        <li>
                            <Link href="https://www.tech2globe.com/">Home</Link>
                        </li>

                        {/* Parent (text only, no link) */}
                        {parentName && (
                            <>
                                <FaAngleRight />
                                <li>{parentName}</li>
                            </>
                        )}

                        {/* Page name */}
                        <FaAngleRight />
                        <li>{pageName}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}