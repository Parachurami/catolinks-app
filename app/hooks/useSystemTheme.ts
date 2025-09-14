import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { useThemeStore } from "../store/themeStore";

export const useSystemTheme = () =>{
    const colorScheme = useColorScheme();
    const setTheme = useThemeStore((state) => state.setTheme);
    const currentTheme = useThemeStore((state) => state.theme)
    const themes = {
        'light':{
            textColor:'#000000',
            inputContainer:'#ffffff',
            backgroundColor:'#FFFFFF17',
            settingsText:'#00000065',
            dividerStyle:'#000000E2',
            placeholder:'#00000039'
        },
        'dark':{
            textColor:'white',
            backgroundColor:'black',
            inputContainer:'#161819',
            settingsText: '#75797a',
            dividerStyle:'#818385c5',
            placeholder:'#FFFFFF4E'
        }
    }
    useEffect(() =>{
     if(colorScheme){
        setTheme(colorScheme);
     }   
    },[colorScheme, setTheme])

    return {themeData:themes[currentTheme], currentTheme}


}