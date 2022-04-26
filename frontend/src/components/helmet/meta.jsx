import { Helmet } from 'react-helmet-async'


export default function MetaTags(props) {
    return (
        <Helmet>
<title>{"NullMan | "+props.name}</title>
<meta name="title" content={"NullMan | "+props.name} />
<meta name="description" content="Hi, I'm NullMan. I am a backend developer. I am a 2nd year high school student. My favorite activities are playing games, listening to music and sleeping." />
<meta name="Author" content={props.link} />
<meta name="description" content="Hi, I'm NullMan. I am a backend developer. I am a 2nd year high school student. My favorite activities are playing games, listening to music and sleeping." />
<meta property="og:title" content={"NullMan | "+props.name} />
<meta name="keywords" content="nullman, nullman.tech, vupy, vupy chat, nullman.com, enes, recep enes, enes recep, iamnullman" />
<meta property="og:url" content={props.link} />
<meta property="og:site_name" content={"NullMan | "+props.name} />
<meta property="og:description" content="Hi, I'm NullMan. I am a backend developer. I am a 2nd year high school student. My favorite activities are playing games, listening to music and sleeping." />
<meta property="og:image" content="https://avatars.githubusercontent.com/u/73245847?v=4" />
<meta name="theme-color" content="#2fcacc" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta property="og:type" content="website" />
<meta name="googlebot" content="index,follow" />
<meta name="robots" content="index,follow" />
<link rel="icon" href="https://avatars.githubusercontent.com/u/73245847?v=4" />
         <script src="https://cdn.tailwindcss.com"></script>
        </Helmet>
    );
};