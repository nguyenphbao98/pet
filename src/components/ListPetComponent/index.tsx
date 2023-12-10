import { useEffect, useState } from "react"
import Pet, { PetProps } from "../PetComponent/Pet"
import { fetchPets } from "../../api/fetchPets";

type PetListProps = {
    initialPets?: PetProps[]; // Use PetProps here
  };


const ListPet: React.FC<PetListProps> = ({ initialPets = [] }) => {
    const [pets, setPets] = useState<PetProps[]>(initialPets)

    useEffect(() => {
        const fetchData = async () => {
          try {
            const petData = await fetchPets();
            setPets(petData);
          } catch (error) {
            console.error('Error fetching pet data:', error);
          }
        };
    
        fetchData();
      }, [pets]);

    return (
        <>
            {pets.length === 0 ? (
                <p className="text-center">No pets yet.</p>
            ) : (
                <ul>
                {pets.map((pet, index) => (
                    <Pet key={index} {...pet} />
                ))}
                </ul>
            )}
        </>
    )
  }
  
export default ListPet
  