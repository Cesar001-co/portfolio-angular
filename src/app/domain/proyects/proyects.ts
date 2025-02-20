import { Proyect } from "../models/proyects.interface";

export const mainProyects: Proyect [] = [
    {
        imgUrl: 'assets/section3/nuxten.jpg',
        name: 'Nuxten',
        type: $localize `Web Page`,
        description: $localize `Development of a tool used to measure the usability of a software product based on the heuristic principles proposed by Jakob Nielsen.`,
        techologies: ['Spring Boot', 'Angular', 'PostgreSQL', 'Firebase'],
        github: 'https://github.com/Cesar001-co/nuxten_project',
        web: 'http://190.5.199.21/NUXTEN_PROJECT'
    },
    {
        imgUrl: 'assets/section3/sickpet.jpg',
        name: 'SickPet',
        type: $localize `Mobile application`,
        description: $localize `for Android SickPet is a mobile application created to manage the care of pets and animals by veterinary clinics and their owners.`,
        techologies: ['Ionic', 'Firebase'],
        github: 'https://github.com/Cesar001-co/SickPetCode'
    }
]