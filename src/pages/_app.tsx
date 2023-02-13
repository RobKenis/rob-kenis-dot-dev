import type {AppProps} from 'next/app'
import {createTheme, NextUIProvider} from "@nextui-org/react"
import {ThemeProvider as NextThemesProvider} from 'next-themes';
import DefaultLayout from "@/components/layouts/DefaultLayout";


const lightTheme = createTheme({
    type: 'light',
})

const darkTheme = createTheme({
    type: 'dark',
})

export default function App({Component, pageProps}: AppProps) {
    return (
        <NextThemesProvider
            defaultTheme="system"
            attribute="class"
            value={{
                light: lightTheme.className,
                dark: darkTheme.className
            }}
        >
            <NextUIProvider>
                <DefaultLayout>
                    <Component {...pageProps} />
                </DefaultLayout>
            </NextUIProvider>
        </NextThemesProvider>
    );
}
