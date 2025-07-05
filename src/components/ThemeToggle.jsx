// src/components/ThemeToggle.jsx
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { dark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border dark:border-white border-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      title="Toggle dark / light mode"
    >
      {dark ? '☀️' : '🌙'}
    </button>
  );
}
