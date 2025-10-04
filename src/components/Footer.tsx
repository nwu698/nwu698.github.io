import { Linkedin, Mail } from 'lucide-react';
import SimpleGithub from './icons/SimpleGithub';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container px-6 py-12">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-2xl">Get In Touch</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and projects. 
            Feel free to reach out if you'd like to connect!
          </p>
          
          <div className="flex justify-center gap-6">
            <a 
              href="mailto:natsume.wu@yale.edu"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>Email</span>
            </a>
            <a 
              href="https://github.com/nwu698"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <SimpleGithub className="h-5 w-5" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/natsumewu/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="pt-6 border-t">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
