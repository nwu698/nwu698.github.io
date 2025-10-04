import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: 'Senior Software Engineer',
    company: 'Tech Company Inc.',
    period: 'Jan 2022 - Present',
    description: 'Led development of key features and mentored junior developers. Improved system performance by 40% through optimization initiatives.',
    technologies: ['React', 'TypeScript', 'Node.js', 'AWS']
  },
  {
    title: 'Software Engineer',
    company: 'Startup XYZ',
    period: 'Jun 2020 - Dec 2021',
    description: 'Developed and maintained multiple web applications. Collaborated with cross-functional teams to deliver high-quality products.',
    technologies: ['JavaScript', 'Python', 'Docker', 'PostgreSQL']
  },
  {
    title: 'Junior Developer',
    company: 'Digital Agency',
    period: 'Jan 2019 - May 2020',
    description: 'Built responsive websites and web applications for various clients. Learned best practices in modern web development.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React']
  }
];

export function Experience() {
  return (
    <section id="experience" className="container py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl mb-8">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle>{exp.title}</CardTitle>
                    <p className="text-muted-foreground mt-1">{exp.company}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
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
