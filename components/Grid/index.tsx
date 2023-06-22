import { ReactNode } from 'react'
import styles from './styles.module.scss'

const Grid = ({ children }: { children: ReactNode }) => {
  return <div className={styles.grid}>{children}</div>
}

export default Grid
