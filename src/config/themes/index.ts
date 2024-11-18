export type ThemeConfig = {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  logo: string;
};

export const themes: Record<string, ThemeConfig> = {
  walmart: {
    name: 'Walmart',
    colors: {
      primary: '#0071DC',
      secondary: '#FFC220',
      accent: '#4C4C4C',
    },
    logo: '/walmart-logo.svg',
  },
  // Add more tenant themes
}; 