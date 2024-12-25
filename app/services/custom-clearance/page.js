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
                    <h1 className='text-4xl font-bold max-w-xl text-left'>Custom Clearance Services In Pakistan</h1>
                <p className='text-gray-500 text-sm mt-4 max-w-xl'>Combined Freight International Pakistan or CFIPAK is an authorized clearing forwarding agent in Pakistan and we seek to provide the best kind of services as a custom clearance company. Every business person knows that there are several processes which go into the transportation of a shipment. Every country has a set of rules and regulations and even requirements which have to be followed in order for the shipment to be transported successfully.</p>
                <p className='text-gray-500 text-sm mt-4 max-w-xl'>Custom Clearance is hefty work which involves preparation and submission of documentations which are compulsory as they are meant to facilitate the imports or the exports in a country. The person who does all the preparation and submission of documents, and also represents the client during customs assessment, examination and during the time that the cargo is being delivered from the customs is known as the Custom Clearance Agents or Clearing Forwarding Agents.</p>
                <h2 className='text-2xl font-bold mt-4 max-w-xl'>What is the role of Clearing Forwarding Agents?</h2>
                <div>
                    <p className='text-gray-500 max-w-xl mt-4 text-sm'>&#x2022;&nbsp;To ensure compliance with the rules set by customs</p>
                    <p className='text-gray-500 max-w-xl mt-1 text-sm'>&#x2022;&nbsp;To ensure that the clearance of goods is done within the stipulated time frame to avoid demurrage</p>
                    <p className='text-gray-500 max-w-xl mt-1 text-sm'>&#x2022;&nbsp;To prepare documents such as bill of entry and submit them for the clearance process</p>
                    <p className='text-gray-500 max-w-xl mt-4 text-sm'>If you want to save yourself from the hassle of looking for a Clearing Forwarding Agent, CFIPAK can help you out by providing you services for the best Clearing Agent in Karachi if you want.</p>
                    <h1 className='mt-4 text-2xl max-w-xl font-bold'>What is the Importance of a Custom Clearance Service in Pakistan?</h1>
                    <p className='text-gray-500 max-w-xl mt-4 text-sm'>It is common knowledge that import and export of goods is happening on a daily basis in Pakistan through various forms of transport such as rail, road, sea and air. Proper and legal documentation is necessary to ensure that the goods are being transported safely, which is a quite long process. In order to complete this process, businesses operating in Pakistan need to hire a Custom Clearance Service in Pakistan so that they can have their goods cleared and transported properly.</p>
                    <p className='text-gray-500 max-w-xl mt-2 text-sm'>If your business is involved in shipping heavy bulks of cargo on a regular basis, it is very important that you hire a Cargo Clearing Agency or Custom Clearance Company to handle the cargo clearing matters without any issues</p>
                    <h1 className='mt-4 text-2xl max-w-xl font-bold'>Hire CFIPAK to Be Your Clearing Forwarding Agent in Pakistan</h1>
                    <p className='text-gray-500 max-w-xl mt-4 text-sm'>With CFIPAK you have the advantage that you can avail any kind of service related to Logistics or Freight Forwarding. We can act as your Rail Transportation Service Broker and as your Clearing Agent in Karachi, Lahore, and Islamabad etc. When we act as your hired Cargo Clearing Agency, we make sure that we are providing you the complete services from start to finish. If you are wondering as to why you should hire us as your Custom Clearance Agent, we urge you to read through the services and benefits you can avail from our services.</p>
                </div>
            </div>
            <div className=' flex flex-col justify-start items-start'>
            <div className=' flex flex-col justify-start items-start'>
                <img src='/air-freight-large1.jpg' alt='air-freight' className='w-[40rem] mt-12 md:mt-0 '/>
            </div>
                <div>
                    
                    <h1 className='font-bold text-2xl max-w-xl text-left mt-4'>Why choose us to be your Custom Clearance Agent?</h1>
                    <p className='text-gray-500 max-w-xl mt-4 text-sm'>&#x2022;&nbsp;We deal in all modes of transportation for delivering cargo from air to water to land</p>
                    <p className='text-gray-500 max-w-xl mt-1 text-sm'>&#x2022;&nbsp;We can provide you cost-effective shipping solutions according to your budget</p>
                    <p className='text-gray-500 max-w-xl mt-1 text-sm'>&#x2022;&nbsp;We can even arrange storage for your cargo and act as your warehousing service provider</p>
                    <p className='text-gray-500 max-w-xl mt-1 text-sm'>&#x2022;&nbsp;We can even negotiate with the shipping line to get you the freight rates you need</p>
                    <p className='text-gray-500 max-w-xl mt-1 text-sm'>&#x2022;&nbsp;We can process all kinds of shipping documents such as Certificate of Origin, Bill of Lading etc.</p>
                    <p className='text-gray-500 max-w-xl mt-1 text-sm'>&#x2022;&nbsp;We can arrange for your cargo to be transmitted from your premises to the port</p>
                    <p className='text-gray-500 max-w-xl mt-1 text-sm'>&#x2022;&nbsp;We have been working in the industry from almost twenty years</p>
                    <p className='text-gray-500 max-w-xl mt-1 text-sm'>&#x2022;&nbsp;We have an established network all over the country to process your procedures</p>
                    <p className='text-gray-500 max-w-xl mt-1 text-sm'>&#x2022;&nbsp;We are registered in several renowned organizations such as PIFFA, FIATA, IATA and others</p>

                    <p className='text-gray-500 max-w-xl mt-2 text-sm'>Combined Freight International Pakistan or CFIPAK has managed to become one of the most credible companies providing cheap custom service, and we are gradually on the path to becoming the best Custom Clearance Service in Pakistan mainly because we never compromise on the quality of our services.</p>
                    <p className='text-gray-500 max-w-xl mt-2 text-sm'>One of the most notable features of our services is that we have the necessary contacts all over the country which helps us in carrying out our operations successfully. Our offices are present in Karachi, Lahore, Islamabad and Faisalabad as well, which means that customers can reach us in any of the major cities that they seek.</p>
                    <p className='text-gray-500 max-w-xl mt-2 text-sm'>If you need to get any cargo shipped or delivered from one place to another, or need any kind of logistics solutions, do not hesitate in contacting us or visiting our office for your ease.</p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default page