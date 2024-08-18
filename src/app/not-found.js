import Link from 'next/link'
 
const NotFound = () => {
  return (
    <div className="h-screen">
      <div className='container mx-auto flex justify-center items-center h-full'>
      <div className="text-center space-y-2">
        <h2 className='text-sm lg:text-2xl font-bold'>Not Found</h2>
        <p className='text-xs lg:text-xl'>Could not find requested resource</p>
        <Link href="/">
        <button className='btn btn-sm btn-error text-white'>Return Home</button>
        </Link>
      </div>
    </div>
    </div>
  )
}

export default NotFound;