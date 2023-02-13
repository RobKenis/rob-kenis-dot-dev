import {Container, Link, Navbar, Switch, Text, useTheme} from "@nextui-org/react";
import {Logo} from "@/components/Logo";
import {useTheme as useNextTheme} from "next-themes";

interface DefaultLayoutProps {
    children: JSX.Element;
}

export default function Layout({children}: DefaultLayoutProps) {
    const navigationItems = [{
        title: 'Home',
        href: '/'
    }, {
        title: 'Blog',
        href: '/'
    }, {
        title: 'Learn',
        href: '/'
    }, {
        title: 'About Me',
        href: '/'
    }];

    const {setTheme} = useNextTheme();
    const {isDark, type} = useTheme();
    return (
        <>
            <Navbar>
                <Navbar.Toggle showIn="xs"/>
                <Navbar.Brand>
                    <Logo/>
                    <Text b color="inherit" hideIn="xs">
                        HELLO
                    </Text>
                </Navbar.Brand>
                <Navbar.Content hideIn="xs">
                    {navigationItems.map(item => (
                        <Navbar.Link key={item.title} href={item.href}>{item.title}</Navbar.Link>))}
                </Navbar.Content>
                <Navbar.Content>
                    <Switch
                        checked={isDark}
                        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
                    />
                </Navbar.Content>
                <Navbar.Collapse>
                    {navigationItems.map(item => (<Navbar.CollapseItem key={item.title}>
                        <Link color="inherit" href={item.href}>{item.title}</Link>
                    </Navbar.CollapseItem>))}
                </Navbar.Collapse>
            </Navbar>
            <Container justify={"space-around"} lg>
                {children}
            </Container>
        </>
    )
}