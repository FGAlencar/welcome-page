import { VerticalSeparator } from "./VerticalSeparator";

export function SectionTitle({title}:{title:string}){
    return  <div>
                <h2>{title}</h2>
               <VerticalSeparator/>
            </div>
}