import { PetProps } from "../components/PetComponent/Pet";

export type Dog = PetProps & {
    id: number;
    breed: string;
  };

const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
const API_URL = 'https://dogdummyapi.herokuapp.com/dogs';

export const fetchPets = async (): Promise<PetProps[]> => {
  try {
    const response = await fetch(`${CORS_PROXY}${API_URL}`);

    if (!response.ok) {
        throw new Error(`Failed to fetch dogs. Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data as Dog[];
  } catch (error) {
    console.error('Error fetching dog data:', error);
    throw error;
  }
};
