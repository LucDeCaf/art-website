import Link from "next/link";
import { ReactNode } from "react";

export default function Navbar() {
  return (
    <nav className="grid grid-cols-4 bg-slate-900 text-white h-20 w-full sticky top-0 z-50">
      <NavItem path="/">Home</NavItem>
      <NavItem path="/posts">Posts</NavItem>
      <NavItem path="/about">About</NavItem>
      <NavItem path="/login">Login</NavItem>
    </nav>
  );
}

function NavItem({ children, path }: { children: ReactNode; path: string }) {
  return (
    <Link href={path}>
      <div className="flex items-center justify-center hover:bg-slate-600 transition-colors ease-in-out font-semibold text-3xl w-full h-full">
        {children}
      </div>
    </Link>
  );
}
