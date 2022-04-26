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
import { FaDiscord, FaLinkedin, FaCodeBranch, FaStar } from 'react-icons/fa';
import { useTranslation } from "react-i18next";
import MetaTags from "../../components/helmet/meta"
import baseAxios from "../../helpers/axios"
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();

export default function Album() {
  const [repos, setRepos] = React.useState([]);
  const {t} = useTranslation();
  React.useEffect(() => {
    let _repos = [];
    baseAxios.get("https://api.github.com/users/iamnullman/repos")
      .then(response => response.json())
      .then(data => _repos.push(data));
      baseAxios.get("https://api.github.com/users/vupychat/repos")
      .then(response => response.json())
      .then(data => setRepos([ ..._repos, ...data]));
  }, []);
  const skills = [
    {name:"NodeJS", width:"80"},
    {name:"Python", width:"80"},
    {name:"React", width:"50"},
    {name:"HTML/CSS", width:"30"},
    {name:"Dart", width:"25"},
    {name:"Java", width:"25"}
]
  return (
    <ThemeProvider theme={theme}>
       <MetaTags url="https://nullman.tech/" name="Home" />
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
          <br/>
        <div className="flex flex-col ustify-center items-center">
<div className="flex flex-wrap justify-center" style={{"maxWidth":"600px"}}>
{skills.map((skill) => (
  <>
 <div className="flex justify-between">
        <span className="text-base font-medium text-purple-700 dark:text-white">{skill.name}</span>
      </div>
      <div class="w-full bg-gray-200 rounded-full">
  <div class="bg-purple-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" style={{"width":skill.width+"%"}}> {skill.width}%</div>
</div>
      <br/>
      </>
))}
</div>
</div>
                </Box>
                <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6 }}>
                <Typography variant="h5" align="center" color="text.primary" gutterBottom>
              {t("pages.index.repos.title")}
            </Typography>
                       <div class="w-full md:w-10/12 mx-auto grid grid-cols-12 max-w-5xl gap-4">
                       {repos.map((data) => (
                         <>
                         {data.name.startsWith(".") ? null : (
<a href={`https://github.com/${data.full_name}`} target="_blank" rel="noreferrer" class="w-72 bg-slate-900 border rounded-lg border-gray-700 p-5 shadow hover:bg-gray-700 delay-100 duration-200 grid col-span-4 relative">
  <div class="flex flex-row">
    <img src={data.owner.avatar_url} alt="img" className="rounded" style={{"maxWidth":"64px", "maxHeight":"64px"}} />
    <p class="ml-3">
      <span class="text-gray-500 font-semibold">{data.owner.login}/</span>
      <span class="text-gray-300 font-semibold">{data.name}</span>
     <br/>
     <div class="flex flex-row">
    <span class="text-white font-semibold flex">
        <p><FaStar/></p>
         <p>{data.stargazers_count}</p>
    </span>
    <span class="text-white font-semibold flex">
        <p><FaCodeBranch/></p>
       <p>{data.forks}</p>
    </span>
    </div>
    </p>
   
  </div>
  <p class="text-xs text-gray-500 mt-3">
    {data.description}
  </p>

</a>
                         )}
                         </>
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