import { Linkedin, Mail } from 'lucide-react';
import SimpleGithub from './icons/SimpleGithub';
import { Button } from './ui/button';

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-6 flex h-16 items-center justify-between">
        <button 
          onClick={() => scrollToSection('home')}
          className="transition-opacity hover:opacity-70"
        >
          <span>Natsume Wu</span>
        </button>
        
        <nav className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => scrollToSection('education')}
            className="transition-colors hover:text-foreground/80"
          >
            Education
          </button>
          <button 
            onClick={() => scrollToSection('experience')}
            className="transition-colors hover:text-foreground/80"
          >
            Experience
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="transition-colors hover:text-foreground/80"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className="transition-colors hover:text-foreground/80"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="transition-colors hover:text-foreground/80"
          >
            About Me
          </button>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/nwu698" target="_blank" rel="noopener noreferrer">
              <SimpleGithub className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.linkedin.com/in/natsumewu/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:natsume.wu@yale.edu">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
