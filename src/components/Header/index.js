export default function Header(props) {
    return <head>
        <title>AluraQuiz! - Steven Universo</title>
        <meta property="og:description" content="Um quiz sobre Steven Universo "/>
        <meta property="og:image" content={props.children}/>
        <meta property="og:image:type" content="image/jpeg"/>
        <meta property="og:image:width" content="800"/>
        <meta property="og:image:height" content="600"/>
    </head>
}