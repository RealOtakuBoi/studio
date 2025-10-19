import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/enactus.hansraj/?hl=en', name: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/enactus-hansraj?originalSubdomain=in', name: 'LinkedIn' },
  ];

  return (
    <footer className="border-t bg-muted">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-2">
               <Image src="/enactus-logo.png" alt="Enactus Hansraj Logo" width={140} height={40} />
            </Link>
            <p className="mt-4 text-center text-sm text-muted-foreground md:text-left">
              Entrepreneurial action for a better world.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-center md:text-left">
             <div>
                <h3 className="font-headline font-semibold">Quick Links</h3>
                 <ul className="mt-4 space-y-2">
                    <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
                    <li><Link href="/#projects" className="text-sm text-muted-foreground hover:text-primary">Projects</Link></li>
                    <li><Link href="/team" className="text-sm text-muted-foreground hover:text-primary">Team</Link></li>
                     <li><Link href="/impact" className="text-sm text-muted-foreground hover:text-primary">Impact</Link></li>
                     <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">Blog</Link></li>
                    <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
                 </ul>
             </div>
             <div>
                <h3 className="font-headline font-semibold">Connect</h3>
                 <ul className="mt-4 space-y-2">
                    <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Join Us</Link></li>
                    <li><Link href="/newsletter" className="text-sm text-muted-foreground hover:text-primary">Newsletter</Link></li>
                 </ul>
             </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
             <h3 className="font-headline font-semibold">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <social.icon className="h-6 w-6" />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Enactus Hansraj. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
