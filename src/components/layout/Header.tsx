'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Handshake, Menu, ChevronDown, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { projects } from '@/lib/placeholder-data';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/team', label: 'Team' },
  { href: '/success-stories', label: 'Success Stories' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NavLink = ({ href, label, className }: { href: string; label: string; className?: string }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        onClick={() => setMobileMenuOpen(false)}
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary/80',
          isActive ? 'text-primary' : 'text-muted-foreground',
          className
        )}
      >
        {label}
      </Link>
    );
  };
  
  const MobileNavLink = ({ href, label }: { href: string; label: string }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        onClick={() => setMobileMenuOpen(false)}
        className={cn(
          'block rounded-md px-3 py-2 text-base font-medium',
          isActive ? 'bg-accent text-accent-foreground' : 'text-foreground hover:bg-accent/50'
        )}
      >
        {label}
      </Link>
    );
  };

  const ProjectDropdown = ({ isMobile = false }) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={cn(
            'text-sm font-medium transition-colors hover:text-primary/80 data-[state=open]:bg-accent/50',
            pathname.startsWith('/projects') ? 'text-primary' : 'text-muted-foreground',
            isMobile && 'w-full justify-start rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-accent/50'
          )}
        >
          Projects <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {projects.map((project) => (
          <DropdownMenuItem key={project.slug} asChild>
            <Link href={`/projects/${project.slug}`}>{project.name}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center gap-2">
          <Handshake className="h-6 w-6 text-primary" />
          <span className="hidden font-bold sm:inline-block font-headline">Enactus Hansraj</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
          <ProjectDropdown />
        </nav>
        
        <div className="flex flex-1 items-center justify-end">
           {/* Mobile Navigation */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
               <div className="flex items-center justify-between px-2">
                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2">
                  <Handshake className="h-6 w-6 text-primary" />
                  <span className="font-bold font-headline">Enactus Hansraj</span>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                    <X className="h-6 w-6"/>
                    <span className="sr-only">Close menu</span>
                </Button>
               </div>
              <div className="mt-6 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <MobileNavLink key={link.href} href={link.href} label={link.label} />
                ))}
                <ProjectDropdown isMobile={true} />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
