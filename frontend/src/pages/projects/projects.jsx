import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import TypeIt from "typeit-react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useTranslation } from "react-i18next";
import { FaExternalLinkAlt, FaGithub, FaTwitter } from 'react-icons/fa';
const Projects = [
    {
        image:"https://api.preless.social/cdn/vupy_logo.png",
        title:"Vupy",
        description:"Vupy's purpose is to provide you with secure chat. It aims to provide comfortable use for you while presenting this chat",
        link:"https://vupy.xyz",
        links:{
          twitter:"https://twitter.com/vupyapp",
          github:"https://github.com/vupychat"
        }
    }
]
 
        const theme = createTheme();
        export default function Album() {
          const {t} = useTranslation();
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
                      <TypeIt options={{ speed: 100, strings:[t("pages.projects.word")], breakLines: false,
          loop: false,
          afterStep: (instance) => {
            instance.getElement().style.color = "red";
          }}} />
                    </Typography>
                    <Typography variant="p" align="center" color="text.secondary" paragraph>
                    {t("pages.projects.description")}
                    </Typography>
                  </Container>
                </Box>
                <Box>
                      <div className="mb-16">
                <div className="w-full px-10 pt-10">
                    <div className="container mx-auto">
                        <div role="list" aria-label="Projects" className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                            {Projects.map((data, index) => (
                            <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-auto shadow-md bg-white">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-32 w-32">
                                            <img src={data.image} alt={data.title}  className="rounded-full object-cover h-full w-full shadow-md" />
                                        </div>
                                    </div>
                                    <div className="px-6 mt-16">
                                        <h1 className="font-bold text-3xl text-center mb-1">{data.title}</h1>
                                        <p className="text-gray-800 text-sm text-center">Project #{index+1} </p>
                                        <p className="text-center text-gray-600 text-base pt-3 font-normal">{data.description}</p>
                                        <div className="w-full flex justify-center pt-5 pb-5">
                                            <a rel="noreferrer" target="_blank" style={{"fontSize":"20px","color":"#718096"}}  href={data.links.github} className="mx-5">
                                                <FaGithub/>
                                            </a>
                                            <a rel="noreferrer" target="_blank" style={{"fontSize":"20px","color":"#718096"}}  href={data.links.twitter} className="mx-5">
                                                <FaTwitter/>
                                            </a>
                                            <a rel="noreferrer" target="_blank" style={{"fontSize":"20px","color":"#718096"}} href={data.link}>
               <FaExternalLinkAlt/> 
            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))}
                  
                  </div>
                    </div>
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