import { useEffect, useState } from 'react'
import Pet, { PetProps } from '../PetComponent/Pet'
import { fetchPets } from '../../api/fetchPets'

type PetListProps = {
  initialPets?: PetProps[]
}

const ListPet: React.FC<PetListProps> = ({ initialPets = [] }) => {
  const [pets, setPets] = useState<PetProps[]>(initialPets)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const petData = await fetchPets()
        setPets(petData)
      } catch (error) {
        console.error('Error fetching pet data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      {pets.length === 0 ? (
        <p className='text-center'>No pets yet.</p>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {pets.map((pet, index) => (
            <Pet key={index} {...pet} />
          ))}
        </div>
      )}
    </>
  )
}

export default ListPet
