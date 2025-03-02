import { Inter, Playfair_Display, Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });
 
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const playfair_display = Playfair_Display({
    weight: ['400', '700'],
    // subsets: ['cyrillic'],
    subsets: ['latin'],
})