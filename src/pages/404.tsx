import {Link, useTheme} from "@nextui-org/react";
import ErrorPage from 'next/error'

export default function FourOhFour() {
    const {isDark, type} = useTheme();
    return <ErrorPage withDarkMode={isDark} statusCode="404" />
}