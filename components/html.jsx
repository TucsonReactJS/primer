import React from "react"
import ApplicationStore from '../stores/application_store';

export default class Html extends React.Component {
    render() {
        var bodyStyle = {
            fontFamily: 'Open Sans',
        };

        //render content
        return (
            <html>
            <head lang="en">
                <meta charset="UTF-8"></meta>
                <title>{this.props.context.getStore(ApplicationStore).getPageTitle()}</title>
                <link rel="apple-touch-icon" sizes="57x57" href="/dist/assets/images/apple-touch-icon-57x57.png"></link>
                <link rel="apple-touch-icon" sizes="60x60" href="/dist/assets/images/apple-touch-icon-60x60.png"></link>
                <link rel="apple-touch-icon" sizes="72x72" href="/dist/assets/images/apple-touch-icon-72x72.png"></link>
                <link rel="apple-touch-icon" sizes="76x76" href="/dist/assets/images/apple-touch-icon-76x76.png"></link>
                <link rel="apple-touch-icon" sizes="114x114" href="/dist/assets/images/apple-touch-icon-114x114.png"></link>
                <link rel="apple-touch-icon" sizes="120x120" href="/dist/assets/images/apple-touch-icon-120x120.png"></link>
                <link rel="apple-touch-icon" sizes="144x144" href="/dist/assets/images/apple-touch-icon-144x144.png"></link>
                <link rel="apple-touch-icon" sizes="152x152" href="/dist/assets/images/apple-touch-icon-152x152.png"></link>
                <link rel="apple-touch-icon" sizes="180x180" href="/dist/assets/images/apple-touch-icon-180x180.png"></link>
                <link rel="icon" type="image/png" href="/dist/assets/images/favicon-32x32.png" sizes="32x32"></link>
                <link rel="icon" type="image/png" href="/dist/assets/images/android-chrome-192x192.png" sizes="192x192"></link>
                <link rel="icon" type="image/png" href="/dist/assets/images/favicon-96x96.png" sizes="96x96"></link>
                <link rel="icon" type="image/png" href="/dist/assets/images/favicon-16x16.png" sizes="16x16"></link>
                <link rel="manifest" href="/dist/assets/images/manifest.json"></link>
                <link rel="shortcut icon" href="/dist/assets/images/favicon.ico"></link>
                <meta name="msapplication-TileColor" content="#da532c"></meta>
                <meta name="msapplication-TileImage" content="/dist/assets/images/mstile-144x144.png"></meta>
                <meta name="msapplication-config" content="/dist/assets/images/browserconfig.xml"></meta>
                <meta name="theme-color" content="#ffffff"></meta>
                <meta name="apple-mobile-web-app-capable" content="yes"></meta>
                <meta name="apple-mobile-web-app-status-bar-style" content="black"></meta>
                <meta name="viewport"
                      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimal-ui"></meta>
                <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css"></link>
                <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700' rel='stylesheet' type='text/css'></link>
            </head>
            <body style={bodyStyle}>
            <div id="app" dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
            <script dangerouslySetInnerHTML={{__html: this.props.state}}></script>
            <script src="/dist/client.js" defer></script>
            </body>
            </html>
        );
    }
}