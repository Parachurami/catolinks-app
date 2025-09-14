import { create } from 'zustand'

type StoreProps = {
    theme: 'light' | 'dark' ,
    setTheme: (theme: 'light' | 'dark' ) => void
}

export const useThemeStore = create<StoreProps>((set) =>(
    {
        theme: 'light',
        setTheme: (theme) => set({theme: theme})
    }
))