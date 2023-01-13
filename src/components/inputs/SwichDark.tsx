import { CookieValueTypes, deleteCookie, getCookie, hasCookie, setCookie } from 'cookies-next';
import { useTheme, useThemeMode } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import { AppRoot } from '../../pages/_app';


export default function SwichDark() {
    const theme = useTheme().theme.button;
    const [mode, setMode, toggleMode] = useThemeMode(true);
    function togleCookieDarkMode() {
        if (hasCookie("dark", { path: "/" })) {
            var cookieString: CookieValueTypes = getCookie("dark", { path: "/" });
            var dark = (cookieString == true);

            deleteCookie("dark", { path: "/" })
            setCookie("dark", !dark, { path: "/" })
        } else {
            setCookie("dark", true, { path: "/" })
        }
    }

    useEffect(() => {
        if (!hasCookie("dark", { path: "/" })) {
            setCookie("dark", false, { path: "/" })
        }
        var cookieString: CookieValueTypes = getCookie("dark", { path: "/" });
        setMode((cookieString == true) ? 'dark' : 'light')
    })
    return (
        <>
            <button
                className='rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700'
                data-testid="dark-theme-toggle"
                onClick={() => { toggleMode(); togleCookieDarkMode()}}
                type="button"
                aria-label="Toggle dark mode"
            >
                {mode != 'light' ? (
                    <HiSun aria-label="Currently dark mode" className="h-5 w-5" />
                ) : (
                    <HiMoon aria-label="Currently light mode" className="h-5 w-5" />
                )}
            </button>
        </>
    )
}