import Button from "./Button";
import images1 from '../Images/Feature1.png'
import images2 from '../Images/Feature2.png'
import images3 from '../Images/Feature3.png'
const FeatureSection = () => {
    return (
        <>
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        {/* Left side: Text content */}
        <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0 ml-8">
          <h2 className="text-4xl font-bold mb-4 ">Unlimited category.</h2>
          <div className="max-w-sm"> {/* Added max-w-sm class */}
            <p className="text-gray-700 mb-4">Do you want more different categories than the default category in your job board website? Don't worry you can add, edit or delete any categories as you want with this best job board php script.</p>
          </div>

          <Button>View more</Button>
        </div>

        {/* Right side: Image */}
      <div className="md:w-1/2 order-first md:order-last">
        <img src={images1} className="w-full rounded-lg" alt="Feature Image" />
      </div>
      </div>

      {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}


      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
      {/* Left side: Image */}
      <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
        <img src={images2} className="w-full rounded-lg" alt="Feature Image" />
      </div>

      {/* Right side: Text content */}
      <div className="md:w-1/2 md:pl-8">
        <h2 className="text-3xl font-bold mb-4">Unlimited custom fields</h2>
        <div className="max-w-sm">
          <p className="text-gray-700 mb-4">You can create unlimited custom fields like Text Box, Text Area, URL, Number, Select, Radio and Checkbox. QuickJob offers unlimited custom content fields super easy to implement on the site. Which helps users to add their required information and data on the listings.</p>
        </div>

        <Button>View more</Button>

      </div>
    </div>

    {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        {/* Left side: Text content */}
        <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0 ml-8">
          <h2 className="text-4xl font-bold mb-4 ">Most advance user</h2>
          <h2 className="text-4xl font-bold mb-4 ">dashboard</h2>
          <div className="max-w-sm"> {/* Added max-w-sm class */}
            <p className="text-gray-700 mb-4">QuickJob job php script provide employers to easily view and modify their jobs or company details, edit or delete an job any time, promote a single job, check payment, profile settings and more.</p>
          </div>

          <Button>View more</Button>

        </div>

        {/* Right side: Image */}
      <div className="md:w-1/2 order-first md:order-last">
        <img src={images3} className="w-full rounded-lg" alt="Feature Image" />
      </div>
      </div>
</>



    );
  };

  export default FeatureSection;
