import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Instagram from '@mui/icons-material/Instagram';
import GitHub from '@mui/icons-material/GitHub';
import Twitter from '@mui/icons-material/Twitter';
import Link from '@mui/material/Link';
import TypeIt from "typeit-react";
import {links} from "../../config.jsx"
import { FaDiscord, FaLinkedin } from 'react-icons/fa';
import { useTranslation } from "react-i18next";
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();
const api = "https://api.preless.social/cdn/"

export default function Album() {
  const {t} = useTranslation();
  const skills = [
    {name:"NodeJS", src:api+"nodejs.svg"},
    {name:"NextJS", src:api+"nextjs.svg"},
    {name:"ReactJS", src:api+"react.svg"},
    {name:"ExpressJS", src:api+"expressjs.svg"},
    {name:"C#", src:api+"csharp.svg"},
    {name:"Python", src:api+"python.svg"},
    {name:"JavaScript", src:api+"javascript.svg"},
    {name:"Arduino", src:api+"arduino.svg"},
    {name:"HTML", src:api+"html.svg"},
    {name:"CSS", src:api+"css.svg"},
    {name:"Bootstrap", src:api+"bootstrap.svg"},
    {name:"Tailwind CSS", src:api+"tailwindcss.svg"},
    {name:"MongoDB", src:api+"mongo.svg"},
    {name:"MySQL", src:api+"mysql.svg"},
    {name:"Figma", src:api+"figma.svg"},
    {name:"Github", src:api+"github.svg"}
]
  return (
    <ThemeProvider theme={theme}>
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
              <TypeIt options={{ speed: 100, strings:[t("pages.index.main.words.1"),t("pages.index.main.words.2"),t("pages.index.main.words.3")], breakLines: false,
  loop: true,
  loopDelay: 2000,
  afterStep: (instance) => {
    instance.getElement().style.color = "red";
  }}} />
            </Typography>
          </Container>
        </Box>

        {/* I'm */}
        <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6 }}>
          <Container maxWidth="sm">
            <Typography variant="h5" align="center" color="text.primary" gutterBottom>
              {t("pages.index.whoWeAre.title")}
            </Typography>
            <Typography variant="p" align="center" color="text.secondary" paragraph>
              {t("pages.index.whoWeAre.description")}
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center">
              <Button href={links.Instagram}><Instagram  style={{"color":"#000"}}/></Button>
              <Button href={links.Twitter}><Twitter  style={{"color":"#000"}} /></Button>
              <Button href={links.Github}><GitHub  style={{"color":"#000"}} /></Button>
              <Button href={links.Linkledin}><FaLinkedin  style={{"color":"#000", "fontSize":"22px"}} /></Button>
              <Button href={links.Discord}><FaDiscord  style={{"color":"#000", "fontSize":"22px"}} /></Button>
              </Stack>
          </Container>
        </Box>
        <Box>
        <h3 className="font-semibold text-black text-xl" style={{"textAlign":"center"}}>
            Skills &amp; Technologies
          </h3>
        <div class="flex flex-col min-h-screen justify-center items-center">
<div class="flex flex-wrap justify-center">
{skills.map((skill) => (
         
      <div class="flex p-4 ml-5 md:p-10">
       <div class="w-full flex items-center justify-center bg-transparent">
          <div class="relative w-48 md:w-52 h-14 sm:h-14 md:h-16 bg-gradient-to-r from-purple-700 to-purple-900 rounded-md pt-4 pb-8 px-4 shadow-md hover:shadow-lg transition flex flex-col items-center">
                    <div class="absolute rounded-full bg-transparent w-16 md:w-20 md:h-20 md:p-2 z-10 -top-2 md:-top-4 -left-12 md:-left-14 transition ">
                          <div class="w-16 sm:w-18 md:w-20">
                            <img alt="icon" style={{"minWidth":"75px", "minHeight":"75px", "maxWidth":"78px", "maxHeight":"78px"}} src={skill.src}/>
                          </div>         
                    </div>
            <div class="flex flex-col space-y-2 md:space-y-4">
            <label class="absolute font-bold text-gray-100 text-md text-start top-1 left-8 sm:left-10">
            {skill.name}
              </label>
              </div>
          </div>
</div>
      </div>
))}
</div>
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
