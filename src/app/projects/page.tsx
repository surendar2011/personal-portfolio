import React from 'react';
import ProjectCard from '../components/ProjectCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore my portfolio of web development projects including e-commerce platforms, task management apps, weather dashboards, and social media analytics tools.",
};

const ProjectsPage = () => {
    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration. Built with modern web technologies for a seamless shopping experience.',
            technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Stripe'],
            githubLink: 'https://github.com/yourusername/ecommerce-platform',
            liveLink: 'https://ecommerce-demo.vercel.app',
        },
        {
            title: 'Task Management App',
            description: 'A collaborative task management application that allows teams to organize, assign, and track tasks. Features include real-time updates, drag-and-drop functionality, and team collaboration tools.',
            technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
            githubLink: 'https://github.com/yourusername/task-manager',
            liveLink: 'https://task-manager-demo.vercel.app',
        },
        {
            title: 'Weather Dashboard',
            description: 'A responsive weather dashboard that displays current weather conditions and forecasts for multiple locations. Includes interactive maps and detailed weather analytics.',
            technologies: ['React', 'JavaScript', 'OpenWeather API', 'Chart.js'],
            githubLink: 'https://github.com/yourusername/weather-dashboard',
            liveLink: 'https://weather-dashboard-demo.vercel.app',
        },
        {
            title: 'Social Media Analytics',
            description: 'An analytics platform for tracking social media performance across multiple platforms. Provides insights, reports, and data visualization for social media metrics.',
            technologies: ['Next.js', 'Python', 'PostgreSQL', 'D3.js', 'REST API'],
            githubLink: 'https://github.com/yourusername/social-analytics',
            liveLink: 'https://social-analytics-demo.vercel.app',
        },
    ];

    return (
        <section className="max-w-6xl mx-auto p-4 min-h-screen bg-white dark:bg-gray-900">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        githubLink={project.githubLink}
                        liveLink={project.liveLink}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProjectsPage;
