import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { GraduationCap } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="w-full px-4 md:px-8 lg:px-16 py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl mb-8">About Me</h2>
        <div className="space-y-6">
            <Card>
                <CardTitle></CardTitle>
                <CardContent>
                  <p>Outside of work, I love to create new things.</p>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
