import { Moon, Sun } from "lucide-react";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  return (
    <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 text-white">
      <h1 className="text-3xl font-bold text-black dark:text-white">
        SoftSell
      </h1>
      <div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 bg-white text-blue-600 rounded-full cursor-pointer border-2"
          title="Toggle Theme"
        >
          {darkMode ? <Sun /> : <Moon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
