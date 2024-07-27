import { Button, Button1 } from '../../components/smallcomp/Button'

function About() {
    return (
        <section className='my-12 py-10 bg-gray-100'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-5 gap-1'>
                <div className='lg:col-span-2'>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl  '>Enjoy the exclusive benefits</h1>
                </div>
                <div data-aos="zoom-in"><Button1>DISCOVER MORE BENEFITS</Button1> </div>
                <div data-aos="zoom-in"><Button>BECOME A MEMBER</Button> </div>
            </div>
            {/*  */}
            <div className='mx-5 mt-2'>
                <p className='text-black'>As a D&G Rewards member, you enjoy exclusive benefits. You collect points that you can use to enhance
                    your travel experience or to pay for your booking. join for free and elevate your stay!
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-2 mx-6 my-5">
                <div
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                    <a href="#">
                        <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Member Only Rate</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Members get up to 15% discount</p>
                    <a href="#" className="inline-flex font-medium items-center text-blue-600 hover:underline">
                        See our guideline

                    </a>
                </div>


                <div 
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"

                className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                    <a href="#">
                        <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Discount on Food and Beverages</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Discount on food and beverages</p>
                    <a href="#" className="inline-flex font-medium items-center text-blue-600 hover:underline">
                        See our guideline

                    </a>
                </div>


                <div 
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                
                className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                    <a href="#">
                        <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Priority Line</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Save waiting time with access to priority line</p>
                    <a href="#" className="inline-flex font-medium items-center text-blue-600 hover:underline">
                        See our guideline

                    </a>
                </div>

            </div>
        </section>
    )
}

export default About









