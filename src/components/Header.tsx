import { useEffect, useState } from 'react';
import Nav from './Nav';
import { AlignLeft, X } from 'lucide-react';

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [scrolling, setIsScrolling] = useState(false);

  const toggleNavClick = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;

      if (scroll > 100) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`${
        scrolling
          ? 'bg-background shadow-xl duration-500 animate-in'
          : 'duration-500 animate-out'
      } fixed top-0 z-500 w-full text-foreground`}
    >
      <div className="container flex items-center justify-between py-6 md:px-0">
        <div>
          <a href="/" className="text-lg z-10 font-600">
            Ryan Chase
          </a>
        </div>

        <Nav isClicked={isClicked} toggleNavClick={toggleNavClick} />

        <div className="z-10 flex items-center gap-4 md:hidden">
          <div className="ml-4 inline-block" onClick={toggleNavClick}>
            {isClicked ? (
              <button className="cursor-pointer text-lg">
                <X className="translate-y-1" name="Close Menu" />
              </button>
            ) : (
              <button className="cursor-pointer text-lg">
                <AlignLeft className="translate-y-1" name="Open Menu" />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
