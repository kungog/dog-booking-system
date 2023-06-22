import styles from './styles.module.scss'

interface IInput {
  iType: 'text' | 'password' | 'number'
  iLabel: string
  iValue: string
  iFor: string
}

const Input = ({ iType, iLabel, iValue, iFor }: IInput) => {
  return (
    <div className={styles.input}>
      <label htmlFor={iFor}>{iLabel}</label>
      <input type={iType} name={iFor} value={iValue} />
    </div>
  )
}

export default Input
