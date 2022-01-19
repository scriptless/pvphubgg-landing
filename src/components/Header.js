import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="triangle"></div>
            <Link to="/" className="z-10">
                <img className="z-10 -mt-32 md:-mt-36 w-48 md:w-64 h-auto" src="/logo-2.png" alt="logo"/>
            </Link>
        </div>
    )
}