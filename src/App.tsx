import React from "react";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import ChatWidget from "./components/Chat";
import Header from "./components/Header";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = React.useState(false);
  console.log(darkMode);

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="font-sans bg-white dark:bg-gray-800 text-gray-800 dark:text-black">
        <Header setDarkMode={setDarkMode} darkMode={darkMode} />
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
        <ChatWidget />
      </div>
    </div>
  );
};

export default App;
