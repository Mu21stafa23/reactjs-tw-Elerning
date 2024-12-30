import { Link } from 'react-router-dom'; 
import Logo from '../../assets/vite.svg'; // Make sure you import the logo properly
import Nav from '../../Components/Navbar/Nav'; 

export default function About() {
  return (
    <>
    <Nav />


    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>

      {/* Logo and Title */}
      <Link to={"/"}>
        <img
          alt="Your Company"
          src={Logo}
          className="mx-auto h-10 w-auto"
        />
        
        <h2 className="mt-10 text-center text-2xl text-blue-700 font-semibold uppercase hover:text-black">
          About Us
        </h2>
      </Link>

      {/* About Section */}
      <div className="mt-16 max-w-xl mx-auto text-center">
        <p className="text-lg text-gray-900">
          We are a leading e-learning platform dedicated to providing top-quality education through innovative online tools. 
          Our mission is to make learning accessible to everyone, anywhere, at any time.
        </p>
        
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
          <p className="mt-4 text-lg text-gray-600">
            Our mission is to revolutionize the learning experience by providing high-quality courses and resources, 
            empowering learners to unlock their potential and achieve success in their chosen fields.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800">Our Vision</h3>
          <p className="mt-4 text-lg text-gray-600">
            To become a global leader in online education, offering affordable, engaging, and effective learning opportunities 
            to students of all ages and backgrounds.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800">Our Values</h3>
          <ul className="mt-4 text-lg text-gray-600 space-y-2">
            <li>Innovation: We continuously adapt to the evolving needs of learners.</li>
            <li>Accessibility: We believe in equal learning opportunities for everyone.</li>
            <li>Quality: We provide high-quality content and resources for learners.</li>
            <li>Community: We foster a collaborative environment for students and educators alike.</li>
          </ul>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="mt-16 text-center">
        <p className="text-lg text-gray-900">Want to know more or collaborate with us?</p>
        <Link
          to="/contact"
          className="mt-4 inline-block rounded-md bg-indigo-600 px-6 py-2 text-white font-semibold hover:bg-indigo-500 focus:outline-none"
        >
          Contact Us
        </Link>
      </div>
    </div>
    </>

  );
}
