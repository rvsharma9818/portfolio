import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  codeUrl: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'Recsys Interactive Polling System ',
      description: 'Designed and developed a real-time polling platform with interactive features for social engagement, supporting thousands of concurrent users with optimized performance.',
      image: 'https://www.shutterstock.com/image-vector/recommendation-system-icon-set-illustration-260nw-2587565005.jpg',
      technologies: ['Node.js', 'GraphQL', 'AWS Lambda', 'PostgreSQL', 'WebSockets'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 2,
      title: 'Drone Flight Management Portal',
      description: 'Built a comprehensive drone management system with flight booking, real-time tracking, payment integration, and regulatory compliance features.',
      image: 'https://i.ytimg.com/vi/bwEFfD2YH-4/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGFMgXyhlMA8=&rs=AOn4CLAyBW2xEfjEloeU6SzCxC0NHMPX6w',
      technologies: ['Node.js', 'AWS', 'REST APIs', 'WebSockets', 'Stripe', 'JWT'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 3,
      title: 'Microservices Architecture',
      description: 'Architected and implemented a scalable microservices infrastructure using AWS Lambda, API Gateway, and CloudFormation for high availability and performance.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFYh9tf_e2nNU18Jd8Ajq-Ql6W2uezrPF9Zg&s',
      technologies: ['AWS Lambda', 'API Gateway', 'CloudFormation', 'Node.js', 'Serverless'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 4,
      title: 'PITS – Event Testing Automation',
      description: 'Developed a high-throughput data processing system for real-time analytics and event handling with optimized database performance.',
      image: 'https://images.viblo.asia/3c5a7793-b37d-4fae-8655-4f25b38a9dd1.png',
      technologies: ['Node.js', 'PostgreSQL', 'Redis', 'AWS', 'GraphQL','MixPanel'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 5,
      title: 'CI/CD Automation System SageMaker',
      description: 'Implemented comprehensive CI/CD pipelines for automated testing, deployment, and infrastructure management with security best practices.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1R15f208kJzLvyVsz3lFu9CjLcvfHVDYWog&s',
      technologies: ['GitHub Actions', 'AWS', 'CloudFormation', 'Docker', 'Jest'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 6,
      title: 'GraphQL API Platform',
      description: 'Built a scalable GraphQL API platform with optimized query resolution, caching strategies, and efficient data fetching patterns.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1uWAq4v7UitKtYcgKbxMySwJknQHylAZ4EUre7TGaynt603xTQkEtY9giJtRg4-AK_N8&usqp=CAU',
      technologies: ['GraphQL', 'Apollo', 'Node.js', 'PostgreSQL', 'Redis'],
      demoUrl: '#',
      codeUrl: '#'
    }
  ];
}
