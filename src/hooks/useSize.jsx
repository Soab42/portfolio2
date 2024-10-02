import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants/index.js';

export default function useSize() {
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);
    return { isSmall, isMobile, isTablet, sizes };
}
