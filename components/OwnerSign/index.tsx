import styles from './styles.module.scss'

interface IOwnerSign {
  string: string
}

const OwnerSign = ({ string }: IOwnerSign) => {
  return (
    <div className={styles.sign}>
      <p>{string}</p>
    </div>
  )
}

export default OwnerSign
