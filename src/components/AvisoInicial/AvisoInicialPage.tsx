import { useEffect, useState } from 'react'
import logoBranca from '../../assets/logo_branca.svg'
import logoPreto from '../../assets/logo_preto.svg'
import styles from './AvisoInicialPage.module.css'


interface AvisoInicialProps{
  title?: string,
  mensagem: string,
  enabled?: boolean
}
export function AvisoInicialPage({title, mensagem, enabled}: AvisoInicialProps) {
  const [active, setActive] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev === 0 ? 1 : 0))
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  if(!enabled){
    return undefined
  }
  return (
    <div className={`${styles.root}`}>
      <div className={styles.content}>
        <div className={styles.card}>
          <div className={styles.wrapper}>
            <img src={logoBranca} alt="Logo" className={`${styles.logo} ${active === 0 ? styles.active : ''}`} />
            <img src={logoPreto} alt="Logo" className={`${styles.logo} ${active === 1 ? styles.active : ''}`} />
          </div>
          {title && <p className={styles.title}>{title}</p>}
          {mensagem && <p className={styles.subtitle}>{mensagem}</p>}
        </div>
      </div>
    </div>
  )
}
