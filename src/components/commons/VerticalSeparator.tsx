import type { CSSProperties } from "react";

export function VerticalSeparator({style}:{style?:CSSProperties}){
    return  <div style={{height:'2px', backgroundColor:"black", width:'100%', ...style}}></div>
}