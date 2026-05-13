import { useState, useEffect } from 'react'
import logoBranca from '../../assets/logo_branca.svg'
import logoPreto from '../../assets/logo_preto.svg'
import styles from './LogoFade.module.css'

export function LogoFade() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev === 0 ? 1 : 0))
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.wrapper}>
      <img src={logoBranca} alt="Logo" className={`${styles.logo} ${active === 0 ? styles.active : ''}`} />
      <img src={logoPreto} alt="Logo" className={`${styles.logo} ${active === 1 ? styles.active : ''}`} />
    </div>
  )
}
