import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import TypeIt from "typeit-react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useTranslation } from "react-i18next";
const Partners = [
    {
        title:"Parter Title",
        description:"Partner not found :(",
        link:"https://nullman.tech"
    }
]
 
        const theme = createTheme();
        export default function Album() {
          const {t} = useTranslation();
             return (
            <ThemeProvider theme={theme}>
            <>
            <title>NullMan | Partners</title>
      <meta name="title" content="NullMan | Partners" />
      <meta name="description" content="Hi, I'm NullMan. I am a backend developer. I am a 2nd year high school student. My favorite activities are playing games, listening to music and sleeping." />
      <meta name="Author" content="https://nullman.tech/partners" />
      <meta name="description" content="Hi, I'm NullMan. I am a backend developer. I am a 2nd year high school student. My favorite activities are playing games, listening to music and sleeping." />
      <meta property="og:title" content="NullMan | Partners" />
      <meta name="keywords" content="partners, ortaklıklar, nullman, nullman.tech, vupy, vupy chat, nullman.com, enes, recep enes, enes recep, iamnullman" />
      <meta property="og:url" content="https://nullman.tech/partners" />
      <meta property="og:site_name" content="NullMan | Partners" />
      <meta property="og:description" content="Hi, I'm NullMan. I am a backend developer. I am a 2nd year high school student. My favorite activities are playing games, listening to music and sleeping." />
            </>
              <CssBaseline />
              <main>
                {/* Ana Bölüm */}
                <Box
                  sx={{
                    bgcolor: 'background.paper',
                    pt: 8,
                    pb: 6,
                  }}
                >
                  <Container maxWidth="sm">
                    <Typography
                      variant="h3"
                      align="center"
                      color="text.primary"
                      gutterBottom
                    >
                      NullMan
                      <br/>
                      <TypeIt options={{ speed: 100, strings:[t("pages.partners.words.1"), t("pages.partners.words.2")], breakLines: false,
          loop: true,
          afterStep: (instance) => {
            instance.getElement().style.color = "red";
          }}} />
                    </Typography>
                    <Typography variant="p" align="center" color="text.secondary" paragraph>
                    {t("pages.partners.description")}
                    </Typography>
                  </Container>
                </Box>
                <Box>
                    <div className="w-full md:w-10/12 mx-auto grid grid-cols-12 max-w-5xl gap-4">
      {Partners.map((data, index) => (
    <div class="grid col-span-4 relative">
           <a class="group shadow-lg hover:shadow-2xl duration-200 delay-75 w-full bg-white rounded-sm py-6 pr-6 pl-9" href={data.link}>
           <span className="text-xs text-zinc-400/50 uppercase font-semibold italic">Partner #{index +1}</span>
           <p class="leading-none font-bold text-2xl text-black"> {data.title} </p>
             <p class="mt-5 h-32 text-blac overflow-auto"> {data.description} </p>
             <div class="bg-purple-400 group-hover:bg-purple-600 h-full w-4 absolute top-0 left-0"> </div>
           </a>
         </div>
      ))}
    </div>
                </Box>
              </main>
        
        
 <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          NullMan
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {t("pages.index.footer.description")}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://nullman.tech/">
        nullman.tech
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
      </Box>
            </ThemeProvider>
          );
        }