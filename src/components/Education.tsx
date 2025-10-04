import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { GraduationCap } from 'lucide-react';

interface EducationItem {
  degree: string;
  school: string;
  period: string;
  description?: string;
  courses?: string,
  awards?: string,
}

const education: EducationItem[] = [
	{
		school: 'Yale University',
		degree: 'B.S. in Computer Science and Chemistry',
		period: 'Aug. 2022 – May 2026',
		description: '3.99/4.00',
    courses: 'Parallel Programming, Machine Learning, Algorithms, Systems and Computer Organization, Data Structures, Software Engineering, Introduction to Quantum Computing.',
    awards: 'Rosenfeld Science Scholar (Top 10% of Yale Student Researchers), Arthur Fleischer Fellowship.'
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
											<p className="text-sm text-muted-foreground">
												{edu.period}
											</p>
										</div>
										<p className="text-muted-foreground mt-1">
											{edu.degree}
										</p>
									</div>
								</div>
							</CardHeader>
							{edu.description && (
								<CardContent>
									<ul style={{ listStyleType: 'disc', listStylePosition: 'inside' }}>
										<li className="pl-4"><em>GPA: </em>{edu.description}</li>
										<li className="pl-4" style={{ textIndent: '-1.3rem', paddingLeft: '1.5rem' }}><em>Relevant Coursework: </em>{edu.courses}</li>
										<li className="pl-4"><em>Awards: </em>{edu.awards}</li>
									</ul>
								</CardContent>
							)}
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
