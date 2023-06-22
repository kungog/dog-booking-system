import styles from './styles.module.scss'

interface IDogCard {
  name: string
  owner: string
  image: string
}

const DogCard = ({ name, owner, image }: IDogCard) => {
  const getRandomDogImage = () => Math.floor(Math.random() * 5)
  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        src='assets/frank.png'
        // src={image}
        alt={`Picture on the dog - ${name}`}
      />
      <div className={styles.content}>
        <h4>{name}</h4>
        <p>{owner}</p>
      </div>
    </div>
  )
}

export default DogCard
