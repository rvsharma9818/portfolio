import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
  icon?: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  skills: Skill[] = [
    { name: 'Node.js', level: 95 },
    { name: 'AWS', level: 90 },
    { name: 'GraphQL', level: 85 },
    { name: 'PostgreSQL', level: 85 },
    { name: 'Microservices', level: 90 },
    { name: 'DevOps', level: 85 },
    { name: 'API Development', level: 95 },
    { name: 'Angular ',level:95},
    { name: 'System Architecture', level: 85 }
  ];

  backendSkills: Skill[] = [
    { name: 'Node.js', level: 95, icon: 'node-icon' },
    { name: 'GraphQL', level: 85, icon: 'graphql-icon' },
    { name: 'REST APIs', level: 90, icon: 'api-icon' },
    { name: 'PostgreSQL', level: 85, icon: 'postgres-icon' },
    { name: 'Microservices', level: 90, icon: 'microservices-icon' },
  ];

  cloudSkills: Skill[] = [
    { name: 'AWS Lambda', level: 90, icon: 'lambda-icon' },
    { name: 'API Gateway', level: 85, icon: 'api-gateway-icon' },
    { name: 'CloudFormation', level: 80, icon: 'cloudformation-icon' },
    { name: 'CI/CD', level: 85, icon: 'cicd-icon' },
    { name: 'Serverless', level: 90, icon: 'serverless-icon' },
    { name: 'AWS IAM', level: 85, icon: 'iam-icon' },
    { name: 'AWS SNS', level: 85, icon: 'sns-icon' },
    { name: 'AWS SQS', level: 85, icon: 'sqs-icon' },
    { name: 'AWS S3', level: 85, icon: 's3-icon' },
    { name: 'AWS SES', level: 85, icon: 'ses-icon' },

  ];

  databaseSkills: Skill[] = [
    { name: 'PostgreSQL', level: 85, icon: 'postgres-icon' },
    { name: 'Firestore', level: 80, icon: 'firestore-icon' },
    { name: 'Graph DB', level: 75, icon: 'graphdb-icon' },
    { name: 'DynamoDB', level: 85, icon: 'dynamodb-icon' },
    { name: 'Database Optimization', level: 80, icon: 'db-optimization-icon' },
    { name: 'Redis', level: 75, icon: 'redis-icon' }
  ];

  experiences: Experience[] = [
    {
      title: 'Software Development Engineer 2',
      company: 'Hunch',
      period: 'Mar 2025 - Present',
      description: 'Architecting scalable, high-performance backend systems using Node.js, AWS, PostgreSQL, and GraphQL. Managing microservices infrastructure, optimizing AWS Lambda, API Gateway, and CloudFormation deployments. Leading code reviews and mentoring developers.',
      tags: ['Node.js', 'AWS', 'GraphQL', 'PostgreSQL', 'Microservices', 'DevOps']
    },
    {
      title: 'Full Stack Developer',
      company: 'Hunch',
      period: 'Dec 2023 - Mar 2025',
      description: 'Designed and optimized real-time polling features for social engagement. Built scalable applications using Node.js, GraphQL, and AWS. Managed cloud infrastructure and integrated Firestore & AWS API Gateway for efficient data handling.',
      tags: ['Node.js', 'GraphQL', 'AWS', 'Firestore', 'Microservices', 'Full Stack']
    },
    {
      title: 'Software Engineer',
      company: 'Antino Labs Pvt. Ltd.',
      period: 'Nov 2022 - Nov 2023',
      description: 'Developed drone flight booking & tracking portal with Stripe payments. Built flight management system with RBAC and optimized scheduling. Engineered RESTful APIs & WebSockets for real-time updates and managed AWS infrastructure.',
      tags: ['Node.js', 'AWS', 'REST APIs', 'WebSockets', 'JWT', 'Redis']
    }
  ];

  /**
   * Converts a skill level percentage to a star rating array
   * @param level Skill level percentage (0-100)
   * @returns Array of star classes ('full', 'half', or 'empty')
   */
  getStars(level: number): string[] {
    const stars: string[] = [];
    const totalStars = 5;
    const starValue = 100 / totalStars;

    for (let i = 1; i <= totalStars; i++) {
      if (level >= i * starValue) {
        stars.push('full');
      } else if (level >= (i * starValue) - (starValue / 2)) {
        stars.push('half');
      } else {
        stars.push('empty');
      }
    }

    return stars;
  }
}
