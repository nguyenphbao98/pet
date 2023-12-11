export type PetProps = {
  id: number
  name: string
  status: string
}

const Pet: React.FC<PetProps> = ({ id, name, status }) => {
  return (
    <div className='w-full max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md mb-4 cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out'>
      <div className='md:flex'>
        <div className='md:flex-shrink-0'>
          <div className='h-48 w-full bg-gray-300 flex items-center justify-center'>
            <span className='text-gray-500 text-5xl'>🐾</span>
          </div>
        </div>
        <div className='p-8'>
          <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
            {status}
          </div>
          <a
            href={`/pet/${id}`}
            className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'
          >
            {name}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Pet
