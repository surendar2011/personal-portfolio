import React from 'react';
import Link from 'next/link';

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    githubLink?: string;
    liveLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    technologies,
    githubLink,
    liveLink,
}) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
            
            <div className="mb-4">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-400 mb-2">Technologies:</p>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
            
            <div className="flex gap-3 mt-4">
                {githubLink && (
                    <Link
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-md hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                    >
                        GitHub
                    </Link>
                )}
                {liveLink && (
                    <Link
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                    >
                        Live Demo
                    </Link>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;

