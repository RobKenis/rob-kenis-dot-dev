import {Container, Navbar, Switch, Text, useTheme} from "@nextui-org/react";
import {Logo} from "@/components/Logo";
import {useTheme as useNextTheme} from "next-themes";

interface DefaultLayoutProps {
    children: JSX.Element;
}

export default function Layout({children}: DefaultLayoutProps) {
    const {setTheme} = useNextTheme();
    const {isDark, type} = useTheme();
    return (
        <>
            <Navbar>
                <Navbar.Brand>
                    <Logo/>
                    <Text b color="inherit" hideIn="xs">
                        HELLO
                    </Text>
                </Navbar.Brand>
                <Navbar.Content hideIn="xs">
                    <Navbar.Link href="#">Blog</Navbar.Link>
                    <Navbar.Link href="#">Learn</Navbar.Link>
                    <Navbar.Link href="#">About Me</Navbar.Link>
                </Navbar.Content>
                <Navbar.Content>
                    <Switch
                        checked={isDark}
                        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
                    />
                </Navbar.Content>
            </Navbar>
            <Container justify={"space-around"}>
                {children}
            </Container>
        </>
    )
}