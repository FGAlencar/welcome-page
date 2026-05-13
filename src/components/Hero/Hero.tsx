import { AnimatedBackground } from '../AnimatedBackground/AnimatedBackground'
import { LogoFade } from '../LogoFade/LogoFade'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <AnimatedBackground>
      <div className={styles.content}>
        <div className={styles.card}>
          <LogoFade />
          <p className={styles.subtitle}>Em construção</p>
        </div>
      </div>
    </AnimatedBackground>
  )
}
