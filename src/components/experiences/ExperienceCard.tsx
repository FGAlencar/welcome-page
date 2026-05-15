import styles from './ExperienceCard.module.css'

export interface ExperienceCardProps {
    logoPath: string,
    title: string,
    experiences: string[],
    period: string,
    atuation:string,
    tools:{
        backend?:{
            language:string[],
            framework:string[]
        },
        frontend?:{
            language:string[],
            framework:string[]
        },
        database?:string[]}
}

export function ExperienceCard({ logoPath, title, atuation,  experiences, period, tools }: ExperienceCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.logoWrapper}>
                <div className={styles.logoContainer}>
                    <img src={logoPath} alt={title} />
                </div>
            </div>

            <div className={styles.content}>
                <h2 >{title}</h2>
                <span className={styles.meta}>{`Atuação: ${atuation}`.toLocaleUpperCase()}</span>
                <span className={styles.meta}>{`Período: ${period}`.toLocaleUpperCase()}</span>

                {tools.backend && (
                    <span className={styles.meta}>
                        BACK-END: {tools.backend.language.join(', ')} 
                    | Frameworks: {tools.backend.framework.join(', ')}</span>
                )}

                {tools.frontend && (
                    <span className={styles.meta}>
                        FRONT-END: {tools.frontend.language.join(', ')} 
                    | Frameworks: {tools.frontend.framework.join(', ')}</span>
                )}
                
                {tools.database && <span className={styles.meta}>BANCO DE DADOS: {tools.database.join(', ')}</span>}

                <ul className={styles.list}>
                    {experiences.map((experience, i) =>
                        <li className={styles.meta} key={i}>{experience}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}
