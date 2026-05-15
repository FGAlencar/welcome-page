import type { ICurriculum } from "../data/Curriculum";
import { ExperiencesSection } from "./experiences/ExperiencesSection";

export function RenderCurriculum({curriculum}:{curriculum: ICurriculum}){
    return  <>
                <ExperiencesSection experiences={curriculum.experiences}/>
            </>
}