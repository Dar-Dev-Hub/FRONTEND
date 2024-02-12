
export const ContactUs = () => {
  return (
    <div className='w-full mt-[90px] flex gap-9 py-2 px-10 max-xl:px-15 max-md:px-5 max-lg:px-5 max-md:flex-col '>
         <div className="w-1/2 flex flex-col gap-5 font-md text-xl  max-md:w-full ">
            <span className='text-2xl  relative after:block 
            afer:content-[""]
            after:absolute
            after:w-1/3
            after:h-[3px]
            raduis-md
            after:bg-red-500
            ' >
                Central Office
            </span>
            <span className='max-md:text-lg'>
            The company is registered in the Kingdom of Morocco under the name GLOBAL ADKACH SARL and is licensed by the Chamber of Commerce and Industry of the Tangier City Region, Morocco.
            </span>
            <div className='flex flex-col'>
            <span className='max-md:text-lg'> Commercial Register Number <span className='text-[#d23a1e] font-bold'> (CRN): ****** </span> </span>
            <span className='max-md:text-lg'>Tax ID number <span className='text-[#d23a1e] font-bold'> (EIN): ****** </span> </span>
            </div>
            <span className='max-md:text-lg'>
            License for Data Collection and Processing issued by the National
Agency for Telecommunications Regulation  <span className='text-[#d23a1e] font-bold'>  (ANRT) of the Kingdom of Morocco under number: 19902 </span>
            </span>  
            <span className='max-md:text-lg'>
            Trademark registration on a global level with the Moroccan Office for Industrial and Commercial Property <span className='text-[#d23a1e] font-bold'> (OMPIC) under number:254982 </span>
            </span>
            <span className='max-md:text-lg'>
            +999 999 999 999

            </span>
            <span className='max-md:text-lg'>
                Adress *** *** ***
            </span>
        </div>
        <div className="w-1/2 max-md:w-full max-md:text-2xl max-md:border-y border-black p-5 ">

    <form className='w-full'>
      <div className="space-y-6">
        <div className=" pb-6">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Reach to Us</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600 ">
            This information will be displayed  so be careful what you share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-full">
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset
                 ring-gray-300 focus-within:ring-2 focus-within:ring-inset
                  focus-within:ring-indigo-600 max-w-full">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="block pl-5 w-full flex-1 border-0 bg-transparent py-1.5  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="name"
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-full">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 
                focus-within:ring-inset focus-within:ring-indigo-600 max-w-full">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block pl-5 flex-1 border-0 bg-transparent py-1.5  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="email"
                  />
                </div>
              </div>
            </div>


            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Your message
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>

            </div>

            
          </div>
        </div>

    

      
      </div>

      <div className="mt-1 flex items-center justify-center ">
        <button
          type="submit"
          className="rounded-md bg-primaryy px-7 py-2 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit
        </button>
      </div>
    </form>




        </div>
    </div>
  )
}
