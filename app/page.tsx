import Button from '@components/Button'
import DogCard from '@components/DogCard'
import styles from './styles.module.scss'

export default function Home() {
  const hasPickedDate = false
  const isOccupied = true

  return (
    <main className={styles.home}>
      <div className={styles.content}>
        <h1 className='orange-text'>THE OFFICE DOG.</h1>
        <p>
          One dog a day. Book which day you want to bring your fluffy friend to
          the office.
        </p>
      </div>

      <div className='date'>
        <input type='date' />
      </div>
      <div className={styles.images}>
        <img src='assets/long-ears-brown-dog.png' alt='Picture on the dog - ' />
        <img src='assets/long-ears-brown-dog.png' alt='Picture on the dog - ' />
        <img src='assets/long-ears-brown-dog.png' alt='Picture on the dog - ' />
      </div>
      <div className={styles.actions}>
        {hasPickedDate && !isOccupied && (
          <Button
            size='large'
            handleClick={() => console.log('Booka!')}
            loading={false}
          >
            Booka 24 Apil
          </Button>
        )}
        {isOccupied && (
          <DogCard
            name={'Frank'}
            owner={'Oscar Gustafsson'}
            image={'assets/long-ears-brown-dog.png'}
          />
        )}
      </div>
    </main>
  )
}
