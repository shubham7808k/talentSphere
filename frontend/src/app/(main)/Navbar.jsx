import React from 'react'

const Home = () => {
  return (
    <div>
      <>
  {/* nav bar section */}
  <nav className="flex flex-wrap items-center justify-between p-3 bg-[#e8e8e5]">
    <div className="text-xl"><img src="TalentSphere_logo.png" alt="TalentSphere" /></div>
    <div className="flex md:hidden">
      <button id="hamburger">
        <img
          className="toggle block"
          src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
          width={40}
          height={40}
        />
        <img
          className="toggle hidden"
          src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
          width={40}
          height={40}
        />
      </button>
    </div>
    <div className=" toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 md:border-none">
      <a
        href="#home"
        className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
      >
        Home
      </a>
      <a
        href="#services"
        className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
      >
        Services
      </a>
      <a
        href="#aboutus"
        className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
      >
        About us
      </a>
      <a
        href="#gallery"
        className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
      >
        Gallery
      </a>
      <a
        href="#contactUs"
        className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
      >
        Visit Us
      </a>
    </div>
    <div className="toggle w-full text-end hidden md:flex md:w-auto px-2 py-2 md:rounded">
      <a href="tel:+123">
        <div className="flex justify-end">
          <div className="flex items-center h-10 w-30 rounded-md bg-[#c8a876] text-white font-medium p-2">
            {/* Heroicon name: phone */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            Call now
          </div>
        </div>
      </a>
    </div>
  </nav>
  {/* hero seciton */}
  <div className="relative w-full h-[320px]" id="home">
    <div className="absolute inset-0 opacity-70">
      <img
        src="https://cdn.brvn.vn/editor/2020/04/portfoliomau6768x469_1587628143.jpg"
        alt="Background Image"
        className="object-cover object-center w-full h-full"
      />
    </div>
    <div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 mb-4 md:mb-0">
        <h1 className="text-grey-700 font-medium text-4xl md:text-5xl leading-tight mb-2">
          Transform your talent into a visual story
        </h1>
        <p className="font-regular text-xl mb-8 mt-4">
          One stop solution for flour grinding services
        </p>
        <a
          href="#contactUs"
          className="px-6 py-3 bg-[#c8a876] text-white font-medium rounded-full hover:bg-[#c09858]  transition duration-200"
        >
          Contact Us
        </a>
      </div>
    </div>
  </div>
  {/* our services section */}
  <section className="py-10" id="services">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/678837e76c0afa8b039c82f7_068b6139-28d4-4d90-a387-4dc6a15be801.webp"
            alt="wheat flour grinding"
            className="w-full h-64 object-cover"
          />
          <div className="p-6 text-center">
            <h3 className="text-xl font-medium text-gray-800 mb-2">
              Wheat Flour Grinding
            </h3>
            <p className="text-gray-700 text-base">
              Our wheat flour grinding service provides fresh, high-quality
              flour to businesses and individuals in the area. We use
              state-of-the-art equipment to grind wheat into flour, and we offer
              a variety of flours to meet the needs of our customers.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://static.wixstatic.com/media/41e17b_bc634c32cfcf42ec82bdbb99f389acb0~mv2.jpg"
            alt="Coffee"
            className="w-full h-64 object-cover"
          />
          <div className="p-6 text-center">
            <h3 className="text-xl font-medium text-gray-800 mb-2">
              Gram Flour Grinding
            </h3>
            <p className="text-gray-700 text-base">
              Our gram flour is perfect for a variety of uses, including baking,
              cooking, and making snacks. It is also a good source of protein
              and fiber.Our gram flour grinding service is a convenient and
              affordable way to get the freshest gram flour possible.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://designshack.net/wp-content/uploads/Business-Portfolio-MS-Word-Template-1.webp"
            alt="Coffee"
            className="w-full h-64 object-cover"
          />
          <div className="p-6 text-center">
            <h3 className="text-xl font-medium text-gray-800 mb-2">
              Jowar Flour Grinding
            </h3>
            <p className="text-gray-700 text-base">
              Our jowar grinding service is a convenient and affordable way to
              get fresh, high-quality jowar flour. We use state-of-the-art
              equipment to grind jowar into a fine powder, which is perfect for
              making roti, bread, and other dishes.
            </p>
            <details>
              <summary>Read More</summary>
              <p>
                Our jowar flour is also a good source of protein and fiber,
                making it a healthy choice for your family.
              </p>
            </details>
            <p />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://mdbcdn.b-cdn.net/wp-content/uploads/2018/01/corporate.jpg"
            alt="Coffee"
            className="w-full h-64 object-cover"
          />
          <div className="p-6 text-center">
            <h3 className="text-xl font-medium text-gray-800 mb-2">
              Chilli pounding
            </h3>
            <p className="text-gray-700 text-base">
              We specializes in the production of high-quality chili powder. Our
              chili powder is made from the finest, freshest chilies, and we use
              traditional pounding methods to ensure that our chili powder
              retains its full flavor and aroma.
            </p>
            <details>
              <summary>Read More</summary>
              <p>
                {" "}
                We offer a variety of chili powder products, including mild,
                medium, and hot. We also offer custom blends to meet the
                specific needs of our customers.
              </p>
            </details>
            <p />
          </div>
        </div>
        {/* special card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          
          <img
            src="https://tint.creativemarket.com/_GXSeHW1zxbCtUw7yOUehuSIH0mPiok8HvpWHnjZDa8/width:1200/height:800/gravity:nowe/rt:fill-down/el:1/czM6Ly9maWxlcy5jcmVhdGl2ZW1hcmtldC5jb20vaW1hZ2VzL3NjcmVlbnNob3RzL3Byb2R1Y3RzLzQwMC80MDA1LzQwMDUzODgvMDFfZnJvbnRjb3Zlci1vLmpwZw?1518611018"
            alt="Coffee"
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <div className="p-6 bg-white text-center rounded-b-lg md:min-h-full">
            <h3 className="text-xl font-medium text-gray-800 mb-2">
              Flavoured Spaghetti
            </h3>
            <p className="text-gray-700 text-base">
              <span className="font-medium underline">Our speciality is</span>
              Bappa Flour Mill offers a variety of flavored spaghetti dishes
              that are sure to tantalize your taste buds. We use only the
              freshest ingredients Our flavors include: Mango, spinach
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://www.creatisimo.net/wp-content/uploads/2024/06/portfolio-template04.jpg"
            alt="papad"
            className="w-full h-64 object-cover"
          />
          <div className="p-6 text-center">
            <h3 className="text-xl font-medium text-gray-800 mb-2">
              Rice Papad
            </h3>
            <p className="text-gray-700 text-base">
              Our company produces high-quality rice papad that is made with the
              finest ingredients. We use traditional methods to make our papad,
              which gives it a unique flavor and texture. Our papad is also
              gluten-free and vegan.
            </p>
            <details>
              <summary>Read More</summary>
              <p>
                {" "}
                We offer a variety of rice papad flavors, including plain,
                salted, spicy, and flavored. We also offer a variety of sizes
                and shapes to choose from. Our papad is available in bulk or in
                individual packages.
              </p>
            </details>
            <p />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* about us */}
  <section className="bg-gray-100" id="aboutus">
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div className="max-w-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            About Us
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Bappa flour mill provides our customers with the highest quality
            products and services. We offer a wide variety of flours and spices
            to choose from, and we are always happy to help our customers find
            the perfect products for their needs. We are committed to providing
            our customers with the best possible experience. We offer
            competitive prices, fast shipping, and excellent customer service.
            We are also happy to answer any questions that our customers may
            have about our products or services. If you are looking for a flour
            and spices service business that can provide you with the highest
            quality products and services, then we are the company for you. We
            look forward to serving you!
          </p>
        </div>
        <div className="mt-12 md:mt-0">
          <img
            src="https://blog.flipbuilder.com/wp-content/uploads/2024/01/Photography-Portfolio-Template.png"
            alt="About Us Image"
            className="object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  </section>
  {/* why us  */}
  <section className="text-gray-700 body-font mt-10">
    <div className="flex justify-center text-3xl font-bold text-gray-800 text-center">
      Why Us?
    </div>
    <div className="container px-5 py-12 mx-auto">
      <div className="flex flex-wrap text-center justify-center">
        <div className="p-4 md:w-1/4 sm:w-1/2">
          <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
            <div className="flex justify-center">
              <img
                src="https://cdn-icons-png.freepik.com/512/1465/1465515.png?ga=GA1.1.1733521931.1740638147"
                className="w-32 mb-3"
              />
            </div>
            <h2 className="title-font font-regular text-2xl text-gray-900">
              Proper Utilization of Resume Data
            </h2>
          </div>
        </div>
        <div className="p-4 md:w-1/4 sm:w-1/2">
          <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
            <div className="flex justify-center">
              <img
                src="https://cdn-icons-png.freepik.com/512/18566/18566162.png?ga=GA1.1.1733521931.1740638147"
                className="w-32 mb-3"
              />
            </div>
            <h2 className="title-font font-regular text-2xl text-gray-900">
              Customization
            </h2>
          </div>
        </div>
        <div className="p-4 md:w-1/4 sm:w-1/2">
          <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
            <div className="flex justify-center">
              <img
                src="https://cdn-icons-png.freepik.com/512/18960/18960923.png?ga=GA1.1.1733521931.1740638147"
                className="w-32 mb-3"
              />
            </div>
            <h2 className="title-font font-regular text-2xl text-gray-900">
              Time Efficiency
            </h2>
          </div>
        </div>
        <div className="p-4 md:w-1/4 sm:w-1/2">
          <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
            <div className="flex justify-center">
              <img
                src="https://cdn-icons-png.freepik.com/512/11773/11773214.png?ga=GA1.1.1733521931.1740638147"
                className="w-32 mb-3"
              />
            </div>
            <h2 className="title-font font-regular text-2xl text-gray-900">
              Seamless Integration
            </h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* gallery */}
  <section className="text-gray-700 body-font" id="gallery">
    <div className="flex justify-center text-3xl font-bold text-gray-800 text-center py-10">
      Customize Templates
    </div>
    <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      <div className="group relative">
        <img
          src="https://i.pinimg.com/736x/8e/29/f0/8e29f0f390dada4e092ae2fac30832d8.jpg"
          alt="Image 1"
          className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-150 duration-500"
        />
      </div>
      <div className="group relative">
        <img
          src="https://i.pinimg.com/736x/51/48/5e/51485e4099011f09130fb9ec1e6ae3b3.jpg"
          alt="Image 1"
          className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-150 duration-500"
        />
      </div>
      <div className="group relative">
        <img
          src="https://marketplace.canva.com/EAFEPKh7HZc/1/0/1131w/canva-beige-modern-with-abstract-element-creative-resume-b5lqGq4tb8I.jpg"
          alt="Image 1"
          className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-150 duration-500"
        />
      </div>
      <div className="group relative">
        <img
          src="https://i.pinimg.com/736x/7d/0e/7d/7d0e7d9ceacd5ffde9f131b825423b3c.jpg"
          alt="Image 1"
          className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-150 duration-500"
        />
      </div>
      {/* Repeat this div for each image */}
    </div>
  </section>
  {/* Visit us section */}
  <section className="bg-gray-100">
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-20 lg:px-8">
      <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900" id="contactUs">
          Visit Our Location
        </h2>
        <p className="mt-3 text-lg text-gray-500">Let us serve you the best</p>
      </div>
      <div className="mt-8 lg:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="max-w-full mx-auto rounded-lg overflow-hidden">
              <div className="border-t border-gray-200 px-6 py-4">
                <h3 className="text-lg font-bold text-gray-900">Contact</h3>
                <p className="mt-1 font-bold text-gray-600">
                  <a href="tel:+123">Phone: +91 123456789</a>
                </p>
                <a className="flex m-1" href="tel:+919823331842">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-between h-10 w-30 rounded-md bg-indigo-500 text-white p-2">
                      {/* Heroicon name: phone */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                      Call now
                    </div>
                  </div>
                </a>
              </div>
              <div className="px-6 py-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Our Address
                </h3>
                <p className="mt-1 text-gray-600">
                  Sale galli, 60 foot road, Latur
                </p>
              </div>
              <div className="border-t border-gray-200 px-6 py-4">
                <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                <p className="mt-1 text-gray-600">
                  Monday - Sunday : 2pm - 9pm
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden order-none sm:order-first">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.7850672491236!2d76.58802159999999!3d18.402630699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcf83ca88e84341%3A0x841e547bf3ad066d!2zQmFwcGEgZmxvdXIgbWlsbCB8IOCkrOCkquCljeCkquCkviDgpKrgpYDgpKAg4KSX4KS_4KSw4KSj4KWALCDgpK7gpL_gpLDgpJrgpYAg4KSV4KS-4KSC4KSh4KSqIOCkhuCko-CkvyDgpLbgpYfgpLXgpL7gpK_gpL4!5e0!3m2!1sen!2sin!4v1713433597892!5m2!1sen!2sin"
              className="w-full"
              width={600}
              height={450}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* footer */}
  <section>
    <footer className="bg-gray-200 text-white py-4 px-3">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full md:w-1/2 md:text-center md:mb-4 mb-8">
          <p className="text-xs text-gray-400 md:text-sm">
            Copyright 2024 © All Rights Reserved
          </p>
        </div>
        <div className="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
          <ul className="list-reset flex justify-center flex-wrap text-xs md:text-sm gap-3">
            <li>
              <a href="#contactUs" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </li>
            <li className="mx-4">
              <a href="/privacy" className="text-gray-400 hover:text-white">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </section>
</>

    </div>
  )
}

export default Home