import { PetProps } from '../components/PetComponent/Pet'

const API_URL = 'https://petstore.swagger.io/v2/pet/findByStatus?status=pending'

export const fetchPets = async (): Promise<PetProps[]> => {
  try {
    const response = await fetch(`${API_URL}`, {
      headers: {
        Accept: 'application/json',
        // Add any other required headers
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch dogs. Status: ${response.status}`)
    }

    const data = await response.json()
    return data as PetProps[]
  } catch (error) {
    console.error('Error fetching dog data:', error)
    throw error
  }
}
