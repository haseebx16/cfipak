import { font2 } from '@/app/Components/font/poppins'
import Footer from '@/app/Components/Sections/Footer'
import Nav from '@/app/Components/Sections/Nav'
import React from 'react'

const page = () => {
  return (
    <div className={`${font2.className}`}>
        <Nav/>
        <div className="relative">
            <img
            src="/logistics-banner.jpg"
            alt="Background"
            className="w-full object-cover h-[500px] md:h-[500px]"
            />
            <div className="absolute bg-black bg-opacity-70 inset-0 flex flex-col items-center justify-center">
                <div className="flex flex-col w-[70%]">
                    <h1 className="text-white md:mt-12 text-2xl md:text-2xl font-bold">SERVICES DESIGNED TO MEET YOUR REQUIREMENTS</h1>
                    <p className="text-white max-w-3xl text-sm md:text-xl mt-4">Providing efficient distribution system tailored to the individual requirements and timely delivery of goods</p>
                </div>
            </div>
        </div>
        <div className='flex p-8 md:p-8 flex-col md:flex-row justify-center items-center bg-white'>
            <div className='md:w-1/2 flex flex-col justify-center items-center'> 
                    <h1 className='text-4xl font-bold max-w-xl text-left'>Logistics Services Now In Pakistan</h1>
                <p className='text-gray-500 text-sm mt-4 max-w-xl'>As a leader in specialized transportation, we do more than just deliver high value goods on time. We provide our customer with Strategic Logistics solutions. Our commitment to exceeding all customer expectations drives us to continuously seek ways to save our customers time and money. Our goal, after all, is to help our customers become more competitive in their markets. For those customers requiring a complete logistics service, Combined Freight International has the capabilities to provide a comprehensively integrated supply chain solution. All the cargo is handled from a central source that eliminates the need for un-necessary and extensive paperwork from various sources that saves both time and money for the client.</p>
                <h2 className='text-2xl font-bold mt-4 max-w-xl'>The Role of Logistics Companies in Pakistan Here:</h2>
                <div>
                    
                    <p className='text-gray-500 max-w-xl mt-4 text-sm'>Supply Chain Management is one of the most important parts of running a business smoothly especially if you are focused on converting raw materials into consumable goods and services. Efficiency in supply chain helps reduce wastage and keep the costs at a minimum level as well. Similarly, logistics also refers to the whole process of coordinating the movement of items so that the intended items reach their destination properly.</p>
                    <p className='text-gray-500 max-w-xl mt-4 text-sm'>The whole Logistics process is quite long and hectic, and companies cannot survive in dealing with these processes on their own. They need to hire a proper Logistics service provider so that they can get their raw materials properly without any problems. The role of Logistics companies in Pakistan is very important because many businesses need to get their merchandise and other materials transported from one place to another. This is where you can rely on Combined Freight International Pakistan or CFIPAK to help you out.</p>
                    <p className='text-gray-500 max-w-xl mt-2 text-sm'>Our company has been active in the field from almost two decades or simply put, around twenty years during which we have grown to become one of the top logistics companies in Pakistan. Our offices are present in various cities such as Karachi, Lahore, Islamabad, Faisalabad and even Sialkot. This is why we have a huge network which helps us in getting all work done easily.</p>
                    <h1 className='mt-4 text-2xl max-w-xl font-bold'>Benefits of Hiring a Logistics Service Provider in Pakistan</h1>
                    <p className='text-gray-500 max-w-xl mt-2 text-sm'>In a country like Pakistan, you cannot take risks especially if you are transporting costly materials and merchandise on a large scale. You need to make sure that each of your items is safely transported from the pickup location to the destination place. All of this work needs to be done quickly and efficiently.</p>
                    <p className='text-gray-500 max-w-xl mt-4 text-sm'>Combined Freight International Pakistan is one of the top services in the Freight Forwarding and Logistics industries. We are providing you top-notch services which make us a brilliant Logistics company in Pakistan.</p>
                </div>
            </div>
            <div className=' flex flex-col justify-start items-start'>
            <div className=' flex flex-col justify-start items-start'>
                <img src='/logistics-large-1.jpg' alt='air-freight' className='w-[40rem] mt-12 md:mt-0 '/>
            </div>
                <div>
                    
                    <h1 className='font-bold text-2xl max-w-xl text-left mt-4'>1. Reduced Wastage of Time</h1>
                    <p className='text-gray-500 max-w-xl mt-4 text-sm'>If you hire our Logistics services, you can save upon a lot of time wasted in all the Logistics processes. You can simply outsource all your work to us and relax and focus on other work, while we make sure that your materials are in safe hands and transported safely to their destination points.</p>
                    <p className='text-gray-500 max-w-xl mt-2 text-sm'>You can even save yourself from having your time wasted in matters dealing with extensive paperwork, which is a completely different and hectic process as well. Your business cannot afford to deal with wastage of time otherwise it will further affect your overall cost-efficiency as well.</p>
                    <h1 className='font-bold text-2xl max-w-xl text-left mt-4'>2. Near to No Wastage of Costs</h1>
                    <p className='text-gray-500 max-w-xl mt-1 text-sm'>Logistics services range from Warehousing to Transportation to many more hassles. Hiring CFIPAK to handle all your Logistics’ work for you will benefit you in saving your money because you can simply transfer all the work to us and we will charge you a single cost for it. You will be free from the tensions of making arrangements and for paying separately for each process. We can be your Warehousing service provider and much more.</p>
                    <h1 className='font-bold text-2xl max-w-xl text-left mt-4'>3. Decreased Chances of Risks</h1>
                    <p className='text-gray-500 max-w-xl mt-1 text-sm'>It is common knowledge that roads and other transport mediums are not entirely safe especially in a country like Pakistan. You need to transport all your merchandise and materials properly while making sure that it is not subject to dangerous consequences such as any robbery, or any misplacement in between. Doing all of these on your own can prove to be quite risky especially if you do not have any past experience in this, which is why you can save yourself from potential risks if you hire CFIPAK to handle all your Logistics processes for you.</p>
                    <h1 className='font-bold text-2xl max-w-xl text-left mt-4'>4. Enhanced Networking</h1>
                    <p className='text-gray-500 max-w-xl mt-1 text-sm'>You as a business might not have all of the networks to handle your Logistics processes properly. You need an experienced Logistics service provider or a Logistics company in Pakistan so that your Logistics matters are properly dealt with. CFIPAK has an established network in the industry which makes it a credible company in the domain. This quality also helps us to execute Logistics processes much more efficiently and proficiently.</p>

                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default page