import { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }) {
  const [isLargeText, setIsLargeText] = useState(false);
  useEffect(() => {
    const getTheme = async () => {
      try {
        const storedTheme = await AsyncStorage.getItem("isLargeText");
        if (storedTheme !== null) {
          console.log("Stored theme: ", storedTheme);

          setIsLargeText(JSON.parse(storedTheme));
        } else {
          setIsLargeText(false);
        }
      } catch (error) {
        console.error("Error loading theme:", error);
      }
    };
    setIsLargeText(false);
    getTheme();
  }, []);

  return (
    <ThemeContext.Provider value={{ isLargeText, setIsLargeText }}>
      {children}
    </ThemeContext.Provider>
  );
}
