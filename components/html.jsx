import React from "react"
export default class Html extends React.Component {
    render() {
        //render content
        return (
            <html>
            <head lang="en">
                <meta charset="UTF-8"></meta>
                <title>ReactJS: Github Repos</title>
                <link rel="apple-touch-icon" sizes="57x57" href="images/apple-touch-icon-57x57.png"></link>
                <link rel="apple-touch-icon" sizes="60x60" href="images/apple-touch-icon-60x60.png"></link>
                <link rel="apple-touch-icon" sizes="72x72" href="images/apple-touch-icon-72x72.png"></link>
                <link rel="apple-touch-icon" sizes="76x76" href="images/apple-touch-icon-76x76.png"></link>
                <link rel="apple-touch-icon" sizes="114x114" href="images/apple-touch-icon-114x114.png"></link>
                <link rel="apple-touch-icon" sizes="120x120" href="images/apple-touch-icon-120x120.png"></link>
                <link rel="apple-touch-icon" sizes="144x144" href="images/apple-touch-icon-144x144.png"></link>
                <link rel="apple-touch-icon" sizes="152x152" href="images/apple-touch-icon-152x152.png"></link>
                <link rel="apple-touch-icon" sizes="180x180" href="images/apple-touch-icon-180x180.png"></link>
                <link rel="icon" type="image/png" href="images/favicon-32x32.png" sizes="32x32"></link>
                <link rel="icon" type="image/png" href="images/android-chrome-192x192.png" sizes="192x192"></link>
                <link rel="icon" type="image/png" href="images/favicon-96x96.png" sizes="96x96"></link>
                <link rel="icon" type="image/png" href="images/favicon-16x16.png" sizes="16x16"></link>
                <link rel="manifest" href="images/manifest.json"></link>
                <link rel="shortcut icon" href="images/favicon.ico"></link>
                <meta name="msapplication-TileColor" content="#da532c"></meta>
                <meta name="msapplication-TileImage" content="images/mstile-144x144.png"></meta>
                <meta name="msapplication-config" content="images/browserconfig.xml"></meta>
                <meta name="theme-color" content="#ffffff"></meta>
                <meta name="apple-mobile-web-app-capable" content="yes"></meta>
                <meta name="apple-mobile-web-app-status-bar-style" content="black"></meta>
                <meta name="viewport"
                      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimal-ui"></meta>
                <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css"></link>
            </head>
            <body>
            <div id="app" dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
            <script dangerouslySetInnerHTML={{__html: this.props.state}}></script>
            <script src="/public/js/client.js" defer></script>
            </body>
            </html>
        );
    }
}