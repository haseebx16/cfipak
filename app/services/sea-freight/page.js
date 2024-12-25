import { font2 } from '@/app/Components/font/poppins'
import Footer from '@/app/Components/Sections/Footer'
import Nav from '@/app/Components/Sections/Nav'
import React from 'react'

const page = () => {
  return (
    <div className={`${font2.className}`}>
        <Nav/>
        <div className='flex p-8 md:p-8 flex-col md:flex-row justify-center items-center bg-white'>
            <div className='md:w-1/2 flex flex-col justify-center items-center'> 
                    <h1 className='text-4xl font-bold text-left'>Sea Freight Services In Pakistan</h1>
                <p className='text-gray-500 text-md mt-4 max-w-xl'>CFI is among the foremost providers in Pakistan of air logistics services that offers wide-ranging and all-inclusive solutions and also provides exclusive carrying solutions to inaccessible areas. Customers have come to trust and depend upon us as their reliable source of transport logistics.
                    Air freight is among the essential requirements and important element for the domestic and international logistics network. Over the years we have established relations with the industry partners and successfully providing the cost effective rates.</p>
                <h2 className='text-2xl font-bold mt-4'>Transporting Your Goods via Air Freight Services</h2>
                <div>
                    <p className='text-gray-500 max-w-xl mt-4 text-sm'>Air Freight means moving goods which have to be transported via a plane and can refer to huge and bulky air cargo and even air mail. Air Freight proves highly beneficial if you need to get your goods or property transported quickly from one place to another. The main reason that people choose this particular service is that it offers you speedy delivery and several other benefits.</p>
                    <p className='text-gray-500 max-w-xl mt-4 text-sm'>Combined Freight International Pakistan is one of the best services available in the domain of Air Freight Services. We offer you complete Air Freight and Air Logistics solutions and benefits so that you can get the quality service you are looking for. Other than that, we even offer you complete Logistics services and act as your <a href='/services/logistics'><span className='text-yellow-500'>Logistics service provider</span></a> in Pakistan.</p>
                    <p className='text-gray-500 max-w-xl mt-4 text-sm'>Are you thinking about why you should choose our services? The best qualities of CFIPAK are that:</p>
                    <p className='text-gray-500 max-w-xl mt-4 text-sm'>&#x2022;&nbsp;We provide services in miscellaneous cities of Pakistan which include Karachi, Lahore, Islamabad, Faisalabad and many more.</p>
                    <p className='text-gray-500 max-w-xl mt-1 text-sm'>&#x2022;&nbsp;We have an established network with the top freight companies worldwide.</p>
                    <p className='text-gray-500 max-w-xl mt-1 text-sm'>&#x2022;&nbsp;We offer you more than just one mode of freight transportation.</p>
                    <p className='text-gray-500 max-w-xl mt-1 text-sm'>&#x2022;&nbsp;We have references and contacts to help execute every process efficiently.</p>
                    <p className='text-gray-500 max-w-xl mt-1 text-sm'>&#x2022;&nbsp;We have an experience of around two decades in the field of freight forwarding.</p>
                    <p className='text-gray-500 max-w-xl mt-1 text-sm'>&#x2022;&nbsp;We offer you cost-effective rates which are just within your budget.</p>
                    <p className='text-gray-500 max-w-xl mt-1 text-sm'>&#x2022;&nbsp;We guarantee to deliver you what we promise.</p>
                    <p className='text-gray-500 max-w-xl mt-8 text-sm'>Choosing CFIPAK will definitely benefit you in one way or the other. Now there are many Air Freight companies in Pakistan which makes it confusing for you to choose from. But we are sure that once you have partnered with us, you will definitely remember us for any kind of Air Logistics or Air Freight services you will need in the future.</p>
                <h1 className='mt-4 text-2xl font-bold'>Opt for Air Logistics Services Today!</h1>
                </div>
                <p className='text-gray-500 max-w-xl mt-1 text-sm'>Air Freight Services offer you a great deal of advantages over regular transport services which you can take from Combined Freight International Pakistan as well. Our services are designed to benefit you the customer.</p>
                <p className='text-gray-500 max-w-xl mt-1 text-sm'>Check out what benefits our Air freight and Air Logistics services offer you over other kinds of Freight Transportation services:</p>
            </div>
            <div className=' flex flex-col justify-start items-start'>
            <div className=' flex flex-col justify-start items-start'>
                <img src='/air-freight.jpg' alt='air-freight' className='w-[40rem] mt-12 md:mt-0 md:p-8'/>
            </div>
                <div>
                    <h1 className='font-bold text-2xl text-left'>1. Matchless Speed</h1>
                    <p className='text-gray-500 max-w-xl mt-2 text-sm'>Our Air freight services offer you speed unlike any other freight transportation service. If you make a comparison, sea and land freight services are slower and are not reliable either.</p>
                    <h2 className='font-bold text-2xl text-left mt-8'>2. Consistency in Arrival and Departure Timings</h2>
                    <p className='text-gray-500 max-w-xl mt-2 text-sm'>The best part about Air Freight services is that you can track your package and even follow the promised delivery time. This is one disadvantage of land or sea freight because you cannot track your package or whatever item it is. Your package can be delivered quickly because plans are running every other hour, which means that missed flights are not really a problem</p>
                    <h2 className='font-bold text-2xl text-left mt-8'>3. Flexibility in Global Shipping</h2>
                    <p className='text-gray-500 max-w-xl mt-2 text-sm'>What more can one love than having miscellaneous options for sending their freight and packages? Our Air freight services offer you just that as you can easily send in your freight to small parts of the world left out from sea transportation services.</p>
                    <h2 className='font-bold text-2xl text-left mt-8'>4. Much Better In Security</h2>
                    <p className='text-gray-500 max-w-xl mt-2 text-sm'>One thing that gives our Air Freight services leverage over other forms of freight transportation is that your package and goods remain in a much safer condition. Airport security is much tighter than that of ports which means that there is a much lesser risk of your goods being stolen than through other forms of freight transport.</p>
                    <h2 className='font-bold text-2xl text-left mt-8'>5. Near to No Dependence on Warehousing</h2>
                    <p className='text-gray-500 max-w-xl mt-2 text-sm'>Being able to transport your goods quickly means you will not have to rely much on Warehousing or storing your goods or packages especially if you are a small business. Then you need to hire a Warehousing service provider as well. This particular benefit offered by our Air freight services greatly help in inventory management and storing local inventory as well.</p>
                    <p className='text-gray-500 max-w-xl mt-2 text-sm'>Do you feel convinced now? Visit us today to get more information or contact us now to get to know us and our services!</p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default page