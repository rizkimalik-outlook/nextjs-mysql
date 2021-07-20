import Link from "next/link";

export default function Navbar() {
    return (
        <div className="bg-indigo-800">
            <div className="container">
                <div className="flex items-center justify-between">
                    <div className="text-white tracking-tighter">
                        NextJS MySQL
                    </div>
                    <div className="flex items-center">
                        <Link href="/">
                            <a className="text-blue-100 hover:text-white py-5 px-3">Home</a>
                        </Link>
                        <Link href="/about">
                            <a className="text-blue-100 hover:text-white py-5 px-3">About</a>
                        </Link>
                        <Link href="/barang">
                            <a className="text-blue-100 hover:text-white py-5 px-3">Barang</a>
                        </Link>
                        <Link href="/login">
                            <a className="text-blue-100 hover:text-white py-5 px-3">Login</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
