import { Avatar, DarkThemeToggle, Dropdown, Flowbite, Navbar } from 'flowbite-react';
import { useRouter } from 'next/router';
import Logo from '../assets/images/logo.png';
import Login from './login';
import SwichDark from './inputs/SwichDark';

export default function NavbarPersonalizada() {
    var route = useRouter()
    var autenticado = false;
    
    return (
        <>
            <Navbar
                fluid={true}
                rounded={true}
                className="bg-slate-100"
            >
                <Navbar.Brand href="/">
                    <img
                        src={Logo.src}
                        className="mr-3 h-6 sm:h-9"
                        alt="Defensoria Pública do Estado do Pará Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xs xl:text-lg sm:text-xs font-semibold dark:text-white">
                        <p className='hidden sm:block'>
                            Defensoria Pública do Estado do Pará
                        </p>
                        <p className="sm:hidden">
                            DPA
                        </p>
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className='md:order-10'>
                    <Navbar.Link
                        href="/"
                        active={route.route == "/"}
                    >
                        Home
                    </Navbar.Link>
                    {/*
                    <Navbar.Link href="/funcionario" active={route.route.search("/funcionario") >= 0}>
                        Funcionario
                    </Navbar.Link>
                    */}

                    {autenticado ?
                        <>
                            <div className="flex md:order-2">
                                <Dropdown
                                    arrowIcon={false}
                                    inline={true}
                                    label={<Avatar alt="User settings" rounded={true} />}
                                >
                                    <Dropdown.Header>
                                        <span className="block text-sm">
                                            Bonnie Green
                                        </span>
                                        <span className="block truncate text-sm font-medium">
                                            name@flowbite.com
                                        </span>
                                    </Dropdown.Header>
                                    <Dropdown.Item>
                                        Sign out
                                    </Dropdown.Item>
                                    <Flowbite>
                                        <DarkThemeToggle />
                                    </Flowbite>
                                </Dropdown>
                            </div>
                        </>
                        :
                        <>
                            <SwichDark></SwichDark>
                            <Login></Login>
                        </>
                    }
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}