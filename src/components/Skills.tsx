import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface SkillCategory {
  category: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    skills: ['Python', 'C/C++', 'TypeScript', 'JavaScript']
  },
  {
    category: 'Frontend',
    skills: ['React', 'React Native', 'Next.js', 'HTML/CSS']
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'REST APIs', 'PostGresQL']
  },
  {
    category: 'Tools & Libraries',
    skills: ['Git', 'Slurm', 'Numpy', 'Pandas', 'Scipy']
  },
  {
    category: 'Chemistry',
    skills: ['NMR', 'IR', 'X-Ray Diffraction']
  }
];

export function Skills() {
  return (
    <section id="skills" className="w-full px-4 md:px-8 lg:px-16 py-24">
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
                    <Badge key={skillIndex} variant="secondary">
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
