import { Button } from './ui/button';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="container flex min-h-[calc(100vh-4rem)] items-center justify-center">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl md:text-6xl">
          Hi, I'm <span className="text-primary">Your Name</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-muted-foreground">
          Your Professional Title | Software Developer | Designer
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Brief introduction about yourself. What you do, what you're passionate about, 
          and what makes you unique. Keep it concise and engaging.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button size="lg" onClick={() => scrollToSection('projects')}>
            View My Work
          </Button>
          <Button size="lg" variant="outline" onClick={() => scrollToSection('about')}>
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
