import { useEffect, useState } from 'react';

const navigation = [
  { name: 'Home', href: 'home' },
  { name: 'Services', href: 'services' },
  { name: 'Results', href: 'results' },
  { name: 'About', href: 'about' },
  { name: 'Contact', href: 'contact' },
];

interface NavBarProps {
  isClicked: boolean;
  toggleNavClick: () => void;
}

const Nav = ({ isClicked, toggleNavClick }: NavBarProps) => {
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll('section[id]');

      sections.forEach((section) => {
        if (section instanceof HTMLElement) {
          const sectionTop = section.offsetTop - 100;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveLink(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Nav */}
      <nav
        className={`${
          isClicked ? 'translate-x-0' : '-translate-x-761'
        } fixed left-0 top-0 flex w-full items-center justify-start h-screen transition-all duration-500 lg:hidden`}
      >
        <ul className="h-full w-[50%] border-r border-2 border-gray-400 bg-background pl-4 pt-36">
          {navigation.map((item, index) => (
            <li key={index} className="mb-4 text-xl font-500 capitalize">
              <a
                href={`/#${item.href}`}
                className="transition-colors duration-300 hover:text-primary"
                onClick={() => {
                  toggleNavClick();
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop Nav */}
      <div className="hidden md:inline-flex">
        <ul className="flex gap-10 capitalize">
          {navigation.map((item, index) => (
            <li key={index} className="text-[1rem] inline-block font-500 ">
              <a
                href={`/#${item.href}`}
                className={`relative transition-colors duration-300 after:absolute after:bottom-[-0.2rem] after:left-0 after:h-[3px] after:w-5 after:rounded-xl after:transition-all after:duration-300 after:ease-in hover:after:w-full hover:after:bg-primary ${
                  activeLink === item.href
                    ? 'relative text-primary after:absolute after:bottom-[-0.2rem] after:left-0 after:h-[3px] after:w-full after:rounded-xl after:bg-primary after:transition-all after:duration-500 after:ease-in  '
                    : ''
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Nav;
