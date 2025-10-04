import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { GraduationCap } from 'lucide-react';

interface EducationItem {
  degree: string;
  school: string;
  period: string;
  description?: string;
}

const education: EducationItem[] = [
  {
    school: 'Yale University Name',
    degree: 'B.S. in Computer Science and Chemistry',
    period: '2015 - 2019',
    description: 'Focus on software engineering and web development. Dean\'s List multiple semesters.'
  },
];

export function About() {
  return (
    <section id="about" className="container px-6 py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl mb-8">About Me</h2>
        <div className="space-y-6">
            <Card>
                <CardContent>
                  <p></p>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
