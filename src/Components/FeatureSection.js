import React from 'react'

function FeatureSection() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-2">Work smarter with powerful</h2>
        <h2 className="text-5xl font-bold mb-8">striking features</h2>


        <p className="text-base text-gray-600 mb-1">We made sure that anyone who visits it once will have no reason to look</p>
        <p className="text-base text-gray-600 mb-8">anywhere else.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Responsive Design"
            description="The best job board php script looks perfect in all types of devices. QuickJob looks perfect in all devices laptop, tablet smartphone."
          />
          <FeatureCard
            title="Multi Country"
            description="Now its easy to create your job board website portal for any place, country, region or city in the world."
          />
          <FeatureCard
            title="Multi Currency"
            description="Whatever currency you want to setup for your payment option, not a problem QuickJob allows you to set different Currency as you want."
          />
          <FeatureCard
            title="Private Messaging"
            description="Quick chat addon integrated with QuickJob job board php script. Employer and jobseeker can message each other to discuss about various details."
          />
          <FeatureCard
            title="Multilingual Ready"
            description="QuickJob, the best job board php script allows you to quickly and easily translate your website in any of your desire language."
          />
          <FeatureCard
            title="Powerful Admin"
            description="QuickJob comes with an extended powerful admin panel, which allows you to manage all jobs, companies, employers and many more – with few clicks."
            // image={PowerfulAdminImage}
          />
        </div>
      </div>
    </div>

// import PowerfulAdminImage from './powerful-admin.png';


  )
}


const FeatureCard = ({ title, description, image }) => {
    return (
      <div className="bg-white p-6 rounded-lg relative ">
        {image && <img src={image} className="w-8 h-8 mx-auto absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2" alt="Feature Icon" />}
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    );
  };


export default FeatureSection