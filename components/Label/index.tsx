import { ReactNode } from 'react'
import styles from './styles.module.scss'

interface ILabel {
  label: string
  children: ReactNode
}

const Label = ({ label, children }: ILabel) => {
  return (
    <div className={styles.label}>
      <p>{label}</p>
      {children}
    </div>
  )
}

export default Label
