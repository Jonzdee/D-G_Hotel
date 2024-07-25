import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  '../../fontawesome'

const services = [
    {
        icon: 'wifi',
        title: 'Free Wi-Fi Available',
        description: 'Lorem ipsum dolor sit piscing sed diam nonmy.'
    },
    {
        icon: 'concierge-bell',
        title: 'Meetings & Special Events',
        description: 'Lorem ipsum dolor sit piscing sed diam nonmy.'
    },
    {
        icon: 'mobile-alt',
        title: 'Free Cancellation Anytime',
        description: 'Lorem ipsum dolor sit piscing sed diam nonmy.'
    },
    {
        icon: 'tag',
        title: 'Best Price Guarantee',
        description: 'Lorem ipsum dolor sit piscing sed diam nonmy.'
    },
    {
        icon: 'calendar-alt',
        title: 'Book Now to Secure Availability',
        description: 'Lorem ipsum dolor sit piscing sed diam nonmy.'
    },
    {
        icon: 'clock',
        title: 'Late Check-out on Request',
        description: 'Lorem ipsum dolor sit piscing sed diam nonmy.'
    },
];

const ServiceCard = ({ icon, title, description }) => (
    <div 
    data-aos="zoom-in"
     className="w-full md:w-1/2 lg:w-1/3 p-4">
        <div className="border border-gray-300 p-6 text-center hover:shadow-lg">
            <div className="text-4xl mb-4">
                <FontAwesomeIcon icon={['fas', icon]} />
            </div>
            <h4 className="text-xl font-semibold mb-2">{title}</h4>
            <p>{description}</p>
        </div>
    </div>
);

const OurServices = () => (
    <section  className="py-20">
        <div className="container mx-auto">
            <div className="mb-10 text-center">
                <h2 className="text-3xl font-bold " data-title="Services">Our Services</h2>
                
            </div>
            <div  className="flex flex-wrap -mx-4">
                {services.map((service, index) => (
                    <ServiceCard
                    
                        key={index}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </div>
            
        </div>
    </section>
);


export default OurServices;
