import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

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
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4" style={{ textAlign: 'left' }}>
              <p>
                Write a compelling introduction about yourself. Talk about your background, 
                your journey into your field, and what drives you professionally.
              </p>
              <p>
                Highlight your key strengths, your approach to work, and what you bring 
                to the table. This is your chance to show personality while maintaining 
                professionalism.
              </p>
              <p>
                You can also mention your interests outside of work, what you're currently 
                learning, or what goals you're working towards.
              </p>
            </div>
          </CardContent>
        </Card>
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
