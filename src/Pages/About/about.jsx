import Layout from "../../components/Layout/layout";
import Footer from "../Footer/footer";

function About() {
  return (
    <Layout>
      <div className="text-center p-8">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Technologies I used in this application
        </h2>

        <div className="flex flex-wrap items-center mt-20 text-center">
          <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img
              src="../react.png"
              alt="React Logo"
              className="inline-block rounded shadow-lg border border-merino-400"
            />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
              React
            </h3>
            <p className="sm:text-lg mt-6">
              Big Deal Store is built with React 19. A navigation bar is used to
              go to the different pages of the store using React Router Dom.<br />
              In this app I strongly use the Hook useContext which allows me read and subscribe to context from different components.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center mt-20 text-center">
          <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img
              src="../tailwind-css.png"
              alt="Tailwind css logo"
              className="inline-block rounded shadow-lg border border-merino-400"
            />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
              Tailwind CSS
            </h3>
            <p className="sm:text-lg mt-6">
              Tailwind CSS was used as a way to quickly add styles using predefined classes and positioning with Flex.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center mt-20 text-center">
          <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img
              src="../github-250.png"
              alt="Github Logo"
              className="inline-block rounded shadow-lg border border-merino-400"
            />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
              Github
            </h3>
            <p className="sm:text-lg mt-6">
              All of the app's commits, along with their code, are publicly
              available on GitHub if you'd like to see them. I've provided a
              link below.
            </p>
            <a 
                href="https://github.com/jestevezsoarez/big-deal-e-commerce"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                target="_blank"
            >
              View the code on Github
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center mt-20 text-center">
          <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img
              src="../js.png"
              alt="JS Logo"
              className="inline-block rounded shadow-lg border border-merino-400"
            />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
              JS
            </h3>
            <p className="sm:text-lg mt-6">
              JS was used to create functions along the application.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}

export default About;
