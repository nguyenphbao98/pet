import { PetProps } from '../PetComponent/Pet'

type Category = {
  id: number
  name: string
}

export type PetDetailType = PetProps & {
  category: Category
}

const PetDetail: React.FC<PetDetailType> = ({ id, name, status, category }) => {
  return (
    <>
      This is detail of : {id} got the name as : {name} with {status} status
      <div>this is category name : {category.name}</div>
    </>
  )
}

export default PetDetail
