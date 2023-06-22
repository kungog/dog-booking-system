import styles from './styles.module.scss'

const Loading = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.spinner} />
    </div>
  )
}

export default Loading
