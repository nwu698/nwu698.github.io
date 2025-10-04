import { Card, CardContent } from './ui/card';

export function About() {
  return (
    <section id="about" className="container py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl mb-8">About Me</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
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
      </div>
    </section>
  );
}
