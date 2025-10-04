import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="w-full px-4 md:px-8 lg:px-16 py-24 flex items-center justify-center">
      <div className="max-w-4xl text-center space-y-6">
        <h1 className="text-4xl md:text-6xl">
          Hi, I'm <span className="text-primary">Natsume Wu</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-muted-foreground">
          CS and Chemistry @ Yale University
        </h2>
        {/* <Card>
          <CardContent className="pt-6"> */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          I'm a senior at Yale studying computer science and chemistry! I'm passionate about learning and building new things, and I'm currently learning
          more about full-stack development. Outside of work, I love to cook and eat new food. Please send me new recipes!
          </p>
      </div>
    </section>
    
  );
}
