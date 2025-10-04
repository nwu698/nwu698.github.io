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

// test comment
export function Education() {
  return (
    <section id="education" className="w-full px-4 md:px-8 lg:px-16 py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl mb-8">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <CardTitle>{edu.school}</CardTitle>
                      <p className="text-sm text-muted-foreground">{edu.period}</p>
                    </div>
                    <p className="text-muted-foreground mt-1">{edu.degree}</p>
                  </div>
                </div>
              </CardHeader>
              {edu.description && (
                <CardContent>
                  <p>{edu.description}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
