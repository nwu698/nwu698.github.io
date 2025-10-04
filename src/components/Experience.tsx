import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import SimpleGithub from './icons/SimpleGithub';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  githubUrl?: string; // Optional GitHub URL
  websiteUrl?: string; // Optional Website URL
}

const experiences: ExperienceItem[] = [
	{
		title: 'Frontend/Mobile Developer',
		company: 'Yideshare',
		period: 'Sept. 2025 – Present',
		description:
			'Worked on front-end mobile app development and UI using React Native. Deployed with 25+ users in pilot.',
		technologies: ['React Native', 'Typescript', 'Javascript'],
		githubUrl: 'https://github.com/rayconghou/yideshare_mobile',
		websiteUrl: 'https://yideshare.com',
	},
	{
		title: 'Research Intern',
		company: 'Zhu Group',
		period: 'April 2024 – Present',
		description:
			'Developed theoretical models and open-source software for modeling quantum many-body phenomena. Built and optimized distributed backend pipelines, improving system throughput by 40% on HPC infrastructure.',
		technologies: ['Python', 'HPC', 'Machine Learning'],
	},
	{
		title: 'Peer Tutor and Peer Mentor',
		company: 'Yale Department of Chemistry',
		period: 'Jan. 2025 – Present',
		description:
			'Hosted weekly tutoring sessions for ~45 students in Physical Chemistry II. Organized department-wide lectures.',
		technologies: [],
	},
	{
		title: 'Senior STEM Tour Guide',
		company: 'Yale University Admissions Office',
		period: 'Feb. 2023 – Present',
		description:
			'Led weekly tours and webinars of science and engineering facilities to 30-50 prospective students and their families. Interviewed candidates for new tour guides and led training of newly hired guides.',
		technologies: [],
	},
];

export function Experience() {
	return (
		<section id="experience" className="w-full px-4 md:px-8 lg:px-16 py-24">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-3xl mb-8">Experience</h2>
				<div className="space-y-6">
					{experiences.map((exp, index) => (
						<Card key={index}>
							<CardHeader>
								<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
									<div>
										<CardTitle>{exp.title}</CardTitle>
										<p className="text-muted-foreground mt-1">
											{exp.company}
										</p>
									</div>
									<p className="text-sm text-muted-foreground">
										{exp.period}
									</p>
								</div>
							</CardHeader>
							<CardContent>
								<p className="mb-4">{exp.description}</p>
								<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-6">
									<div className="flex gap-4">
										{exp.websiteUrl && (
											<a
												href={exp.websiteUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-md shadow-md hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:ring-offset-2"
											>
												Visit Website
											</a>
										)}
										{exp.githubUrl && (
											<a
												href={exp.githubUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-md shadow-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
											>
												<SimpleGithub className="w-4 h-4 mr-2" />
												View on GitHub
											</a>
										)}
									</div>
									<div className="flex flex-wrap gap-2 md:justify-end">
										{exp.technologies.map((tech, techIndex) => (
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
