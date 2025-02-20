export interface Education {
    title: string;
    institution: string;
    location?: string;
    startYear: number;
    endYear: number | null;
    technologies?: string[];
}

export interface Experience {
    title: string;
    institution: string;
    location?: string;
}