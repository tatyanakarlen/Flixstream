import { useMediaQuery } from 'react-responsive';

const useMediaQueries = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' });
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 991px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 700px)'})
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
//   const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

  return { isDesktopOrLaptop, isBigScreen, isTablet, isMobile, isPortrait };
};

export default useMediaQueries;