export function template(data){

    return `
    
    <!doctype html>
<html lang="en">

<head>
    <title> ${data.title} MP3 Download 320kbps</title>
    <meta property="og:title" content=" ${data.title} MP3 Download 320kbps" />
    <meta name="description"
        content="${data.query} mlMP3 Download. Download ${data.query} mp3 file at 320kbps audio quality. ${data.description} music file" />
    <meta property="og:description"
        content="${data.query} MP3 Download. Download ${data.query} mp3 file at 320kbps audio quality. ${data.description} music file" />
    <meta name="keywords"
        content="Song Ubuer, ${data.query}, mp3 download, music download, song download, 320kbps mp3, 320kbps music, mp3 music, free mp3, free music, ${data.description}" />
    <link rel="canonical" href="https://songuber.co/mp3/${data.query}" />
    <meta property="og:url" content="https://songuber.co/mp3/${data.query}" />
    <meta property="og:image" content="${data.thumbnail}" />
    <meta charset="UTF-8" />
    <meta property="og:type" content="website" />
    <link rel="preconnect" href="https://songuber.co">
    <link rel="preconnect" href="https://www.google-analytics.com">
    <link rel="preconnect" href="https://www.googletagmanager.com">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png">
    <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#00a300">
    <link rel="shortcut icon" href="/favicons/favicon.ico">
    <meta name="msapplication-TileColor" content="#00a300">
    <meta name="msapplication-config" content="/favicons/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">
    <link rel="manifest" href="/pwa-v5.webmanifest">
    <style>
        .fa-flip-horizontal {
            transform: scaleX(-1)
        }

        .fa-flip-vertical {
            transform: scaleY(-1)
        }

        .fa-fw {
            text-align: center;
            width: 1.25em
        }

        @keyframes fa-spin {
            0% {
                transform: rotate(0deg)
            }

            to {
                transform: rotate(1turn)
            }
        }

        .fa-spin {
            animation: fa-spin 2s infinite linear
        }

        * {
            outline: none;
            position: relative;
            -webkit-tap-highlight-color: rgba(255, 255, 255, 0)
        }

        @media only screen and (min-width:1001px) {
            .results .public-response {
                display: block !important
            }
        }

        @media only screen and (min-width:801px) and (max-width:1100px) {
            .leading .content {
                height: 330px !important
            }

            .leading .content .layout {
                height: 200px !important;
                padding-left: 220px !important
            }

            .leading .content .layout .music-cover .music-image {
                width: 173px !important;
                height: 173px !important
            }

            .leading .content .layout .music-details .mdetails-info h1 {
                font-size: 36px !important
            }

            .leading .content .layout .music-details .mdetails-info .music-description {
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                display: block !important
            }

            .leading .content .layout .music-details .mdetails-interact .music-actions li {
                padding: 10px !important;
                font-size: 18px !important
            }
        }

        @media only screen and (max-width:800px) {
            .leading h1 .mp3-dl {
                display: block;
                font-size: 10px;
                font-weight: 600;
                text-transform: uppercase;
                color: rgba(255, 255, 255, 0.6)
            }

            .leading .search .bg {
                border-radius: 10px !important
            }

            .leading .search #searchInput,
            .leading .search .bg {
                display: none
            }

            .leading .search #searchSubmit {
                right: 0 !important
            }

            .leading.search-ui .logo {
                display: none
            }

            .leading.search-ui .search #searchInput,
            .leading.search-ui .search .bg {
                display: block !important
            }

            .leading.search-ui .search #searchSubmit {
                right: 20px !important
            }

            .leading .music-player {
                margin: 0 auto
            }

            .leading .music-actions {
                display: flex;
                width: 85%;
                justify-content: space-between;
                margin: 20px auto 25px auto !important
            }

            .leading .music-actions li {
                width: 48%;
                margin-right: 0 !important
            }
        }

        @media only screen and (min-width:601px) and (max-width:800px) {
            .leading .background {
                top: -20% !important;
                height: 140% !important;
                background-size: auto 100% !important
            }

            .leading .background img {
                width: auto !important;
                height: 100% !important
            }

            .leading .content {
                height: auto !important
            }

            .leading .content .layout {
                height: auto !important;
                padding: 30px 20px !important;
                text-align: center
            }

            .leading .content .layout .music-cover {
                left: auto !important;
                position: relative !important
            }

            .leading .content .layout .music-cover .music-image {
                margin: 0 auto 30px auto;
                width: 150px !important;
                height: 150px !important
            }

            .leading .content .layout .music-details .mdetails-info h1 {
                font-size: 32px !important
            }

            .leading .content .layout .music-details .mdetails-info .music-info li {
                font-size: 13px !important
            }

            .leading .content .layout .music-details .mdetails-info .music-info li .fas,
            .leading .content .layout .music-details .mdetails-info .music-info li .far {
                font-size: 14px !important
            }

            .leading .content .layout .music-details .mdetails-info .music-description {
                margin: 0 auto !important;
                text-align: center !important
            }

            .leading .content .layout .music-details .mdetails-interact .music-actions li {
                font-size: 20px;
                padding: 10px 15px
            }
        }

        @media only screen and (max-width:600px) {
            .leading .background {
                top: -20% !important;
                height: 140% !important;
                background-size: auto 100% !important
            }

            .leading .background img {
                width: auto !important;
                height: 100% !important
            }

            .leading .content {
                height: auto !important
            }

            .leading .content .layout {
                height: auto !important;
                padding: 30px 20px !important;
                text-align: center
            }

            .leading .content .layout .music-cover {
                left: auto !important;
                position: relative !important
            }

            .leading .content .layout .music-cover .music-image {
                margin: 0 auto 30px auto;
                width: 150px !important;
                height: 150px !important
            }

            .leading .content .layout .music-details .mdetails-info h1 {
                font-size: 24px !important
            }

            .leading .content .layout .music-details .mdetails-info .music-info li {
                margin-right: 0 !important;
                font-size: 13px !important
            }

            .leading .content .layout .music-details .mdetails-info .music-info li:first-child::after,
            .leading .content .layout .music-details .mdetails-info .music-info li:last-child::after {
                display: none !important
            }

            .leading .content .layout .music-details .mdetails-info .music-info li .fas,
            .leading .content .layout .music-details .mdetails-info .music-info li .far {
                display: none
            }

            .leading .content .layout .music-details .mdetails-info .music-info li.music-rate {
                display: block;
                margin-bottom: 15px
            }

            .leading .content .layout .music-details .mdetails-info .music-info li.music-rate .fas,
            .leading .content .layout .music-details .mdetails-info .music-info li.music-rate .far {
                font-size: 14px;
                display: inline-block
            }

            .leading .content .layout .music-details .mdetails-info .music-info li.music-rate .fas:last-child,
            .leading .content .layout .music-details .mdetails-info .music-info li.music-rate .far:last-child {
                margin-right: 0
            }

            .leading .content .layout .music-details .mdetails-info .music-info li::after {
                opacity: .5;
                content: "•";
                margin: 0 5px
            }

            .leading .content .layout .music-details .mdetails-info .music-description {
                margin: 0 auto !important;
                text-align: center !important
            }

            .leading .content .layout .music-details .mdetails-interact .music-actions li {
                padding: 10px;
                font-size: 13px;
                font-weight: 600;
                border-color: rgba(255, 255, 255, 0.35)
            }

            .leading .content .layout .music-details .mdetails-interact .music-actions li .fas {
                font-size: 14px;
                margin-right: 5px
            }

            .leading .content .layout .music-details .mdetails-interact .social-share li {
                width: 32px !important;
                height: 32px !important;
                border: none !important;
                background-color: rgba(255, 255, 255, 0.2)
            }

            .leading .content .layout .music-details .mdetails-interact .social-share li:hover {
                background-color: rgba(255, 255, 255, 0.3)
            }

            .leading .content .layout .music-details .mdetails-interact .social-share li .fab {
                font-size: 14px !important
            }
        }

        @media only screen and (max-width:1000px) {
            .showcase .layout {
                display: block !important
            }

            .showcase .layout .results {
                width: 100% !important
            }

            .showcase .layout .side-panel {
                width: 100% !important;
                padding: 0 !important
            }

            .showcase .layout .side-panel .top-musics {
                display: flex;
                flex-flow: row wrap;
                justify-content: space-between
            }

            .showcase .layout .side-panel .public-response {
                display: block !important
            }
        }

        @media only screen and (min-width:851px) and (max-width:1000px) {
            .top-artist {
                width: 18% !important
            }
        }

        @media only screen and (min-width:651px) and (max-width:850px) {
            .top-artist {
                width: 23% !important
            }

            .top-artist:nth-last-child(-n+2) {
                display: none
            }
        }

        @media only screen and (min-width:501px) and (max-width:650px) {
            .top-artist {
                width: 31% !important
            }

            .top-artist:last-child {
                display: none
            }
        }

        @media only screen and (min-width:351px) and (max-width:500px) {
            .top-artist {
                width: 48% !important
            }
        }

        @media only screen and (max-width:350px) {
            .top-artist {
                width: 100% !important
            }
        }

        @media only screen and (min-width:801px) and (max-width:1000px) {
            .top-music {
                width: 32% !important
            }

            .top-music:last-child {
                display: none
            }
        }

        @media only screen and (min-width:601px) and (max-width:800px) {
            .top-music {
                width: 49% !important
            }
        }

        @media only screen and (max-width:600px) {
            .top-music {
                width: 100% !important
            }
        }

        @media only screen and (min-width:551px) and (max-width:700px) {
            .music-file {
                margin-bottom: 30px !important;
                padding-left: 120px !important
            }

            .music-file.playing .mf-info {
                display: none !important
            }

            .music-file .mf-image {
                width: 100px !important;
                height: 100px !important
            }

            .music-file .mf-details {
                height: 100px !important
            }

            .music-file .mf-details .mf-content h3 {
                margin-bottom: 5px !important
            }

            .music-file .mf-details .mf-content .mf-info {
                margin-bottom: 5px !important
            }

            .music-file .mf-details .mf-content .mf-info li {
                font-size: 12px !important
            }

            .music-file .mf-details .mf-content .mf-desc {
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis
            }
        }

        @media only screen and (max-width:550px) {
            .music-file {
                margin-bottom: 30px !important;
                padding-left: 105px !important
            }

            .music-file.playing .mf-info {
                display: none !important
            }

            .music-file .mf-image {
                width: 95px !important;
                height: 95px !important
            }

            .music-file .mf-details {
                height: 95px !important
            }

            .music-file .mf-details .mf-content h3 {
                margin-bottom: 5px !important
            }

            .music-file .mf-details .mf-content .mf-info {
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                margin-bottom: 5px !important
            }

            .music-file .mf-details .mf-content .mf-info li {
                margin-right: 0 !important;
                font-size: 12px !important
            }

            .music-file .mf-details .mf-content .mf-info li .fas,
            .music-file .mf-details .mf-content .mf-info li .far {
                display: none
            }

            .music-file .mf-details .mf-content .mf-info li:last-child::after {
                display: none
            }

            .music-file .mf-details .mf-content .mf-info li::after {
                opacity: .5;
                content: "•";
                margin: 0 5px
            }

            .music-file .mf-details .mf-content .mf-desc {
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis
            }

            .music-file .mf-details .mf-actions li {
                font-size: 12px !important;
                font-weight: 600 !important;
                margin-right: 10px !important
            }

            .music-file .mf-details .mf-actions li:last-child {
                margin-right: 0 !important
            }
        }

        @media only screen and (max-width:430px) {

            [data-mact="pm"] .large,
            [data-mact="sm"] .large {
                display: none
            }

            [data-mact="pm"] .short,
            [data-mact="sm"] .short {
                display: block !important
            }

            .footer .menu li {
                margin-right: 10px !important
            }

            .footer .menu li:last-child {
                margin-right: 0 !important
            }

            .footer .menu li a {
                font-size: 11px !important
            }
        }

        @media only screen and (max-width:380px) {
            [data-mact="dl"] .large {
                display: none
            }

            [data-mact="dl"] .short {
                display: block !important
            }
        }

        @media only screen and (max-width:650px) {
            .showcase .layout {
                margin-top: 20px !important
            }

            h2 {
                font-size: 24px !important;
                margin-bottom: 20px !important
            }

            .side-panel h3 {
                font-size: 20px !important
            }

            .footer {
                padding: 30px 0 !important
            }

            .footer .layout {
                flex-flow: column
            }

            .footer .layout .brand {
                text-align: center;
                margin-bottom: 30px
            }

            .footer .layout .brand .logo {
                text-align: center
            }
        }

        html,
        body {
            margin: 0
        }

        body.yt-load .yt-wait .fa-play {
            display: none !important
        }

        body.yt-load .yt-wait .fa-spin {
            display: inline-block !important
        }

        .lazy {
            visibility: hidden
        }

        .lazy.loaded {
            visibility: visible
        }

        .layout {
            margin: 0 auto;
            padding: 0 20px;
            max-width: 1200px;
            box-sizing: border-box
        }

        @keyframes placeHolderAnimate {
            0% {
                background-position: -468px 0
            }

            100% {
                background-position: 468px 0
            }
        }

        .placeHolder {
            animation-duration: 1s;
            animation-fill-mode: forwards;
            animation-iteration-count: infinite;
            animation-name: placeHolderAnimate;
            animation-timing-function: linear;
            background: #f4f7f9;
            background: linear-gradient(to right, #f4f7f9 8%, #eff3f6 18%, #f4f7f9 33%);
            background-size: 800px 104px
        }

        .placeHolderContent,
        .placeHolderContent * {
            color: transparent !important
        }

        .leading {
            overflow: hidden;
            border-bottom: 1px solid rgba(0, 0, 0, 0.9)
        }

        .leading .background {
            position: absolute;
            top: -10%;
            left: -10%;
            width: 120%;
            height: 120%;
            z-index: 0;
            background: transparent url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCACuAQ0DASIAAhEBAxEB/8QAGwAAAwEBAQEBAAAAAAAAAAAABAUGAwIHAQD/xABIEAABAgQDBAcFBgMHAwMFAAACAQMABBESBSEiEzEyQQYUI0JRYXFSYoGRoRUzcrHB8CSC0QdDU6Ky4fElNJIWJmM1wtLi8v/EABsBAAIDAQEBAAAAAAAAAAAAAAMEAgUGAQAH/8QAMREAAgIBBAECBAQGAwEAAAAAAQIAAxEEEiExQQUTIlFhcRSBsfAjMqHB0eEGFfGR/9oADAMBAAIRAxEAPwCZlpk9ENpEAZAQHu+0SqvzWJeXMwhjJ4kG3ANRH9B9Y69ZUZAm9Rl2bhLqSUNnrgsQl5nQBjfE6+boBePe03D4UzrnGskRhbFW4ZskmYH1P/kN2l1pqUZAjCZlnZb3ggInvYhw+J/ZtmoriUtRKu9a8+X5QjKXM3LNUPaKxWGWm30F41FIsPmadd2P/wCMEAe2ssgB3DDDv3HB8iNmh07dK6eeVK05/wDMO3GoLvEasKKu7MPbv2cCjiJsuWHBZEewsCF8z7Bh3YUV0B+IQSAMeYRMYtwWRmGIntLA44CVg9mcHYfLd8+7DarUEOBCFK0XqfWpd2ZcvdCKDDJazuRw2IbPRG0sdjkVtuoe0FB1ELrC64EYuIGzgJzgghwr24BVO4MK1157itaz409ZBZkE03x6hhaadpHAFZBzoh2sMaweR3FuLsOg5YB8VYRoJsv96K56W2153wlnmT7kWdFhKe2ZY6e34dpneGvO9eaaP2otuphsIhpCYaln73ePK2LFvEANgDA9FsVnqRethgcSu9S3ggqOJ2wpst2HHU0fZh70EMpeEYzUve3CNFu5+ZVUufc+KDy7/sQxZLvwnaYschm1obh6wDHEbtUdiEKscPcEYq7H4zvgWCRxBbDJnEmrH9HegSTnXZJzX/l/WKeYlgebhUmEnt7widd+PgtHE7tweOoa1iwG2BnpCN3cRA7AD+a39+kdhhzRsa2mr/1hA9MBJTzrOoe8P78Y6EquyKxyJ6itWY8Ro4dn8xeVYKlyUW6FC4f4lu/v2/vn+6RoLRvJdn8IpbKiOzJXWqoxPEkXs9Eay5gzYZhcF2r3kjnq/Z3wnmJkwf2QXWDqKNwSuCphW1K11+2ZV4fipvTYNbK2X7txZ+WUPmT13xFykwBt3gAg7++cU8oDxtgftRVahFByJgv+Q6W225TWM/WXEkoPSgX6o+7MPYGF8jeDdl8fp1oJm079bRbQd+/5oi899UrFWvBwJo/TbbqqFRx1OZkmjYmDadEnWu7n8o5dslerulce1JB0jVByUqqvJKJ86QA2+ck+e1O6XLhuzXz+HPfzguQeDEJQ2ne6S2295OUNM7Y56hL/AFfcTSTzzgfUdRsZBHPUwechOWJ2MNAd21H/ADUWHOFv3t7WEdWzJXnMstLqverFlZm4SHcghnD2rzsPXBdA2d8YA7sYBp9TaUOw8xr3XYcT8ks77EflZBnWZ2hBSuxis61wOtfzb4crsuIziD3OYP1/2A0e0W+DmTB5juwDMo0AXgGgv8vjH6XmQ2kGByu4TzISNywpcP7PXq+kLZqXNlzXbq4dVYZOT7TLd8wdoQnnMR6y5wWgPetVLv8AaHNNbYzAeJOg2luRxPyPns+OFbk6GsI/PP8AaRn1UHm7/du4Yt1q28mWaVheWgs4RzLYG1bp/wAqQ5wh3hiefR0GD6vp/FuJINwN2YByXA/a4RhT1OvenHiD1e0jbLuXmO5BRucEK1lzNzatezdHSTXt8cZ2unnKyidPiyIY5YEc9YgEpm/vxw69D3QwY0tWRzNXpjtNEaMTEK1dghmJriGasBcRqhxkpxi2sFWxG1OIuQBPrMzAeM4Y1iFkwIdsNB+FfCN0sByNH5ixu8QuhUMa33J3Au5Q71gQvBLdkFumOUxtry+BZfCEE1MGy5e77XD+98LUnhLMg+lIOvp66gZaYDV+ran3SAcTz85gD0Qq2Wsz75RvteOyBnpgGeM7rh7pRoX2kTcatiW6jrDhA9BgPsl8Ui1kWTBgADgt9nhXLf4RL4Dh97mHmbRCbteIeJKVSvhRM/inhDucxOeC9oAGTa+725EtSWlaoib0pvVYqNSdzbVgdRpnCl2PGIrUZg5t0+sP6i7rxUyKqZV5RS4ZNh3ztd73vbs/pCLDyl9hftdvdwkNaKnnXOu+NH/dgbru4Mxg1eq0dosJz9IzxNQNzQGstXEn75QPhIO7ezhC6MFMnpQGrx2t3eKlqRrJOmDg6/xfNN/jAmJCETj3pbqVsPR+UdbFp5vtbb/3ug7CpnqzmyMNHdKMG2LA0f8A8wTKM9prisvKtWQ03Gl07CsFDj6R6M0Gz0QBNzXacEFC2ANwEbPHCemwjZlvQB2Zh9oHs7Djht8IHdCxzR3oGcQw13xeVWkjiPrWp4EcS02EyDoAY7IW0IrizQlLTROeSLC6bxFqWcsd4+K3yieexf7PxU7AcI3KDpzzrnp3VVKetEjcXgxaevNrQIpcWdS8qbkStYPVWwc7hxJppyrEnqEyd8zNnNumVnF+LwpXlG7813IFmp8A0X9626MBe7TXFvTWeDGRXnkiF7WDJd4wY9yF2yN5zu+9HUs+YN2GHDpthxDuGDOMmRCjaOZbML7dV3yjFl8JZww2v3X9I+m+YNneGiBcQkjOUA5fvfeXEiWomdf0gGoqDEAnGYndQXcAHEssHxrrMpwW296B550wmzOzi+UCYd/CyMuAcdqQZMPX67Ipgi12EqOIt7Ciw4HE+Np3/ajSOAdvb0Rwrux44Ba+TJ7fE2Eb3INZYgWXK9yHEtZs4CrNui9zlYIImzxQQD8dPJ2cK3JrYuawhw/GuIDO4RmftwtN/wB+Pxz3Z2d+FMxOgz3x96BrSSMRC69a8hziCz47Z+8Au1RiMktNUZniEFNFtAuixpBQYmO1g09lpIOTPIWMLnp0NsIDb3Yc9HOjLW0CdxX7oS7Nsu8qVzVPBPDnTw3z7eOTEgw1b5j5jlyg2XxXE8TlHWQMRHu6c6c6LyiV29/hU4E31X4Yvk5LfKXnR6bDE+k87N3/AMLIs7IfC4lzXzyRfnCbpBfM69rpG+5u3jqSFktd9RTkvOA0emui3RgActGYnCu86USmW/ciKvmtITYfiIPP2TU7oKg2l+6J/vCVdf8AENg6HAnrmRx7Tjlv6fKM8FOYnH3Zi9pqVHiuGt9N9FSmae18N0NpadDELjl9TAlaJF3qeEL+i7m27LhNiojprcOfzoqr84eoISt0o0FgtcI+ucctcbsSm9Q9AXVab3Kf5gOJ9Yb7/eEo+tIbL4GEfLzBePu3RkbhhaYcUKE+J89KWU27H4IMs5eZvDRxxuLsS0tiPZ6w1939pDiTevbDWRRXNUVn0X0z1mhlCMwzHjJ3hH51I+MmGzjl1L+/AB3xNErBuRA3DAOOBnjaNs7I4ml7SyFzr/8AdNfhizp+ksK68xZNiHXtrZrGtpW+S0jaSIGWD97T9I0mbNoYe7p+aQGidWYsd7xRaUHfxHwMriBvne5BsudjAGXGXd/OFsxeDnBHUi7ZZefj46lVf9otwwVwsKy5EcXOm5ojkSNl+wwgmWC9u8P6RzNunsNH3ve9IaG1TAZ5xPkxM9nGMufWXGusHou/dYVm+Zt/zWx+SZ0aT1wLUAMm5ZL2c9Sydmew0d2N23+z1xN4ed7YGd2kfrFECADAOxnHs2fDEbUCcQlsvY4I4fU/54WjP9ofsDBCum9rD9rADFrMpzCZOav0HcJ/hh+w/EvK7UJszMPehixOhtNemC1gMYoWW04EcOuwsfXj92OHpztAAOD2o4mCB5zq/td66GHYJF9RYtCEmK3pzY3neVkTs5iLpv2X/ijbF5y+f2TRDYOnlTzhROD2m1DvcXyhygKBunzr1D1B9VbtJ4jOWaIzK/h7vj8fpD6VD+HHiibwyaBlwws4tRb13U8d25PlCvEOlGIDPOjJTGyaFbbRFF3c1/fKJ7GtbaIHR6ZWy7H8p57IuUm2RLUF1FGLbBWQPFWr2r5VjtHhGiqSJyzySq0T0iNkpZ0D6xZcLX5xe9GVGZ6P4rsjLrBD52bNEVNVNyIqrmuUK2NuOBPonp+a6TuHJ5Ek+lfSA+kWOzE3qFrhZH2RT/eqwlA+5713lG01KGzNK0mrVaJZoiruyr51+UV+H4RJXtSMvLjNTrpWk+5mBFzQR3IiZ574k7pSn0EqhXbbYeOY06M4IcrhQ4qc2JDNja20I8GpFJa/lGOI4q6E86f73ZfpDCTI9p1EGhaaGrwi2PJFoqJXhVFTP1if6RPAzjMw0GkCo4N3gooufjnWE6j7lvM0lTCnTg5+n5ymw2bZmcNaP+9H2o+Pv2Oa7onOjsw1xGdx28Ps6qfGK+wDvPZaPa+GfpHLaVVjPmPrBqs1DOM7vP1mUut+v/LDKVnQZ/fJIGAQBv8A+6AHpho+/rL2i/X+sLbA/Bldobtl28CVTM/2ln/jBRTnZxHszzW3ADO79/ONixftDM+AdI+MLNQQep9b0GorsRRD52e49cIpjEbHAAPaS4vZSN1OXe2rt/dQht7q+FPP9IUPS1794e13vBYdpVcTR8ImVjwhMGzdM7u98EjJ94DsMD4fa+kFSh3sNGYCQkNrnvcl/WJWYKbwmedlHT0tFaPvjvRfClIc0xJOB3I2Xis/FKhhmYNu+wXbuLl/xH5JJmScsmAtB0VJsfLKudd8KcJxRo3A0Wnd3ck3puT9PpD3H1M5QHQ07IlEvwrlX5on/lDJZlcZkFv3YK9GYbYDb7I9A90d8Lph7R3i70CNPdp+90ZTkzZpC60h/wCd0MiwngxncEG4zN6cPZm01bd7POM5V6Ys/iNGrSPMvTyhcTphNi6J8RW8OfnBhy57cveoQkXdrkm/1jpY9Su/FMW3g9f/ADEetTYMsCd5e7DFcesYsa/zRFPPuyb5S8xou4bt4rvTLwoqfODGnz4zDip+vh6QrZSnbSQ1lVrlSJZsT/WWDvAYdSey2Aa+LVEnI3hKBo4ig1J02dAaQL8/WKu2rc2Enrad4wJZOWAxf3LYVzU5h8sHWDmCadyG0iqGee5Eqn1gdueM3zaDgIU9S8vzibx4TecsaC5q64fe319Y7pq/i+KVPtOhJh03jgBdsnR1CneRblgf/wBQgzIOzFnak4jLdvdTeSqvyiPxET0BYTQW8XnWucZTPWOqM7JrQ2No27yVSoqrmupVpl6cotPYQgZmf9QWzUE8cgeMytlxlzss1DG70t7/AOG3uxPYbNGzIgboCJ7RR5VXJMvhDRvENF/Fbp/4ibjBmAv09ldh29CcuS5gwYBphQ06EupgLjjeruIq19d8UJvA8x+/CqRHTku+2/ROHu6Y6hPUsPTbLTkfKM+jslKM7LalcVyfeFSvhllSvhVYI6Zy4MyoYhJNbK4u2G2maZpVPBUVV+CpE3I9IDYmGnZj7oCu4UNK8qpzT0hlifSI8WZnWjD71tdmI5pkNyUXnS2notOUJLSyWbhPpT6ul6PbHgcfOT8zie2GXdIRImyrTnnVVTzzzRf2r6Um5v7OJ0MQtfAkJt7Zgi0XlTeq13edc4RdHsLaxOeMXzsYab2heJZoiJ5Zrvho+2DMwAYS0IhtDcEXCJVBNyKS1pmiItPOJ3tlti9yt0hswWPR48/6jOSnZhnpcDTs1tRt2d5CiaiRCVV5rVRTOB+msvecvOtAWmrD3uqi1FPlX5Q/TB8MlsNkgH/6qTm1eccoG1TNVTPctUy3ZInxG6Zm1hmFHLlcTsy4BNiQqm6hKqIvhWmaeMLojJcjD85Ia2u/S2oPB4iXB8JeZm5d0XtBCguE3SlFzVE8fCLLrRvN2DoaFtbRHcKZJv5xD4djphY1Zw9ppyhkzi3Zg7qsEtQ+2lar+/SGLa2fkzEaum6x8uJRAJm3ZxB72X9YEm8He2BnLgLtvdb30808o3mXANzsntBD9F51jTBX2jnndZbJptSIS3GiZVLyzhTaV5E56ZpfcvFbcZPJ+UDYww8M2R2EbuRE4VackoleaKqpu5LAmLC0E+Fl3al9dyxVY6f2hhrTzQNMDcDjjpVRVbRCzp5LX5+sSc411l9p0D4RutIsy+n08+cEL+6R8OO59ZpSn2wK16xC2Ul2dqF/3pCQ27hRK5fVYIbYvvvMfdIYXAt4AX73Q4w6VDYAZ233XfBIZu0iomUMuHCquYzwnsWyad4C4f1/SFvSeQanGBmO+xW308F+P5wcxMBt/f8A9SZxhNHtn+rjquoNvLlENPXh8mIOu8EtJmSY2LYHZru1fvksVmMLfIuh/isr+VfotFiaCZaB89Ft2kfD0WKbC3w6o0Exq/u7d5lyyTnlDF5wQT4nEAVSTI0ZCbCUKbK60dMZPsunsveJB4kRd6ePlFY8svOTfVGpspW4VG60bCWlc88omcXYm8Jm+rzB3AWofA05KnxT844lgY7fMSOv09qkVHIHBmrck0GGg9Z/EZldvyQlp5Lkkbgw1OTQzGgWmGbnG2yWiqipbVOWdVpAB4kEs32upoa6WxzJFXxrUVzVIzl9kDm2l7il3XE4iza8i5ryzhkspxO2bHdAp67/APPvCZ6RPEJsJs9TpaiuJfnDR/BgCRAwuK0ULhpu8F584c4NLS864FoDsv8ASvKq80ov0gzEpdo2z0bU/a9ndSlN2SxWXXbnCrxCn21uO0SYl3nfes9n03Uj69NbawPZK4i84/PqGz0fv0gFx8AbAPZglaKTkywpGR8R4jjDp1079Gu20fd3c/SGDcuEy3/EGRe1bny5J+kI5Y7NZW8u9DJydDjDSf8Ax4/7xG1MHiLXqASsWz+IPSbANbIXZd1y0RcFVtRN6efL90jMEM3LAau1XEO9M8ufkn0jnFSN6b2pnoEUEeaBlmieGaRv1c/sZ12/uoX4tSeHkqwNhkAyekRKwwPJOJwmGtHirTTTokBDc4xvMCyRU3ZePxgzq0o8471K0gaK1x+7RX2R8c+cToObG8vdXyyXJY3wjHQZMJd1ppoGuzbtFda3URFRVzVVXNfWGq2LqfpMX656TVpiHXkN2Pr/ALjLEGXpZvq7RlqHVp+SJ8PCEcxiGGnZRx0zEbTIBSirv50WtVVPgkVeIsOhNg06ZNTTtSbbFtVV0vCqZDVa51yp8Yk8TwxuZnTecbcEi9hEH5+K+cErK5G6L6D0ZnrZ1Xo9dfnPkh/Z3jz7ZbViWaH33hXP4VSsCFgWJYG/LsYlh7jQFtO2LhKo0oipluzp5rHoiTQdRlZto9kdqXNjuLLPJPz84JPFsP6ocodrsq+P3dvZmiruonCqb0VKfOkVqau08sJef9aoHwHkf1nmPRmRU9uamImTiM+g7yX4pSixVT0p9hty7oA0Rk2jnNHB81RUyTwrTcsRE3JO4Tj81LyjrhCwVzJ+6SIqKvLhXPllG2IP4hisu1MGBNyrTYjxV3Cgotd6XW7l5oq+MPrX7jb88Suq1T05rAlnhBS70jMTzv8A3DVSuLu5LzVKVWIvpjiJzuJABHcrYrduXNfPnugXD596TO0HiaBwrXNXLJFWlc8oHxh4HsYdd/usuH0SJtUFbMA9g9vaoxnucSKAF21dIAL2aV+u6HpOynVA6uf/AJFRfDwz8Ik7o1AzOPYJ8wCFACGUHMtZPFv4Tq/faHsyu4k9fHfFT0Pwr7QkcQmJg9lcKMt7lW1FQiLfnnanqix5lhM4bD9oBtTLSI56lrl6749kxJQwro3JSQnadqC5aXilS9eJV+MLahCcInbQvpPpiXak5Hw/3Pf9MyZxt0JmemJEztBrs2bqaEFUrVEp4L840merhhoNNHcYilpfrEnOzBni1/Dte0IfNSWsO5WW/hA9i26E9RUUKnd1ND6fqGsYjH2+3iNsAZCdfMD1e9+VfrGrrTrOLTUpf9wWn0XNFT4UWOejj4Ss3YHE6Vtvtb6Q76USWxxKXxATHt5ewiH/ABAWi/RRh6mx2sw3RlzZa+4BvIiSZUwb44Cae2O1dMy0trb6rpTPfvVI1N4DbsOBXJczYmAA7tq2un2kHUi+qKO7zWLH2/EFYcJmKJInXn3T1WDQi+cUaT7W3CUvJo9ijgucq1XNcss6J50SFGDvAF21C64vaXTu+df0gzEZOXeYKy5oPu9p65/FKJmlPCO20FuDK0XkKVHn9/swQZizEppmfdForlHyqm7NP3nGWOTx4h0fa2v/AHEmSW+Nq8vPu/KB39lIT7sucvtREuz1UvFKUzovglFTKNmsP662Zg7c0TfEWgyRFoNU5qm5aVrRIWesKQx8SmooFTMi8k5k6N8zYZn+LxKHcgfVjdeauJoaC4JZXp5ekM5CRawyU2TQCZuiouC/mhrTKickT+nhCSRds6wF3C8t3wWn9PlHCRYuPEsNPQ1bqXPJl9gM9I6wA2hadJCESoGedM93wXKD8emZSQ2rROiUw43daPcrRar4ZIS05VjyknXQfv2vZDxDu3Z5+vhHKYhMG+7MGBEfE4Wa213emUK/gN1gctxPN6kA2MSwMwebsadG72cvKFT7Luu+33dUKGMVMNFn/wC3whoDjrwCYGV2W0Hwy+n+8NmkKM5lvpNcl6bQDNEM9gHtD9ab/wB+UOZB2SZYe67ecwQrsR5CqIqlXPetN3lC5JZ3YHMWFZdbdyFc8oWz598TtD/VEdnuLgyOryh3k5jFmZanXLyC26ojyz5LFVhzQTOFDLkA6hQbfep+VUiDl1AG+7wxUymINPYb1dq5p0aE5q4Upp+lYQ1KsM4/8jdBDVr4bqR0zMuhNn/hZ2/OFbxzHXh2XHkQ+uX6xQdIZP7P7X+6MlJtzPV4p4ZQiZN2ZmACVEjmMxEh7qZZp4ZV3+MP6cDGRM16uBkoTk5zPRZXGjmcJaddDtRJO3LWpEpIhKleSqu6CXp/DHwadmGBmZgh7QgVRosAtSwfYUlL3jxITxCSJYtP6wxXoyU++66wbWxu01NF9fGFjS2fh47l3oratgFpwQBz1+/EhnekkqDljW102W25Z0zr4pWnyWMXukN5tS8v3ajduRM0+mX1WJCsdDBFpQTKr6jep7lBMYsD2OPvMNC60WkdsNdyIilkqVyRcvBaQymidmb5gJQWtqKFaNKbNMk5ZckRMkyKFWESzTh0EP4gCQtoWYoO4qjzzVPrWKeaxNruXFqUSJhkUzSiIorSg5IiIm7OJo4Vgog1HuZtY/v/ABJIpXQbpW6f8OlOfr9IWOLrIi70NMRxPaGTQA6ACXCTl9VzRFXclaeCJCZYIxJMAxBHE6FY6JOHUJfh/e+OLS9mOw16I5ISp6Cye26USm1a0Njt9Xlwr6XKnyi26TPkE69eZWtN6edK+Cc+UTP9nYic9MEZ2tCIjq5VVVVE9bUg3pBi4PPmShod0DqpuRSVa8t0QpcjUFvkJrfSgtWlNnzz/gRFiatdektl/hoJEQotqoS70qopv3VWHEo/2HamW173vQDhmLYZ1SY2soIkI2skRXohLllVcsowl3+uzcxsvvR4hIvDKqc1RcvOqwrfWbF+0ho/bpYFXBLeB9v9R1hr5/aXHb+Hu5p8o9FxpAmeigGZ/dPAV3qlq/p8o8olp4GZ4drp7hfrX4pF7NYsD3RCasO+0g/NN8MVAl0+8sbDvUbDnBk1MFY5/p96M5DEQB/ZO8Bd7eoL4p+sL5vFGtmQE0V/4a/rCfrog5d/q/WNAtS4wZXarWhMLmMmmHvtl2Ul7rxcUdO6iLviiKwLGiPhpp508PVV3/8AFJ/A5w+vTT3eJu34Kuf5Q+ku2f1GV5aR8fh50rAdQxZto8Qug09RoN9hyMniNV6KbaQObIBGatu1ezRct+SKirE6zsthsnQJoGtNw53ZLkqL6J60TdnFfJ4sGwdaA/8AthNsh9FpWq78qZ+9EYDoTjk7Za12ijzW7UqIqU3LTJfGKgb8neZBGqs7XHynzDbGZSYd4QuuIvZHknmvlCTCMOm8a6QTDUuFgOkZuEV1gIqqupUTLygnGdszspQLtlk4WmiV3Jkn6w26PMmEjrd2TTtXHLe8I1qv0WI3EgEr3BWL7rKg4C+fnC2+ieHo4Uu/izpPONrqKT7KmSVrdXmmeUJ8R6LYhgDgbUBdl3yubmR1tnTOmaZEiclovwh5In/HSvEO3E7fezp9MoqmmftDBprCZ37p0exLKoL3VTzEqU8lpC51NlLDecjz/qBfTKWJQcieQTK3zd5AIjwiIj8vWGcoIBN2arCH1h1/6blwwZ10DLrDTerxru+FVrl5QglXj68DR/vOLIMrDiNaek6e1S3n94lMEoHUT7V0dK6bsiqlfzTfEnNE1tBALvaEfPlXw/fwqJqcswkwA/8A4/xc1+lIQy0o1P7W+61rUVpUuTy8Frl8fKIhsAlo1rVZgFXuYYcCHtXXzbslhu2RFRTVVogonzVV5Ii+UElP/Zr7TswLm1cq4Pkniqc6qlKfGGATMlLNgQS7Q28Nwiq/OlV8Y5xHDJTFZc3WgtnWhVzTShima3JurnvT9YBZtB3NyP0kG019VGamBPBjlvF8Mx7B2sMnGg2T5XaciaVEzIfAs/z3pAEl0SZwbFSdmJsX5d1u2VIRVFIveRNy5eOdYl8GmTPEmpdrjEuzt3r4/Va/OKbGXTwN+XDi7PURFVSr+kEorCnZngysa2q5hfYP5fM+uznUn7P5beWUDj0xm8PcMZd5wLqXIiqm7dAGK4gEzsjA7iGnh8on33zE6RZW0IFEhqNYEOE5EV7OPkflKNWW7z90RuipEo1BJxN5R8mHxds08JD7SKioqRpMTZnIlL36Bcu9Vpn+/KA3Hj4IIJP+lD+KJYBkyADwZ3g0oE/jMpLnwk5qu3UTNd3kixfDK4J1Tq4A006XZkThInaJTMRpv8kWPOZKZKTnGpge6X03L9KxTTadZxUQF0mpV8kcEnLqCqrnnvyrXLlESB2YSu/2VyBkz7jGESjAOhLnpu4hJTRFTxyT4+G+JUSJl8T7wkhZ/OPRMPkpcNF921LZ7PZj2voi5p+L0rCjHujDGE4lcBk7LulcyNvnmJfl/wARw2pnaTzG7dK7n3EHH6Rj0Rlnvsd23ScyV3hkq0Snll9Yy6XYNMNMS8uIEXbKLZciSi1X4Uz9Ip5adwrDZQcMdd/iiFAJlhvaGpKm5EFFLSlfrvgHp7jBsykuAA6NwODqEkoRUrvpy/WA02vuOBwZobfZXSHTkjAHPz/ZM8xIr/5eGNwmnWZsZho7XbuL8/TKBkO+wI/OKHchs98zHhiGyJV9H5X7WxWXaPvCpl+/WLXEsAdlsGmHWjEgbbuIc0qiZ/SJv+zqRM8Z1mLQC3qIhVaVXJMt65KvpHqWKNieDYg1fxS7g6slpatFp4LCD6tq7gK/E1ulvKUjP8x7ni0ra9NiT9oiPFdTPw3xnjzYADWwaaAO9aKIqxyEwzpvl2C7ykThCqU9Ml+EaTcxgMyxZ27Bj/hkqoS+daxetdwDEXZXoevIyfJ4P6QbCHT/AIi3jEUttpnnT+kN5abdkn2nTAndK2j7yplWq5UjXDejIG2TsvN6Hxtb2gpYaqlUG9Foh55IsDzMjMSr/bzHasF9yWRbueeUC/EryD2YSrS3pUEYdfUfPOY7wiZlGWJoHbmndj2N265UVM13Km7wgfD2upt2E7cpEpERDS5VWuaeEI52d6tK6wF24kG1zdTfnAjfSSYBuxJdi3ui3UKfJYGgUA+cxr8dpq7v4/YHy6+mBKDFlvY2otFZ3fe8V+ecfGpn+Bda4TKXBkR3W1JFL84adHMQlJnCurmyTrRarnB4FpyLei+nhCbGmjlp5qYvImnSuuLy+i5U3QqVy+MT2vZTQLUPBjtk7JvDwDVshQR/mVK/lDUJ0zntkF3D+oxMM4h/HXhwNU+lN3yWG+Fuf+4GtrwFQSt8vy/2gF1RPJHiD0tqqD95oU8HVJgAAhAphSG7eQpklfLLwiYeOXltk7aW1EdRW1SiqqJ6bt/nD7Gv+nvnI8XvcyTP/mFThADhEYF1c2diQ21uRR+iouf5Q3ShOMeYVm2rwefrAJvEgnWGgaAmgzIveXx+UGYc6EnIkbtuyNtfGvNE3bufjHTf2JOSnay4sTRcPVSUUGi0S6uSr4/nAOIicrhIy5ultRcXh4TFVXOnpX5QQ7SSjTivYqnUNzx3AZybDYBZqtjJnEXWbmmiuuLSW9UyypnWufL6wKa9n/m+awMg2P6fKIOuRiUd+rdn3ZlPhEif251uXa2tpBsRIsqkld/JErD3HsK22JTF5lNGLiDcWW9VVackTdSNcGealpSSMA4m0ccLzVUQq+iIiQ9Ignb3Q7Vp3hEe981371hZbm3AjxLKrQjamT8J5M8rxKX2M3suH2Ru4YXK0RLVBJYZYwphis0BkWly20vDlBEsMnsBvIkd72n5RdbiUBMp7Kle5lTgZMl1jtHLQtjiNGWXXnLWguKKvOO4kuc8TgljZHf4WyPiMHxaR/EUcGBBHgwM7hhzOIqJNXpzDmiHQYaRctVUNU5Lvzolc6RLxWYFtWZFrq9t7l9wkSpfmlFREzVURF8PjEl7nAMmArMzuHzd7rpdp3ty08ab0SGT+LHicoEu0ZOzREgt+8q5J8axnP8AWDtB25oC91KV8yXf674FwhsJbHJJ60rRmAuLcma+PP4QKyhQfcHctKL7UHtg8Hj7T0Lo/hjuAAfVyaKYdK56bcyM13rQi3JvX9ecAdLsDOfOXAHQES7S64jVVVFXUqrz3pTlVd0OprEeuvyvUJhoTElEdpuFUrapV35Zonl60QzE+64oXHt7SXtC3uEtKlTeqrRPkiJRESEmvsUZXuX9WjFp9tlwoHI/fmecPNrLTTrR8TZKPyWGDmDzDKMPmFou0K3PQiqlLvDKHvSZQwnGWjal+JsHiuzRbkVFTJN2hF+cMMDxLr7JuzDQ9v2bbY1NSUaKg5ZohKqIq8o7ZqnNS2oOCJS6fRUHUPVYes4/KU/RKX+ymNtLhtWnCAnNpmo1yFFVOXKqp4Q2xuZ61I4hNzAbLZMnbqqtoiqqiLRK1FVTNK7/ACjCVnNjhOHtdXF9oW9m4Jd8S1JSvKhKlPDdC/p7iLMh0bdlJV64HKNNi4SEYIWaohc0VELKuSpTLdCWmsFjZA5jt1m1zYBgDOJ5A+7ogdCONXHD2YjdoErrfNd/5RhGi3kzPWsS09EwGfEAO/YdoKC51YkRD/G2WlV5LREi3VcM6RMuy6NWbRnq22bojgBRMkWm6tMl8PWPIMITbBsrxC6tt25VRMkVeVd3qqRQYDi7uH4rsjN1rs1IhcFdKCKkqoqVrpRd2/KIamoFdy9zQ6fWUWVBLBz85hNYUOGBNYZNG07NCWpwiVdxoI0RFyzqu/nn4QGeHSQNg07LiLoF2hNkVR8UWpLmi8vWPzsyE1PdYLSbn+vn9UT5wQE+Zvi5sSIbrS05rutX8SUTf4qi71ienbn45VX6Q3VkocHoeeIzwrC5hnDdlLzDSNO12bjm8UrRUomS58/PdAuJYc6bdjs3daS9uQ8S55JReWaRvLTiszzw2G1Luds2PsEqIhIP5+aJCuWxYw/hCaaK0l4qqt11UVPPKnosQJs398eIXVsa9Oldp5AI8/pNZLDnQcAz9r/yzpFjhMme00ajuQRLzU8q/OFzMsybDzXWCdaFlHxezSx0FRCXdwlUvKiJ4VhxJtNdH5TEJu+51i8h1IuaJcNfKqp8VSF9RYSuR3I+nXe0xFg6GZIYpPzEz0gnZj70CecFkSLhS5RRE+CQhxOdvb0GN5FqG6tvovwSNBe2LgmVxWjcW6i0SudESvOFKa+5/N84sETChR4gLNQxXAPc4bfNl5DDih7i4zbPVwmhtuG7ir86QhbUQfA+6JIsegTJ7Zs3ZcBLVa5pqopSqLlTL+iwKwkEECMaH+JW6FsdSRblJh4NsUuVmVxF4eK/nWAphk2dRBp7pfv4RTlMzDOiwtl3dKpdyXf8YS43er5u8QOFq8EJPyy/OBlznmDvoRa9ynOIfIz3/TWgvLSSt6ac6qm/zg1nGZhmVOzTqQStKti7koq8qpX4whk2jOVG02B7w7QqVW5N2VPnTfHDjEwDBu3jsuErSSuS5ZVyzSmURr2HI8wY1VyDjrE4xOZOaxV94v7xz8kRN0EMyM2YValzIfG3/aDcIwd3Fpo5jZbW38WzdX8a5V8lpD1kMPw24MSllbdJfukO22nPwWuWaeETOrCfCI3pNB72bLGwDPN4NIhlmLby2pULTuH/AHgOPlYEy5lODNTcvcvLvRzWOI+xIADqeyZ+WHTMxMSbDXea/X/jdCWsN2doFxtuKltttc03c03LBUE9NDnZt58TEx/EVqr881jFyYLb3mROujw76Zea508so+vYk8TairTIIS07MaftICR0vAY6cZxDh8DuelYdhUxP3bJ4S9oWxWgCSISVLzqkLXpxrBsZmJKfly7mxcHOqb88/T5RPTWLhMtMsmwQC22DRKDlFO1EFK5eVaRlhks1NzioSmjAJfbVKqnhEV9OUqffzj5D/OZcv6zc22unv98R90xf2PSCw2TkzbZZJttxtUSiIWWXJULeiclSB8Cxr7J1sGQ2smO0tRMzVErTyWq091IrsYwmRx/D5RqZA2J2Vb2bbzRVREpkKou9K+ixLTHQ6cknnZZJxq0NRqKEN1N0VtKpZQafA4gTptQl7WqM+ZXdHsWw9mRIJid2To6tmVVU0oiIg+aIm7dEn08xp6dmpSXssDZ7ch3rU6oKl52oi/zRrKYjLyrZS7EsgoJKREupSy8d8S2LzZz2LzM0SJVStRF5IKIKfREjtGhSpy45JgtZrDYu2LiWPyLHSjTfnH6zzh9ZWEEmM5Fz+Fv7w1t9a1/pDzAsamwxUAl5QHz1laQidBtW/lmNt2S1icZcUZYEAiFaKpUyz/4iz/s/lmyHGZ8QQ3pOVFxpCVRTNakmXiKUr4/GCFsVkmNoTuVR9P0iTEQG+bmB2QjcDrYtrQKFQqInJM9yfpHTeKbYLyt/+QfZ51TxjvEpRpDeGSI9i8pOoj1EW2lyItPJfSvrE1raeNLlQh5iv5QBFYDmOnWPpyNvkc/fJP8AeV83N7aR2zVuniH4U/WFIykxeGIE1/BlQrrh/CuVapn4wAs8Tm4bcrclp+08oay7TR4Wh0MRQsxQqpySvrDNK73w0lqrh6g32H9ZSN47Jf8AbuulqbtEWxvuzRaKm5E9flC7HccJzCW5Kv3jlz3xVVovxQYYYlgQ4d0RlsTlnEucds1Cl1tVTNaVXurSvjEA8ZPuolVtUsruUTbT1KPh5wYhqrrFY1nAz8oS4+DygBXW963P4CnmtErH4UNlfuXAaL2hqtPklVpAVUThSKHD+kxScujRSrbrLg62y3fD95RzeynIEDSqMcM2Pyk+g3ue7FGcy6H3V3LzQkXNK/p4U8Y2lsGw+bTbyivNXWoTTiIQ+OS76R8msKmJQFeWYEhBERURM1SqxFbFYxr8LdUm4juZEvWb7w+697KmSU3V3wrxY77Lj4uL1StPzpDCQ207P9VlyFk1acqqpVFEUqqL60/KFxyzkzLTL+0WyXFDWpZ6t1Epv8VrAbBg58Tj2A1YHn+3+oIhFYICHj55b1+kfW5gtoO11au9n86xkyaE5mKrlTfT8o4cVUPNBT8McQYMR3HOZRYhi7UyhNbVywhQSESVBom5ERMk+UYjKNTTY7J9xu1Mwdo4iVzS1fCEKFBTM0+yFomlPSOKNnUeGqWx82rxP//Z) right center no-repeat;
            background-size: 100% auto;
            filter: blur(15px);
            display: flex;
            align-items: center;
            justify-content: center
        }

        .leading .background img {
            position: absolute;
            width: 100%;
            z-index: 0;
            right: 0
        }

        .leading .background:before {
            position: absolute;
            content: " ";
            top: 0;
            left: 0;
            z-index: 1;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7)
        }

        .leading .header {
            background-color: rgba(255, 255, 255, 0.1);
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            z-index: 1
        }

        .leading .header .layout {
            height: 90px;
            display: flex;
            align-items: center;
            justify-content: space-between
        }

        .leading .header .layout .logo {
            margin-right: 20px;
            text-decoration: none
        }

        .leading .header .layout .logo .logo-text {
            color: #FFFFFF;
            font-size: 28px;
            white-space: nowrap
        }

        .leading .header .layout .search {
            padding: 0;
            width: 500px;
            height: 50px;
            display: flex;
            overflow: hidden;
            align-items: center;
            box-sizing: border-box
        }

        .leading .header .layout .search .bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 25px;
            box-sizing: border-box;
            background: rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: border-color 250ms, background-color 250ms;
            z-index: 0
        }

        .leading .header .layout .search #searchInput {
            font-family: 'Roboto', sans-serif;
            width: 100%;
            height: 100%;
            border: none;
            color: #FFFFFF;
            font-size: 16px;
            padding: 0 50px 0 20px;
            box-sizing: border-box;
            background: transparent;
            text-transform: capitalize;
            z-index: 1
        }

        .leading .header .layout .search #searchInput::-webkit-input-placeholder {
            color: rgba(255, 255, 255, 0.3);
            text-transform: none
        }

        .leading .header .layout .search #searchInput::-moz-placeholder {
            color: rgba(255, 255, 255, 0.3);
            text-transform: none
        }

        .leading .header .layout .search #searchInput:-ms-input-placeholder {
            color: rgba(255, 255, 255, 0.3);
            text-transform: none
        }

        .leading .header .layout .search #searchInput:-moz-placeholder {
            color: rgba(255, 255, 255, 0.3);
            text-transform: none
        }

        .leading .header .layout .search #searchInput.ac-open+.bg {
            border-radius: 0 !important;
            border-bottom-width: 0 !important
        }

        .leading .header .layout .search #searchInput:hover+.bg {
            background-color: rgba(255, 255, 255, 0.05)
        }

        .leading .header .layout .search #searchInput:focus+.bg {
            border-color: #000000;
            background-color: rgba(0, 0, 0, 0.8)
        }

        .leading .header .layout .search #searchSubmit {
            cursor: pointer;
            position: absolute;
            right: 20px;
            color: #FFFFFF;
            font-size: 24px;
            z-index: 2
        }

        .leading .content {
            height: 500px;
            display: flex;
            z-index: 2;
            align-items: center
        }

        .leading .content .layout {
            width: 100%;
            height: 300px;
            padding-left: 360px;
            box-sizing: border-box
        }

        .leading .content .layout .music-cover {
            position: absolute;
            top: 0;
            left: 20px
        }

        .leading .content .layout .music-cover .music-image {
            box-sizing: border-box;
            border: 2px solid #FFFFFF;
            width: 300px;
            height: 300px;
            border-radius: 0;
            background-color: rgba(0, 0, 0, 0.2);
            background-position: center center;
            background-repeat: no-repeat;
            background-size: 65% 65%;
            box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
            display: flex;
            overflow: hidden;
            align-items: center;
            justify-content: flex-end
        }

        .leading .content .layout .music-cover .music-image img {
            height: 134%
        }

        .leading .content .layout .music-cover .music-image:after {
            position: absolute;
            content: " ";
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: inherit;
            background-color: rgba(0, 0, 0, 0.1);
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.5) inset
        }

        .leading .content .layout .music-details {
            height: 100%;
            display: flex;
            flex-flow: column;
            justify-content: space-between
        }

        .leading .content .layout .music-details.playing [data-mact="pm"] {
            display: none !important
        }

        .leading .content .layout .music-details.playing [data-mact="sm"] {
            display: inline-flex !important
        }

        .leading .content .layout .music-details.playing .music-description {
            display: none !important
        }

        .leading .content .layout .music-details .mdetails-info h1 {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-family: 'Open Sans', sans-serif;
            margin: -13px 0 10px 0;
            color: #FFFFFF;
            font-size: 42px;
            font-weight: 300
        }

        .leading .content .layout .music-details .mdetails-info .music-info {
            margin: 10px 0;
            padding: 0;
            font-size: 0;
            list-style: none;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis
        }

        .leading .content .layout .music-details .mdetails-info .music-info li {
            font-family: 'Roboto', sans-serif;
            display: inline-block;
            margin-right: 20px;
            color: rgba(255, 255, 255, 0.8);
            font-size: 16px
        }

        .leading .content .layout .music-details .mdetails-info .music-info li:last-child {
            margin-right: 0
        }

        .leading .content .layout .music-details .mdetails-info .music-info li .fas,
        .leading .content .layout .music-details .mdetails-info .music-info li .far {
            color: #FFFFFF;
            font-size: 16px;
            margin-right: 7px
        }

        .leading .content .layout .music-details .mdetails-info .music-info li .rate-wait {
            opacity: .25
        }

        .leading .content .layout .music-details .mdetails-info .music-description {
            margin: 10px 0 0 0;
            max-width: 600px;
            font-size: 14px;
            line-height: 30px;
            text-align: justify;
            color: #FFFFFF;
            font-family: 'Sriracha', cursive;
            opacity: .4;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical
        }

        .leading .content .layout .music-details .mdetails-info .music-player {
            max-width: 500px
        }

        .leading .content .layout .music-details .mdetails-info .music-player .yt-player {
            display: flex;
            align-items: center;
            background-color: transparent !important
        }

        .leading .content .layout .music-details .mdetails-info .music-player .yt-player .ytp-buttons {
            background-color: transparent !important
        }

        .leading .content .layout .music-details .mdetails-info .music-player .yt-player .ytp-actions {
            width: 20px;
            justify-content: left !important
        }

        .leading .content .layout .music-details .mdetails-info .music-player .yt-player .ytp-volume {
            width: 20px;
            padding: 0 0 0 10px;
            justify-content: right !important
        }

        .leading .content .layout .music-details .mdetails-info .music-player .yt-player .ytp-volume .v-buttons {
            width: 20px
        }

        .leading .content .layout .music-details .mdetails-info .music-player .yt-player .ytp-volume .v-bar {
            height: 5px !important
        }

        .leading .content .layout .music-details .mdetails-info .music-player .yt-player .ytp-ground {
            width: 100% !important;
            height: 5px !important;
            padding: 0 25px 0 20px
        }

        .leading .content .layout .music-details .mdetails-info .music-player .yt-player .ytp-ground .ytp-bars {
            background-color: rgba(255, 255, 255, 0.3)
        }

        .leading .content .layout .music-details .mdetails-info .music-player .yt-player .ytp-ground .ytp-bars .ytp-lbar {
            background-color: rgba(255, 255, 255, 0.3)
        }

        .leading .content .layout .music-details .mdetails-info .music-player .yt-player .ytp-ground .ytp-bars .ytp-pbar {
            background-color: #ffffff
        }

        .leading .content .layout .music-details .mdetails-info .music-player .yt-player .ytp-ground .ytp-bars .ytp-pbar .ytp-pelm {
            display: none !important
        }

        .leading .content .layout .music-details .mdetails-info .music-player .yt-player .ytp-ground .ytp-bars .ytp-duration,
        .leading .content .layout .music-details .mdetails-info .music-player .yt-player .ytp-ground .ytp-bars .ytp-error {
            padding-top: 12px;
            font-size: 10px !important
        }

        .leading .content .layout .music-details .mdetails-info .music-player .yt-player .ytp-ground .ytp-bars .ytp-seek {
            top: -12px;
            height: 30px !important
        }

        .leading .content .layout .music-details .mdetails-info .music-player .yt-player .ytp-load {
            font-size: 10px;
            padding-top: 12px;
            background-color: transparent
        }

        .leading .content .layout .music-details .music-actions {
            margin: 20px 0 25px 0;
            padding: 0;
            font-size: 0;
            list-style: none
        }

        .leading .content .layout .music-details .music-actions li {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            font-family: 'Open Sans', sans-serif;
            top: 0;
            cursor: pointer;
            color: #FFFFFF;
            padding: 15px 20px;
            font-size: 24px;
            border-radius: 5px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 2px solid #FFFFFF;
            margin-right: 20px;
            white-space: nowrap;
            box-sizing: border-box;
            background-color: rgba(255, 255, 255, 0);
            transition: background-color 250ms, top 250ms
        }

        .leading .content .layout .music-details .music-actions li[data-mact="sm"] {
            display: none
        }

        .leading .content .layout .music-details .music-actions li:hover {
            background-color: rgba(255, 255, 255, 0.1)
        }

        .leading .content .layout .music-details .music-actions li:active {
            top: 2px
        }

        .leading .content .layout .music-details .music-actions li:last-child {
            margin-right: 0
        }

        .leading .content .layout .music-details .music-actions li .icon,
        .leading .content .layout .music-details .music-actions li .text {
            display: block
        }

        .leading .content .layout .music-details .music-actions li .icon .fas {
            margin-right: 10px
        }

        .leading .content .layout .music-details .music-actions li .icon .fa-spin {
            display: none
        }

        .leading .content .layout .music-details .music-actions li .text {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis
        }

        .leading .content .layout .music-details .social-share {
            margin: 0;
            padding: 0;
            font-size: 0;
            list-style: none
        }

        .leading .content .layout .music-details .social-share li {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            top: 0;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 10px;
            box-sizing: border-box;
            color: rgba(255, 255, 255, 0.7);
            background-color: rgba(255, 255, 255, 0.1);
            border: 2px solid rgba(255, 255, 255, 0.7);
            transition: color 250ms, border-color 250ms, top 250ms, background-color 250ms
        }

        .leading .content .layout .music-details .social-share li:last-child {
            margin-right: 0
        }

        .leading .content .layout .music-details .social-share li:hover {
            color: #fff;
            border: 2px solid #fff
        }

        .leading .content .layout .music-details .social-share li:active {
            top: 2px
        }

        .leading .content .layout .music-details .social-share li .fab,
        .leading .content .layout .music-details .social-share li .fas,
        .leading .content .layout .music-details .social-share li .far,
        .leading .content .layout .music-details .social-share li .fal {
            font-size: 16px;
            display: inline-block
        }

        .showcase .layout {
            display: flex;
            margin-top: 40px
        }

        .showcase .layout .results {
            overflow: hidden;
            flex: 0 0 auto;
            width: calc(100% - 320px)
        }

        .showcase .layout .results h2 {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-family: 'Open Sans', sans-serif;
            margin: 0 0 40px 0;
            font-size: 28px;
            font-weight: 300
        }

        .showcase .layout .results .music-files .music-file {
            padding-left: 170px;
            margin-bottom: 50px
        }

        .showcase .layout .results .music-files .music-file.playing .mf-desc {
            display: none
        }

        .showcase .layout .results .music-files .music-file.playing [data-mact="pm"] {
            display: none !important
        }

        .showcase .layout .results .music-files .music-file.playing [data-mact="sm"] {
            display: inline-flex !important
        }

        .showcase .layout .results .music-files .music-file .mf-image {
            box-sizing: border-box;
            position: absolute;
            top: 0;
            left: 0;
            width: 150px;
            height: 150px;
            margin-right: 20px;
            border: 1px solid #000000;
            border-radius: 0;
            background-size: auto 100% !important;
            display: flex;
            overflow: hidden;
            align-items: center;
            justify-content: flex-end
        }

        .showcase .layout .results .music-files .music-file .mf-image .mf-ibg {
            position: absolute;
            content: " ";
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: inherit;
            z-index: 0;
            background-color: rgba(0, 0, 0, 0.75);
            background-position: center center;
            background-repeat: no-repeat;
            box-shadow: 0 0 0 1px #FFFFFF inset
        }

        .showcase .layout .results .music-files .music-file .mf-image img {
            height: 100%;
            z-index: 1
        }

        .showcase .layout .results .music-files .music-file .mf-image:after {
            position: absolute;
            content: " ";
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: inherit;
            z-index: 2;
            background-color: rgba(0, 0, 0, 0.1);
            box-shadow: 0 0 0 1px #FFFFFF inset
        }

        .showcase .layout .results .music-files .music-file .mf-details {
            height: 150px;
            display: flex;
            flex: 0 0 auto;
            flex-flow: column;
            justify-content: space-between
        }

        .showcase .layout .results .music-files .music-file .mf-details .mf-content h3 {
            font-family: 'Roboto', sans-serif;
            margin: 0 0 10px 0;
            font-size: 14px;
            font-weight: 500;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis
        }

        .showcase .layout .results .music-files .music-file .mf-details .mf-content .mf-info {
            margin: 0 0 10px 0;
            padding: 0;
            font-size: 0;
            list-style: none
        }

        .showcase .layout .results .music-files .music-file .mf-details .mf-content .mf-info li {
            font-family: 'Roboto', sans-serif;
            margin-right: 20px;
            display: inline-block;
            color: #606060;
            font-size: 14px
        }

        .showcase .layout .results .music-files .music-file .mf-details .mf-content .mf-info li .fas,
        .showcase .layout .results .music-files .music-file .mf-details .mf-content .mf-info li .far {
            color: #ced7df;
            margin-right: 5px
        }

        .showcase .layout .results .music-files .music-file .mf-details .mf-content .mf-info li:last-child {
            margin-right: 0
        }

        .showcase .layout .results .music-files .music-file .mf-details .mf-content .mf-desc {
            font-family: 'Roboto', sans-serif;
            color: #9f9fa3;
            font-size: 13px;
            line-height: 20px;
            text-align: justify
        }

        .showcase .layout .results .music-files .music-file .mf-details .mf-content .music-player .yt-player {
            display: flex;
            align-items: center;
            background-color: transparent !important
        }

        .showcase .layout .results .music-files .music-file .mf-details .mf-content .music-player .yt-player .ytp-buttons {
            color: #323b43 !important;
            background-color: transparent !important
        }

        .showcase .layout .results .music-files .music-file .mf-details .mf-content .music-player .yt-player .ytp-actions {
            width: 20px;
            justify-content: left !important
        }

        .showcase .layout .results .music-files .music-file .mf-details .mf-content .music-player .yt-player .ytp-volume {
            width: 20px;
            padding: 0 0 0 10px;
            justify-content: right !important
        }

        .showcase .layout .results .music-files .music-file .mf-details .mf-content .music-player .yt-player .ytp-volume .v-buttons {
            width: 20px
        }

        .showcase .layout .results .music-files .music-file .mf-details .mf-content .music-player .yt-player .ytp-volume .v-bar {
            height: 5px !important;
            background-color: #ced7df !important
        }

        .showcase .layout .results .music-files .music-file .mf-details .mf-content .music-player .yt-player .ytp-volume .v-bar .v-pos {
            background-color: #323b43 !important
        }

        .showcase .layout .results .music-files .music-file .mf-details .mf-content .music-player .yt-player .ytp-ground {
            width: 100% !important;
            height: 5px !important;
            padding: 0 25px 0 20px
        }

        .showcase .layout .results .music-files .music-file .mf-details .mf-content .music-player .yt-player .ytp-ground .ytp-bars {
            background-color: #eff3f6
        }

        .showcase .layout .results .music-files .music-file .mf-details .mf-content .music-player .yt-player .ytp-ground .ytp-bars .ytp-lbar {
            background-color: #ced7df
        }

        .showcase .layout .results .music-files .music-file .mf-details .mf-content .music-player .yt-player .ytp-ground .ytp-bars .ytp-pbar {
            background-color: #323b43
        }

        .showcase .layout .results .music-files .music-file .mf-details .mf-content .music-player .yt-player .ytp-ground .ytp-bars .ytp-pbar .ytp-pelm {
            display: none !important
        }

        .showcase .layout .results .music-files .music-file .mf-details .mf-content .music-player .yt-player .ytp-ground .ytp-bars .ytp-duration,
        .showcase .layout .results .music-files .music-file .mf-details .mf-content .music-player .yt-player .ytp-ground .ytp-bars .ytp-error {
            padding-top: 12px;
            color: #323b43 !important;
            font-size: 10px !important
        }

        .showcase .layout .results .music-files .music-file .mf-details .mf-content .music-player .yt-player .ytp-ground .ytp-bars .ytp-seek {
            top: -12px;
            height: 30px !important
        }

        .showcase .layout .results .music-files .music-file .mf-details .mf-content .music-player .yt-player .ytp-load {
            font-size: 10px;
            padding-top: 12px;
            background-color: transparent
        }

        .showcase .layout .results .music-files .music-file .mf-details .mf-actions {
            margin: 0;
            padding: 0;
            font-size: 0;
            display: flex;
            list-style: none
        }

        .showcase .layout .results .music-files .music-file .mf-details .mf-actions [data-mact] {
            top: 0;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-family: 'Open Sans', sans-serif;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            cursor: pointer;
            color: #FFFFFF;
            padding: 5px 10px;
            font-size: 14px;
            display: inline-flex;
            margin-right: 20px;
            background-color: #000000;
            border: 1px solid #000000;
            transition: border-color 250ms, background-color 250ms, color 250ms, top 250ms
        }

        .showcase .layout .results .music-files .music-file .mf-details .mf-actions [data-mact][data-mact="sm"] {
            display: none;
            border-color: #ea1d5d;
            background-color: #ea1d5d
        }

        .showcase .layout .results .music-files .music-file .mf-details .mf-actions [data-mact][data-mact="dl"] {
            margin-right: 0 !important
        }

        .showcase .layout .results .music-files .music-file .mf-details .mf-actions [data-mact]:before {
            position: absolute;
            content: " ";
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            box-shadow: 0 0 0 1px #FFFFFF inset
        }

        .showcase .layout .results .music-files .music-file .mf-details .mf-actions [data-mact]:active {
            top: 2px
        }

        .showcase .layout .results .music-files .music-file .mf-details .mf-actions [data-mact] .icon,
        .showcase .layout .results .music-files .music-file .mf-details .mf-actions [data-mact] .text {
            z-index: 1;
            display: block
        }

        .showcase .layout .results .music-files .music-file .mf-details .mf-actions [data-mact] .icon {
            margin-right: 5px
        }

        .showcase .layout .results .music-files .music-file .mf-details .mf-actions [data-mact] .fa-spin {
            display: none
        }

        .showcase .layout .results .music-files .music-file .mf-details .mf-actions [data-mact] .text,
        .showcase .layout .results .music-files .music-file .mf-details .mf-actions [data-mact] .text .large,
        .showcase .layout .results .music-files .music-file .mf-details .mf-actions [data-mact] .text .short {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis
        }

        .showcase .layout .results .music-files .music-file .mf-details .mf-actions [data-mact] .text .short {
            display: none
        }

        .showcase .layout .results .mp3-download {
            margin: 10px 0 20px 0;
            border-radius: 5px;
            background-color: #37393f;
            transition: background-color 250ms
        }

        .showcase .layout .results .mp3-download:hover {
            background-color: #52565e
        }

        .showcase .layout .results .mp3-download:focus,
        .showcase .layout .results .mp3-download:active {
            background-color: #000000
        }

        .showcase .layout .results .mp3-download:last-child {
            margin-bottom: 0
        }

        .showcase .layout .results .mp3-download a {
            font-family: 'Roboto', sans-serif;
            padding: 10px;
            display: block;
            color: #FFFFFF;
            font-size: 14px;
            text-align: center;
            text-decoration: none;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis
        }

        .showcase .layout .results .mp3-download a .tag {
            display: block;
            font-size: 13px;
            margin-top: 5px
        }

        .showcase .layout .side-panel {
            width: 320px;
            flex: 1 1 auto;
            overflow: hidden;
            padding-left: 20px;
            box-sizing: border-box
        }

        .showcase .layout .side-panel h3 {
            font-family: 'Roboto', sans-serif;
            display: block;
            font-size: 24px;
            font-weight: 300;
            margin: 0 0 20px 0
        }

        .showcase .layout .side-panel .top-artists {
            display: flex;
            font-size: 0;
            margin-bottom: 30px;
            flex-flow: row wrap;
            justify-content: space-between
        }

        .showcase .layout .side-panel .top-artists .top-artist {
            width: 45%;
            padding: 3px;
            margin-bottom: 20px;
            box-sizing: border-box;
            background-color: #000000
        }

        .showcase .layout .side-panel .top-artists .top-artist a {
            display: block;
            text-align: center;
            width: 100%;
            padding-top: 100%;
            text-decoration: none
        }

        .showcase .layout .side-panel .top-artists .top-artist a:after {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 0;
            content: " ";
            width: 100%;
            padding-top: 100%;
            background: transparent url(data:image/png;base64,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) center center no-repeat;
            background-size: 60% auto
        }

        .showcase .layout .side-panel .top-artists .top-artist a img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1
        }

        .showcase .layout .side-panel .top-artists .top-artist a strong {
            font-family: 'Roboto', sans-serif;
            z-index: 2;
            padding: 0 10px;
            box-sizing: border-box;
            line-height: 35px;
            display: block;
            font-weight: 500;
            font-size: 13px;
            color: #FFFFFF;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis
        }

        .showcase .layout .side-panel .top-musics {
            font-size: 0
        }

        .showcase .layout .side-panel .top-musics .top-music {
            height: 80px;
            padding-left: 90px;
            margin-bottom: 20px;
            box-sizing: border-box
        }

        .showcase .layout .side-panel .top-musics .top-music:last-child {
            margin-bottom: 50px
        }

        .showcase .layout .side-panel .top-musics .top-music .tm-cover {
            position: absolute;
            top: 0;
            left: 0;
            width: 80px;
            height: 80px;
            padding: 1px;
            box-sizing: border-box;
            border: 1px solid #000000
        }

        .showcase .layout .side-panel .top-musics .top-music .tm-cover img {
            width: 100%;
            height: 100%
        }

        .showcase .layout .side-panel .top-musics .top-music .tm-info {
            height: 70px;
            display: flex;
            flex-flow: column;
            justify-content: space-between
        }

        .showcase .layout .side-panel .top-musics .top-music .tm-info .tm-title {
            font-family: 'Roboto', sans-serif;
            font-size: 14px;
            font-weight: 500;
            color: #000000;
            display: inline-block;
            text-decoration: none;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis
        }

        .showcase .layout .side-panel .top-musics .top-music .tm-info .tm-title:hover {
            text-decoration: underline
        }

        .showcase .layout .side-panel .top-musics .top-music .tm-info ul {
            margin: 0;
            padding: 0;
            font-size: 0;
            list-style: none
        }

        .showcase .layout .side-panel .top-musics .top-music .tm-info ul li {
            font-family: 'Roboto', sans-serif;
            font-size: 13px;
            display: block;
            margin-bottom: 10px;
            color: #606060;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis
        }

        .showcase .layout .side-panel .top-musics .top-music .tm-info ul li:last-child {
            margin-bottom: 0
        }

        .showcase .layout .side-panel .top-musics .top-music .tm-info ul li a {
            color: inherit;
            font-weight: 500;
            text-decoration: none
        }

        .showcase .layout .side-panel .top-musics .top-music .tm-info ul li a:hover {
            text-decoration: underline
        }

        .showcase .layout .side-panel .top-musics .top-music .tm-info ul li .fas,
        .showcase .layout .side-panel .top-musics .top-music .tm-info ul li .far {
            margin-right: 5px
        }

        .footer {
            padding: 50px 0;
            background-color: #333333;
            border-top: 1px solid #000000
        }

        .footer .layout {
            display: flex;
            align-items: center;
            justify-content: space-between
        }

        .footer .layout .brand .logo a {
            color: #FFFFFF;
            font-size: 32px;
            text-decoration: none
        }

        .footer .layout .brand .copyright {
            font-family: 'Roboto', sans-serif;
            font-size: 13px;
            color: rgba(255, 255, 255, 0.8)
        }

        .footer .layout .menu {
            margin: 0;
            padding: 0;
            font-size: 0;
            list-style: none
        }

        .footer .layout .menu li {
            display: inline-block;
            margin-right: 30px
        }

        .footer .layout .menu li:last-child {
            margin-right: 0
        }

        .footer .layout .menu li a {
            font-family: 'Roboto', sans-serif;
            color: #FFFFFF;
            font-size: 13px;
            letter-spacing: 1px;
            text-decoration: none;
            text-transform: uppercase
        }

        .footer .layout .menu li a:hover {
            text-decoration: underline
        }

        .public-response {
            display: none
        }

        .comments {
            padding-bottom: 50px
        }

        .comments .comment {
            min-height: 64px;
            padding-left: 74px;
            margin-bottom: 20px
        }

        .comments .comment.fetch .c-photo {
            border: none !important
        }

        .comments .comment.fetch .c-info .c-main .c-person {
            width: 10em;
            display: inline-block
        }

        .comments .comment.fetch .c-info .c-main .c-time {
            width: 5em;
            display: inline-block
        }

        .comments .comment.fetch .c-info .c-text {
            display: block
        }

        .comments .comment .c-photo {
            position: absolute;
            top: 0;
            left: 0;
            width: 64px;
            height: 64px;
            padding: 1px;
            border-radius: 0;
            box-sizing: border-box;
            border: 1px solid #000000
        }

        .comments .comment .c-photo img {
            width: 100%;
            height: 100%;
            border-radius: inherit
        }

        .comments .comment .c-info .c-main {
            font-family: 'Roboto', sans-serif;
            font-size: 14px
        }

        .comments .comment .c-info .c-main .c-person {
            font-weight: 500
        }

        .comments .comment .c-info .c-main .c-time {
            margin-left: 5px;
            color: #606060
        }

        .comments .comment .c-info .c-text {
            font-family: 'Roboto', sans-serif;
            font-size: 13px;
            margin-top: 10px;
            line-height: 18px
        }

        .mcover {
            background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjYiIGhlaWdodD0iNjYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxnPiAgPHRpdGxlPmJhY2tncm91bmQ8L3RpdGxlPiAgPHJlY3QgZmlsbD0ibm9uZSIgaWQ9ImNhbnZhc19iYWNrZ3JvdW5kIiBoZWlnaHQ9IjQwMiIgd2lkdGg9IjU4MiIgeT0iLTEiIHg9Ii0xIi8+IDwvZz4gPGc+ICA8dGl0bGU+TGF5ZXIgMTwvdGl0bGU+ICA8cGF0aCBpZD0ic3ZnXzEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2ZmZmZmZiIgZD0ibTQyLDU0YzAsLTYuNjI3ODYgNS4zNzE2OSwtMTIgMTIsLTEyYzYuNjI3ODYsMCAxMiw1LjM3MTY5IDEyLDEyYzAsNi42Mjc4NiAtNS4zNzE2OSwxMiAtMTIsMTJjLTYuNjI3ODYsMCAtMTIsLTUuMzcxNjkgLTEyLC0xMnptMiwwYzAsNS41MjM3IDQuNDc2NjcsMTAgMTAsMTBjNS41MjM3LDAgMTAsLTQuNDc2NjcgMTAsLTEwYzAsLTUuNTIzNyAtNC40NzY2NywtMTAgLTEwLC0xMGMtNS41MjM3LDAgLTEwLDQuNDc2NjcgLTEwLDEwem01LC0zYzAsLTIuMzMxODggMi41NDM5MSwtMy43NzIyMiA0LjU0MzQ5LC0yLjU3MjQ4bDUsM2MxLjk0MjAxLDEuMTY1MjEgMS45NDIwMSwzLjk3OTc1IDAsNS4xNDQ5NmwtNSwzYy0xLjk5OTU4LDEuMTk5NzQgLTQuNTQzNDksLTAuMjQwNiAtNC41NDM0OSwtMi41NzI0OGwwLC02em0yLDBsMCw2YzAsMC43NzcyOSAwLjg0Nzk3LDEuMjU3NDEgMS41MTQ1LDAuODU3NDlsNSwtM2MwLjY0NzMzLC0wLjM4ODQgMC42NDczMywtMS4zMjY1OCAwLC0xLjcxNDk4bC01LC0zYy0wLjY2NjUzLC0wLjM5OTkyIC0xLjUxNDUsMC4wODAyIC0xLjUxNDUsMC44NTc0OXptLTIxLC03Yy03LjczMTk5LDAgLTE0LC02LjI2ODAxIC0xNCwtMTRjMCwtNy43MzE5OSA2LjI2ODAxLC0xNCAxNCwtMTRjNy43MzE5OSwwIDE0LDYuMjY4MDEgMTQsMTRjMCw3LjczMTk5IC02LjI2ODAxLDE0IC0xNCwxNHptMCwtMmM2LjYyNzQyLDAgMTIsLTUuMzcyNTggMTIsLTEyYzAsLTYuNjI3NDIgLTUuMzcyNTgsLTEyIC0xMiwtMTJjLTYuNjI3NDIsMCAtMTIsNS4zNzI1OCAtMTIsMTJjMCw2LjYyNzQyIDUuMzcyNTgsMTIgMTIsMTJ6bTAsLTZjLTMuMzEzNzEsMCAtNiwtMi42ODYyOSAtNiwtNmMwLC0zLjMxMzcxIDIuNjg2MjksLTYgNiwtNmMzLjMxMzcxLDAgNiwyLjY4NjI5IDYsNmMwLDMuMzEzNzEgLTIuNjg2MjksNiAtNiw2em0wLC0yYzIuMjA5MTQsMCA0LC0xLjc5MDg2IDQsLTRjMCwtMi4yMDkxNCAtMS43OTA4NiwtNCAtNCwtNGMtMi4yMDkxNCwwIC00LDEuNzkwODYgLTQsNGMwLDIuMjA5MTQgMS43OTA4Niw0IDQsNHptMjkuMzU3MzQsMi4yMDQ5Yy0wLjExMzY4LDAuNTQwNDYgLTAuNjQzOTYsMC44ODY0MyAtMS4xODQ0MiwwLjc3Mjc1Yy0wLjU0MDQ2LC0wLjExMzY3IC0wLjg4NjQzLC0wLjY0Mzk2IC0wLjc3Mjc1LC0xLjE4NDQyYzAuMzk3NiwtMS44OTAzIDAuNTk5ODMsLTMuODI4MzkgMC41OTk4MywtNS43OTMyM2MwLC0xNS40NjM5NyAtMTIuNTM2MDMsLTI4IC0yOCwtMjhjLTE1LjQ2Mzk3LDAgLTI4LDEyLjUzNjAzIC0yOCwyOGMwLDE1LjQ2Mzk3IDEyLjUzNjAzLDI4IDI4LDI4YzEuOTY2MjksMCAzLjkwNTc4LC0wLjIwMjUzIDUuNzk3NDEsLTAuNjAwNzFjMC41NDA0NCwtMC4xMTM3NiAxLjA3MDc3LDAuMjMyMTMgMS4xODQ1NCwwLjc3MjU3YzAuMTEzNzYsMC41NDA0NCAtMC4yMzIxMywxLjA3MDc4IC0wLjc3MjU3LDEuMTg0NTRjLTIuMDI2ODksMC40MjY2NiAtNC4xMDQ0NSwwLjY0MzYgLTYuMjA5MzgsMC42NDM2Yy0xNi41Njg1NCwwIC0zMCwtMTMuNDMxNDYgLTMwLC0zMGMwLC0xNi41Njg1NCAxMy40MzE0NiwtMzAgMzAsLTMwYzE2LjU2ODU0LDAgMzAsMTMuNDMxNDYgMzAsMzBjMCwyLjEwMzM4IC0wLjIxNjYyLDQuMTc5NDMgLTAuNjQyNjYsNi4yMDQ5em0tNDkuNjg3NzMsMi4yMTYzM2MtMC4yMTE1NCwtMC41MTAxNiAwLjAzMDU0LC0xLjA5NTIyIDAuNTQwNywtMS4zMDY3N2MwLjUxMDE2LC0wLjIxMTU0IDEuMDk1MjIsMC4wMzA1MyAxLjMwNjc3LDAuNTQwN2MxLjAwNTk3LDIuNDI2IDIuNDg0MDIsNC42MzAyMSA0LjM0MDc4LDYuNDg2OThjMS44NTY3NywxLjg1Njc2IDQuMDYwOTgsMy4zMzQ4MSA2LjQ4Njk4LDQuMzQwNzhjMC41MTAxNywwLjIxMTU1IDAuNzUyMjQsMC43OTY2MSAwLjU0MDcsMS4zMDY3N2MtMC4yMTE1NSwwLjUxMDE3IC0wLjc5NjYxLDAuNzUyMjQgLTEuMzA2NzcsMC41NDA3Yy0yLjY2OTMsLTEuMTA2ODYgLTUuMDkzNTEsLTIuNzMyNDMgLTcuMTM1MTIsLTQuNzc0MDRjLTIuMDQxNjEsLTIuMDQxNjEgLTMuNjY3MTgsLTQuNDY1ODIgLTQuNzc0MDQsLTcuMTM1MTJ6bTQwLjY2MDc4LC0xNi44NDI0NmMwLjIxMTU0LDAuNTEwMTYgLTAuMDMwNTQsMS4wOTUyMiAtMC41NDA3LDEuMzA2NzdjLTAuNTEwMTYsMC4yMTE1NCAtMS4wOTUyMiwtMC4wMzA1MyAtMS4zMDY3NywtMC41NDA3Yy0xLjAwNTk3LC0yLjQyNiAtMi40ODQwMiwtNC42MzAyMSAtNC4zNDA3OCwtNi40ODY5OGMtMS44NTY3NywtMS44NTY3NiAtNC4wNjA5OCwtMy4zMzQ4MSAtNi40ODY5OCwtNC4zNDA3OGMtMC41MTAxNywtMC4yMTE1NSAtMC43NTIyNCwtMC43OTY2MSAtMC41NDA3LC0xLjMwNjc3YzAuMjExNTUsLTAuNTEwMTcgMC43OTY2MSwtMC43NTIyNCAxLjMwNjc3LC0wLjU0MDdjMi42NjkzLDEuMTA2ODYgNS4wOTM1MSwyLjczMjQzIDcuMTM1MTIsNC43NzQwNGMyLjA0MTYxLDIuMDQxNjEgMy42NjcxOCw0LjQ2NTgyIDQuNzc0MDQsNy4xMzUxMnoiLz4gPC9nPjwvc3ZnPg==)
        }

        .ui-autocomplete {
            font-family: 'Roboto', sans-serif;
            color: #ffffff;
            font-size: 14px
        }

        .ui-autocomplete:after {
            display: none;
            position: absolute;
            content: " ";
            bottom: -40px;
            left: 0;
            width: 100%;
            height: 50px;
            z-index: 1;
            background: linear-gradient(to bottom, black, rgba(255, 255, 255, 0))
        }

        .ui-autocomplete .ui-menu-item {
            z-index: 2;
            border-color: #000000;
            background-color: rgba(0, 0, 0, 0.8);
            text-transform: capitalize;
            border-style: solid;
            border-width: 0 1px 0 1px
        }

        .ui-autocomplete .ui-menu-item:last-child {
            border-bottom-width: 1px !important
        }

        .ui-autocomplete .ui-menu-item .ui-menu-item-wrapper {
            z-index: 1;
            padding: 0 20px;
            line-height: 30px
        }

        .ui-autocomplete .ui-menu-item .ui-menu-item-wrapper.ui-state-active {
            margin: 0 !important;
            background-color: rgba(255, 255, 255, 0.1)
        }

        .yt-parent {
            z-index: 1
        }

        #neon {
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            z-index: 100;
            display: none;
            align-items: center;
            justify-content: center
        }

        #neon.show {
            display: block !important
        }

        #neon.full .n-body {
            display: block !important
        }

        #neon .n-block {
            max-width: 400px;
            background: #FFFFFF;
            cursor: pointer;
            margin: 20px;
            border-radius: 10px;
            font-family: 'Roboto', sans-serif;
            border: 1px solid rgba(0, 0, 0, 0.1);
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.2)
        }

        #neon .n-block .n-head {
            display: flex;
            padding: 10px;
            justify-content: left;
            align-items: center
        }

        #neon .n-block .n-head .n-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 50px;
            margin-right: 10px;
            border-radius: 50%;
            border: 1px solid rgba(0, 0, 0, 0.1);
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.2)
        }

        #neon .n-block .n-head .n-icon svg {
            width: 60%;
            height: 60%
        }

        #neon .n-block .n-head .n-main .n-name {
            font-size: 15px;
            margin-bottom: 5px
        }

        #neon .n-block .n-head .n-main .n-more {
            opacity: .6;
            font-size: 13px
        }

        #neon .n-block .n-body {
            display: none;
            padding: 15px 15px 15px 30px
        }

        #neon .n-block .n-body .n-div {
            position: absolute;
            width: 100%;
            height: 0;
            top: 0;
            left: 0;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1)
        }

        #neon .n-block .n-body ul {
            margin: 0;
            padding: 0
        }

        #neon .n-block .n-body ul li {
            padding: 0;
            margin: 0 0 5px 0;
            list-style: circle;
            line-height: 25px;
            font-size: 13px
        }

        #neon .n-block .n-body ul li:last-child {
            margin-bottom: 0
        }

        .lunar-eclipse {
            position: absolute;
            width: 1px;
            height: 1px;
            opacity: 0;
            overflow: hidden
        }

        body.yt-vseek .yt-player.voff .fa-volume-mute,
        body.yt-vseek .yt-player.vmin .fa-volume-down,
        body.yt-vseek .yt-player.vmid .fa-volume,
        body.yt-vseek .yt-player.vmax .fa-volume-up {
            display: block !important
        }

        body.yt-vseek .yt-player .ytp-volume {
            cursor: default !important
        }

        body.yt-vseek .yt-player .ytp-volume .v-buttons .fas {
            display: none
        }

        body.yt-vseek .yt-player .ytp-volume:hover {
            width: 130px !important
        }

        body.yt-vseek .yt-player .ytp-volume:hover .v-buttons {
            left: 10px !important;
            width: 20px !important
        }

        body.yt-vseek .yt-player .ytp-volume:hover+.ytp-ground {
            padding-right: 130px !important
        }

        body.yt-ready .yt-player .ytp-load {
            display: none !important
        }

        body.yt-micro .yt-player .ms {
            display: inline !important
        }

        [data-message]::before {
            content: attr(data-message)
        }

        .ytp-dom {
            display: none
        }

        .yt-buff {
            background-image: url('data:image/svg+xml;utf8,<svg class="ldp-stripe" width="200px" height="200px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" style="background: none;"><defs><pattern id="ldp-2d30c445ddeca4" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse"><path d="M 200 0 L 0 200 L 12.5 200 L 212.5 0 Z" transform="translate(-388.072 0)" fill="%23000000"><animateTransform attributeName="transform" type="translate" values="-400 0;-200 0" keyTimes="0;1" dur="2.5s" repeatCount="indefinite"></animateTransform></path><path d="M 200 0 L 0 200 L 12.5 200 L 212.5 0 Z" transform="translate(-363.072 0)" fill="%23000000"><animateTransform attributeName="transform" type="translate" values="-375 0;-175 0" keyTimes="0;1" dur="2.5s" repeatCount="indefinite"></animateTransform></path><path d="M 200 0 L 0 200 L 12.5 200 L 212.5 0 Z" transform="translate(-338.072 0)" fill="%23000000"><animateTransform attributeName="transform" type="translate" values="-350 0;-150 0" keyTimes="0;1" dur="2.5s" repeatCount="indefinite"></animateTransform></path><path d="M 200 0 L 0 200 L 12.5 200 L 212.5 0 Z" transform="translate(-313.072 0)" fill="%23000000"><animateTransform attributeName="transform" type="translate" values="-325 0;-125 0" keyTimes="0;1" dur="2.5s" repeatCount="indefinite"></animateTransform></path><path d="M 200 0 L 0 200 L 12.5 200 L 212.5 0 Z" transform="translate(-288.072 0)" fill="%23000000"><animateTransform attributeName="transform" type="translate" values="-300 0;-100 0" keyTimes="0;1" dur="2.5s" repeatCount="indefinite"></animateTransform></path><path d="M 200 0 L 0 200 L 12.5 200 L 212.5 0 Z" transform="translate(-263.072 0)" fill="%23000000"><animateTransform attributeName="transform" type="translate" values="-275 0;-75 0" keyTimes="0;1" dur="2.5s" repeatCount="indefinite"></animateTransform></path><path d="M 200 0 L 0 200 L 12.5 200 L 212.5 0 Z" transform="translate(-238.072 0)" fill="%23000000"><animateTransform attributeName="transform" type="translate" values="-250 0;-50 0" keyTimes="0;1" dur="2.5s" repeatCount="indefinite"></animateTransform></path><path d="M 200 0 L 0 200 L 12.5 200 L 212.5 0 Z" transform="translate(-213.072 0)" fill="%23000000"><animateTransform attributeName="transform" type="translate" values="-225 0;-25 0" keyTimes="0;1" dur="2.5s" repeatCount="indefinite"></animateTransform></path><path d="M 200 0 L 0 200 L 12.5 200 L 212.5 0 Z" transform="translate(-188.072 0)" fill="%23000000"><animateTransform attributeName="transform" type="translate" values="-200 0;0 0" keyTimes="0;1" dur="2.5s" repeatCount="indefinite"></animateTransform></path><path d="M 200 0 L 0 200 L 12.5 200 L 212.5 0 Z" transform="translate(-163.072 0)" fill="%23000000"><animateTransform attributeName="transform" type="translate" values="-175 0;25 0" keyTimes="0;1" dur="2.5s" repeatCount="indefinite"></animateTransform></path><path d="M 200 0 L 0 200 L 12.5 200 L 212.5 0 Z" transform="translate(-138.072 0)" fill="%23000000"><animateTransform attributeName="transform" type="translate" values="-150 0;50 0" keyTimes="0;1" dur="2.5s" repeatCount="indefinite"></animateTransform></path><path d="M 200 0 L 0 200 L 12.5 200 L 212.5 0 Z" transform="translate(-113.072 0)" fill="%23000000"><animateTransform attributeName="transform" type="translate" values="-125 0;75 0" keyTimes="0;1" dur="2.5s" repeatCount="indefinite"></animateTransform></path><path d="M 200 0 L 0 200 L 12.5 200 L 212.5 0 Z" transform="translate(-88.0725 0)" fill="%23000000"><animateTransform attributeName="transform" type="translate" values="-100 0;100 0" keyTimes="0;1" dur="2.5s" repeatCount="indefinite"></animateTransform></path><path d="M 200 0 L 0 200 L 12.5 200 L 212.5 0 Z" transform="translate(-63.0725 0)" fill="%23000000"><animateTransform attributeName="transform" type="translate" values="-75 0;125 0" keyTimes="0;1" dur="2.5s" repeatCount="indefinite"></animateTransform></path><path d="M 200 0 L 0 200 L 12.5 200 L 212.5 0 Z" transform="translate(-38.0725 0)" fill="%23000000"><animateTransform attributeName="transform" type="translate" values="-50 0;150 0" keyTimes="0;1" dur="2.5s" repeatCount="indefinite"></animateTransform></path><path d="M 200 0 L 0 200 L 12.5 200 L 212.5 0 Z" transform="translate(-13.0725 0)" fill="%23000000"><animateTransform attributeName="transform" type="translate" values="-25 0;175 0" keyTimes="0;1" dur="2.5s" repeatCount="indefinite"></animateTransform></path><path d="M 200 0 L 0 200 L 12.5 200 L 212.5 0 Z" transform="translate(11.9275 0)" fill="%23000000"><animateTransform attributeName="transform" type="translate" values="0 0;200 0" keyTimes="0;1" dur="2.5s" repeatCount="indefinite"></animateTransform></path><path d="M 200 0 L 0 200 L 12.5 200 L 212.5 0 Z" transform="translate(36.9275 0)" fill="%23000000"><animateTransform attributeName="transform" type="translate" values="25 0;225 0" keyTimes="0;1" dur="2.5s" repeatCount="indefinite"></animateTransform></path><path d="M 200 0 L 0 200 L 12.5 200 L 212.5 0 Z" transform="translate(61.9275 0)" fill="%23000000"><animateTransform attributeName="transform" type="translate" values="50 0;250 0" keyTimes="0;1" dur="2.5s" repeatCount="indefinite"></animateTransform></path><path d="M 200 0 L 0 200 L 12.5 200 L 212.5 0 Z" transform="translate(86.9275 0)" fill="%23000000"><animateTransform attributeName="transform" type="translate" values="75 0;275 0" keyTimes="0;1" dur="2.5s" repeatCount="indefinite"></animateTransform></path><path d="M 200 0 L 0 200 L 12.5 200 L 212.5 0 Z" transform="translate(111.928 0)" fill="%23000000"><animateTransform attributeName="transform" type="translate" values="100 0;300 0" keyTimes="0;1" dur="2.5s" repeatCount="indefinite"></animateTransform></path><path d="M 200 0 L 0 200 L 12.5 200 L 212.5 0 Z" transform="translate(136.928 0)" fill="%23000000"><animateTransform attributeName="transform" type="translate" values="125 0;325 0" keyTimes="0;1" dur="2.5s" repeatCount="indefinite"></animateTransform></path><path d="M 200 0 L 0 200 L 12.5 200 L 212.5 0 Z" transform="translate(161.928 0)" fill="%23000000"><animateTransform attributeName="transform" type="translate" values="150 0;350 0" keyTimes="0;1" dur="2.5s" repeatCount="indefinite"></animateTransform></path><path d="M 200 0 L 0 200 L 12.5 200 L 212.5 0 Z" transform="translate(186.928 0)" fill="%23000000"><animateTransform attributeName="transform" type="translate" values="175 0;375 0" keyTimes="0;1" dur="2.5s" repeatCount="indefinite"></animateTransform></path></pattern></defs><rect x="0" y="0" width="100%" height="100%" fill="url(%23ldp-2d30c445ddeca4)"></rect></svg>') !important
        }

        .yt-parent {
            position: absolute;
            width: 1px;
            height: 1px;
            opacity: 0;
            overflow: hidden
        }

        .yt-parent .yt-canvas {
            position: absolute;
            top: 10px;
            left: 10px;
            width: 160px;
            height: 90px;
            overflow: hidden
        }

        .yt-player {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            height: 30px;
            box-sizing: border-box;
            color: #ffffff;
            background-color: #323b43;
            font-family: 'Roboto', sans-serif
        }

        .yt-player.playing .fa-pause,
        .yt-player.ended .fa-undo,
        .yt-player.paused .fa-play,
        .yt-player.buffering .ytp-bbar {
            display: block !important
        }

        .yt-player.voff .ytp-volume .v-buttons .fa-volume-mute {
            display: block
        }

        .yt-player.vmin .ytp-volume .v-buttons .fa-volume-up,
        .yt-player.vmid .ytp-volume .v-buttons .fa-volume-up,
        .yt-player.vmax .ytp-volume .v-buttons .fa-volume-up {
            display: block
        }

        .yt-player.voff .v-pos {
            background-color: rgba(255, 255, 255, 0.5) !important
        }

        .yt-player.duration .ytp-duration {
            display: flex !important
        }

        .yt-player.error .ytp-lbar,
        .yt-player.error .ytp-pbar,
        .yt-player.error .ytp-duration,
        .yt-player.error .ytp-seek {
            display: none !important
        }

        .yt-player.error .ytp-bbar {
            opacity: .05 !important
        }

        .yt-player.error .ytp-error {
            display: flex !important
        }

        .yt-player .ytp-ground {
            z-index: 0;
            height: 100%;
            padding: 0 30px;
            transition: padding-right 500ms linear
        }

        .yt-player .ytp-ground .ytp-bars {
            height: 100%
        }

        .yt-player .ytp-ground .ytp-bars .ytp-bar {
            top: 0;
            left: 0;
            height: 100%;
            position: absolute
        }

        .yt-player .ytp-ground .ytp-bars .ytp-bbar {
            display: none;
            z-index: 0;
            width: 100%;
            opacity: .15
        }

        .yt-player .ytp-ground .ytp-bars .ytp-lbar {
            z-index: 1;
            background-color: rgba(0, 0, 0, 0.15);
            transition: width 250ms linear
        }

        .yt-player .ytp-ground .ytp-bars .ytp-pbar {
            z-index: 2;
            background-color: #323b43
        }

        .yt-player .ytp-ground .ytp-bars .ytp-pbar .ytp-pelm {
            position: absolute;
            display: block;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.3)
        }

        .yt-player .ytp-ground .ytp-bars .ytp-duration {
            display: none;
            font-size: 13px;
            z-index: 3;
            height: 100%;
            align-items: center;
            justify-content: center;
            color: rgba(255, 255, 255, 0.8)
        }

        .yt-player .ytp-ground .ytp-bars .ytp-duration .ms {
            display: none
        }

        .yt-player .ytp-ground .ytp-bars .ytp-seek {
            cursor: pointer;
            width: 100%;
            z-index: 4
        }

        .yt-player .ytp-ground .ytp-bars .ytp-error {
            display: none;
            width: 100%;
            font-size: 14px;
            align-items: center;
            justify-content: center;
            color: rgba(255, 255, 255, 0.8)
        }

        .yt-player .ytp-buttons {
            z-index: 1;
            position: absolute;
            top: 0;
            width: 30px;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            transition: background-color 250ms
        }

        .yt-player .ytp-actions {
            left: 0;
            cursor: pointer
        }

        .yt-player .ytp-actions .fa-play,
        .yt-player .ytp-actions .fa-pause,
        .yt-player .ytp-actions .fa-undo {
            display: none
        }

        .yt-player .ytp-volume {
            right: 0;
            cursor: pointer;
            padding: 0 10px;
            box-sizing: border-box;
            transition: width 500ms linear
        }

        .yt-player .ytp-volume .v-buttons {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            width: 30px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: width 500ms linear, left 500ms linear
        }

        .yt-player .ytp-volume .v-buttons .fa-volume,
        .yt-player .ytp-volume .v-buttons .fa-volume-up,
        .yt-player .ytp-volume .v-buttons .fa-volume-down,
        .yt-player .ytp-volume .v-buttons .fa-volume-mute {
            cursor: pointer;
            display: none
        }

        .yt-player .ytp-volume .vol-bars {
            z-index: 0;
            padding-left: 30px;
            width: 100%
        }

        .yt-player .ytp-volume .vol-bars .v-bar {
            cursor: pointer;
            height: 10px;
            width: 100%;
            background-color: rgba(255, 255, 255, 0.33)
        }

        .yt-player .ytp-volume .vol-bars .v-bar .v-pos {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            background-color: #ffffff;
            transition: width 300ms linear
        }

        .yt-player .ytp-load {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            font-size: 14px;
            align-items: center;
            justify-content: center;
            z-index: 5;
            background-color: #323b43
        }

        .yt-player .ytp-load .ytpl-buff {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: .06;
            z-index: 0
        }

        .yt-player .ytp-load .ytpl-text {
            z-index: 1
        }

        .logo-font {
            font-family: 'Comfortaa', cursive !important;
            font-weight: 400 !important
        }
    </style>
    <script> window.appPrompt = null; window.addEventListener('beforeinstallprompt', function (e) { e.preventDefault(); console.log('PWA'); window.appPrompt = e; }); window._PWAV = '1634978272'; window.__ytdl = 'https://ytmp3cut.com/'; window._YTDL = JSON.parse('{"_geo":"NG","safe":"https:\/\/ytmp3cut.com\/","desk":"https:\/\/ytmp3cut.com\/","mobi":"https:\/\/ytmp3cut.com\/"}'); </script>
    <script type="text/javascript" src="/ibro.js" async defer></script>
    <script src="https://www.googletagmanager.com/gtag/js?id=UA-134594137-1" async defer></script>
    <script> window.dataLayer = window.dataLayer || []; function gtag() { dataLayer.push(arguments) } gtag('js', new Date()); gtag('config', 'UA-134594137-1'); </script>
</head>
 
<body>
    <div class="leading">
        <div class="background">
            <div data-image="${data.thumbnail.replace('mqdefault','maxresdefault')}" data-title="Yo"></div>
        </div>
        <div class="header">
            <div class="layout"><a class="logo" href="https://songuber.co/"
                    title="MP3 Quack - Search and download your favorite music songs"><span
                        class="logo-text logo-font">Song Uber</span></a>
                <div class="search"><input type="text" id="searchInput" placeholder="Search your favorite music..."
                        spellcheck="false"><span class="bg"></span><span id="searchSubmit"><span
                            class="fas fa-search"></span></span></div>
            </div>
        </div>
        <div class="content">
            <div class="layout">
                <div class="music-cover">
                    <div class="music-image mcover">
                        <div data-image="${data.thumbnail.replace('mqdefault','sddefault')}" data-title="${data.query}"></div>
                    </div>
                </div>
                <div class="music-details" data-media="${data.fId}">
                    <div class="mdetails-info">
                        <h1>Yo <span class="mp3-dl">MP3 Free Download</span></h1>
                        <ul class="music-info">
                            <li class="music-rate"><span class="rate-wait"><span class="fas fa-star"></span><span
                                        class="fas fa-star"></span><span class="fas fa-star"></span><span
                                        class="fas fa-star"></span><span class="fas fa-star"></span></span></li>
                            <li><span class="fas fa-user-crown"></span>...</li>
                            <li><span class="far fa-calendar-star"></span>...</li>
                        </ul>
                        <p class="music-description">... </p>
                        <div class="music-player"></div>
                    </div>
                    <div class="mdetails-interact">
                        <ul class="music-actions">
                            <li data-mact="pm"><span class="icon"><span class="fas fa-play fa-fw"></span><span
                                        class="fas fa-spinner-third fa-spin fa-fw"></span></span><span class="text">Play
                                    Music</span></li>
                            <li data-mact="sm"><span class="icon"><span class="fas fa-circle fa-fw"></span></span><span
                                    class="text">Stop Music</span></li>
                            <li data-mact="dl" class="mp3dl"><span class="icon"><span
                                        class="fas fa-download fa-fw"></span><span
                                        class="fas fa-spinner-third fa-spin fa-fw"></span></span><span
                                    class="text">Download MP3</span></li>
                        </ul>
                        <ul class="social-share">
                            <li data-share="facebook"><span class="fab fa-facebook-f"></span></li>
                            <li data-share="twitter"><span class="fab fa-twitter"></span></li>
                            <li data-share="google-plus"><span class="fab fa-google-plus-g"></span></li>
                            <li data-share="whatsapp"><span class="fab fa-whatsapp"></span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>  
    </div>
    <div class="showcase">
        <div class="layout">
            <div class="results">  
                <h2>${data.query} MP3 Music Songs</h2>
                <div class="music-files">
                    ${data.content}
                   
                </div>
                
            </div>
            <div class="side-panel">
                <h3>Famous Artists</h3>
                <div class="top-artists">
                    <div class="top-artist"><a href="https://songuber.co/mp3/Karol-G"
                            title="Karol G MP3 Download 320kbps"><img data-src="https://songuber.co/artist/KAROL%20G"
                                class="lazy" alt="KAROL G" title="Karol G MP3 Download 320kbps"><strong>KAROL
                                G</strong></a></div>
                    <div class="top-artist"><a href="https://songuber.co/mp3/Farruko"
                            title="Farruko MP3 Download 320kbps"><img data-src="https://songuber.co/artist/Farruko"
                                class="lazy" alt="Farruko"
                                title="Farruko MP3 Download 320kbps"><strong>Farruko</strong></a></div>
                    <div class="top-artist"><a href="https://songuber.co/mp3/Daniel-Caesar"
                            title="Daniel Caesar MP3 Download 320kbps"><img
                                data-src="https://songuber.co/artist/Daniel%20Caesar" class="lazy" alt="Daniel Caesar"
                                title="Daniel Caesar MP3 Download 320kbps"><strong>Daniel Caesar</strong></a></div>
                    <div class="top-artist"><a href="https://songuber.co/mp3/Lil-Uzi-Vert"
                            title="Lil Uzi Vert MP3 Download 320kbps"><img
                                data-src="https://songuber.co/artist/Lil%20Uzi%20Vert" class="lazy" alt="Lil Uzi Vert"
                                title="Lil Uzi Vert MP3 Download 320kbps"><strong>Lil Uzi Vert</strong></a></div>
                    <div class="top-artist"><a href="https://songuber.co/mp3/Giveon"
                            title="Givēon MP3 Download 320kbps"><img data-src="https://songuber.co/artist/GIV%C4%92ON"
                                class="lazy" alt="GIVĒON"
                                title="Givēon MP3 Download 320kbps"><strong>GIVĒON</strong></a></div>
                    <div class="top-artist"><a href="https://songuber.co/mp3/Yebba"
                            title="Yebba MP3 Download 320kbps"><img data-src="https://songuber.co/artist/Yebba"
                                class="lazy" alt="Yebba" title="Yebba MP3 Download 320kbps"><strong>Yebba</strong></a>
                    </div>
                    <div class="top-artist"><a href="https://songuber.co/mp3/Justin-Bieber"
                            title="Justin Bieber MP3 Download 320kbps"><img
                                data-src="https://songuber.co/artist/Justin%20Bieber" class="lazy" alt="Justin Bieber"
                                title="Justin Bieber MP3 Download 320kbps"><strong>Justin Bieber</strong></a></div>
                    <div class="top-artist"><a href="https://songuber.co/mp3/Lil-Nas-X"
                            title="Lil Nas X MP3 Download 320kbps"><img
                                data-src="https://songuber.co/artist/Lil%20Nas%20X" class="lazy" alt="Lil Nas X"
                                title="Lil Nas X MP3 Download 320kbps"><strong>Lil Nas X</strong></a></div>
                    <div class="top-artist"><a href="https://songuber.co/mp3/Rhenzy-Feliz"
                            title="Rhenzy Feliz MP3 Download 320kbps"><img
                                data-src="https://songuber.co/artist/Rhenzy%20Feliz" class="lazy" alt="Rhenzy Feliz"
                                title="Rhenzy Feliz MP3 Download 320kbps"><strong>Rhenzy Feliz</strong></a></div>
                    <div class="top-artist"><a href="https://songuber.co/mp3/Gunna"
                            title="Gunna MP3 Download 320kbps"><img data-src="https://songuber.co/artist/Gunna"
                                class="lazy" alt="Gunna" title="Gunna MP3 Download 320kbps"><strong>Gunna</strong></a>
                    </div>
                </div>
                <h3>Top Music Downloads</h3>
                <div class="top-musics">
                    <div class="top-music">
                        <div class="tm-cover"><a href="https://songuber.co/mp3/Ocean-Gold"
                                title="Ocean Gold MP3 Download 320kbps"><img
                                    data-src="https://is2-ssl.mzstatic.com/image/thumb/Music116/v4/42/c2/aa/42c2aaa0-07c3-7426-3aba-2b8636a7a8b0/075679783066.jpg/80x80bb.jpg"
                                    class="lazy" alt="Ocean Gold" title="Ocean Gold MP3 Download 320kbps"></a></div>
                        <div class="tm-info"><a class="tm-title" href="https://songuber.co/mp3/Ocean-Gold"
                                title="Ocean Gold MP3 Download 320kbps">Ocean Gold</a>
                            <ul class="tm-details">
                                <li><span class="fas fa-user-crown"></span><a href="https://songuber.co/mp3/Nocap"
                                        title="Nocap MP3 Download 320kbps">Nocap</a></li>
                                <li><span class="far fa-calendar-star"></span>9 months ago</li>
                            </ul>
                        </div>
                    </div>
                    <div class="top-music">
                        <div class="tm-cover"><a href="https://songuber.co/mp3/Banking-On-Me"
                                title="Banking On Me MP3 Download 320kbps"><img
                                    data-src="https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/0a/51/d7/0a51d787-399d-5f22-d667-1e219755e7e8/850039440106.jpg/80x80bb.jpg"
                                    class="lazy" alt="Banking On Me" title="Banking On Me MP3 Download 320kbps"></a>
                        </div>
                        <div class="tm-info"><a class="tm-title" href="https://songuber.co/mp3/Banking-On-Me"
                                title="Banking On Me MP3 Download 320kbps">Banking On Me</a>
                            <ul class="tm-details">
                                <li><span class="fas fa-user-crown"></span><a href="https://songuber.co/mp3/Gunna"
                                        title="Gunna MP3 Download 320kbps">Gunna</a></li>
                                <li><span class="far fa-calendar-star"></span>1 year ago</li>
                            </ul>
                        </div>
                    </div>
                    <div class="top-music">
                        <div class="tm-cover"><a href="https://songuber.co/mp3/Kiss-Me-More"
                                title="Kiss Me More MP3 Download 320kbps"><img
                                    data-src="https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/84/bb/4f/84bb4f76-20cb-7945-84be-af73777d42ac/886449138791.jpg/80x80bb.jpg"
                                    class="lazy" alt="Kiss Me More" title="Kiss Me More MP3 Download 320kbps"></a></div>
                        <div class="tm-info"><a class="tm-title" href="https://songuber.co/mp3/Kiss-Me-More"
                                title="Kiss Me More MP3 Download 320kbps">Kiss Me More</a>
                            <ul class="tm-details">
                                <li><span class="fas fa-user-crown"></span><a href="https://songuber.co/mp3/Doja-Cat"
                                        title="Doja Cat MP3 Download 320kbps">Doja Cat</a></li>
                                <li><span class="far fa-calendar-star"></span>1 year ago</li>
                            </ul>
                        </div>
                    </div>
                    <div class="top-music">
                        <div class="tm-cover"><a href="https://songuber.co/mp3/Nevada"
                                title="Nevada MP3 Download 320kbps"><img
                                    data-src="https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/18/5d/1b/185d1b16-0799-4b26-4c3f-678ccfe58753/075679766922.jpg/80x80bb.jpg"
                                    class="lazy" alt="Nevada" title="Nevada MP3 Download 320kbps"></a></div>
                        <div class="tm-info"><a class="tm-title" href="https://songuber.co/mp3/Nevada"
                                title="Nevada MP3 Download 320kbps">Nevada</a>
                            <ul class="tm-details">
                                <li><span class="fas fa-user-crown"></span><a
                                        href="https://songuber.co/mp3/Youngboy-Never-Broke-Again"
                                        title="Youngboy Never Broke Again MP3 Download 320kbps">Youngboy Never Broke
                                        Again</a></li>
                                <li><span class="far fa-calendar-star"></span>2 years ago</li>
                            </ul>
                        </div>
                    </div>
                    <div class="top-music">
                        <div class="tm-cover"><a href="https://songuber.co/mp3/Thump-Shit"
                                title="Thump Shit MP3 Download 320kbps"><img
                                    data-src="https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/6c/08/18/6c08184c-61f2-6777-88d4-c08580e09205/22UMGIM33673.rgb.jpg/80x80bb.jpg"
                                    class="lazy" alt="Thump Shit" title="Thump Shit MP3 Download 320kbps"></a></div>
                        <div class="tm-info"><a class="tm-title" href="https://songuber.co/mp3/Thump-Shit"
                                title="Thump Shit MP3 Download 320kbps">Thump Shit</a>
                            <ul class="tm-details">
                                <li><span class="fas fa-user-crown"></span><a href="https://songuber.co/mp3/42-Dugg"
                                        title="42 Dugg MP3 Download 320kbps">42 Dugg</a> &amp; <a
                                        href="https://songuber.co/mp3/Est-Gee" title="Est Gee MP3 Download 320kbps">Est
                                        Gee</a></li>
                                <li><span class="far fa-calendar-star"></span>10 months ago</li>
                            </ul>
                        </div>
                    </div>
                    <div class="top-music">
                        <div class="tm-cover"><a href="https://songuber.co/mp3/Flags-To-The-Sky"
                                title="Flags To The Sky MP3 Download 320kbps"><img
                                    data-src="https://is2-ssl.mzstatic.com/image/thumb/Music116/v4/42/c2/aa/42c2aaa0-07c3-7426-3aba-2b8636a7a8b0/075679783066.jpg/80x80bb.jpg"
                                    class="lazy" alt="Flags To The Sky"
                                    title="Flags To The Sky MP3 Download 320kbps"></a></div>
                        <div class="tm-info"><a class="tm-title" href="https://songuber.co/mp3/Flags-To-The-Sky"
                                title="Flags To The Sky MP3 Download 320kbps">Flags To The Sky</a>
                            <ul class="tm-details">
                                <li><span class="fas fa-user-crown"></span><a href="https://songuber.co/mp3/Nocap"
                                        title="Nocap MP3 Download 320kbps">Nocap</a></li>
                                <li><span class="far fa-calendar-star"></span>9 months ago</li>
                            </ul>
                        </div>
                    </div>
                    <div class="top-music">
                        <div class="tm-cover"><a href="https://songuber.co/mp3/Wants-And-Needs"
                                title="Wants And Needs MP3 Download 320kbps"><img
                                    data-src="https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/63/2a/34/632a3488-d104-3ff1-dc02-4ed86f58ed05/21UMGIM18577.rgb.jpg/80x80bb.jpg"
                                    class="lazy" alt="Wants and Needs" title="Wants And Needs MP3 Download 320kbps"></a>
                        </div>
                        <div class="tm-info"><a class="tm-title" href="https://songuber.co/mp3/Wants-And-Needs"
                                title="Wants And Needs MP3 Download 320kbps">Wants and Needs</a>
                            <ul class="tm-details">
                                <li><span class="fas fa-user-crown"></span><a href="https://songuber.co/mp3/Drake"
                                        title="Drake MP3 Download 320kbps">Drake</a></li>
                                <li><span class="far fa-calendar-star"></span>1 year ago</li>
                            </ul>
                        </div>
                    </div>
                    <div class="top-music">
                        <div class="tm-cover"><a href="https://songuber.co/mp3/Massaging-Me"
                                title="Massaging Me MP3 Download 320kbps"><img
                                    data-src="https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/65/f2/06/65f2067b-a8ea-239c-c219-8e0f0282dcea/196589073693.jpg/80x80bb.jpg"
                                    class="lazy" alt="MASSAGING ME" title="Massaging Me MP3 Download 320kbps"></a></div>
                        <div class="tm-info"><a class="tm-title" href="https://songuber.co/mp3/Massaging-Me"
                                title="Massaging Me MP3 Download 320kbps">MASSAGING ME</a>
                            <ul class="tm-details">
                                <li><span class="fas fa-user-crown"></span><a href="https://songuber.co/mp3/Future"
                                        title="Future MP3 Download 320kbps">Future</a></li>
                                <li><span class="far fa-calendar-star"></span>9 months ago</li>
                            </ul>
                        </div>
                    </div>
                    <div class="top-music">
                        <div class="tm-cover"><a href="https://songuber.co/mp3/Wait-A-Minute"
                                title="Wait A Minute! MP3 Download 320kbps"><img
                                    data-src="https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/de/9f/34/de9f3425-74fc-dc5b-5288-63d4755650e8/00854078006309.rgb.jpg/80x80bb.jpg"
                                    class="lazy" alt="Wait a Minute!" title="Wait A Minute! MP3 Download 320kbps"></a>
                        </div>
                        <div class="tm-info"><a class="tm-title" href="https://songuber.co/mp3/Wait-A-Minute"
                                title="Wait A Minute! MP3 Download 320kbps">Wait a Minute!</a>
                            <ul class="tm-details">
                                <li><span class="fas fa-user-crown"></span><a href="https://songuber.co/mp3/Willow"
                                        title="Willow MP3 Download 320kbps">Willow</a></li>
                                <li><span class="far fa-calendar-star"></span>7 years ago</li>
                            </ul>
                        </div>
                    </div>
                    <div class="top-music">
                        <div class="tm-cover"><a href="https://songuber.co/mp3/Whats-My-Name"
                                title="What&#039;s My Name MP3 Download 320kbps"><img
                                    data-src="https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/66/a0/fd/66a0fdf7-8b80-06cb-06d1-84b2ccee2765/196589062345.jpg/80x80bb.jpg"
                                    class="lazy" alt="What&#039;s My Name"
                                    title="What&#039;s My Name MP3 Download 320kbps"></a></div>
                        <div class="tm-info"><a class="tm-title" href="https://songuber.co/mp3/Whats-My-Name"
                                title="What&#039;s My Name MP3 Download 320kbps">What&#039;s My Name</a>
                            <ul class="tm-details">
                                <li><span class="fas fa-user-crown"></span><a
                                        href="https://songuber.co/mp3/Fivio-Foreign"
                                        title="Fivio Foreign MP3 Download 320kbps">Fivio Foreign</a> &amp; <a
                                        href="https://songuber.co/mp3/Queen-Naija"
                                        title="Queen Naija MP3 Download 320kbps">Queen Naija</a></li>
                                <li><span class="far fa-calendar-star"></span>10 months ago</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="public-response">
                    <h3>Public Response On Yo</h3>
                    <div class="comments">
                        <div class="comment fetch placeHolderContent">
                            <div class="c-photo placeHolder"></div>
                            <div class="c-info">
                                <div class="c-main"><strong class="c-person placeHolder">&nbsp;</strong><span
                                        class="c-time placeHolder">&nbsp;</span></div>
                                <div class="c-text placeHolder">&nbsp;</div>
                            </div>
                        </div>
                        <div class="comment fetch placeHolderContent">
                            <div class="c-photo placeHolder"></div>
                            <div class="c-info">
                                <div class="c-main"><strong class="c-person placeHolder">&nbsp;</strong><span
                                        class="c-time placeHolder">&nbsp;</span></div>
                                <div class="c-text placeHolder">&nbsp;</div>
                            </div>
                        </div>
                        <div class="comment fetch placeHolderContent">
                            <div class="c-photo placeHolder"></div>
                            <div class="c-info">
                                <div class="c-main"><strong class="c-person placeHolder">&nbsp;</strong><span
                                        class="c-time placeHolder">&nbsp;</span></div>
                                <div class="c-text placeHolder">&nbsp;</div>
                            </div>
                        </div>
                        <div class="comment fetch placeHolderContent">
                            <div class="c-photo placeHolder"></div>
                            <div class="c-info">
                                <div class="c-main"><strong class="c-person placeHolder">&nbsp;</strong><span
                                        class="c-time placeHolder">&nbsp;</span></div>
                                <div class="c-text placeHolder">&nbsp;</div>
                            </div>
                        </div>
                        <div class="comment fetch placeHolderContent">
                            <div class="c-photo placeHolder"></div>
                            <div class="c-info">
                                <div class="c-main"><strong class="c-person placeHolder">&nbsp;</strong><span
                                        class="c-time placeHolder">&nbsp;</span></div>
                                <div class="c-text placeHolder">&nbsp;</div>
                            </div>
                        </div>
                        <div class="comment fetch placeHolderContent">
                            <div class="c-photo placeHolder"></div>
                            <div class="c-info">
                                <div class="c-main"><strong class="c-person placeHolder">&nbsp;</strong><span
                                        class="c-time placeHolder">&nbsp;</span></div>
                                <div class="c-text placeHolder">&nbsp;</div>
                            </div>
                        </div>
                        <div class="comment fetch placeHolderContent">
                            <div class="c-photo placeHolder"></div>
                            <div class="c-info">
                                <div class="c-main"><strong class="c-person placeHolder">&nbsp;</strong><span
                                        class="c-time placeHolder">&nbsp;</span></div>
                                <div class="c-text placeHolder">&nbsp;</div>
                            </div>
                        </div>
                        <div class="comment fetch placeHolderContent">
                            <div class="c-photo placeHolder"></div>
                            <div class="c-info">
                                <div class="c-main"><strong class="c-person placeHolder">&nbsp;</strong><span
                                        class="c-time placeHolder">&nbsp;</span></div>
                                <div class="c-text placeHolder">&nbsp;</div>
                            </div>
                        </div>
                        <div class="comment fetch placeHolderContent">
                            <div class="c-photo placeHolder"></div>
                            <div class="c-info">
                                <div class="c-main"><strong class="c-person placeHolder">&nbsp;</strong><span
                                        class="c-time placeHolder">&nbsp;</span></div>
                                <div class="c-text placeHolder">&nbsp;</div>
                            </div>
                        </div>
                        <div class="comment fetch placeHolderContent">
                            <div class="c-photo placeHolder"></div>
                            <div class="c-info">
                                <div class="c-main"><strong class="c-person placeHolder">&nbsp;</strong><span
                                        class="c-time placeHolder">&nbsp;</span></div>
                                <div class="c-text placeHolder">&nbsp;</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer">
        <div class="layout">
            <div class="brand">
                <div class="logo"><a href="https://songuber.co/"
                        title="MP3 Quack - Search and download your favorite music songs" class="logo-font"
                        rel="nofollow">MP3 Quack</a></div>
                <div class="copyright"> &copy; 2023. All Rights Reserved </div>
            </div>
            <ul class="menu">
                <li><a href="https://songuber.co/terms" title="MP3 Quack - Terms Of Service" rel="nofollow"> Terms Of
                        Service </a></li>
                <li><a href="https://songuber.co/copyright" title="MP3 Quack - Copyright" rel="nofollow"> Copyright
                    </a></li>
                <li><a href="https://songuber.co/contact" title="Contact MP3 Quack" rel="nofollow"> Contact </a></li>
            </ul>
        </div>
    </div>
    <div class="ytp-dom">
        <div class="yt-player playing">
            <div class="ytp-buttons ytp-actions"><span class="fas fa-play"></span><span
                    class="fas fa-pause"></span><span class="fas fa-undo"></span></div>
            <div class="ytp-buttons ytp-volume">
                <div class="v-buttons"><span class="fas fa-volume-up"></span><span class="fas fa-volume"></span><span
                        class="fas fa-volume-down"></span><span class="fas fa-volume-mute"></span></div>
                <div class="vol-bars">
                    <div class="v-bar">
                        <div class="v-pos"></div>
                    </div>
                </div>
            </div>
            <div class="ytp-ground">
                <div class="ytp-bars">
                    <div class="ytp-bar ytp-bbar yt-buff"></div>
                    <div class="ytp-bar ytp-lbar"></div>
                    <div class="ytp-bar ytp-pbar"><span class="ytp-pelm"></span></div>
                    <div class="ytp-duration"><span class="ytp-dtxt"><span class="ytp-dnow"></span> / <span
                                class="ytp-dall"></span></span></div>
                    <div class="ytp-bar ytp-seek"></div>
                    <div class="ytp-bar ytp-error" data-message="This music available for download only"></div>
                </div>
            </div>
            <div class="ytp-load">
                <div class="ytpl-buff yt-buff"></div>
                <div class="ytpl-text" data-message="Loading music player..."></div>
            </div>
        </div>
    </div>
    <style>
        @font-face {
            font-display: swap;
            font-family: 'icomoon';
            src: url('/icomoon.ttf') format('truetype'), url('icomoon.woff') format('woff'), url('icomoon.svg') format('svg');
            font-weight: normal;
            font-style: normal
        }

        [class^="fa"],
        [class*=" fa"] {
            font-family: 'icomoon' !important;
            speak: none;
            font-style: normal;
            font-weight: normal;
            font-variant: normal;
            text-transform: none;
            line-height: 1;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale
        }

        .fas.fa-volume-up:before {
            content: "\e900"
        }

        .fab.fa-facebook-f:before {
            content: "\e901"
        }

        .fab.fa-google-plus-g:before {
            content: "\e902"
        }

        .fab.fa-twitter:before {
            content: "\e903"
        }

        .fab.fa-whatsapp:before {
            content: "\e904"
        }

        .far.fa-calendar-star:before {
            content: "\e905"
        }

        .far.fa-star:before {
            content: "\e906"
        }

        .fas.fa-circle:before {
            content: "\e907"
        }

        .fas.fa-download:before {
            content: "\e908"
        }

        .fas.fa-paper-plane:before {
            content: "\e909"
        }

        .fas.fa-pause:before {
            content: "\e90a"
        }

        .fas.fa-play:before {
            content: "\e90b"
        }

        .fas.fa-search:before {
            content: "\e90c"
        }

        .fas.fa-spinner-third:before {
            content: "\e90d"
        }

        .fas.fa-star:before {
            content: "\e90e"
        }

        .fas.fa-star-half-alt:before {
            content: "\e90f"
        }

        .fas.fa-sync-alt:before {
            content: "\e910"
        }

        .fas.fa-undo:before {
            content: "\e911"
        }

        .fas.fa-user-crown:before {
            content: "\e912"
        }

        .fas.fa-volume:before {
            content: "\e913"
        }

        .fas.fa-volume-down:before {
            content: "\e914"
        }

        .fas.fa-volume-mute:before {
            content: "\e915"
        }

        .ui-helper-hidden {
            display: none
        }

        .ui-helper-hidden-accessible {
            border: 0;
            clip: rect(0 0 0 0);
            height: 1px;
            margin: -1px;
            overflow: hidden;
            padding: 0;
            position: absolute;
            width: 1px
        }

        .ui-helper-reset {
            margin: 0;
            padding: 0;
            border: 0;
            outline: 0;
            line-height: 1.3;
            text-decoration: none;
            font-size: 100%;
            list-style: none
        }

        .ui-helper-clearfix:before,
        .ui-helper-clearfix:after {
            content: "";
            display: table;
            border-collapse: collapse
        }

        .ui-helper-clearfix:after {
            clear: both
        }

        .ui-helper-zfix {
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            position: absolute;
            opacity: 0;
            filter: Alpha(Opacity=0)
        }

        .ui-front {
            z-index: 100
        }

        .ui-state-disabled {
            cursor: default !important;
            pointer-events: none
        }

        .ui-icon {
            display: inline-block;
            vertical-align: middle;
            margin-top: -.25em;
            position: relative;
            text-indent: -99999px;
            overflow: hidden;
            background-repeat: no-repeat
        }

        .ui-widget-icon-block {
            left: 50%;
            margin-left: -8px;
            display: block
        }

        .ui-widget-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%
        }

        .ui-autocomplete {
            position: absolute;
            top: 0;
            left: 0;
            cursor: default
        }

        .ui-menu {
            list-style: none;
            padding: 0;
            margin: 0;
            display: block;
            outline: 0
        }

        .ui-menu .ui-menu {
            position: absolute
        }

        .ui-menu .ui-menu-item {
            margin: 0;
            cursor: pointer;
            list-style-image: url("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7")
        }

        .ui-menu .ui-menu-item-wrapper {
            position: relative;
            padding: 3px 1em 3px .4em
        }

        .ui-menu .ui-menu-divider {
            margin: 5px 0;
            height: 0;
            font-size: 0;
            line-height: 0;
            border-width: 1px 0 0 0
        }

        .ui-menu .ui-state-focus,
        .ui-menu .ui-state-active {
            margin: -1px
        }

        .ui-menu-icons {
            position: relative
        }

        .ui-menu-icons .ui-menu-item-wrapper {
            padding-left: 2em
        }

        .ui-menu .ui-icon {
            position: absolute;
            top: 0;
            bottom: 0;
            left: .2em;
            margin: auto 0
        }

        .ui-menu .ui-menu-icon {
            left: auto;
            right: 0
        }
    </style>
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?display=swap&family=Open+Sans:300,400,600|Roboto:300,400,500|Sriracha|Comfortaa:400">
</body>

</html>
    
    `



}
