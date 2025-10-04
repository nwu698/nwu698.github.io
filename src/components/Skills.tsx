import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface SkillCategory {
  category: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL']
  },
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'Vue', 'Tailwind CSS', 'HTML/CSS']
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'Django', 'REST APIs', 'GraphQL']
  },
  {
    category: 'Tools & Others',
    skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Agile']
  }
];

export function Skills() {
  return (
    <section id="skills" className="container py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl mb-8">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
