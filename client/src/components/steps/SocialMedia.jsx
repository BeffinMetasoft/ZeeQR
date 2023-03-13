import React, { useContext } from 'react'
import { StepperContext } from '../../contexts/StepperContext'

function SocialMedia() {
    const { userData, setUserData } = useContext(StepperContext)

    const handleChange = (e) => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }
  return (
    <div className='flex justify-center pt-5'>
            <form className='w-3/6'>
                <div className="grid xl:grid-cols-2 xl:gap-6">
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="text" name="facebook" id="floating_facebook" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={handleChange} value={userData["facebook"] || ""} />
                        <label for="floating_facebook" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Facebook</label>
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="text" name="instagram" id="floating_instagram" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required  onChange={handleChange} value={userData["instagram"] || ""} />
                        <label for="floating_instagram" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Instagram</label>
                    </div>
                </div>
                <div className="grid xl:grid-cols-2 xl:gap-6">
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="text" name="skype" id="floating_skype" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={handleChange} value={userData["skype"] || ""} />
                        <label for="floating_skype" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Skype</label>
                    </div>
                    <div class="relative z-0 mb-6 w-full group">
                        <input type="text" name="twitter" id='floating_twitter' class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={handleChange} value={userData["twitter"] || ""} />
                        <label for="floating_twitter" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Twitter</label>
                    </div>
                </div>

                <div className="grid xl:grid-cols-2 xl:gap-6">
                    
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="text" name="linkedIn" id="floating_linkedIn" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={handleChange} value={userData["linkedIn"] || ""} />
                        <label for="floating_linkedIn" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">linkedIn</label>
                    </div>
                </div>

            </form>
        </div>
  )
}

export default SocialMedia