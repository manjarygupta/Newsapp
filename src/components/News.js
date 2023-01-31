import React from 'react'
import NewsItem from './NewsItem'

export default function News() {

    let articles = [
        {
        "source": {
        "id": "reuters",
        "name": "Reuters"
        },
        "author": null,
        "title": "Asia shares brace for rate hikes, earnings rush - Reuters.com",
        "description": "Asian shares started cautiously on Monday in a week that is certain to see interest rates rise in Europe and the United States, along with U.S. jobs and wage data that may influence how much further they still have to go.",
        "url": "https://www.reuters.com/markets/global-markets-wrapup-1-pix-2023-01-30/",
        "urlToImage": "https://www.reuters.com/resizer/PUS8JCX2wTEzjOVF5RZLWmum8Ew=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/BGRRMOWJAJMX5MTRKWSDSU64L4.jpg",
        "publishedAt": "2023-01-30T00:33:00Z",
        "content": "SYDNEY, Jan 30 (Reuters) - Asian shares started cautiously on Monday in a week that is certain to see interest rates rise in Europe and the United States, along with U.S. jobs and wage data that may … [+3406 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MacRumors"
        },
        "author": "Tim Hardwick",
        "title": "Kuo: Apple to Release Foldable iPad With Carbon Fiber Kickstand in 2024",
        "description": "Apple will launch a foldable iPad with a carbon fiber kickstand next year, according to analyst Ming-Chi Kuo.\n\n\n\n\n\nIn a series of tweets, Kuo said he expects an \"all-new design foldable ‌iPad‌\" to be the next big product launch in the ‌iPad‌ lineup, with no m…",
        "url": "https://www.macrumors.com/2023/01/30/foldable-ipad-kickstand-2024/",
        "urlToImage": "https://images.macrumors.com/t/4iZovm9LuV-8TZ4cikB3kl9cE8g=/1600x/article-new/2020/10/Foldable-iPhone-2023-Feature-Blue.jpg",
        "publishedAt": "2023-01-30T08:55:07Z",
        "content": "Apple will launch a foldable iPad with a carbon fiber kickstand next year, according to analyst Ming-Chi Kuo.\r\nIn a series of tweets, Kuo said he expects an \"all-new design foldable ‌iPad‌\" to be the… [+381 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Kansas City Star"
        },
        "author": "Kansas City Star",
        "title": "Why NFL refs awarded Kansas City Chiefs extra third-down attempt vs. Cincinnati Bengals",
        "description": "There was a controversial play in the fourth quarter of Sunday’s game, as the Chiefs got a second attempt at a third-down conversion. Here’s what happened.",
        "url": "https://www.kansascity.com/sports/nfl/kansas-city-chiefs/article271811422.html",
        "urlToImage": "https://media.zenfs.com/en/kansas_city_star_mcclatchy_articles_677/a1d1b69094eef5c7032cc6bd36a71387",
        "publishedAt": "2023-01-30T02:45:13Z",
        "content": "A Kansas City Chiefs drive early in the fourth quarter was aided by an extra play from the NFL officials ... who awarded the Chiefs a second shot at a third-down attempt after they came up short init… [+1133 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Digital Trends"
        },
        "author": "Trevor Mogg",
        "title": "iPhone’s Crash Detection is still firing off false calls",
        "description": "The Crash Detection feature on the iPhone 14 and newer Apple Watches is continuing to cause issues for first responders based in ski resorts and elsewhere.",
        "url": "https://www.digitaltrends.com/mobile/iphones-crash-detection-is-still-firing-off-false-calls/",
        "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2022/12/iphone-14-crash-detection.jpg?resize=1200%2C630&p=1",
        "publishedAt": "2023-01-30T07:00:35Z",
        "content": "The Crash Detection feature on the iPhone 14 and newer Apple Watches is continuing to cause issues for first responders based in ski resorts and elsewhere.\r\nCrash Detection activates when an iPhone 1… [+2313 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Medium"
        },
        "author": "a place of mind",
        "title": "My Controversial Opinion: Ventura Is Apple’s Worst macOS Yet",
        "description": "Let’s face it: macOS is a desktop operating system (OS), and should always stay that way. But Apple’s recent changes to macOS make it look and feel like a toy OS that tries to mimic iOS. I recently…",
        "url": "https://medium.com/@aplaceofmind/ventura-is-not-macos-its-macios-1d00f12fa01e",
        "urlToImage": "https://miro.medium.com/max/690/1*nSFz2v66ZkpUJT6hMwqp9A.png",
        "publishedAt": "2023-01-30T03:46:49Z",
        "content": "My Controversial Opinion: Ventura is Apples Worst macOS Yet\r\nApple should stop treating macOS like a toy.\r\nApple Treats macOS as if its iOS\r\nLets face it: macOS is a desktop operating system (OS), an… [+339 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Ben Schwan",
        "title": "Apple beendet Corona-Tests für Mitarbeiter",
        "description": "Künftig müssen Apple-Mitarbeiter keinen negativen COVID-19-Test mehr abgeben, bevor sie ins Büro gehen. Das macht Hoffnung auf eine Live-WWDC in diesem Jahr.",
        "url": "https://www.heise.de/news/Apple-beendet-Corona-Tests-fuer-Mitarbeiter-7473094.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/8/6/9/9/8/Corona_Antigen-Schnelltest-27ac2ab540ada955.jpg",
        "publishedAt": "2023-01-30T08:56:00Z",
        "content": "Apple entschärft seine Corona-Maßnahmen. Ab Montag (30.1.) soll es keine regelmäßige Testverpflichtung auf COVID-19 mehr geben, wenn bestimmte Mitarbeitergruppen in eines der Büros des Konzerns in de… [+2348 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Ben Schwan",
        "title": "Leak bestätigt: Wi-Fi 6E wohl nur für teure iPhone-15-Modelle",
        "description": "Apple plant einmal mehr eine deutliche Unterteilung seiner iPhones. Das betrifft auch den neuen WLAN-Standard 6E.",
        "url": "https://www.heise.de/news/Leak-bestaetigt-Wi-Fi-6E-wohl-nur-fuer-teure-iPhone-15-Modelle-7473720.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/8/7/3/3/5/shutterstock_1888917424-0b7587604c53e036.jpg",
        "publishedAt": "2023-01-30T09:14:00Z",
        "content": "Dass Apple zwischen Standard-iPhones und Pro-Modellen auch künftig stärker unterscheiden wird, lag bereits in der Luft. Beim iPhone 15 soll dies offenbar auch die WLAN-Unterstützung betreffen. Entspr… [+2343 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Ben Schwan, mit Material der dpa",
        "title": "\"Shrinking\": Neue Show mit Jason Segel und Harrison Ford auf Apple TV+",
        "description": "Apple hat ein neues, hochkarätig besetztes Dramedy-Format ins TV+-Angebot aufgenommen. Der Dienst ist immer noch deutlich günstiger als Netflix.",
        "url": "https://www.heise.de/news/Shrinking-Neue-Show-mit-Jason-Segel-und-Harrison-Ford-auf-Apple-TV-7474490.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/6/8/7/7/3/4/Screen_Shot_2023-01-30_at_10.05.13-2-827905988b3caa78.png",
        "publishedAt": "2023-01-30T10:17:00Z",
        "content": "Apple versucht zum wiederholten Mal, neue Nutzer für seinen hauseigenen Streamingdienst Apple TV+ über eine hochkarätig besetzte Serie anzulocken. Diesmal sind es Jason Segel (\"How I met your mother\"… [+2041 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "AppleInsider"
        },
        "author": "news@appleinsider.com (William Gallagher)",
        "title": "New folding iPad and refreshed iPad mini 7 now in 2024, says Kuo",
        "description": "Analyst Ming-Chi Kuo suspects there will be no new iPads in 2023, and that the expected folding iPad will be released in 2024 with a carbon fiber stand.A current non-folding iPad ProKuo has previously predicted that a refreshed iPad mini could be released in …",
        "url": "https://appleinsider.com/articles/23/01/30/new-folding-ipad-and-refreshed-ipad-mini-7-now-in-2024-says-kuo",
        "urlToImage": "https://photos5.appleinsider.com/gallery/50881-100451-50771-100232-48821-95389-49703595342_ddae5f06a8_k-xl-xl-xl.jpg",
        "publishedAt": "2023-01-30T08:35:09Z",
        "content": "A current non-folding iPad Pro\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nAnalyst Ming-Chi Kuo suspects there will be no new iPads in 2023, and that … [+1451 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Elespanol.com"
        },
        "author": "Adrián Raya",
        "title": "El coche de Xiaomi al descubierto: así intentará repetir el éxito de sus móviles",
        "description": "El primer coche de Xiaomi ha sido filtrado, de manera no muy diferente a cómo se filtran sus smartphones; no en vano, puede ser un lanzamiento igual de importante.",
        "url": "https://www.elespanol.com/elandroidelibre/noticias-y-novedades/20230130/coche-xiaomi-descubierto-intentara-repetir-exito-moviles/737676237_0.html",
        "urlToImage": "https://s1.eestatic.com/2023/01/30/elandroidelibre/737686261_230500689_600x315.jpg",
        "publishedAt": "2023-01-30T07:26:56Z",
        "content": "El hecho de que los coches se parezcan cada vez más a smartphones está dando lugar a una situación curiosa: las empresas tecnológicas son las que mejor preparadas podrían estar para esta nueva genera… [+2429 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Applesfera.com"
        },
        "author": "David Bernal Raspall",
        "title": "Estas son las llaves de seguridad que Apple recomienda para iniciar sesión de forma segura con nuestro Apple ID",
        "description": "¿Cuál es la cuenta más importante de todas las que tenemos hoy en día? ¿La del banco? Pues posiblemente no. Casi con toda seguridad esta es el Apple ID. Y la razón es simple, es más que probable que tengamos guardadas las credenciales de nuestro banco en el L…",
        "url": "https://www.applesfera.com/seguridad/estas-llaves-seguridad-que-apple-recomienda-para-iniciar-sesion-forma-segura-nuestro-apple-id",
        "urlToImage": "https://i.blogs.es/462cfe/hero/840_560.jpeg",
        "publishedAt": "2023-01-30T09:11:51Z",
        "content": "¿Cuál es la cuenta más importante de todas las que tenemos hoy en día? ¿La del banco? Pues posiblemente no. Casi con toda seguridad esta es el Apple ID. Y la razón es simple, es más que probable que … [+2847 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Applesfera.com"
        },
        "author": "David Bernal Raspall",
        "title": "Aparecen los primeros detalles del plegable de Apple",
        "description": "Llevamos tiempo viendo diferentes tipos de dispositivos plegables en el mercado y hablando de cómo Apple podría adoptar esta tecnología. Además de varias patentes, rumores al respecto hemos oído muchos, pero las fuentes de los mismos no nos ofrecen garantías …",
        "url": "https://www.applesfera.com/rumores/aparecen-primeros-detalles-plegable-apple",
        "urlToImage": "https://i.blogs.es/85a6ab/hero/840_560.jpeg",
        "publishedAt": "2023-01-30T07:55:19Z",
        "content": "Llevamos tiempo viendo diferentes tipos de dispositivos plegables en el mercado y hablando de cómo Apple podría adoptar esta tecnología. Además de varias patentes, rumores al respecto hemos oído much… [+2016 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Applesfera.com"
        },
        "author": "Isra Fdez",
        "title": "El verdadero significado de la \"i\" que va delante de los iPhone y otros productos de Apple",
        "description": "¿Qué significa la letra i que va delante de los iPhone, los iMac o los iPad? Dentro del ecosistema de Apple, la compañía ha lanzado decenas de productos y todos con esa letra coronando sus nombres.\n<!-- BREAK 1 -->\nHasta se han lanzado parodias y chistes. Es …",
        "url": "https://www.applesfera.com/curiosidades/verdadero-significado-i-que-va-delante-iphone-otros-productos-apple",
        "urlToImage": "https://i.blogs.es/c47482/iphone/840_560.jpeg",
        "publishedAt": "2023-01-30T10:00:39Z",
        "content": "¿Qué significa la letra i que va delante de los iPhone, los iMac o los iPad? Dentro del ecosistema de Apple, la compañía ha lanzado decenas de productos y todos con esa letra coronando sus nombres.\r\n… [+2262 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Faz.net"
        },
        "author": "Angelika Fey, Benjamin Fischer",
        "title": "Selbstdisziplin – völlig von gestern?",
        "description": "Eisern ein Ziel verfolgen: Ist das heute noch wichtig für eine erfolgreiche Karriere? Darüber sprechen wir in unserem neuen Podcast mit den Psychologen Roy Baumeister und Hans-Werner Rückert und dem früheren Nationaltorwart René Adler.",
        "url": "https://www.faz.net/podcasts/f-a-z-beruf-chance/wie-wichtig-ist-selbstdisziplin-fuer-die-karriere-18630858.html",
        "urlToImage": "https://media0.faz.net/ppmedia/aktuell/gesellschaft/4010135002/1.8631116/facebook_teaser/kekse-wer-hat-sich-da-noch.jpg",
        "publishedAt": "2023-01-30T05:32:26Z",
        "content": "Aufschieberitis, Kämpfe mit Deadlines, überquellende Kalender: Fast alle Berufstätigen kennen das. Wie schön wäre es, sich mit Willenskraft immer selbst im Griff zu haben. Die alte Tugend Selbstdiszi… [+941 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MacRumors"
        },
        "author": "Tim Hardwick",
        "title": "Kuo: Apple Likely to Launch Refreshed iPad Mini Early Next Year",
        "description": "Apple will launch a new iPad mini next year with mass production set to begin in the first quarter, according to analyst Ming-Chi Kuo.\n\n\n\n\n\nIn a series of tweets, Kuo said there may be no new iPad releases in the next nine to 12 months, since \"the iPad mini r…",
        "url": "https://www.macrumors.com/2023/01/30/new-ipad-mini-launching-next-year/",
        "urlToImage": "https://images.macrumors.com/t/HEzQbLrVJvZ1Wuv4zsg6Zmcn5nU=/1953x/article-new/2013/09/ipad-mini-6-lineup.jpg",
        "publishedAt": "2023-01-30T09:11:41Z",
        "content": "Apple will launch a new iPad mini next year with mass production set to begin in the first quarter, according to analyst Ming-Chi Kuo.\r\nIn a series of tweets, Kuo said there may be no new iPad releas… [+1182 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Les Numériques"
        },
        "author": "Rick",
        "title": "Actualité : Soldes / Bon plan – La tablette Tactile Apple iPad Pro 12,9\" (2021) \"5 étoiles\" à 1 219,00 € (-16%)",
        "description": "La tablette Tactile Apple iPad Pro 12,9\" (2021) passe sous les 1300 € chez Amazon soit une baisse d'environ 16% sur le prix habituellement constaté. C'est actuellement l'un des meilleurs produit de notre comparatif.",
        "url": "https://www.lesnumeriques.com/tablette-tactile/soldes-bon-plan-la-tablette-tactile-apple-ipad-pro-12-9-2021-5-etoiles-a-1-219-00-16-n205607.html",
        "urlToImage": "https://cdn.lesnumeriques.com/optim/test/16/163581/f8b11a2b-apple-ipad-pro-12-9-2021-m1-dans-la-main__1200_630__overflow_wtmk.jpeg",
        "publishedAt": "2023-01-30T10:21:02Z",
        "content": "Pour 2021, Apple fait passer un cap à sa tablette la plus haut de gamme. Avec un processeur de MacBook Pro 13 pouces et une dalle mini-led, l'iPad Pro 12,9 (2021) se pose comme un iPad plus ambitieux… [+1830 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "TMZ"
        },
        "author": "TMZ Staff",
        "title": "Eva Longoria's 'Desperate Housewives' Aston Martin For Sale",
        "description": "Wanna look as hot as Eva Longoria on \"Desperate Housewives\"? Love cars? Got deep pockets? Then do we have the auction for YOU!!! That's right ... you could be the lucky owner of the 2007 Aston Martin DB9 Volante Eva whipped around Wisteria Lane…",
        "url": "https://www.tmz.com/2023/01/30/eva-longorias-aston-martin-car-desperate-housewives-sale/",
        "urlToImage": "https://imagez.tmz.com/image/a7/16by9/2023/01/26/a7a0ee24a69e4dce80a47bc35ac7c8bc_xl.jpg",
        "publishedAt": "2023-01-30T08:45:39Z",
        "content": "Wanna look as hot as Eva Longoriaon \"Desperate Housewives\"? Love cars? Got deep pockets? Then do we have the auction for YOU!!!\r\nThat's right ... you could be the lucky owner of the 2007 Aston Martin… [+937 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Caschys Blog"
        },
        "author": "caschy",
        "title": "QuickScan 7.1 für iOS: Kostenlose Scanner-App mit OCR-Funktion legt bei der Exportfunktion nach",
        "description": "Über die iOS-App „OCR Scanner – QuickScan“ haben wir schon ein paar Mal (und zuletzt im Dezember 2022 zum Erscheinen der Version 7)  aus guten Gründen berichtet. Tolle Scanner-App für euer iPhone, die OCR beherrscht und eure gescannten Dokumente durchsuchbar.…",
        "url": "https://stadt-bremerhaven.de/quickscan-7-1-fuer-ios-kostenlose-scanner-app-mit-ocr-funktion-legt-bei-der-exportfunktion-nach/",
        "urlToImage": "https://stadt-bremerhaven.de/wp-content/uploads/2022/12/scanner_.jpg",
        "publishedAt": "2023-01-30T06:22:11Z",
        "content": "Über die iOS-App OCR Scanner QuickScan haben wir schon ein paar Mal (und zuletzt im Dezember 2022 zum Erscheinen der Version 7)  aus guten Gründen berichtet. Tolle Scanner-App für euer iPhone, die OC… [+1095 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Frandroid"
        },
        "author": "Romain Ribout",
        "title": "Soldes d’hiver 2023 : voici les meilleures offres du lundi 30 janvier (smartphones, TV, PC…)",
        "description": "Les soldes ne sont pas encore finies, c'est donc encore le bon moment pour économiser sur vos achats d'hiver. Ne manquez pas cette occasion de profiter des meilleures offres disponibles lors de la troisième démarque, où les réductions sont encore plus importa…",
        "url": "https://www.frandroid.com/bons-plans/1596263_soldes-dhiver-2023-meilleures-offres-lundi-30-janvier",
        "urlToImage": "https://images.frandroid.com/wp-content/uploads/2023/01/direct-3.jpg",
        "publishedAt": "2023-01-30T09:41:14Z",
        "content": "Les soldes ne sont pas encore finies, c'est donc encore le bon moment pour économiser sur vos achats d'hiver. Ne manquez pas cette occasion de profiter des meilleures offres disponibles lors de la tr… [+19635 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Sports Illustrated"
        },
        "author": "Michael Rosenberg",
        "title": "Bengals Teammates Know Loss Wasn’t Joseph Ossai’s Fault",
        "description": "After Cincinnati’s season came to an end against the Chiefs in the AFC championship game, a close-knit group was supportive of the rookie who committed a late penalty that swung the game.",
        "url": "https://www.si.com/nfl/2023/01/30/bengals-teammates-support-joseph-ossai-afc-championship",
        "urlToImage": "https://www.si.com/.image/t_share/MTk1NTIxMjcyNjEwODI1MjY3/ossai-mahomes-penalty.jpg",
        "publishedAt": "2023-01-30T06:03:04Z",
        "content": "Zac Taylor made his way through the Bengals locker room, hugging each player he saw, and when he got to Joseph Ossai, he stopped. Words were both necessary and insufficient. Both men knew it. What wa… [+6102 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Ifanr.com"
        },
        "author": "杜沅傧",
        "title": "十七年过去，MacBook Pro 从小众走向大众",
        "description": "兜兜转转，回到原点。#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。\n爱范儿 |\n原文链接 ·\n查看评论 ·\n新浪微博",
        "url": "https://www.ifanr.com/1532953",
        "urlToImage": "https://s3.ifanr.com/wp-content/uploads/2023/01/a51f81cd63b761144f120d58856631.jpg",
        "publishedAt": "2023-01-30T01:28:47Z",
        "content": "MacBook Jobs MacBook Air\r\n2008 MacBook Air \r\n Wintel Air MacBook Air \r\nMacBook Air\r\n MacBook Air Air \r\n Air MacBook Pro \r\nAir Pro \r\nJobs MacBook Pro TIME\r\n2006 MacWorld Jobs Mac MacBook Pro\r\n MacBook… [+1276 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Yahoo Entertainment"
        },
        "author": "Sankalp Phartiyal",
        "title": "Apple Supplier in India Begins Making Components for AirPods",
        "description": "(Bloomberg) -- A key Apple Inc. supplier has begun making components for AirPods in India, marking a significant step in the US tech giant’s push to expand...",
        "url": "https://finance.yahoo.com/news/apple-supplier-india-begins-making-051322610.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/yEI3R6KM8VeguC0R_UEMOg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/bloomberg_technology_68/d6da807b2bb14b815e07fe0bf2ae6b9e",
        "publishedAt": "2023-01-30T05:13:22Z",
        "content": "(Bloomberg) -- A key Apple Inc. supplier has begun making components for AirPods in India, marking a significant step in the US tech giants push to expand production in the country.\r\nMost Read from B… [+3135 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "GSMArena.com"
        },
        "author": "Yordan",
        "title": "Kuo: No new iPads until this year, foldable one coming in 2024",
        "description": "Apple is not planning to launch new iPads until 2024, according to Ming-Chi Kuo's latest notes. The analyst revealed there aren’t going to be any releases in the next “9-12 months,” and first in line for an announcement will be the iPad mini, expected to begi…",
        "url": "https://www.gsmarena.com/kuo_apple_to_withhold_ipad_releases_until_2024_then_a_foldable_ipad_will_launch-news-57373.php",
        "urlToImage": "https://fdn.gsmarena.com/imgroot/news/23/01/apple-tablets-no-early-than-2024-kuo/-952x498w6/gsmarena_001.jpg",
        "publishedAt": "2023-01-30T08:44:01Z",
        "content": "Apple is not planning to launch new iPads until 2024, according to Ming-Chi Kuo's latest notes. The analyst revealed there arent going to be any releases in the next 9-12 months, and first in line fo… [+1181 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "GSMArena.com"
        },
        "author": "Chip",
        "title": "Top 10 trending phones of week 4",
        "description": "The Samsung Galaxy S23 Ultra kept its spot on top of our trending chart ahead of the Unpacked event that is taking place on Wednesday. It's joined on the podium by the entry level Galaxy A14 and another yet-to-be announced phone, the Poco X5 Pro.\n\nThe Samsung…",
        "url": "https://www.gsmarena.com/top_10_trending_phones_of_week_4-news-57371.php",
        "urlToImage": "https://fdn.gsmarena.com/imgroot/news/19/04/top10-trending-phones/-952x498w6/gsmarena_002.jpg",
        "publishedAt": "2023-01-30T03:22:01Z",
        "content": "The Samsung Galaxy S23 Ultra kept its spot on top of our trending chart ahead of the Unpacked event that is taking place on Wednesday. It's joined on the podium by the entry level Galaxy A14 and anot… [+791 chars]"
        },
        {
        "source": {
        "id": "bloomberg",
        "name": "Bloomberg"
        },
        "author": "Wes Kosova",
        "title": "India Is Charting a Path to Become the Next Global Powerhouse",
        "description": "Listen to The Big Take podcast on iHeart, Apple Podcasts, Spotify.",
        "url": "https://www.bloomberg.com/news/articles/2023-01-30/big-take-podcast-how-india-is-growing-into-a-global-powerhouse",
        "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ij9twvWjRdk8/v1/1200x800.jpg",
        "publishedAt": "2023-01-30T10:00:21Z",
        "content": "Listen to The Big Take podcast on iHeart, Apple Podcasts, Spotify.\r\nPrime Minister Narendra Modi wants to make India a developed nation. How soon can a country once synonymous with red tape become a … [+1004 chars]"
        },
        {
        "source": {
        "id": "bloomberg",
        "name": "Bloomberg"
        },
        "author": "Sharon Beriro, Janet Babin",
        "title": "Should You Try Fidelity's Crypto Platform? (Podcast)",
        "description": "Some financial companies are determined to offer clients easy entry digital-assets, despite the volatility.",
        "url": "https://www.bloomberg.com/news/articles/2023-01-30/should-you-try-fidelity-s-crypto-platform",
        "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/il0jSchViapw/v1/1200x800.jpg",
        "publishedAt": "2023-01-30T10:00:25Z",
        "content": "Listen to Bloomberg Crypto on the iHeartRadio App, Apple Podcasts or  Spotify.\r\nFor the past several months, long time Fidelity customers have been getting an interesting offer in their inboxes from … [+249 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Androidworld.it"
        },
        "author": "Alessandro Nodari",
        "title": "Galaxy S23 ma non solo: ecco tutte le novità della One UI 5.1",
        "description": "-2 giorni: questo segna il conto alla rovescia per l'evento Unpacked di presentazione degli attesissimi Galaxy S23 (qui trovate il...\r\nL'articolo Galaxy S23 ma non solo: ecco tutte le novità della One UI 5.1 sembra essere il primo su Androidworld.",
        "url": "https://www.androidworld.it/news/galaxy-s23-one-ui-5-1.html",
        "urlToImage": "https://www.androidworld.it/images/2022/10/14/samsung-one-ui-5_1200x675.jpg",
        "publishedAt": "2023-01-30T07:21:00Z",
        "content": "-2 giorni: questo segna il conto alla rovescia per l'evento Unpacked di presentazione degli attesissimi Galaxy S23 (qui trovate il nostro approfondimento con tutto quello che c'è da sapere).\r\nNonosta… [+8716 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Motley Fool"
        },
        "author": "newsfeedback@fool.com (Nicholas Rossolillo, Anders Bylund, and Billy Duberstein)",
        "title": "Don't Miss Out on the Next Bull Market: Discover These 3 Undervalued Stocks",
        "description": "Stocks may or may not sustain their recent rebound, but there are still long-term deals to be found.",
        "url": "https://www.fool.com/investing/2023/01/30/dont-miss-out-on-the-next-bull-market-discover-the/",
        "urlToImage": "https://g.foolcdn.com/editorial/images/718104/real-estate.jpg",
        "publishedAt": "2023-01-30T10:15:00Z",
        "content": "2023 is here, and the bear market is showing signs that it might be about ready to go back into hibernation. Some beaten-down stocks from 2022 are especially on a tear as investors start sifting thro… [+6633 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Motley Fool"
        },
        "author": "newsfeedback@fool.com (Sean Williams)",
        "title": "3 Surprising Stocks You Never Knew Warren Buffett Owns",
        "description": "Berkshire Hathaway's 13F filings fail to tell the complete story about Buffett's holdings.",
        "url": "https://www.fool.com/investing/2023/01/30/3-surprising-stocks-never-knew-warren-buffett-owns/",
        "urlToImage": "https://g.foolcdn.com/editorial/images/718049/warren-buffett-berkshire-hathaway-brka-brkb-motley-fool.jpg",
        "publishedAt": "2023-01-30T10:06:00Z",
        "content": "Since the mid-1960s, Warren Buffett has shown Wall Street that he knows a thing or two about investing. In the roughly 57 years he's spent as CEO of Berkshire Hathaway(BRK.A 0.01%) (BRK.B -0.57%), th… [+6784 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Marketingdirecto.com"
        },
        "author": "Berta Jiménez",
        "title": "Una buena reputación en sostenibilidad ayuda (y mucho) a las marcas a aumentar su valor económico",
        "description": "Amazon, Tesla o Zara se cuelan entre las empresas con un mayor valor financiero de las percepciones de sostenibilidad, según un informe de Brand Finance.\nLa entrada Una buena reputación en sostenibilidad ayuda (y mucho) a las marcas a aumentar su valor económ…",
        "url": "https://www.marketingdirecto.com/marketing-general/tendencias/informe-valor-economico-sostenibilidad-marcas",
        "urlToImage": "https://www.marketingdirecto.com/wp-content/uploads/2023/01/sostenibilidad.jpg",
        "publishedAt": "2023-01-30T06:50:00Z",
        "content": "Amazon, Tesla o Zara se cuelan entre las empresas con un mayor valor financiero de las percepciones de sostenibilidad, según un informe de Brand Finance.La sostenibilidadhoy en día es un valor impres… [+3913 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Andro4all.com"
        },
        "author": "JuanMi Guirado",
        "title": "Sonido de alta resolución y 20 horas de batería para estos auriculares que hoy solo cuestan 41 euros",
        "description": "¿Quieres unos buenos auriculares inalámbricos para ver cine o para sentirte dentro de una sala de conciertos mientras escuchas tu música favorita? SoundPEATS es un fabricante que lleva años dedicando esfuerzos a conseguir muy buenos auriculares portables, peq…",
        "url": "https://andro4all.com/ofertas/sonido-de-alta-resolucion-y-20-horas-de-bateria-para-estos-auriculares-que-hoy-solo-cuestan-41-euros",
        "urlToImage": "https://andro4all.com/hero/2023/01/SoundPEATS-Air3-Deluxe-HS.jpg?width=1200",
        "publishedAt": "2023-01-30T07:34:00Z",
        "content": "Aunque no sean unos cascos grandes con estos auriculares inalámbricos puedes sentirte totalmente inmerso.\r\n¿Quieres unos buenos auriculares inalámbricos para ver cine o para sentirte dentro de una sa… [+3526 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Clubic"
        },
        "author": "Alexandre Boero",
        "title": "En Chine, les ventes de smartphones se cassent la gueule comme rarement : comment l'expliquer ?",
        "description": "La Chine a vécue, en 2022, une chute des ventes de smartphones jamais observée depuis 10 ans, confirmant les difficultés du moment d'un marché (et d'un pays) qui s'essouffle.",
        "url": "https://www.clubic.com/smartphone/actualite-455460-en-chine-les-ventes-de-smartphones-se-cassent-la-gueule-comment-l-expliquer.html",
        "urlToImage": "https://pic.clubic.com/v1/images/2078412/raw",
        "publishedAt": "2023-01-30T09:10:00Z",
        "content": "La Chine a vécue, en 2022, une chute des ventes de smartphones jamais observée depuis 10 ans, confirmant les difficultés du moment d'un marché (et d'un pays) qui s'essouffle.\r\nLe marché chinois du sm… [+2626 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Nextpit.de"
        },
        "author": "Jade Bryan",
        "title": "Die \"One UI 5.1\"-Features des Samsung Galaxy S23 enthüllt",
        "description": "Die neuen Funktionen und Änderungen von Samsungs One UI 5.1 sind enthüllt worden. Die Software wird mit dem Galaxy S23 eingeführt.(Dies ist ein Teaser - klick hier, um den kompletten Beitrag zu lesen)",
        "url": "https://www.nextpit.de/one-ui-5-1-features-des-samsung-galaxy-s23-enthuellt",
        "urlToImage": "https://fscl01.fonpit.de/userfiles/7687254/image/NextPit_One_UI_5_Wallpaper.jpg",
        "publishedAt": "2023-01-30T06:01:02Z",
        "content": "Verbesserte Galerie, Kamera und Anpassungen in der Samsung One UI 5.1\r\nAus dem Changelog, das die Kollegen von \"WinFuture\" nun veröffentlicht haben geht hervor, dass die kommende Firmware kleinere un… [+3162 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Deadline"
        },
        "author": "Armando Tinoco",
        "title": "Super Bowl LVII Set: Philadelphia Eagles Will Meet The Kansas City Chiefs At State Farm Stadium",
        "description": "It’s official, the Philadelphia Eagles will be meeting with the Kansas City Chiefs for Super Bowl LVII. The NFL teams will match up at State Farm Stadium in Glendale, Arizona on Sunday, February 12, 2023, on Fox. The Eagles dominated the San Francisco 49ers i…",
        "url": "https://deadline.com/2023/01/super-bowl-lvii-2023-philadelphia-eagles-vs-kansas-city-chiefs-state-farm-stadium-fox-1235243882/",
        "urlToImage": "https://deadline.com/wp-content/uploads/2023/01/super-bowl-LVII-philadelphia-eagles-kansas-city-chiefs.jpg?w=1024",
        "publishedAt": "2023-01-30T03:04:34Z",
        "content": "It’s official, the Philadelphia Eagles will be meeting with the Kansas City Chiefs for Super Bowl LVII. The NFL teams will match up at State Farm Stadium in Glendale, Arizona on Sunday, February 12, … [+1661 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Appbank.net"
        },
        "author": "岩佐",
        "title": "「Siri」で「Chat GPT」を駆逐するAppleの極秘計画",
        "description": "Appleが開発中と噂されている「AR/VRゴーグル」について、SiriでARアプリを作成する機能が搭載されるという噂が登場しています。 *Category:テクノロジー Technology *Source：The V […]",
        "url": "https://www.appbank.net/2023/01/30/technology/2387084.php",
        "urlToImage": "https://www.appbank.net/wp-content/uploads/2023/01/2023-0130-Apple-thumb-1.jpeg",
        "publishedAt": "2023-01-30T02:48:02Z",
        "content": "AppleAR/VRSiriAR\r\n*Category:\r\n Technology *SourceThe Verge ,The Infomation ,MacRumors\r\nThe InformationAppleAR/VRSiri\r\nThe Verge2017Fabric Software\r\nThe VergeSiriAppleMinecraftRoblox \r\nApple3DAR\r\nAppl… [+178 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Appbank.net"
        },
        "author": "はねせがわ",
        "title": "【BTS アルバム一覧】BTS(防弾少年団)のアルバムをリリース順に紹介!",
        "description": "デビュー当時から自身で作詞作曲して楽曲を製作していて、音楽性が高いことでも知られているBTS！　ダンスの実力の高さやパフォーマンス能力も評価されていますが、何と言っても自分たち自身で素晴らしい楽曲を製作できるという点がB […]",
        "url": "https://www.appbank.net/2023/01/30/entertainment/2388748.php",
        "urlToImage": "https://www.appbank.net/wp-content/uploads/2023/01/maxresdefault-2-3-1.png",
        "publishedAt": "2023-01-30T09:30:41Z",
        "content": "BTSBTSBTSBTS\r\nBTS() \r\nBTS2013BIGHITENTERTAINMENTJ-HOPERMV7 10\r\nBTS2017BTSBeyond The SceneBTS\r\nBTS() \r\n10BTS1810202019\r\nBTS\r\n1.Proof \r\nThe Anthology Album2022610CD4535Born SingerRun BTSYet To Come (Th… [+2920 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Ijunkie.com"
        },
        "author": "Darryl",
        "title": "How To Customize the Action Button on Apple Watch Ultra",
        "description": "The Apple Watch Ultra has an Action Button located to the left of the case. It is exclusive to the device and can perform a set of functions with a simple press. Additionally, the button is customizable, and you can set it to work as you desire. Read along to…",
        "url": "https://ijunkie.com/how-to-customize-action-button-apple-watch-ultra/",
        "urlToImage": "https://ijunkie.com/wp-content/uploads/2023/01/How-To-Customize-the-Action-Button-on-Apple-Watch-Ultra.jpg",
        "publishedAt": "2023-01-30T08:50:39Z",
        "content": "How To Customize the Action Button on Apple Watch Ultra\r\nThe Apple Watch Ultra has an Action Button located to the left of the case. It is exclusive to the device and can perform a set of functions w… [+5476 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Nextpit.de"
        },
        "author": "Carsten Drees",
        "title": "Casa Casi 85: Apples neue Macs – in Cupertino nichts Neues",
        "description": "Wir haben uns für die Casa Casi Apples Neuzugänge – MacBook Pro, Mac mini und HomePod – vorgeknöpft. Wie begeistert wir sind? Hört Ihr im Podcast.(Dies ist ein Teaser - klick hier, um den kompletten Beitrag zu lesen)",
        "url": "https://www.nextpit.de/casa-casi-85-apples-neue-macs-in-cupertino-nichts-neues",
        "urlToImage": "https://fscl01.fonpit.de/userfiles/7711048/image/Hero_-_Casa_Casi.jpg",
        "publishedAt": "2023-01-30T09:30:10Z",
        "content": "Erst einmal: Sorry, Ihr lieben Leute! Ganz offensichtlich ist der Artikel hier nicht am Samstag rausgegangen wie sonst üblich. Mich hat es gesundheitlich am Wochenende so aus den Latschen gehauen, da… [+4221 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "DIE WELT"
        },
        "author": "Florian Sädler",
        "title": "Schicken wir den Leoparden jetzt die Kampfjets hinterher?",
        "description": "Deutschland erholt sich gerade erst von der hitzigen Debatte um Leopard-Kampfpanzer-Lieferungen an die Ukraine, da schleichen sich schon Kampfjets und sogar das eine oder andere U-Boot in die Diskussion. WELT-Außenpolitikredakteur Gregor Schwung erklärt, waru…",
        "url": "https://www.welt.de/podcasts/kick-off/article243499777/Podcast-Kampfjets-fuer-die-Ukraine-Die-naechste-Diskussion-um-Waffenlieferungen.html",
        "urlToImage": "https://img.welt.de/img/podcasts/kick-off/mobile238519607/7941359117-ci16x9-w1200/DWO-Podcast-Teaser-KickOffPolitik-Saedler-fb.jpg",
        "publishedAt": "2023-01-30T04:27:58Z",
        "content": "Abonnieren Sie den Podcast unter anderem bei Spotify, Apple Podcasts, Amazon Music oder direkt per RSS-Feed.\r\nUkraine-Krieg, Ampelregierung und Klimawandel jeden Morgen gibt es neue Schlagzeilen. Im … [+778 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "DIE WELT"
        },
        "author": "WELT",
        "title": "„Kaum noch freie Kapazitäten“ – Landkreistag fordert Scholz zum Handeln auf",
        "description": "Der Präsident des Deutschen Landkreistages warnt vor einem großen Schaden in Deutschland. Die hohe Zahl an Zuzügen durch Kriegsflüchtlinge, Asylbewerber und Migranten brächten die Landkreise an ihre Grenzen. Er fordert ein Treffen mit dem Kanzler.",
        "url": "https://www.welt.de/politik/deutschland/article243501227/Unterbringung-von-Fluechtlingen-Kaum-noch-freie-Kapazitaeten-Landkreistag-fordert-Scholz-zum-Handeln-auf.html",
        "urlToImage": "https://img.welt.de/img/politik/deutschland/mobile243501423/0551357787-ci16x9-w1200/Nach-Krawallen-in-der-Freiburger-Fluechtlingseinrichtung.jpg",
        "publishedAt": "2023-01-30T07:55:09Z",
        "content": "Der Deutsche Landkreistag fordert wegen der Schwierigkeiten, Asylbewerber, ukrainische Flüchtlinge und Migranten unterzubringen, ein Treffen mit Bundeskanzler Olaf Scholz (SPD). Der Präsident des Lan… [+1629 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "DIE WELT"
        },
        "author": "WELT",
        "title": "„Nur eine Minute“ – Putin habe ihm persönlich gedroht, berichtet Boris Johnson",
        "description": "„Boris, ich will dir nicht wehtun, aber mit einer Rakete würde es nur eine Minute dauern“: So oder ähnlich habe Wladimir Putin ihm gedroht, erinnert sich der britische Ex-Premier Johnson jetzt in einem Interview.",
        "url": "https://www.welt.de/politik/ausland/article243500163/Wladimir-Putin-Kremlchef-habe-ihm-persoenlich-gedroht-berichtet-Boris-Johnson.html",
        "urlToImage": "https://img.welt.de/img/politik/ausland/mobile243500161/4041353877-ci16x9-w1200/MP-earnings.jpg",
        "publishedAt": "2023-01-30T02:49:14Z",
        "content": "Der russische Präsident Wladimir Putin soll nach Angaben des britischen Ex-Premiers Boris Johnson kurz vor Beginn des Ukraine-Kriegs persönliche Drohungen gegen diesen ausgesprochen haben. Er hat mir… [+1284 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "DIE WELT"
        },
        "author": "WELT",
        "title": "Scholz kritisiert „eigenwillige“ Kampfjet-Debatte und warnt vor „Überbietungswettbewerb“",
        "description": "Mit Unverständnis hat Bundeskanzler Olaf Scholz auf die anhaltende Diskussion über die Lieferung von Kampfflugzeugen an die Ukraine reagiert. SPD-Chefin Esken sagte in der ARD, die Regierung sei gerade in enger Abstimmung mit den USA.",
        "url": "https://www.welt.de/politik/ausland/article243500085/Bei-Chile-Besuch-Scholz-kritisiert-eigenwillige-Kampfjet-Debatte-und-warnt-vor-Ueberbietungswettbewerb.html",
        "urlToImage": "https://img.welt.de/img/bildergalerien/mobile243500083/9371351607-ci16x9-w1200/German-Chancellor-Olaf-Scholz-Visits-Chile.jpg",
        "publishedAt": "2023-01-30T00:23:42Z",
        "content": "Bundeskanzler Olaf Scholz (SPD) hat mit Unverständnis auf die anhaltende Diskussion über die Lieferung von Kampfflugzeugen an die Ukraine reagiert. Es ist dazu jetzt alles gesagt, auch von mir, sagte… [+2390 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "DIE WELT"
        },
        "author": "WELT",
        "title": "USA offen für Militärschlag gegen Iran – „alle Optionen auf dem Tisch“",
        "description": "Der Iran nähert sich der Schwelle, ab der angereichertes Uran atomwaffenfähig wird. Die USA bekennen sich einmal mehr dazu, Atomwaffen in der Hand Teherans nicht zulassen zu wollen. Der bevorzugte Weg, das Regime zum Einlenken zu bewegen, seien aber weiterhin…",
        "url": "https://www.welt.de/politik/ausland/article243499877/Atomstreit-mit-Iran-USA-schliessen-militaerisches-Vorgehen-nicht-aus.html",
        "urlToImage": "https://img.welt.de/img/bildergalerien/mobile243499873/5861351497-ci16x9-w1200/Israel-Palestinians.jpg",
        "publishedAt": "2023-01-30T07:39:00Z",
        "content": "Die US-Regierung hat ein militärisches Vorgehen nicht ausgeschlossen, um den Iran davon abzuhalten, in den Besitz von Atomwaffen zu kommen. US-Außenminister Antony Blinken sagte am Sonntag in einem I… [+2232 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "DIE WELT"
        },
        "author": "WELT",
        "title": "„Nur eine Minute“ – Putin habe ihm persönlich gedroht, berichtet Boris Johnson",
        "description": "„Boris, ich will dir nicht wehtun, aber mit einer Rakete würde es nur eine Minute dauern“: So oder ähnlich habe Wladimir Putin ihm gedroht, erinnert sich der britische Ex-Premier Johnson. Russland hat bei Angriffen auf Cherson und Charkiw mindestens vier Mens…",
        "url": "https://www.welt.de/politik/ausland/article243499931/Ukraine-News-Putin-habe-ihm-persoenlich-gedroht-berichtet-Boris-Johnson.html",
        "urlToImage": "https://img.welt.de/img/bildergalerien/mobile243500161/0461357837-ci16x9-w1200/MP-earnings.jpg",
        "publishedAt": "2023-01-30T02:27:10Z",
        "content": "Der russische Präsident Wladimir Putin soll nach Angaben des britischen Ex-Premiers Boris Johnson kurz vor Beginn des Ukraine-Kriegs persönliche Drohungen gegen diesen ausgesprochen haben. Er hat mir… [+4751 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "DIE WELT"
        },
        "author": "Carsten Dierig",
        "title": "„Schweinefleisch kommt dann aus dem Ausland. Keiner weiß, wie es dort produziert wird“",
        "description": "Die Fleischwirtschaft läuft Sturm gegen die Pläne des Landwirtschaftsministers. Er will die Schweinehaltung in Deutschland umbauen. Befürchtet werden ein Hofsterben und neue Abhängigkeiten vom Ausland. Am Ende werde Fleisch produziert, das im Supermarkt kaum …",
        "url": "https://www.welt.de/wirtschaft/article243496673/Fleisch-So-erhoeht-Oezdemir-Deutschlands-Import-Abhaengigkeit.html",
        "urlToImage": "https://img.welt.de/img/wirtschaft/mobile243496669/7711351237-ci16x9-w1200/Germany-Farrows-on-farm.jpg",
        "publishedAt": "2023-01-30T06:48:46Z",
        "content": "Ohne Duschen geht gar nichts. Das macht Wilhelm Hellmanns unmissverständlich deutlich. Nur wer vorher duscht, darf in den Schweinestall, sagt der Landwirt aus der kleinen Gemeinde Rheurdt am Niederrh… [+8869 chars]"
        },
        {
        "source": {
        "id": "focus",
        "name": "Focus"
        },
        "author": "mit dpa",
        "title": "NFL-Playoffs - Chiefs stehen nach Krimi gegen Bengals im Super Bowl",
        "description": "Die Kansas City Chiefs stehen im Super Bowl. Quarterback Patrick Mahomes führt sein Team in einem echten Krimi gegen die Cincinnati Bengals ins Endspiel der NFL. Der Frust der Bengals entlädt sich auf die Schiedsrichter. Die Chiefs spielen im Finale nun gegen…",
        "url": "https://www.focus.de/sport/nfl/nfl-playoffs-chiefs-stehen-nach-krimi-gegen-bengals-im-super-bowl_id_184423934.html",
        "urlToImage": "https://p6.focus.de/img/fotos/id_184426359/chiefs-stehen-nach-krimi-gegen-bengals-im-super-bowl.jpg?im=Crop%3D%280%2C99%2C3462%2C1731%29%3BResize%3D%281200%2C627%29&impolicy=perceptual&quality=medium&hash=6acd521284029a76dde6cebed3de7f489adab26f7ff723146399d63022a692b4",
        "publishedAt": "2023-01-30T04:07:09Z",
        "content": "Die Kansas City Chiefs stehen im Super Bowl. Quarterback Patrick Mahomes führt sein Team in einem echten Krimi gegen die Cincinnati Bengals ins Endspiel der NFL. Der Frust der Bengals entlädt sich au… [+4459 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Karapaia.com"
        },
        "author": "parumo_zaeega",
        "title": "最高神「ゼウス」をモチーフにしたサイドボードがナウオンセール",
        "description": "#authors_store {font-family: -apple-system,BlinkMacSystemFont,Roboto,\"游ゴシック体\",YuGothic,\"Yu Gothic Medium\",sans-serif;}#authors_store .article-header .article-title {font-size: 19px;line-height: 1.3;}#authors_store .content > header {position: relat...",
        "url": "https://karapaia.com/archives/52319662.html",
        "urlToImage": "https://livedoor.blogimg.jp/karapaia_zaeega/imgs/9/e/9e42944b.jpg",
        "publishedAt": "2023-01-30T10:00:25Z",
        "content": ""
        },
        {
        "source": {
        "id": null,
        "name": "Techbang.com"
        },
        "author": "KKJ",
        "title": "A16設計GPU成敗筆，傳蘋果A17將性能大升級、全球首款3nm處理器不能失敗",
        "description": "全球最先進3nm處理器來了！蘋果A17曝光：傾盡資源打造、性能大升級A16晶片遭遇設計缺陷之後，蘋果正全力投入研發A17晶片。\n據天風國際證券分析師郭明錤最新曝料，由於這次處理器產品升級被批評為根本只是小改款，直接影響到終端產品（如A16、M2系列晶片）的銷售，為確保全球首款3nm處理器能夠在2023-2025年順利進入量產，蘋果正將大部分IC設計資源投入到新處理器的研發中。\n郭明錤表示，在可以預見的未來，蘋果會將其大部分設計資源用於3nm工藝製造的Apple Silicon晶片，後者將在性能升級和功耗改善方面較…",
        "url": "https://www.techbang.com/posts/103537-the-worlds-most-advanced-3nm-processor-is-here-apple-a17",
        "urlToImage": "https://cdn0.techbang.com/system/excerpt_images/103537/original/27b660092dab2519afda1ba485928ee7.jpg?1674925967",
        "publishedAt": "2023-01-30T02:00:00Z",
        "content": "A16A17\r\nA16M23nm2023-2025IC\r\n3nmApple Silicon\r\n5GWi-Fi\r\n3nm\r\n3nmApple SiliconiPhone 15A17MacM\r\niPhone 14 ProA16GPUGPU\r\nA16GPUiPhone 14 Pro\r\nGPUA15GPU\r\nA17GPU"
        },
        {
        "source": {
        "id": null,
        "name": "Inside.com.tw"
        },
        "author": "INSIDE 硬塞的網路趨勢觀察",
        "title": "國際隱私日：蘋果推「Today at Apple iPhone」隱私課程",
        "description": "Today at Apple 新課程將介紹郵件隱私保護、安全檢查、定位服務、通行密鑰和 APP 跟蹤透明度等功能。",
        "url": "https://www.inside.com.tw/article/30553-Apple-todat-at-apple-privacy-skills",
        "urlToImage": "https://bucket-img.tnlmedia.com/cabinet/2023/01/4ee4ed0d-b054-4286-ad42-84c02ecee2a7.jpg?auto=compress&fit=crop&h=630&w=1200",
        "publishedAt": "2023-01-30T06:29:00Z",
        "content": "iCloud MacRumors Windows iCloud iPhone \r\niCloud MacRumors \r\n iCloudGoogle Drive 2 \r\niCloud / Photo Credit : pCloud\r\npCloud\r\npCloud 2013 10 1600 pCloud 5 256 AES TLS/SSL Crypto \r\npCloud 10GB pCloud 5 … [+412 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Karapaia.com"
        },
        "author": "parumo_zaeega",
        "title": "突如天井崩壊、その後猫が落ちてきて「にゃぁ？」",
        "description": "#authors_store {font-family: -apple-system,BlinkMacSystemFont,Roboto,\"游ゴシック体\",YuGothic,\"Yu Gothic Medium\",sans-serif;}#authors_store .article-header .article-title {font-size: 19px;line-height: 1.3;}#authors_store .content > header {position: relat...",
        "url": "https://karapaia.com/archives/52319361.html",
        "urlToImage": "https://livedoor.blogimg.jp/karapaia_zaeega/imgs/c/5/c54bb9f3.jpg",
        "publishedAt": "2023-01-30T03:00:41Z",
        "content": ""
        },
        {
        "source": {
        "id": null,
        "name": "Ascii.jp"
        },
        "author": "ASCII",
        "title": "ROOX、固定位置を無段階に調節できる「Esalta 本革 マグネバックル for Apple Watch」を発売",
        "description": "ROOXは、マグネット式のバックルでワンタッチ着脱ができる「Esalta 本革 マグネバックル for Apple Watch」を発売した。",
        "url": "https://weekly.ascii.jp/elem/000/004/122/4122660/",
        "urlToImage": "https://ascii.jp/img/2023/01/30/3485531/l/8d93ab6775b05a56.jpg",
        "publishedAt": "2023-01-30T10:30:00Z",
        "content": "ROOX130Esalta for Apple WatchROOX ONLINE\r\nDApple Watch\r\n6Apple Watch38/40/41mm42/44/45/49mm3980"
        },
        {
        "source": {
        "id": null,
        "name": "Ascii.jp"
        },
        "author": "ASCII",
        "title": "アップルが無料開催「iPhoneのプライバシー設定」を学ぶ講座",
        "description": "アップルは直営店舗で実施している無料講座「Today at AppleiPhone」にて、iPhoneの豊富なプライバシー機能とその設定について考えるセッションを1月28日に開催した。",
        "url": "https://weekly.ascii.jp/elem/000/004/122/4122659/",
        "urlToImage": "https://ascii.jp/img/2023/01/30/3485515/l/47505f826c14ef00.png",
        "publishedAt": "2023-01-30T09:45:00Z",
        "content": "Apple StoreToday at Apple128Apple iOSiPhone\r\n128Apple Store\r\niPhone30iPhone\r\niPhoneiOS\r\nSafariApple PaySiriApple IDiPhone\r\niPhone\r\niOS 165\r\n5\r\niPhoneiPhone\r\nApple StoreiPhone"
        },
        {
        "source": {
        "id": null,
        "name": "4gamer.net"
        },
        "author": "編集部：Chihiro",
        "title": "「炎炎ノ消防隊 炎舞ノ章」のサービスが本日開始に。スマホとPCでデータ連携が可能，ガチャ40回分のアイテムなど事前登録特典も配布",
        "description": "モブキャストゲームスとextra mileは本日（2023年1月30日），スマホとPCに対応する新作タイトル「炎炎ノ消防隊 炎舞ノ章」のサービスを開始したことを発表した。本作は，TVアニメ化もされた「炎炎ノ消防隊」を題材とした新作オリジナルゲーム。また，事前登録者数は25万人を突破しており，ガチャ40回分のアイテムなどが配布される。",
        "url": "https://www.4gamer.net/games/631/G063188/20230130045/",
        "urlToImage": "https://www.4gamer.net/games/631/G063188/20230130045/SS/001.jpg",
        "publishedAt": "2023-01-30T07:01:46Z",
        "content": "extra mile2023130iOS / Android / PCApp StoreGoogle PlayPCDMM GAMESPC\r\nTV25314050030\r\nCEO extra mile 2023130 252023130\r\nAppStorehttps://itunes.apple.com/app/id6443454682\r\nGooglePlay Storehttps://play.… [+764 chars]"
        },
        {
        "source": {
        "id": "il-sole-24-ore",
        "name": "Il Sole 24 Ore"
        },
        "author": null,
        "title": "Borsa, Tokyo apre piatta. Piazze cinesi miste",
        "description": "Si apre una settimana guardata con grande attenzione dagli investitori tra decisioni sui tassi di Fed e Bce e le principali trimestrali Usa",
        "url": "https://www.ilsole24ore.com/art/borsa-tokyo-apre-piatta-piazze-cinesi-miste-AE1oHVdC",
        "urlToImage": "https://i2.res.24o.it/images2010/2023/01/AE1oHVdC/images/1135078c-a064-11ed-ab0b-ed6f50af6da7-fotohome0.jpg",
        "publishedAt": "2023-01-30T06:07:57Z",
        "content": "Ascolta la versione audio dell'articolo\r\n1' di lettura\r\nLa Borsa di Tokyo avvia senza variazioni la prima seduta della settimana, con lattenzione degli investitori che si concentra sullavvio della st… [+2393 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Numerama"
        },
        "author": "Nicolas Lellouche",
        "title": "Avez-vous envie d’un iPad qui se plie ?",
        "description": "Selon l'analyste Ming-Chi Kuo, Apple annoncera son premier appareil pliant en 2024. Il s'agirait d'un iPad avec un pied intégré, une première pour la tablette. L'année 2023 s'annonce décevante pour les amateurs d'iPad. Après le journaliste Mark Gurman le 8 ja…",
        "url": "https://www.numerama.com/tech/1251858-avez-vous-envie-dun-ipad-qui-se-plie.html",
        "urlToImage": "https://www.numerama.com/wp-content/uploads/2023/01/ipad-1.jpg",
        "publishedAt": "2023-01-30T09:16:12Z",
        "content": "Selon lanalyste Ming-Chi Kuo, Apple annoncera son premier appareil pliant en 2024. Il sagirait dun iPad avec un pied intégré, une première pour la tablette. \r\nLannée 2023 sannonce décevante pour les … [+3476 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Forbes"
        },
        "author": "Mike O'Sullivan, Senior Contributor, \n Mike O'Sullivan, Senior Contributor\n https://www.forbes.com/sites/mikeosullivan/",
        "title": "Markets Are Complacent Ahead Of The Fed Meeting",
        "description": "This week is a critical one for the stock market with the Fed meeting and major earnings, in the context of investor complacency.",
        "url": "https://www.forbes.com/sites/mikeosullivan/2023/01/30/markets-are-complacent-ahead-of-the-fed-meeting/",
        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/63d77b5f71b348ac995c8566/0x0.jpg?format=jpg&width=1200",
        "publishedAt": "2023-01-30T08:17:26Z",
        "content": "Jerome Powell, Chairman of the Federal Reserve Board, testifies during a House Financial Services ... [+] Committee hearing on Capitol Hill in Washington, DC, February 27, 2018. (Photo by SAUL LOEB /… [+3163 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Forbes"
        },
        "author": "TJ McCue, Senior Contributor, \n TJ McCue, Senior Contributor\n https://www.forbes.com/sites/tjmccue/",
        "title": "Otter.ai Is A Gem For Transcribing Your Recorded Thoughts Into Writing",
        "description": "Taking notes by keyboard, or even worse for some, by hand with a pen or pencil, is akin to the dark ages. Try this terrific app and service, Otter.ai, to transcribe your verbal thoughts to writing.",
        "url": "https://www.forbes.com/sites/tjmccue/2023/01/29/otterai-is-a-gem-for-transcribing-your-recorded-thoughts-into-writing/",
        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/63d7496e0aba9cf779a89c55/0x0.jpg?format=jpg&width=1200",
        "publishedAt": "2023-01-30T04:54:27Z",
        "content": "Taking notes by keyboard, or even worse for some, by hand with a pen or pencil, is akin to the dark ages. It is not a task that most people yearn to do. Otter.ai is a voice to text conversion tool th… [+4550 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "ComputerBase"
        },
        "author": "Frank Hüber",
        "title": "Soundcore Liberty 4 & VR P10: Herzfrequenz- und LC3-VR-In-Ears mit 30 ms Latenz für Spieler",
        "description": "Anker legt mit dem Soundcore Liberty 4 mit Herzfrequenzmessung, Zweifach-Treiber und LDAC den Nachfolger des Soundcore Liberty 3 Pro (Test) auf und bringt mit den Soundcore VR P10 In-Ears mit dem Audio-Codec LC3 und niedriger Latenz von 30 ms, die als „Made f…",
        "url": "https://www.computerbase.de/2023-01/soundcore-liberty-4-und-vr-p10-herzfrequenz-und-lc3-vr-in-ears-mit-30-ms-latenz-fuer-spieler/",
        "urlToImage": "https://pics.computerbase.de/1/0/6/5/9/6-0550e900dfa284ef/article-1280x720.91dedd06.jpg",
        "publishedAt": "2023-01-30T09:00:00Z",
        "content": "Anker legt mit dem Soundcore Liberty 4 mit Herzfrequenzmessung, Zweifach-Treiber und LDAC den Nachfolger des Soundcore Liberty 3 Pro (Test) auf und bringt mit den Soundcore VR P10 In-Ears mit dem Aud… [+3563 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Iphoneitalia.com"
        },
        "author": "Giuseppe Migliorino",
        "title": "“Rilevamento incidenti” su iPhone 14 è un problema anche in Giappone",
        "description": "I soccorritori in Giappone che lavorano vicino alle aree sciistiche stanno ricevendo diverse chiamate involontarie dagli iPhone 14. \nLink all'articolo originale: “Rilevamento incidenti” su iPhone 14 è un problema anche in Giappone",
        "url": "https://www.iphoneitalia.com/803680/rilevamento-incidenti-iphone-falsi-positivi-giappone",
        "urlToImage": "https://static.iphoneitalia.com/wp-content/uploads/2023/01/sci-rilevamento-incidenti.jpg",
        "publishedAt": "2023-01-30T07:22:30Z",
        "content": "I falsi positivi del sistema “Rilevamento incidenti” della gamma iPhone 14 stanno causando problemi anche in Giappone.\r\nL’Agenzia per la gestione degli incendi e dei disastri del Ministero degli affa… [+1934 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "iLounge"
        },
        "author": "Samantha Wiley",
        "title": "iFixit releases new MacBook Pro teardown video",
        "description": "Popular YouTube channel iFixit has uploaded a new teardown video of the 2023 MacBook Pro. The ‘14-inch M2 Pro MacBook Pro Teardown - How Apple Wants You ...",
        "url": "https://www.ilounge.com/news/mac/macbook-pro/ifixit-releases-new-macbook-pro-teardown-video",
        "urlToImage": "https://www.ilounge.com/wp-content/uploads/2023/01/MacBook-Pro-1.png",
        "publishedAt": "2023-01-30T07:56:18Z",
        "content": "Popular YouTube channel iFixit has uploaded a new teardown video of the 2023 MacBook Pro.\r\nThe ‘14-inch M2 Pro MacBook Pro Teardown – How Apple Wants You To Do It’ is around seven minutes in length a… [+722 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "BBC News"
        },
        "author": "https://www.facebook.com/bbcnews",
        "title": "El preciado recurso por el que compiten EE.UU. y China (y por qué Washington va ganando la batalla)",
        "description": "Se trata de una industria de US$500.000 millones que se espera duplique su valor para 2030. Y quien la logre controlar podría convertirse en la superpotencia dominante.",
        "url": "https://www.bbc.com/mundo/noticias-internacional-64297108",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_mundo/10FA2/production/_128283596_gettyimages-1422453695.jpg",
        "publishedAt": "2023-01-30T05:00:56Z",
        "content": "<ul><li> Suranjana Tewari</li><li>Corresponsal de negocios en Asía</li></ul>\r\nFuente de la imagen, Getty Images\r\nPie de foto, La lucha por dominar la indstria de semiconductores está cambiando el pan… [+11170 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "3dnews.ru"
        },
        "author": null,
        "title": "В идеале Apple стремится создать очки дополненной реальности, которые можно носить весь день",
        "description": "Известный эксперт по продукции Apple — Марк Гурман (Mark Gurman), со страниц Bloomberg продолжает по крупице выдавать доступную ему информацию об устройстве дополненной реальности этой марки, первое поколение которого должно появиться в текущем году. По данны…",
        "url": "https://3dnews.ru/1081043/v-ideale-apple-stremitsya-sozdat-ochki-dopolnennoy-realnosti-kotorie-mogno-nosit-ves-den",
        "urlToImage": "https://3dnews.ru/assets/external/illustrations/2023/01/30/1081043/glasses_01.jpg",
        "publishedAt": "2023-01-30T03:08:00Z",
        "content": "Apple — (Mark Gurman), Bloomberg , . , Apple . , .\r\n: Apple\r\n, , ($3000), ( ) Apple. , , .\r\n AR- Apple 1 . . iPhone , iPad 28 . iPhone 10 , iPad , 15 . Apple Watch 10 .\r\n, Apple , . — , . , , . , App… [+5 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "3dnews.ru"
        },
        "author": null,
        "title": "АФК «Система», владеющая МТС, создаёт собственного крупного дистрибутора для ввоза электроники Samsung, Apple и других брендов",
        "description": "АФК «Система», которой принадлежит мобильный оператор и крупный ретейлер МТС, сформировала ещё одного отечественного дистрибутора электроники — «Гуру Электроникс». Как сообщает «Коммерсантъ», новая структура уже оформила декларации о ввозе в ЕАЭС потребительс…",
        "url": "https://3dnews.ru/1081049/afk-sistema-vladeyushchaya-mts-sozdayot-sobstvennogo-krupnogo-distributora-guru-dlya-vvoza-elektroniki-samsung-apple-i-drugih-brendov",
        "urlToImage": "https://3dnews.ru/assets/external/illustrations/2023/01/30/1081049/photo3b97375f902.jpg",
        "publishedAt": "2023-01-30T06:05:00Z",
        "content": "«», , — « ». «», — , , Apple, Samsung Dyson. , .\r\n: Annie Spratt/unsplash.com\r\n, , 27 , Apple, Samsung Dyson. « », « », «». — Ozon.\r\n , , « » . , 1,55 , iPhone, iPad AirPods « », , Apple Samsung Dyso… [+112 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "3dnews.ru"
        },
        "author": null,
        "title": "Foxconn сделала бывшего главу Nidec главой своего подразделения электромобилей",
        "description": "Компания Foxconn, получающая большую часть дохода за счёт сборки iPhone и другой электроники Apple, пытается диверсифицировать свою деятельность. С этой целью она наняла бывшего главу японской компании Nidec, производящей электродвигатели, Джуна Секи (Jun Sek…",
        "url": "https://3dnews.ru/1081055/foxconn-nanyala-bivshego-glavu-nidec-dlya-razvitiya-molodogo-podrazdeleniya-zanyatogo-sozdaniem-elektromobiley",
        "urlToImage": "https://3dnews.ru/assets/external/illustrations/2023/01/30/1081055/sm.photo67b85e0b08d3.800.jpg",
        "publishedAt": "2023-01-30T08:20:00Z",
        "content": "Foxconn, iPhone Apple, . Nidec, , (Jun Seki) , .\r\n: Chad Kirchoff/unsplash.com\r\nNidec , (Shigenobu Nagamori). , - Foxconn . , Lordstown Motors Corp. . , .\r\nFoxconn , COVID-19 — iPhone. Foxconn , , 20… [+87 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Tinhte.vn"
        },
        "author": "vn_ninja@yahoo.com (vn_ninja), vn_ninja",
        "title": "Hướng dẫn tắt tính năng tự động nhận diện địa chỉ nhà riêng, các địa chỉ hay lưu đến trên iPhone",
        "description": "Anh em có để ý là khi bắt đầu sử dụng app Apple Maps hoặc các app có sử dụng GPS khác thì iPhone thường sẽ gợi ý những địa điểm anh em thường xuyên lui đến như địa chỉ nhà riêng, nhà của một người bạn hay địa chỉ cơ quan… không? Sở dĩ có chuyện này…",
        "url": "https://tinhte.vn/thread/huong-dan-tat-tinh-nang-tu-dong-nhan-dien-dia-chi-nha-rieng-cac-dia-chi-hay-luu-den-tren-iphone.3628234/",
        "urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2023/01/6311924_cover_Significant_Locations_iPhone_tinhte.jpg",
        "publishedAt": "2023-01-30T01:45:40Z",
        "content": "Anh em có ý là khi bt u s dng app Apple Maps hoc các app có s dng GPS khác thì iPhone thng s gi ý nhng a im anh em thng xuyên lui n nh a ch nhà riêng, nhà ca mt ngi bn hay a ch c quan không? S d có c… [+477 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Tinhte.vn"
        },
        "author": "no-reply@tinhte.vn (crazysexycool1981), crazysexycool1981",
        "title": "Review iPhone Xs Max tại thời điểm tết Quý Mão 2023",
        "description": "~ Sunday, January 29th, 2023 ~\nNói không quá thì iPhone từ lâu đã trở thành điện thoại quốc dân ở dải đất hình chữ S, dẫu là thành thị hay nông thôn thì đối tượng sử dụng cũng vô cùng đa dạng: từ trẻ em, phụ nữ…",
        "url": "https://tinhte.vn/thread/review-iphone-xs-max-tai-thoi-diem-tet-quy-mao-2023.3628224/",
        "urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2023/01/6311860_Anh_cover.jpg",
        "publishedAt": "2023-01-30T04:36:03Z",
        "content": "IV. TNG THÍCH:Mình hin ang xài các thit b: Macbook Pro 2020 (MWP82) (tng trên tay t tháng 7/2020 bên NÀY &amp; chia s cm nhn t tháng 3/2021 ÂY), iPhone Xs Max, iPad 2018 Gen 6 (tng review t tháng 9/2… [+4146 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "3dnews.ru"
        },
        "author": null,
        "title": "iPad с гибким дисплеем и петлями из углеволокна ожидается в следующем году",
        "description": "Некоторые эксперты уже сформировали мнение, что планшеты Apple являются той категорией продуктов, которая от внедрения гибких дисплеев получит больше выгоды, чем смартфоны. Известный аналитик Мин-Чи Куо (Ming-Chi Kuo) в новых прогнозах упоминает вероятность в…",
        "url": "https://3dnews.ru/1081061/v-sleduyushchem-godu-apple-moget-vipustit-ipad-s-gibkim-displeem-i-skladnim-uporom-iz-uglevolokna",
        "urlToImage": "https://3dnews.ru/assets/external/illustrations/2023/01/30/1081061/ipad_01.jpg",
        "publishedAt": "2023-01-30T09:42:00Z",
        "content": ", Apple , , . - (Ming-Chi Kuo) iPad 2024 .\r\n: Apple\r\nMacRumors , Apple , , «». , , .\r\n Anjie Technology, . Apple. - , MagSafe OLED, , Apple ."
        },
        {
        "source": {
        "id": null,
        "name": "3dnews.ru"
        },
        "author": null,
        "title": "Компоненты для Apple AirPods начали выпускать в Индии",
        "description": "В последнее время много говорилось о стремлении подрядчиков Apple перенести производство продукции этой марки из Китая во Вьетнам и Индию, поэтому свежая новость на страницах Bloomberg в полной мере подтверждает эту тенденцию. По данным источника, индийское п…",
        "url": "https://3dnews.ru/1081053/v-indii-startoval-vipusk-komponentov-dlya-apple-airpods",
        "urlToImage": "https://3dnews.ru/assets/external/illustrations/2023/01/30/1081053/AirPods_01.jpg",
        "publishedAt": "2023-01-30T07:01:00Z",
        "content": "Apple , Bloomberg . , Jabil AirPods, .\r\n: Apple\r\n, Apple, iPhone 14. AirPods, , Apple, .\r\n Jabil 80 000 , AirPods 2500 . Apple 23,8 AirPods, 31 %. 14 Apple .\r\nLuxshare, AirPods, , 2020 Motorola , . ,… [+17 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Sspai.com"
        },
        "author": "少数派编辑部",
        "title": "派早报：假期中你可能错过的不新鲜事和一些相对更新鲜的事",
        "description": "你可能错过的新鲜和不新鲜事假期中你可能错过的不新鲜事来自春节假期早些时候的一些主要科技新闻：1月20日，Alphabet宣布计划裁员约12,000人，占其全球员工总数逾6%。这其中包括FuchsiaO ...查看全文",
        "url": "https://sspai.com/post/78006",
        "urlToImage": "https://cdn.sspai.com/1/29/2023/article/2163f0a0-372e-b4b5-165b-5ceeaddf0b44.gif",
        "publishedAt": "2023-01-30T00:52:16Z",
        "content": "<ul><li>1 20 Alphabet 12,000 6% Fuchsia OS 16% Area 120 2017 AltSpaceVR 3 10 </li><li>1 20 Play Store Play Store 1 26 Play Store </li><li>1 20 Riot Games 24 1000 100 </li><li>1 23 OpenAI 10 OpenAI Op… [+947 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Telegraph.co.uk"
        },
        "author": "James Warrington, Matthew Field",
        "title": "Netflix’s Harry & Meghan series ranks 95th for enjoyment in US",
        "description": "American audiences ranked The Crown above the Sussex's tell-all documentary",
        "url": "https://www.telegraph.co.uk/business/2023/01/30/netflixs-harry-meghan-series-ranks-95th-enjoyment-us/",
        "urlToImage": "https://www.telegraph.co.uk/content/dam/business/2023/01/29/TELEMMGLPICT000321809602_trans_NvBQzQNjv4BqLqyfQGdl3mAr9NzcrvA2J7AocpkOWdStzj10K5gj2sM.jpeg?impolicy=logo-overlay",
        "publishedAt": "2023-01-30T07:00:00Z",
        "content": "Harry &amp; Meghans Netflix series has failed to impress audiences in the US, new research reveals.\r\nThe documentary series, which contained damaging revelations about the Royal Family, ranked 95th f… [+3285 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Everything-everywhere.com"
        },
        "author": "Gary Arndt",
        "title": "The Statue of Liberty",
        "description": "Podcast Transcript After the US Civil War, the French historian Edouard de Laboulaye floated the idea of creating a large monument to honor the success of the United States in creating and maintaining a democracy.  Almost 20 years later, after significant tim…",
        "url": "https://everything-everywhere.com/the-statue-of-liberty/",
        "urlToImage": "https://photos.smugmug.com/Other/n-hRFP2/Podcast-Images/i-RWQhfVS/0/4995ac45/L/Statue%20of%20Liberty-L.png",
        "publishedAt": "2023-01-30T06:35:09Z",
        "content": "Subscribe Apple | Google | Spotify | Amazon | Player.FM | TuneInCastbox | Stitcher | Podcast Republic | RSS | Patreon | Podvine | Goodpods\r\nAfter the US Civil War, the French historian Edouard de Lab… [+13936 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Tinhte.vn"
        },
        "author": "no-reply@tinhte.vn (MGunner), MGunner",
        "title": "Hành trang đi cafe của mình (2023) – Mang vác tối thiểu, lợi ích tối đa",
        "description": "Hẳn với những bạn yêu công nghệ, ai cũng một thời muốn mình có thể vác càng nhiều đồ bên người càng tốt. Kiểu giống con rùa vậy, vác cả cái văn phòng trên lưng để ở đâu cũng tiện. Bản thân từ thời sinh viên thì cũng muốn như thế…",
        "url": "https://tinhte.vn/thread/hanh-trang-di-cafe-lam-viec-cua-minh-2023-mang-vac-toi-thieu-loi-ich-toi-da.3628431/",
        "urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2023/01/6312646_DSC01337.jpg",
        "publishedAt": "2023-01-30T07:41:05Z",
        "content": "Vi mình, AirPods 2 là chic tai nghe Bluetooth rt n. Mình dùng nó ti nay ã hn hai nm và nó vn áp ng rt tt vic àm thoi, nghe nhc, v.v. mi khi ra ngoài. Vi ngi dùng Táo thì AirPods luôn là mt la chn tt,… [+2290 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Publico.pt"
        },
        "author": "publico@publico.pt",
        "title": "O Coração Ainda Bate. Os filhos",
        "description": "Inês Meneses escreve sobre maternidade.",
        "url": "https://www.publico.pt/2023/01/30/impar/cronica/filhos-2036880",
        "urlToImage": "https://imagens.publico.pt/imagens.aspx/1740629?tp=UH&db=IMAGENS&type=PNG&share=1&o=BarraFacebook_Impar.png",
        "publishedAt": "2023-01-30T08:22:00Z",
        "content": "Nunca pensei em ter filhos. Da mesma forma que nunca pensei em casar-me de branco. E, na verdade, dois casamentos depois, a cor mantém-se imaculada: nunca a usei. Não planeio.\r\nTambém não planeei ter… [+4352 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Mondaynote.com"
        },
        "author": "Jean-Louis Gassée",
        "title": "ChatGPT: Netscape Moment or Nothing Really Original",
        "description": "In Fortune’s The inside story of ChatGPT: How OpenAI founder Sam Altman built the world’s hottest technology with billions from Microsoft, author Jeremy Kahn helpfully explains OpenAI’s history…",
        "url": "https://mondaynote.com/chatgpt-netscape-moment-or-nothing-really-original-48a7bdfce10f",
        "urlToImage": "https://miro.medium.com/max/850/1*2shNMo6kE25hoLlkBj6HMg.jpeg",
        "publishedAt": "2023-01-30T00:15:17Z",
        "content": "by Jean-Louis Gassée\r\nIn Fortunes The inside story of ChatGPT: How OpenAI founder Sam Altman built the worlds hottest technology with billions from Microsoft, author Jeremy Kahn helpfully explains Op… [+7110 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Forbes"
        },
        "author": "Steve Denning, Senior Contributor, \n Steve Denning, Senior Contributor\n https://www.forbes.com/sites/stevedenning/",
        "title": "Why Continuing Top Management Support Is Crucial For Innovation",
        "description": "Resistance To Innovation Has Multiple Sources",
        "url": "https://www.forbes.com/sites/stevedenning/2023/01/29/why-continuing-top-management-support-is-crucial-for-innovation/",
        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/63d71ab3c6fdc926d14c5506/0x0.jpg?format=jpg&width=1200",
        "publishedAt": "2023-01-30T01:26:43Z",
        "content": "Senior managers as controllers \r\ngetty\r\nManagement support for innovation is not a one-time thing. It requires continuing top-level support. It is impossible in two months to create a complete plan w… [+3456 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Elespanol.com"
        },
        "author": "C�sar Rebolledo",
        "title": "FREE FIRE | Códigos de hoy lunes 30 de enero de 2023 - Recompensas gratis",
        "description": "<!--cache-->Estos son todos los códigos gratis de Garena Free Fire que podrás canjear hoy, lunes 30 de enero de 2023. Consigue recompensas como skins, diamantes y mucho más.<!--aa--->El éxito para móviles Android e iOS, Garena Free Fire, ha recibido nuevos có…",
        "url": "https://vandal.elespanol.com/noticia/1350759597/free-fire-codigos-de-hoy-lunes-30-de-enero-de-2023-recompensas-gratis/",
        "urlToImage": "https://media.vandal.net/i/ivandal/1200x630/1-2023/2023130844591_1.jpg",
        "publishedAt": "2023-01-30T07:44:00Z",
        "content": "El xito para mviles Android e iOS, Garena Free Fire, ha recibido nuevos cdigos diarios para hoy lunes 30 de enero de 2023. Los jugadores pueden canjear estos cdigos para recibir recompensas variadas … [+2172 chars]"
        },
        {
        "source": {
        "id": "cbc-news",
        "name": "CBC News"
        },
        "author": "Daniel Leblanc",
        "title": "Ottawa undermined Canadians' language rights with ArriveCAN app, language commissioner says",
        "description": "An Ottawa man travelling in the U.S. in 2021 tried to obtain the French version of the ArriveCan application without success, despite indicating on his user profile that French was his preferred language for communications with the federal government.",
        "url": "https://www.cbc.ca/news/canada/montreal/arrivecan-app-language-bugs-1.6729130",
        "urlToImage": "https://i.cbc.ca/1.6729133.1674857606!/cumulusImage/httpImage/image.jpg_gen/derivatives/16x9_620/arrivecan.jpg",
        "publishedAt": "2023-01-30T09:00:00Z",
        "content": "The federal government has admitted that it forced Canadians to use the ArriveCAN application even though it knew there were problems picking what language you wanted to use French or English on iPho… [+5073 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Taisy0.com"
        },
        "author": "taisy0",
        "title": "折りたたみ式｢iPad｣はカーボンファイバー製のキックスタンドを搭載?? ｰ 次期｢iPad mini｣は来春発売か",
        "description": "以前よりAppleは折りたたみ式のiPadを開発していると噂されていますが、Apple関連の情報では定評のあるアナリストのMing-Chi Kuo氏が、折りたたみ式iPadにはカーボンファイバー製のキックスタンドが内蔵さ ...",
        "url": "https://taisy0.com/2023/01/30/167779.html",
        "urlToImage": "https://taisy0.com/wp-content/uploads/2022/10/th_ipadfoldablecover_871s.1248.jpg",
        "publishedAt": "2023-01-30T07:06:20Z",
        "content": "(3/3)Anjie Technology will be the new beneficiary of the all-new design foldable iPad. There may be no new iPad releases in the next 9-12 months as the iPad mini refresh is more likely to begin mass … [+66 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Macitynet.it"
        },
        "author": "Mauro Notarianni",
        "title": "Reality Pro sarà una rivoluzione, parola della startup acquistata da Apple per realizzarli",
        "description": "Il fondatore della startup che ha venduto tecnologie VR a Apple dice che l'arrivo del visore di Cupertino sarà un momento da ricordare alla stregua della presentazione del Macintosh.\n- su macitynet.it Reality Pro sarà una rivoluzione, parola della startup acq…",
        "url": "https://www.macitynet.it/?p=1202471",
        "urlToImage": "https://www.macitynet.it/wp-content/uploads/2023/01/visoregenerico2.jpg",
        "publishedAt": "2023-01-30T06:29:17Z",
        "content": "«Tra cinque anni, l’80% delle persone avrà un visore per la Realtà Virtuale in casa». La previsione è di Bertrand Nepveu, il canadese che nel 2017 ha venduto Vrvana – la sua startup specializzata in … [+5648 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Consequence.net"
        },
        "author": "Bryan Kress",
        "title": "파란노을 (Parannoul) Releases New Album After the Magic: Stream",
        "description": "The project follows the anonymous South Korean artist's 2021 breakthrough LP, To See the Next Part of the Dream.\n파란노을 (Parannoul) Releases New Album After the Magic: Stream\nBryan Kress",
        "url": "https://consequence.net/2023/01/parannoul-after-the-magic-stream/",
        "urlToImage": "https://consequence.net/wp-content/uploads/2023/01/Parannoul-After-the-magic-stream.jpg?quality=80",
        "publishedAt": "2023-01-30T00:54:36Z",
        "content": "파란노을 (Parannoul) has unveiled their third full-length LP, After the Magic via Topshelf Records. Stream it below via Apple Music and Spotify.\r\nAnnounced just over a week before its release by the anon… [+1657 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Internazionale.it"
        },
        "author": "Internazionale",
        "title": "Il Mondo, il podcast di Internazionale",
        "description": "Ogni giorno Giulia Zoli e Claudio Rossi Marcelli commentano due notizie con i giornalisti e i collaboratori della redazione. Leggi",
        "url": "https://www.internazionale.it/notizie/2023/01/25/podcast-il-mondo",
        "urlToImage": "https://media.internazionale.it/images/2023/01/26/178661-sd.png",
        "publishedAt": "2023-01-30T10:15:08Z",
        "content": "Il Mondo è il podcast quotidiano di Internazionale: ogni giorno Claudio Rossi Marcelli e Giulia Zoli commentano due notizie con la redazione. \r\nIl podcast sarà disponibile dal 30 gennaio tutte le mat… [+382 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Yahoo Entertainment"
        },
        "author": "Jess Menton and Liz McCormick",
        "title": "Stocks Are Poised to Hit New Lows This Year, Survey of Investors Shows",
        "description": "(Bloomberg) -- Investors have little confidence in US stocks even after this month’s surge: Most say the market has yet to hit the bottom amid concern over...",
        "url": "https://finance.yahoo.com/news/stocks-poised-hit-lows-survey-010021690.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/P31mfSFlAPwHtSMRQK7KHw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02ODU-/https://media.zenfs.com/en/bloomberg_markets_842/5898663c1bc25b32437884960bf15865",
        "publishedAt": "2023-01-30T01:00:21Z",
        "content": "(Bloomberg) -- Investors have little confidence in US stocks even after this months surge: Most say the market has yet to hit the bottom amid concern over corporate earnings.\r\nMost Read from Bloomber… [+4629 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Anaitgames.com"
        },
        "author": "Pep Sànchez",
        "title": "Podcast Reload, temporada 14, programa 19: Xbox & Bethesda Developer_Direct, Hi-Fi Rush, Forspoken, Fire Emblem Engage",
        "description": "Forspoken y Fire Emblem Engage palidecen al lado de Hi-Fi Rush, seguramente una de las mayores sorpresas que vamos a tener en todo 2023.\nLa entrada Podcast Reload, temporada 14, programa 19: Xbox & Bethesda Developer_Direct, Hi-Fi Rush, Forspoken, Fire Emblem…",
        "url": "https://www.anaitgames.com/podcast/reload/podcast-reload-temporada-14-programa-19-xbox-bethesda-developer_direct-hi-fi-rush-forspoken-fire-emblem-engage/",
        "urlToImage": "https://www.anaitgames.com/wp-content/uploads/2023/01/B4C24C1C-65CA-43DE-AC15-40424C177B64.jpeg",
        "publishedAt": "2023-01-30T09:04:11Z",
        "content": "Iba a ser esta la semana de Forspoken, suponíamos. O del remake de Dead Space. De Forza Motorsport, incluso, que era quizás el título que más ganas teníamos de ver en el Developer_Direct de Xbox y Be… [+983 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Hwupgrade.it"
        },
        "author": null,
        "title": "Il visore VR/AR Reality Pro di Apple sarà un incredibile successo o uno dei più grandi flop?",
        "description": "Si parla ormai da anni del primo visore VR/AR di Apple e finalmente il nuovo device sembra pronto per arrivare sul mercato entro quest'anno. Agli occhi di tutti sarà un prodotto completamente nuovo per Apple e proprio per questo ci si chiede se potrà essere d…",
        "url": "https://www.hwupgrade.it/news/apple/il-visore-vr-ar-reality-pro-di-apple-sara-un-incredibile-successo-o-uno-dei-piu-grandi-flop_113680.html",
        "urlToImage": "https://www.hwupgrade.it/i/n/RealityProAppleVR_720.jpg",
        "publishedAt": "2023-01-30T08:52:31Z",
        "content": "Reality Pro potrebbe essere il nome del primo visore AR/VR della storia di Apple. Un prodotto di nicchia, che almeno inizialmente potrebbe venire commercializzato solo per utenti professionisti o add… [+5752 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Hwupgrade.it"
        },
        "author": null,
        "title": "Apple iPad Pro con chip M2, 11 pollici, Wi-Fi + Cellular, 128GB: oggi super sconto di 300 euro!",
        "description": "Un'offerta da non perdere ora su Amazon a proposito di questo Apple iPad Pro di nuova generazione. Si tratta del più recente esponente della famiglia, con caratteristiche di tutto rispetto",
        "url": "https://www.hwupgrade.it/news/apple/apple-ipad-pro-con-chip-m2-11-pollici-wi-fi-cellular-128gb-oggi-super-sconto-di-300-euro_113677.html",
        "urlToImage": "https://www.hwupgrade.it/i/n/iPadProM2_720_1.jpg",
        "publishedAt": "2023-01-30T08:10:51Z",
        "content": "Gran sconto per questo bellissimo iPad Pro di nuova generazione, con display da 11 pollici, configurazione Wi-Fi + Cellular, 128 GB di memoria di archiviazione e il chip M2 di Apple. Il prezzo è cala… [+2393 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Hwupgrade.it"
        },
        "author": null,
        "title": "Connettività Wi-Fi 6E su iPhone 15? Sì, ma solo sulle versioni Pro e Ultra",
        "description": "La tecnologia, già disponibile su molti altri smartphone concorrenti, arriverà a fine 2023 anche su iPhone. Ma non sui due modelli base",
        "url": "https://www.hwupgrade.it/news/apple/connettivita-wi-fi-6e-su-iphone-15-si-ma-solo-sulle-versioni-pro-e-ultra_113678.html",
        "urlToImage": "https://www.hwupgrade.it/i/n/iphone14leak_720.jpg",
        "publishedAt": "2023-01-30T09:31:01Z",
        "content": "Come da prassi Apple intenderà differenziare in maniera marcata gli iPhone base dai modelli Pro anche nel 2023. Oltre alle consuete differenze fotografiche e, novità più recente, nelle prestazioni, i… [+2451 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Hwupgrade.it"
        },
        "author": null,
        "title": "Amazon, lunedì di fuoco: TV LG 4K 65\" 519, super portatili 16GB e 24GB di RAM, SSD, PC gaming, tablet, Bosch, Xiaomi a prezzi imperdibili!",
        "description": "Inizio settimana con offerte veramente ottime, su Amazon! Ci sono ottimi TV a prezzi scontatissimi, ma la lista delle promozioni è veramente lunga e spazia in diverse categorie. Ma ci sono smartphone, PC, tablet, SSD e molto altro!",
        "url": "https://www.hwupgrade.it/news/multimedia/amazon-lunedi-di-fuoco-tv-lg-4k-65-519-super-portatili-16gb-e-24gb-di-ram-ssd-pc-gaming-tablet-bosch-xiaomi-a-prezzi-imperdibili_113671.html",
        "urlToImage": "https://www.hwupgrade.it/i/n/AamzonBFVideo_720.jpg",
        "publishedAt": "2023-01-30T07:22:26Z",
        "content": "TOP: fortemente scontato l'ottimo TV LG 4K da 65 pollici modello 2022, serie UQ75, si tratta del minimo storico \r\nsu Amazon!\r\nScorte limitate per questo PC portatile Acer, che \r\na soli 600 circa van… [+8779 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Sapo.pt"
        },
        "author": "Maria Inês Coelho",
        "title": "Apple poderá lançar iPad dobrável no 1.º trimestre de 2024",
        "description": "A criação de um dispositivo dobrável no portfólio da Apple é algo que tem vindo a ser explorado há já alguns anos. Historicamente, sabe-se que a Apple não tem propriamente o interesse em ser...",
        "url": "https://pplware.sapo.pt/apple/apple-podera-lancar-ipad-dobravel-no-1-o-trimestre-de-2024/",
        "urlToImage": "https://pplware.sapo.pt/wp-content/uploads/2022/11/ipad_dobravel_1.jpg",
        "publishedAt": "2023-01-30T10:15:35Z",
        "content": "A criação de um dispositivo dobrável no portfólio da Apple é algo que tem vindo a ser explorado há já alguns anos. Historicamente, sabe-se que a Apple não tem propriamente o interesse em ser a primei… [+2651 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Vedomosti.ru"
        },
        "author": null,
        "title": "АФК «Система» создала компанию для ввоза в Россию продукции Apple и Dyson",
        "description": "",
        "url": "https://www.vedomosti.ru/business/news/2023/01/30/960914-sistema-sozdala-kompaniyu",
        "urlToImage": "https://sharing.vedomosti.ru/1675066574/vedomosti.ru/business/news/2023/01/30/960914-sistema-sozdala-kompaniyu.jpg",
        "publishedAt": "2023-01-30T08:14:50Z",
        "content": "«» ( Ozon) « », . Apple, Samsung Dyson, «» . \r\n, « » . , 22 2022 ., 2 . , « » .\r\n27 , « » : iPhone, iPad AirPods , Apple Samsung, Dyson 1,55 .\r\n, , , , «» ( , ), « ». , « » . , , , .\r\n. , Apple, HP, … [+77 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Macotakara.jp"
        },
        "author": "danbo",
        "title": "Apple Store、2023年3月1日以降からのiPhoneバッテリー修理料金値上げ前の駆け込み需要急増中",
        "description": "Apple 名古屋栄\r\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- テキスト -->\n\nAppleが、2023年1月3日に、2023年3月1日以降から、iPhone、iPad、MacBookの保証対象外バッテリーサービス料金を値上げすると発表したのに伴い、 iPhoneの保証対象外バッテリーサービスを希望するユーザーが急増している状況で、現在の来店者の半数は希望者といった状況のようです。\nApple Storeでは、iPhone 14より前の全iPh…",
        "url": "https://www.macotakara.jp/etc/support/entry-44249.html",
        "urlToImage": "https://www.macotakara.jp/archives/001/202301/fe1a7ed99be33974.jpg",
        "publishedAt": "2023-01-30T08:28:28Z",
        "content": "Apple202313202331iPhoneiPadMacBook iPhone\r\nApple StoreiPhone 14iPhone3,000\r\n iPhone"
        },
        {
        "source": {
        "id": null,
        "name": "Macotakara.jp"
        },
        "author": "danbo",
        "title": "TFIのアナリストMing-Chi Kuo氏、Appleは2024年に新しい折畳み式iPadを発売する？",
        "description": "TF International Securities\r\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- テキスト -->\n\nTF International Securities Group LimitedのアナリストMing-Chi Kuo氏は、Anjie Technologyは、全く新しいデザインの折りたたみ式iPadの新しい受益者になるとツイートしています。\nまた、iPad miniのリフレッシュモデルが2024年第一四半期に量産開始される可能性…",
        "url": "https://www.macotakara.jp/rumor/entry-44248.html",
        "urlToImage": "https://www.macotakara.jp/archives/001/201806/61be0506e4e965c0d3f9cc5cc446a2c290fb9d87cc2d01c337d75c47ec56608c.png",
        "publishedAt": "2023-01-30T08:04:10Z",
        "content": "TF International Securities"
        },
        {
        "source": {
        "id": null,
        "name": "Iphones.ru"
        },
        "author": "Артём Баусов",
        "title": "Apple выпустит iPad со складным экраном и подставкой из углеродного волокна в 2024 году",
        "description": "Подробностей пока нет.",
        "url": "https://www.iphones.ru/iNotes/apple-vypustit-ipad-so-skladnym-ekranom-i-podstavkoy-iz-uglerodnogo-volokna-v-2024-godu-01-30-2023",
        "urlToImage": "https://www.iphones.ru/wp-content/plugins/wonderm00ns-simple-facebook-open-graph-tags/fbimg.php?img=https%3A%2F%2Fwww.iphones.ru%2Fwp-content%2Fuploads%2F2023%2F01%2F4D3FE2CB-4D35-4CCA-87DE-3570DBE36E64.jpeg",
        "publishedAt": "2023-01-30T09:47:52Z",
        "content": "- iPad.\r\n , . . 2024 , .\r\n iPad, , Apple . . Anjie Technology.\r\n , iPad 2024 . CCS Insight , iPhone.\r\n , , iPad 20 . [MacRumors]"
        },
        {
        "source": {
        "id": null,
        "name": "Iphones.ru"
        },
        "author": "Кирилл Морозов",
        "title": "5 причин перейти на Apple Watch Ultra, даже если у вас уже есть другие «вотчи»",
        "description": "Apple Watch Ultra оказались настоящим открытием для каждого, кто не первый год не снимает с запястья умные часы Apple.",
        "url": "https://www.iphones.ru/iNotes/5-prichin-pereyti-na-apple-watch-ultra-dazhe-esli-u-vas-uzhe-est-drugie-apple-watch-01-30-2023",
        "urlToImage": "https://www.iphones.ru/wp-content/plugins/wonderm00ns-simple-facebook-open-graph-tags/fbimg.php?img=https%3A%2F%2Fwww.iphones.ru%2Fwp-content%2Fuploads%2F2023%2F01%2F0-5.jpg",
        "publishedAt": "2023-01-30T10:36:39Z",
        "content": "Apple Watch Series 5 , - . , . . \r\n , - \r\n?\r\n - , . Apple . Apple Watch . Apple Watch Ultra.\r\n , , Apple Watch. , Ultra , .\r\n , Apple Watch Ultra. , Apple Watch .\r\n1. Apple Watch Ultra \r\nApple Watch … [+1146 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Iphones.ru"
        },
        "author": "Илья Сидоров",
        "title": "В двух одинаковых MacBook Pro 2023 может стоять разный по скорости SSD. Проверить до покупки нельзя",
        "description": "Аналогичная ситуация с SSD в Mac mini.",
        "url": "https://www.iphones.ru/iNotes/v-dvuh-odinakovyh-macbook-pro-2023-mozhet-stoyat-raznyy-po-skorosti-ssd-proverit-do-pokupki-nelzya-01-30-2023",
        "urlToImage": "https://www.iphones.ru/wp-content/plugins/wonderm00ns-simple-facebook-open-graph-tags/fbimg.php?img=https%3A%2F%2Fwww.iphones.ru%2Fwp-content%2Fuploads%2F2023%2F01%2Fcrgi5xeJKFZiowb7q2EtsG.jpg",
        "publishedAt": "2023-01-30T08:42:49Z",
        "content": "MacBook Pro Mac mini M2 Pro M2 Max SSD, . Reddit.\r\n Mac mini M2 Pro 512 SSD. 3172,8 /, 2973 /.\r\n Mac mini Mcstudio FPV. SSD 512 4707 / 2867 /.\r\n Mac mini SSD 1 . Dave2D. SSD 2860 /,   2388 /.\r\niPhone… [+213 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Iphones.ru"
        },
        "author": "Артём Баусов",
        "title": "АФК «Система» создала компанию «Гуру электроникс» по продаже электроники и мелкой бытовой техники",
        "description": "Это может положительно сказаться на ценах за технику.",
        "url": "https://www.iphones.ru/iNotes/afk-sistema-sozdala-kompaniyu-guru-elektroniks-po-prodazhe-elektroniki-i-melkoy-bytovoy-tehniki-01-30-2023",
        "urlToImage": "https://www.iphones.ru/wp-content/plugins/wonderm00ns-simple-facebook-open-graph-tags/fbimg.php?img=https%3A%2F%2Fwww.iphones.ru%2Fwp-content%2Fuploads%2F2023%2F01%2FF2F54D89-F306-4DF4-B64B-0C153652BBC1.jpeg",
        "publishedAt": "2023-01-30T06:08:44Z",
        "content": "Ozon «» « ». .\r\n Apple, Dyson Samsung. : iPhone, iPad AirPods , «» Apple Samsung, Dyson 1,55 .\r\n « » .\r\n «» , , , , ». , .\r\n . .\r\n, . , , . []"
        },
        {
        "source": {
        "id": null,
        "name": "Iphones.ru"
        },
        "author": "Илья Сидоров",
        "title": "Apple ускорила отклик экрана в новых MacBook Pro. Теперь глаза будут уставать меньше",
        "description": "Apple ускорила время отклика экрана в новом MacBook Pro, согласно тестам NotebookCheck. 14-дюймовый MacBook Pro с M2 Pro на черном фоне показал время отклика 26,4 мс, в то время аналогичная модель, но с процессором M1 Pro выдает результат 40,4 мс. На сером фо…",
        "url": "https://www.iphones.ru/iNotes/apple-uskorila-otklik-ekrana-v-novyh-macbook-pro-teper-glaza-budut-ustavat-menshe-01-30-2023",
        "urlToImage": "https://www.iphones.ru/wp-content/plugins/wonderm00ns-simple-facebook-open-graph-tags/fbimg.php?img=https%3A%2F%2Fwww.iphones.ru%2Fwp-content%2Fuploads%2F2023%2F01%2F230125131405-macbook-pro-14-inch-2023-review-cnnu-7.jpg",
        "publishedAt": "2023-01-30T07:28:42Z",
        "content": "Apple MacBook Pro, NotebookCheck.\r\n14- MacBook Pro M2 Pro 26,4 , , M1 Pro 40,4 .\r\n : 35,2 MacBook Pro 58,4 MacBook Pro 2021 .\r\n , . . \r\n , MacBook Pro , , OLED-. [NotebookCheck]"
        },
        {
        "source": {
        "id": null,
        "name": "MacGeneration"
        },
        "author": "Mickaël Bazoge",
        "title": "Sortie de veille (30/01) : tout augmente, même chez Samsung /// Apple fait une poker face",
        "description": "Tout sur le Mac : actualités, nouveautés, rumeurs, tests, trucs & astuces, forums, petites annonces, guide d’achat…",
        "url": "https://www.macg.co/podcasts/2023/01/sortie-de-veille-3001-tout-augmente-meme-chez-samsung-apple-fait-une-poker-face-134437",
        "urlToImage": "https://files.staticmacg.com/macgupload/icon.png",
        "publishedAt": "2023-01-30T05:00:59Z",
        "content": "Tous les matins de la semaine, écoutez Sortie de veille, le podcast quotidien du Club iGen ! En plus ou moins dix minutes, on fait le tour de l'actualité de la veille, avec en plus un test, une inter… [+396 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Expansion.com"
        },
        "author": "expansion.com",
        "title": "La Primera de Expansión sobre el bandazo del Tribunal Supremo, BBVA, EDP, Cepsa, Citi y Ryanair",
        "description": "En cuanto a la agenda del día, estaremos atentos a la huelga de controladores aéreos privados que comienza hoy. Además, Financial Times nos cuenta en su portada digital de hoy qu",
        "url": "https://www.expansion.com/podcasts/2023/01/30/63d75face5fdea59248b45ef.html",
        "urlToImage": "https://phantom-expansion.unidadeditorial.es/d0978e35ab99b28173b191b73183dbea/f/jpg/assets/multimedia/imagenes/2023/01/30/16750591024859.jpg",
        "publishedAt": "2023-01-30T06:44:45Z",
        "content": "Arrancamos este último lunes de diciembre contándoles que el Tribunal Supremo ha cambiado de opinión respecto a los intereses de demora de Hacienda. Además hablaremos sobre BBVA y su estrategia para … [+474 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "TheStreet"
        },
        "author": "Martin Baccardax",
        "title": "Stocks Lower, Big Tech Earnings, Fed Rate Decision, Adani Group, Eagles & Chiefs - Five Things To Know - TheStreet",
        "description": "Stock futures lower as markets face headline risk gauntlet; Week Ahead: Fed decision, big tech earnings, jobs in focus; Adani group hits back at Hindenburg short report; Renault and Nissan overhaul alliance, putting carmakers on equal terms and Philadelphia e…",
        "url": "https://www.thestreet.com/markets/stocks-lower-big-tech-fed-adani-eagles-chiefs-5-things-to-know",
        "urlToImage": "https://www.thestreet.com/.image/t_share/MTc4NTU1MzcyNzkxOTMyNzQ0/nyse_2.jpg",
        "publishedAt": "2023-01-30T10:30:45Z",
        "content": "Five things you need to know before the market opens on Monday January 30:\r\n1. -- Stock Futures Lower As Markets Face Headline Risk Gauntlet \r\nU.S. equity futures traded lower Monday, while the dolla… [+7061 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "SportsPro Media"
        },
        "author": "SportsPro",
        "title": "20 sports tech ideas to invest in now – Class of 2023 - SportsPro - SportsPro Media",
        "description": "Now in its fourth year, SportsPro presents its annual list of the 20 sports tech startups that should be on every investor’s radar over the next 12 months.",
        "url": "https://www.sportspromedia.com/?p=344603",
        "urlToImage": "https://www.sportspromedia.com/wp-content/uploads/2023/01/IDeas-to-Invest-in-HOZ.png",
        "publishedAt": "2023-01-30T09:11:15Z",
        "content": "The digitisation of sport is strengthening the ties between the worlds of sport and technology. This transformation is being driven not just by partnerships with big tech, but also by agile, innovati… [+15017 chars]"
        }
        ]
  return (
    
    <div className='container my-4'>
        <h1>Top News Headines</h1>
        <div className='row my-3'>
        {articles.map((element)=>{
        return <div className='col-md-4'>
            <NewsItem key={element.url} title={element.title} description={element.description} urlToImage={element.urlToImage}/>
            </div>
    })}
        </div>
    </div>
  )
}