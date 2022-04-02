import { Helmet } from 'react-helmet-async'


export default function MetaTags(props) {
    return (
        <Helmet>
            <title>NullMan</title>
            <meta name="title" content="NullMan" />
            <meta name="description" content="Hi, I'm NullMan. I am a backend developer. I am a 2nd year high school student. My favorite activities are playing games, listening to music and sleeping." />
            <meta property="og:type" content="website" />
            <meta name="robots" content="index,follow" />
<meta name="googlebot" content="index,follow" />
<meta name="Author" content="https://nullman.tech/" />
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
<meta name="description" content="Hi, I'm NullMan. I am a backend developer. I am a 2nd year high school student. My favorite activities are playing games, listening to music and sleeping." />
<meta property="og:title" content="NullMan" />
<meta property="og:type" content="website" />
<meta name="keywords" content="nullman, nullman.tech, vupy, vupy chat, nullman.com, enes, recep enes, enes recep, iamnullman" />
<meta property="og:url" content="https://nullman.tech/" />
<meta property="og:description" content="Hi, I'm NullMan. I am a backend developer. I am a 2nd year high school student. My favorite activities are playing games, listening to music and sleeping." />
<meta property="og:image" content="https://api.preless.social/cdn/vupy_logo.png" />
<meta property="og:site_name" content="NullMan" />
<meta name="theme-color" content="#2fcacc" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="icon" href="https://api.preless.social/cdn/vupy_logo.png" />
         <script src="https://cdn.tailwindcss.com"></script>
        </Helmet>
    );
};