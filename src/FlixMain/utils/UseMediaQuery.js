import { useMediaQuery } from 'react-responsive';

const useMediaQueries = () => {
  const isLgDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1218px) and (max-width: 2000px)' });
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 991px) and (max-width: 1217px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 991px)' });
  const isMobile = useMediaQuery({ query: '(min-width: 450px) and (max-width: 767px)'})
  const isXsMobile = useMediaQuery({ query: '(min-width: 100px) and (max-width: 450px)'})
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
//   const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

  return { isLgDesktopOrLaptop, isDesktopOrLaptop, isTablet, isMobile, isPortrait, isXsMobile };
};

export default useMediaQueries;