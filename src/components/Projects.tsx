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
		title: 'Predicting Stock Market Returns via Reddit Sentiment',
		description:
			'Developed a Python framework to analyze sentiment of 30,000+ Reddit posts and predict stock market returns. Tested TF-IDF and SBERT vectorization with logistic regression and feed-forward neural networks.',
		technologies: ['Python', 'scikit-learn', 'NLVK'],
		githubUrl: '',
	},
	{
		title: 'Yorkie',
		description:
			'Backend developer for web app to connect students wanting to sublet and/or find roommates. Developed and managed Postgres and OAuth/Yale CAS infrastructure on AWS.',
		technologies: ['Node.js', 'REST', 'PostgreSQL', 'React', 'TypeScript'],
		githubUrl: '',
	},
];

export function Projects() {
	return (
		<section id="projects" className="w-full px-4 md:px-8 lg:px-16 py-24 bg-muted/30">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-3xl mb-8">Projects</h2>
				<div className="grid gap-6">
					{projects.map((project, index) => (
						<Card key={index}>
							<CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between">
								<CardTitle>{project.title}</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="mb-4">{project.description}</p>
								<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-6">
									<div className="flex gap-3">
										{project.liveUrl && (
											<Button variant="outline" size="sm" asChild>
												<a
													href={project.liveUrl}
													target="_blank"
													rel="noopener noreferrer"
												>
													<ExternalLink className="h-4 w-4 mr-2" />
													Live Demo
												</a>
											</Button>
										)}
										{project.githubUrl && (
											<Button variant="outline" size="sm" asChild>
												<a
													href={project.githubUrl}
													target="_blank"
													rel="noopener noreferrer"
												>
													<SimpleGithub className="h-4 w-4 mr-2" />
													Source Code
												</a>
											</Button>
										)}
									</div>
									<div className="flex flex-wrap gap-2 md:justify-end">
										{project.technologies.map((tech, techIndex) => (
											<Badge key={techIndex} variant="secondary">
												{tech}
											</Badge>
										))}
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
