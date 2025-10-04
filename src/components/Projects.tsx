import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';
import SimpleGithub from './icons/SimpleGithub';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: 'Project Name 1',
    description: 'A comprehensive description of your project. Explain what it does, the problem it solves, and the impact it has made. Highlight key features and your role in the project.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/project1'
  },
  {
    title: 'Project Name 2',
    description: 'Another project description showcasing different skills and technologies. Focus on unique challenges you overcame and innovative solutions you implemented.',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Docker'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/project2'
  },
  {
    title: 'Project Name 3',
    description: 'A third project that demonstrates your versatility and range of skills. Include metrics or results if available (e.g., "Improved performance by 50%").',
    technologies: ['Python', 'FastAPI', 'React', 'AWS'],
    githubUrl: 'https://github.com/yourusername/project3'
  }
];

export function Projects() {
  return (
    <section id="projects" className="w-full px-4 md:px-8 lg:px-16 py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl mb-8">Projects</h2>
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <SimpleGithub className="h-4 w-4 mr-2" />
                        Source Code
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
