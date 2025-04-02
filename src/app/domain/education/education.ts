import { Education } from "../models/edu_exp.interface";

export const educationList: Education [] = [
    {
        title: `Informatic Engineer`,
        institution: 'Institución Universitaria Colegio Mayor del Cauca',
        location: 'Colombia',
        startYear: 2018,
        endYear: 2024,
        technologies: ['Angular', 'Java', 'Ionic', 'Sql', 'MySQL', 'Firebase']
    },
    {
        title: `Full Stack Developer`,
        institution: 'Academia X',
        startYear: 2024,
        endYear: 2025,
        technologies: ['JavaScript', 'Html', 'Css', 'Angular', 'TypeScript', 'PostgreSQL', 'Tailwind']
    },
    {
        title: `Web & Backend Development`,
        institution: 'Platzi',
        startYear: 2024,
        endYear: null,
        technologies: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL']
    },
    {
        title: `Backend Development`,
        institution: 'Udemy',
        startYear: 2024,
        endYear: null,
        technologies: ['Java', 'Spring Boot', 'Angular', 'MySQL']
    }
]