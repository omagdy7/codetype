import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

const AboutPage = () => {

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-6 md:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight mb-4 text-gray-400">About</h1>
        <p className="mb-4 text-gray-300">
          This website is a tool to help you improve your typing speed and accuracy. You can practice typing 1000 random English words, as well as custom code snippets and algorithms. The website features live statistics to track your progress, as well as a settings panel to customize your experience.
        </p>
        <h2 className="text-2xl font-bold leading-tight mb-4 text-gray-400">Features</h2>
        <ul className="list-disc list-inside mb-6 text-gray-300">
          <li>Practice typing 1000 random English words</li>
          <li>Type custom code snippets and algorithms</li>
          <li>Live statistics to track your progress</li>
          <li>Customizable settings panel</li>
        </ul>
        <h2 className="text-2xl font-bold leading-tight mb-4 text-gray-400">Contributing</h2>
        <p className="mb-4 text-gray-300">
          Want to contribute to the project? Add more themes? feel free to sumbit a pull reuqest at <a href="github-link" className="text-blue-600 hover:text-blue-400">Github Link</a>.
        </p>
        <h2 className="text-2xl font-bold leading-tight mb-4 text-gray-400">Contact</h2>
        <p className="mb-4 text-gray-300">
          If you have any questions or feedback, please don't hesitate to contact us at <a href="mailto:contact@typingtool.com" className="text-blue-600 hover:text-blue-400">contact@typingtool.com</a>.
        </p>
      </div>
      <Footer />
    </>
  );
}


export default AboutPage;
