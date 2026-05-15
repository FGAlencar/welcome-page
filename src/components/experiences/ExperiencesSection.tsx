import { SectionTitle } from "../commons/SectionTitle";
import { ExperienceCard, type ExperienceCardProps } from "./ExperienceCard";

export interface ExperiencesProps{
    experiences: ExperienceCardProps[]
}

export function ExperiencesSection({experiences}:ExperiencesProps){
    return <div style={{display:"flex", height:'fit-content', flexDirection:'column', padding:'1vw'}}>
        <SectionTitle title="Experiências"/>
        {experiences.map(experience => 
            <ExperienceCard
                logoPath={experience.logoPath}
                title={experience.title}
                atuation={experience.atuation}
                period={experience.period}
                experiences={experience.experiences}
                tools={experience.tools}
            />
        )}
    </div>
}