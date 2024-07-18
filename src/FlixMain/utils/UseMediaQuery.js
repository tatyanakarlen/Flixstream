import { useMediaQuery } from 'react-responsive';

const useMediaQueries = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 991px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)'})
  const isXsMobile = useMediaQuery({ query: '(min-width: 450) and (max-width: 767px)'})
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
//   const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

  return { isDesktopOrLaptop, isBigScreen, isTablet, isMobile, isPortrait, isXsMobile };
};

export default useMediaQueries;