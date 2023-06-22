import styles from './styles.module.scss'
import DogCard from '@components/DogCard'
import SpecialText from '@components/SpecialText'

type Dogs = {
  _id: string
  name: string
}

async function getAllOurDogs(): Promise<Dogs[] | []> {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/our-dogs`)
  const data = await response.json()
  if (response) {
    return data
  }

  return []
}

const OurDogs = async () => {
  const dogs = await getAllOurDogs()
  return (
    <div className={styles.doggos}>
      <div>
        <h1>
          The office{' '}
          <SpecialText color='accent' bold>
            dog
          </SpecialText>
          <SpecialText italic bold>
            squad
          </SpecialText>
        </h1>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.grid}>
          {dogs?.map((dog, key) => (
            <a key={`dog-${key}`} href={`/our-dogs/${dog._id}`}>
              <DogCard name={dog.name} owner={'Oscar Gustafsson'} image={''} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurDogs
