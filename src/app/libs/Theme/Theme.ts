const basicColors = {
    blue0: 'rgb(235, 245, 255)', // Lightest
    blue1: 'rgb(215, 235, 255)',
    blue2: 'rgb(155, 175, 195)',
    blue3: 'rgb(95, 115, 135)',
    blue4: 'rgb(35, 55, 75)', // Darker
    blue5: 'rgb(15, 35, 55)', // Darkest
    blue1_5: 'rgb(185, 205, 225)', // Between blue-1 and blue-2
    white: 'rgb(244, 245, 240)',
    black: 'rgb(22, 22, 22)',
};

export type Colors = keyof typeof basicColors;
export const ColorsString = {
    blue0: 'blue0' as Colors,
    blue1: 'blue1' as Colors,
    blue2: 'blue2' as Colors,
    blue3: 'blue3' as Colors,
    blue4: 'blue4' as Colors,
    blue5: 'blue5' as Colors,
    blue1_5: 'blue1_5' as Colors,
    white: 'white' as Colors,
    black: 'black' as Colors,
};

export const theme = {
    colors: basicColors,
    marginBase: 8,
    basicFlex: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 8,
    },
    media: {
        mobile: '@media (max-width: 768px)',
        tablet: '@media (max-width: 1024px)',
        desktop: '@media (max-width: 1440px)',
    },
    boxShadow: {
        std: `0px 0px 10px 4px ${basicColors.black}55`,
    },
    icon: {
        large: 24,
        normal: 20,
        low: 16,
    },
    borderRadius: {
        std: 8,
        large: 16,
    },
    boxWidth: {
        large: 1440,
        normal: 1024,
        small: 768,
        tiny: 530,
    },
    fonts: {
        h1: {
            fontFamily: 'Montserrat, sans-serif',
            color: basicColors.black,
            fontWeight: 900,
            fontSize: 40,
            lineHeight: 1.5,
        },
        h2: {
            fontFamily: 'Montserrat, sans-serif',
            color: basicColors.black,
            fontWeight: 900,
            fontSize: 30,
            lineHeight: 1.5,
        },
        h3: {
            fontFamily: 'Montserrat, sans-serif',
            color: basicColors.black,
            fontWeight: 900,
            fontSize: 20,
            lineHeight: 1.5,
        },
        h4: {
            fontFamily: 'Montserrat, sans-serif',
            color: basicColors.black,
            fontWeight: 700,
            fontSize: 18,
            lineHeight: 1.5,
        },
        h5: {
            fontFamily: 'Montserrat, sans-serif',
            color: basicColors.black,
            fontWeight: 700,
            fontSize: 16,
            lineHeight: 1.5,
        },
        body: {
            fontFamily: 'Montserrat, sans-serif',
            color: basicColors.black,
            fontWeight: 400,
            fontSize: 16,
            lineHeight: 1.5,
        },
        caption: {
            fontFamily: 'Montserrat, sans-serif',
            color: basicColors.black,
            fontWeight: 400,
            fontSize: 14,
            lineHeight: 1.5,
        },
        caption2: {
            fontFamily: 'Montserrat, sans-serif',
            color: basicColors.black,
            fontWeight: 500,
            fontSize: 12,
            lineHeight: 1.5,
        },
        label: {
            fontFamily: 'Montserrat, sans-serif',
            color: basicColors.black,
            fontWeight: 700,
            lineHeight: 1.5,
            fontSize: 15,
        },
        calendarText: {
            fontFamily: 'Montserrat, sans-serif',
            color: basicColors.black,
            fontWeight: 400,
            fontSize: 12,
            lineHeight: 1.5,
        },
    },
};

export type Theme = typeof theme;
