export type PetProps = {
    name: string;
    age: number;
};

const Pet: React.FC<PetProps> = ({name, age}) => {
    return (
        <>
            <div>This is name: {name}</div>
            <div>This is age: {age}</div>
        </>
    )
  }
  
export default Pet
  