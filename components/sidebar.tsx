"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { 
  User, 
  Code2, 
  Briefcase, 
  Mail, 
  GraduationCap,
  Menu,
  X,
  Home
} from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  {
    name: "About",
    href: "/about",
    icon: User,
  },
  {
    name: "Skills",
    href: "/skills",
    icon: Code2,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: Briefcase,
  },
  {
    name: "Experience",
    href: "/experience",
    icon: GraduationCap,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: Mail,
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [pathname]);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 right-4 z-50 md:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </Button>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-background/80 backdrop-blur-sm border-r transform transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="flex flex-col h-full py-8">
          <div className="px-6 mb-8 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <Home className="h-4 w-4 text-primary-foreground" />
              </div>
              <h2 className="text-xl font-bold">John Doe</h2>
            </Link>
            <div className="md:hidden">
              <ThemeToggle />
            </div>
          </div>

          <nav className="flex-1 px-4">
            <ul className="space-y-1">
              {navItems.map((item, index) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center px-4 py-3 text-sm rounded-xl transition-all",
                      pathname === item.href
                        ? "bg-primary text-primary-foreground font-medium"
                        : "hover:bg-muted text-foreground/80 hover:text-foreground"
                    )}
                  >
                    <motion.div
                      initial={{ scale: 1 }}
                      animate={{ scale: pathname === item.href ? [1, 1.2, 1] : 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="mr-3 h-5 w-5" />
                    </motion.div>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="px-6 mt-auto">
            <div className="hidden md:block mb-6">
              <ThemeToggle />
            </div>
            <div className="pt-4 border-t border-border/50">
              <p className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} John Doe
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}