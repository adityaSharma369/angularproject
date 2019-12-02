import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { manifest } from '@ant-design/icons-angular';
import { AccountBookFill } from '@ant-design/icons-angular/icons';
import { NzIconService } from 'ng-zorro-antd';
import { NzMessageService } from 'ng-zorro-antd';

const aniticons = {
    direction : [
        'step-backward', 'step-forward', 'fast-backward',
        'fast-forward', 'shrink', 'arrows-alt', 'down', 'up', 'left',
        'right', 'caret-up', 'caret-down', 'caret-left', 'caret-right',
        'up-circle', 'down-circle', 'left-circle', 'right-circle',
        'double-right', 'double-left', 'vertical-left', 'vertical-right',
        'forward', 'backward', 'rollback', 'enter', 'retweet',
        'swap', 'swap-left', 'swap-right', 'arrow-up', 'arrow-down',
        'arrow-left', 'arrow-right', 'play-circle',
        'up-square', 'down-square', 'left-square', 'right-square',
        'login', 'logout', 'menu-fold', 'menu-unfold',
        'border-bottom', 'border-horizontal', 'border-inner',
        'border-left', 'border-right', 'border-top',
        'border-verticle', 'pic-center', 'pic-left', 'pic-right',
        'radius-bottomleft', 'radius-bottomright', 'radius-upleft',
        'fullscreen', 'fullscreen-exit'
    ],
    suggestion: [
        'question', 'question-circle',
        'plus', 'plus-circle', 'pause',
        'pause-circle', 'minus',
        'minus-circle', 'plus-square', 'minus-square',
        'info', 'info-circle',
        'exclamation', 'exclamation-circle',
        'close', 'close-circle', 'close-square',
        'check', 'check-circle',
        'check-square',
        'clock-circle', 'warning',
        'issues-close', 'stop'
    ],
    edit      : [
        'edit', 'form', 'copy', 'scissor', 'delete', 'snippets', 'diff', 'highlight',
        'align-center', 'align-left', 'align-right', 'bg-colors',
        'bold', 'italic', 'underline',
        'strikethrough', 'redo', 'undo', 'zoom-in', 'zoom-out',
        'font-colors', 'font-size', 'line-height', 'colum-height',
        'dash', 'small-dash', 'sort-ascending', 'sort-descending',
        'drag', 'ordered-list', 'radius-setting'
    ],
    data      : [
        'area-chart', 'pie-chart', 'bar-chart', 'dot-chart', 'line-chart',
        'radar-chart', 'heat-map', 'fall', 'rise', 'stock', 'box-plot', 'fund',
        'sliders'
    ],
    other     : [
        'lock', 'unlock', 'bars', 'book', 'calendar', 'cloud', 'cloud-download',
        'code', 'copy', 'credit-card', 'delete', 'desktop',
        'download', 'ellipsis', 'file', 'file-text',
        'file-unknown', 'file-pdf', 'file-word', 'file-excel',
        'file-jpg', 'file-ppt', 'file-markdown', 'file-add',
        'folder', 'folder-open', 'folder-add', 'hdd', 'frown',
        'meh', 'smile', 'inbox',
        'laptop', 'appstore', 'link',
        'mail', 'mobile', 'notification', 'paper-clip', 'picture',
        'poweroff', 'reload', 'search', 'setting', 'share-alt',
        'shopping-cart', 'tablet', 'tag', 'tags',
        'to-top', 'upload', 'user', 'video-camera',
        'home', 'loading', 'loading-3-quarters',
        'cloud-upload',
        'star', 'heart', 'environment',
        'eye', 'camera', 'save', 'team',
        'solution', 'phone', 'filter', 'exception', 'export',
        'customer-service', 'qrcode', 'scan', 'like',
        'dislike', 'message', 'pay-circle',
        'calculator', 'pushpin',
        'bulb', 'select', 'switcher', 'rocket', 'bell', 'disconnect',
        'database', 'compass', 'barcode', 'hourglass', 'key',
        'flag', 'layout', 'printer', 'sound', 'usb', 'skin', 'tool',
        'sync', 'wifi', 'car', 'schedule', 'user-add', 'user-delete',
        'usergroup-add', 'usergroup-delete', 'man', 'woman', 'shop',
        'gift', 'idcard', 'medicine-box', 'red-envelope', 'coffee',
        'copyright', 'trademark', 'safety', 'wallet', 'bank', 'trophy',
        'contacts', 'global', 'shake', 'api', 'fork', 'dashboard',
        'table', 'profile',
        'alert', 'audit', 'branches',
        'build', 'border', 'crown',
        'experiment', 'fire',
        'money-collect', 'property-safety', 'read', 'reconciliation',
        'rest', 'security-scan', 'insurance', 'interation', 'safety-certificate',
        'project', 'thunderbolt', 'block', 'cluster', 'deployment-unit',
        'dollar', 'euro', 'pound', 'file-done', 'file-exclamation', 'file-protect',
        'file-search', 'file-sync', 'gateway', 'gold', 'robot', 'shopping'
    ],
    logo      : [
        'android', 'apple', 'windows',
        'ie', 'chrome', 'github', 'aliwangwang',
        'dingding',
        'weibo-square', 'weibo-circle', 'taobao-circle', 'html5',
        'weibo', 'twitter', 'wechat', 'youtube', 'alipay-circle',
        'taobao', 'skype', 'qq', 'medium-workmark', 'gitlab', 'medium',
        'linkedin', 'google-plus', 'dropbox', 'facebook', 'codepen',
        'amazon', 'google', 'codepen-circle', 'alipay', 'ant-design',
        'aliyun', 'zhihu', 'slack', 'slack-square', 'behance',
        'behance-square', 'dribbble', 'dribbble-square',
        'instagram', 'yuque',
        'alibaba', 'yahoo'
    ]
};

const fontawesome=[
    "fab fa-500px","fab fa-accessible-icon","fab fa-accusoft","fas fa-address-book","far fa-address-book",
    "fas fa-adjust","fab fa-adn","fab fa-adversal","fab fa-affiliatetheme","fab fa-algolia","fas fa-align-center",
    "fas fa-align-justify","fas fa-align-left","fas fa-align-right","fas fa-allergies","fab fa-amazon","fab fa-amazon-pay",
    "fas fa-ambulance","fas fa-american-sign-language-interpreting","fab fa-amilia","fas fa-anchor","fab fa-android",
    "fab fa-angellist","fas fa-angle-double-down","fas fa-angle-double-left","fas fa-angle-double-right",
    "fas fa-angle-double-up","fas fa-angle-down","fas fa-angle-left","fas fa-angle-right","fas fa-angle-up",
    "fab fa-angrycreative","fab fa-angular","fab fa-app-store","fab fa-app-store-ios","fab fa-apper",
    "fab fa-apple","fab fa-apple-pay","fas fa-archive","fas fa-arrow-alt-circle-down","far fa-arrow-alt-circle-down",
    "fas fa-arrow-alt-circle-left","far fa-arrow-alt-circle-left","fas fa-arrow-alt-circle-right",
    "far fa-arrow-alt-circle-right","fas fa-arrow-alt-circle-up","far fa-arrow-alt-circle-up","fas fa-arrow-circle-down",
    "fas fa-arrow-circle-left","fas fa-arrow-circle-right","fas fa-arrow-circle-up","fas fa-arrow-down","fas fa-arrow-left",
    "fas fa-arrow-right","fas fa-arrow-up","fas fa-arrows-alt","fas fa-arrows-alt-h","fas fa-arrows-alt-v",
    "fas fa-assistive-listening-systems","fas fa-asterisk","fab fa-asymmetrik","fas fa-at","fab fa-audible",
    "fas fa-audio-description","fab fa-autoprefixer","fab fa-avianex","fab fa-aviato","fab fa-aws","fas fa-backward",
    "fas fa-balance-scale","fas fa-ban","fas fa-band-aid","fab fa-bandcamp","fas fa-barcode","fas fa-bars",
    "fas fa-baseball-ball","fas fa-basketball-ball","fas fa-bath","fas fa-battery-empty","fas fa-battery-full",
    "fas fa-battery-half","fas fa-battery-quarter","fas fa-battery-three-quarters","fas fa-bed","fas fa-beer","fab fa-behance",
    "fab fa-behance-square","fas fa-bell","far fa-bell","fas fa-bell-slash","far fa-bell-slash","fas fa-bicycle",
    "fab fa-bimobject","fas fa-binoculars","fas fa-birthday-cake","fab fa-bitbucket","fab fa-bitcoin",
    "fab fa-bity","fab fa-black-tie","fab fa-blackberry","fas fa-blender","fas fa-blind","fab fa-blogger",
    "fab fa-blogger-b","fab fa-bluetooth","fab fa-bluetooth-b","fas fa-bold","fas fa-bolt","fas fa-bomb","fas fa-book",
    "fas fa-book-open","fas fa-bookmark","far fa-bookmark","fas fa-bowling-ball","fas fa-box","fas fa-box-open",
    "fas fa-boxes","fas fa-braille","fas fa-briefcase","fas fa-briefcase-medical","fas fa-broadcast-tower","fas fa-broom",
    "fab fa-btc","fas fa-bug","fas fa-building","far fa-building","fas fa-bullhorn","fas fa-bullseye","fas fa-burn",
    "fab fa-buromobelexperte","fas fa-bus","fab fa-buysellads","fas fa-calculator","fas fa-calendar","far fa-calendar",
    "fas fa-calendar-alt","far fa-calendar-alt","fas fa-calendar-check","far fa-calendar-check","fas fa-calendar-minus",
    "far fa-calendar-minus","fas fa-calendar-plus","far fa-calendar-plus","fas fa-calendar-times","far fa-calendar-times",
    "fas fa-camera","fas fa-camera-retro","fas fa-capsules","fas fa-car","fas fa-caret-down","fas fa-caret-left",
    "fas fa-caret-right","fas fa-caret-square-down","far fa-caret-square-down","fas fa-caret-square-left",
    "far fa-caret-square-left","fas fa-caret-square-right","far fa-caret-square-right","fas fa-caret-square-up",
    "far fa-caret-square-up","fas fa-caret-up","fas fa-cart-arrow-down","fas fa-cart-plus","fab fa-cc-amazon-pay",
    "fab fa-cc-amex","fab fa-cc-apple-pay","fab fa-cc-diners-club","fab fa-cc-discover","fab fa-cc-jcb",
    "fab fa-cc-mastercard","fab fa-cc-paypal","fab fa-cc-stripe","fab fa-cc-visa","fab fa-centercode",
    "fas fa-certificate","fas fa-chalkboard","fas fa-chalkboard-teacher","fas fa-chart-area","fas fa-chart-bar",
    "far fa-chart-bar","fas fa-chart-line","fas fa-chart-pie","fas fa-check","fas fa-check-circle","far fa-check-circle",
    "fas fa-check-square","far fa-check-square","fas fa-chess","fas fa-chess-bishop","fas fa-chess-board","fas fa-chess-king",
    "fas fa-chess-knight","fas fa-chess-pawn","fas fa-chess-queen","fas fa-chess-rook","fas fa-chevron-circle-down",
    "fas fa-chevron-circle-left","fas fa-chevron-circle-right","fas fa-chevron-circle-up","fas fa-chevron-down",
    "fas fa-chevron-left","fas fa-chevron-right","fas fa-chevron-up","fas fa-child","fab fa-chrome",
    "fas fa-church","fas fa-circle","far fa-circle","fas fa-circle-notch","fas fa-clipboard",
    "far fa-clipboard","fas fa-clipboard-check","fas fa-clipboard-list","fas fa-clock","fas fa-clone","far fa-clone",
    "fas fa-closed-captioning","far fa-closed-captioning","fas fa-cloud","fas fa-cloud-download-alt",
    "fas fa-cloud-upload-alt","fab fa-cloudscale","fab fa-cloudsmith","fab fa-cloudversify","fas fa-code",
    "fas fa-code-branch","fab fa-codepen","fab fa-codiepie","fas fa-coffee","fas fa-cog","fas fa-cogs","fas fa-coins",
    "fas fa-columns","fas fa-comment","far fa-comment","fas fa-comment-alt","far fa-comment-alt","fas fa-comment-dots",
    "far fa-comment-dots","fas fa-comment-slash","fas fa-comments","far fa-comments","fas fa-compact-disc","fas fa-compass",
    "far fa-compass","fas fa-compress","fab fa-connectdevelop","fab fa-contao","fas fa-copy","far fa-copy",
    "fas fa-copyright","far fa-copyright","fas fa-couch","fab fa-cpanel","fab fa-creative-commons",
    "fab fa-creative-commons-by","fab fa-creative-commons-nc","fab fa-creative-commons-nc-eu",
    "fab fa-creative-commons-nc-jp","fab fa-creative-commons-nd","fab fa-creative-commons-pd",
    "fab fa-creative-commons-pd-alt","fab fa-creative-commons-remix","fab fa-creative-commons-sa",
    "fab fa-creative-commons-sampling","fab fa-creative-commons-sampling-plus","fab fa-creative-commons-share",
    "fas fa-credit-card","far fa-credit-card","fas fa-crop","fas fa-crosshairs","fas fa-crow","fas fa-crown",
    "fab fa-css3","fab fa-css3-alt","fas fa-cube","fas fa-cubes","fas fa-cut","fab fa-cuttlefish","fab fa-d-and-d",
    "fab fa-dashcube","fas fa-database","fas fa-deaf","fab fa-delicious","fab fa-deploydog","fab fa-deskpro",
    "fas fa-desktop","fab fa-deviantart","fas fa-diagnoses","fas fa-dice","fas fa-dice-five","fas fa-dice-four",
    "fas fa-dice-one","fas fa-dice-six","fas fa-dice-three","fas fa-dice-two","fab fa-digg","fab fa-digital-ocean",
    "fab fa-discord","fab fa-discourse","fas fa-divide","fas fa-dna","fab fa-dochub","fab fa-docker",
    "fas fa-dollar-sign","fas fa-dolly","fas fa-dolly-flatbed","fas fa-donate","fas fa-door-closed","fas fa-door-open",
    "fas fa-dot-circle","far fa-dot-circle","fas fa-dove","fas fa-download","fab fa-draft2digital","fab fa-dribbble",
    "fab fa-dribbble-square","fab fa-dropbox","fab fa-drupal","fas fa-dumbbell","fab fa-dyalog","fab fa-earlybirds",
    "fab fa-ebay","fab fa-edge","fas fa-edit","far fa-edit","fas fa-eject","fab fa-elementor","fas fa-ellipsis-h",
    "fas fa-ellipsis-v","fab fa-ember","fab fa-empire","fas fa-envelope","far fa-envelope","fas fa-envelope-open",
    "far fa-envelope-open","fas fa-envelope-square","fab fa-envira","fas fa-equals","fas fa-eraser","fab fa-erlang",
    "fab fa-ethereum","fab fa-etsy","fas fa-euro-sign","fas fa-exchange-alt","fas fa-exclamation",
    "fas fa-exclamation-circle","fas fa-exclamation-triangle","fas fa-expand","fas fa-expand-arrows-alt",
    "fab fa-expeditedssl","fas fa-external-link-alt","fas fa-external-link-square-alt","fas fa-eye",
    "far fa-eye","fas fa-eye-dropper","fas fa-eye-slash","far fa-eye-slash","fab fa-facebook","fab fa-facebook-f",
    "fab fa-facebook-messenger","fab fa-facebook-square","fas fa-fast-backward","fas fa-fast-forward","fas fa-fax",
    "fas fa-feather","fas fa-female","fas fa-fighter-jet","fas fa-file","far fa-file","fas fa-file-alt","far fa-file-alt",
    "fas fa-file-archive","far fa-file-archive","fas fa-file-audio","far fa-file-audio","fas fa-file-code","far fa-file-code","fas fa-file-excel","far fa-file-excel","fas fa-file-image","far fa-file-image","fas fa-file-medical","fas fa-file-medical-alt","fas fa-file-pdf","far fa-file-pdf","fas fa-file-powerpoint","far fa-file-powerpoint","fas fa-file-video","far fa-file-video","fas fa-file-word","far fa-file-word","fas fa-film","fas fa-filter","fas fa-fire","fas fa-fire-extinguisher","fab fa-firefox","fas fa-first-aid","fab fa-first-order","fab fa-first-order-alt","fab fa-firstdraft","fas fa-flag","far fa-flag","fas fa-flag-checkered","fas fa-flask","fab fa-flickr","fab fa-flipboard","fab fa-fly","fas fa-folder","far fa-folder","fas fa-folder-open","far fa-folder-open","fas fa-font","fab fa-font-awesome","fab fa-font-awesome-alt","fab fa-font-awesome-flag","fab fa-fonticons","fab fa-fonticons-fi","fas fa-football-ball","fab fa-fort-awesome","fab fa-fort-awesome-alt","fab fa-forumbee","fas fa-forward","fab fa-foursquare","fab fa-free-code-camp","fab fa-freebsd","fas fa-frog","fas fa-frown","far fa-frown","fab fa-fulcrum","fas fa-futbol","far fa-futbol","fab fa-galactic-republic","fab fa-galactic-senate","fas fa-gamepad","fas fa-gas-pump","fas fa-gavel","fas fa-gem","far fa-gem","fas fa-genderless","fab fa-get-pocket","fab fa-gg","fab fa-gg-circle","fas fa-gift","fab fa-git","fab fa-git-square","fab fa-github","fab fa-github-alt","fab fa-github-square","fab fa-gitkraken","fab fa-gitlab","fab fa-gitter","fas fa-glass-martini","fas fa-glasses","fab fa-glide","fab fa-glide-g","fas fa-globe","fab fa-gofore","fas fa-golf-ball","fab fa-goodreads","fab fa-goodreads-g","fab fa-google","fab fa-google-drive","fab fa-google-play","fab fa-google-plus","fab fa-google-plus-g","fab fa-google-plus-square","fab fa-google-wallet","fas fa-graduation-cap","fab fa-gratipay","fab fa-grav","fas fa-greater-than","fas fa-greater-than-equal","fab fa-gripfire","fab fa-grunt","fab fa-gulp","fas fa-h-square","fab fa-hacker-news","fab fa-hacker-news-square","fas fa-hand-holding","fas fa-hand-holding-heart","fas fa-hand-holding-usd","fas fa-hand-lizard","far fa-hand-lizard","fas fa-hand-paper","far fa-hand-paper","fas fa-hand-peace","far fa-hand-peace","fas fa-hand-point-down","far fa-hand-point-down","fas fa-hand-point-left","far fa-hand-point-left","fas fa-hand-point-right","far fa-hand-point-right","fas fa-hand-point-up","far fa-hand-point-up","fas fa-hand-pointer","far fa-hand-pointer","fas fa-hand-rock","far fa-hand-rock","fas fa-hand-scissors","far fa-hand-scissors","fas fa-hand-spock","far fa-hand-spock","fas fa-hands","fas fa-hands-helping","fas fa-handshake","far fa-handshake","fas fa-hashtag","fas fa-hdd","far fa-hdd","fas fa-heading","fas fa-headphones","fas fa-heart","far fa-heart","fas fa-heartbeat","fas fa-helicopter","fab fa-hips","fab fa-hire-a-helper","fas fa-history","fas fa-hockey-puck","fas fa-home","fab fa-hooli","fas fa-hospital","far fa-hospital","fas fa-hospital-alt","fas fa-hospital-symbol","fab fa-hotjar","fas fa-hourglass","far fa-hourglass","fas fa-hourglass-half","fas fa-hourglass-start","fab fa-houzz","fab fa-html5","fab fa-hubspot","fas fa-i-cursor","fas fa-id-badge","far fa-id-badge","fas fa-id-card","far fa-id-card","fas fa-id-card-alt","fas fa-image","far fa-image","fas fa-images","far fa-images","fab fa-imdb","fas fa-inbox","fas fa-indent","fas fa-industry","fas fa-infinity","fas fa-info","fas fa-info-circle","fab fa-instagram","fab fa-internet-explorer","fab fa-ioxhost","fas fa-italic","fab fa-itunes","fab fa-itunes-note","fab fa-java","fab fa-jedi-order","fab fa-jenkins","fab fa-joget","fab fa-joomla","fab fa-js","fab fa-js-square","fab fa-jsfiddle","fas fa-key","fab fa-keybase","fas fa-keyboard","far fa-keyboard","fab fa-keycdn","fab fa-kickstarter","fab fa-kickstarter-k","fas fa-kiwi-bird","fab fa-korvue","fas fa-language","fas fa-laptop","fab fa-laravel","fab fa-lastfm","fab fa-lastfm-square","fas fa-leaf","fab fa-leanpub","fas fa-lemon","far fa-lemon","fab fa-less","fas fa-less-than","fas fa-less-than-equal","fas fa-level-down-alt","fas fa-level-up-alt","fas fa-life-ring","far fa-life-ring","fas fa-lightbulb","far fa-lightbulb","fab fa-line","fas fa-link","fab fa-linkedin","fab fa-linkedin-in","fab fa-linode","fab fa-linux","fas fa-lira-sign","fas fa-list","fas fa-list-alt","far fa-list-alt","fas fa-list-ol","fas fa-list-ul","fas fa-location-arrow","fas fa-lock","fas fa-lock-open","fas fa-long-arrow-alt-down","fas fa-long-arrow-alt-left","fas fa-long-arrow-alt-right","fas fa-long-arrow-alt-up","fas fa-low-vision","fab fa-lyft","fab fa-magento","fas fa-magic","fas fa-magnet","fas fa-male","fab fa-mandalorian","fas fa-map","far fa-map","fas fa-map-marker","fas fa-map-marker-alt","fas fa-map-pin","fas fa-map-signs","fas fa-mars","fas fa-mars-double","fas fa-mars-stroke","fas fa-mars-stroke-h","fas fa-mars-stroke-v","fab fa-mastodon","fab fa-maxcdn","fab fa-medapps","fab fa-medium","fab fa-medium-m","fas fa-medkit","fab fa-medrt","fab fa-meetup","fas fa-meh","far fa-meh","fas fa-mercury","fas fa-microchip","fas fa-microphone","fas fa-microphone-alt","fas fa-microphone-alt-slash","fas fa-microphone-slash","fab fa-microsoft","fas fa-minus","fas fa-minus-circle","fas fa-minus-square","far fa-minus-square","fab fa-mix","fab fa-mixcloud","fab fa-mizuni","fas fa-mobile","fas fa-mobile-alt","fab fa-modx","fab fa-monero","fas fa-money-bill","fas fa-money-bill-alt","far fa-money-bill-alt","fas fa-money-bill-wave","fas fa-money-bill-wave-alt","fas fa-money-check","fas fa-money-check-alt","fas fa-moon","far fa-moon","fas fa-motorcycle","fas fa-mouse-pointer","fas fa-music","fab fa-napster","fas fa-neuter","fas fa-newspaper","far fa-newspaper","fab fa-nintendo-switch","fab fa-node","fab fa-node-js","fas fa-not-equal","fas fa-notes-medical","fab fa-npm","fab fa-ns8","fab fa-nutritionix","fas fa-object-group","far fa-object-group","fas fa-object-ungroup","far fa-object-ungroup","fab fa-odnoklassniki","fab fa-odnoklassniki-square","fab fa-old-republic","fab fa-opencart","fab fa-openid","fab fa-opera","fab fa-optin-monster","fab fa-osi","fas fa-outdent","fab fa-page4","fab fa-pagelines","fas fa-paint-brush","fas fa-palette","fab fa-palfed","fas fa-pallet","fas fa-paper-plane","far fa-paper-plane","fas fa-paperclip","fas fa-parachute-box","fas fa-paragraph","fas fa-parking","fas fa-paste","fab fa-patreon","fas fa-pause","fas fa-pause-circle","far fa-pause-circle","fas fa-paw","fab fa-paypal","fas fa-pen-square","fas fa-pencil-alt","fas fa-people-carry","fas fa-percent","fas fa-percentage","fab fa-periscope","fab fa-phabricator","fab fa-phoenix-framework","fab fa-phoenix-squadron","fas fa-phone","fas fa-phone-slash","fas fa-phone-square","fas fa-phone-volume","fab fa-php","fab fa-pied-piper","fab fa-pied-piper-alt","fab fa-pied-piper-hat","fab fa-pied-piper-pp","fas fa-piggy-bank","fas fa-pills","fab fa-pinterest","fab fa-pinterest-p","fab fa-pinterest-square","fas fa-plane","fas fa-play","fas fa-play-circle","far fa-play-circle","fab fa-playstation","fas fa-plug","fas fa-plus","fas fa-plus-circle","fas fa-plus-square","far fa-plus-square","fas fa-podcast","fas fa-poo","fas fa-portrait","fas fa-pound-sign","fas fa-power-off","fas fa-prescription-bottle","fas fa-prescription-bottle-alt","fas fa-print","fas fa-procedures","fab fa-product-hunt","fas fa-project-diagram","fab fa-pushed","fas fa-puzzle-piece","fab fa-python","fab fa-qq","fas fa-qrcode","fas fa-question","fas fa-question-circle","far fa-question-circle","fas fa-quidditch","fab fa-quinscape","fab fa-quora","fas fa-quote-left","fas fa-quote-right","fab fa-r-project","fas fa-random","fab fa-ravelry","fab fa-react","fab fa-readme","fab fa-rebel","fas fa-receipt","fas fa-recycle","fab fa-red-river","fab fa-reddit","fab fa-reddit-alien","fab fa-reddit-square","fas fa-redo","fas fa-redo-alt","fas fa-registered","far fa-registered","fab fa-rendact","fab fa-renren","fas fa-reply","fas fa-reply-all","fab fa-replyd","fab fa-researchgate","fab fa-resolving","fas fa-retweet","fas fa-ribbon","fas fa-road","fas fa-robot","fas fa-rocket","fab fa-rocketchat","fab fa-rockrms","fas fa-rss","fas fa-rss-square","fas fa-ruble-sign","fas fa-ruler","fas fa-ruler-combined","fas fa-ruler-horizontal","fas fa-ruler-vertical","fas fa-rupee-sign","fab fa-safari","fab fa-sass","fas fa-save","far fa-save","fab fa-schlix","fas fa-school","fas fa-screwdriver","fab fa-scribd","fas fa-search","fas fa-search-minus","fas fa-search-plus","fab fa-searchengin","fas fa-seedling","fab fa-sellcast","fab fa-sellsy","fas fa-server","fab fa-servicestack","fas fa-share","fas fa-share-alt","fas fa-share-alt-square","fas fa-share-square","far fa-share-square","fas fa-shekel-sign","fas fa-shield-alt","fas fa-ship","fas fa-shipping-fast","fab fa-shirtsinbulk","fas fa-shoe-prints","fas fa-shopping-bag","fas fa-shopping-basket","fas fa-shopping-cart","fas fa-shower","fas fa-sign","fas fa-sign-in-alt","fas fa-sign-language","fas fa-sign-out-alt","fas fa-signal","fab fa-simplybuilt","fab fa-sistrix","fas fa-sitemap","fab fa-sith","fas fa-skull","fab fa-skyatlas","fab fa-skype","fab fa-slack","fab fa-slack-hash","fas fa-sliders-h","fab fa-slideshare","fas fa-smile","far fa-smile","fas fa-smoking","fas fa-smoking-ban","fab fa-snapchat","fab fa-snapchat-ghost","fab fa-snapchat-square","fas fa-snowflake","far fa-snowflake","fas fa-sort","fas fa-sort-alpha-down","fas fa-sort-alpha-up","fas fa-sort-amount-down","fas fa-sort-amount-up","fas fa-sort-down","fas fa-sort-numeric-down","fas fa-sort-numeric-up","fas fa-sort-up","fab fa-soundcloud","fas fa-space-shuttle","fab fa-speakap","fas fa-spinner","fab fa-spotify","fas fa-square","far fa-square","fas fa-square-full","fab fa-stack-exchange","fab fa-stack-overflow","fas fa-star","far fa-star","fas fa-star-half","far fa-star-half","fab fa-staylinked","fab fa-steam","fab fa-steam-square","fab fa-steam-symbol","fas fa-step-backward","fas fa-step-forward","fas fa-stethoscope","fab fa-sticker-mule","fas fa-sticky-note","far fa-sticky-note","fas fa-stop","fas fa-stop-circle","far fa-stop-circle","fas fa-stopwatch","fas fa-store","fas fa-store-alt","fab fa-strava","fas fa-stream","fas fa-street-view","fas fa-strikethrough","fab fa-stripe","fab fa-stripe-s","fas fa-stroopwafel","fab fa-studiovinari","fab fa-stumbleupon","fab fa-stumbleupon-circle","fas fa-subscript","fas fa-subway","fas fa-suitcase","fas fa-sun","far fa-sun","fab fa-superpowers","fas fa-superscript","fab fa-supple","fas fa-sync","fas fa-sync-alt","fas fa-syringe","fas fa-table","fas fa-table-tennis","fas fa-tablet","fas fa-tablet-alt","fas fa-tablets","fas fa-tachometer-alt","fas fa-tag","fas fa-tags","fas fa-tape","fas fa-tasks","fas fa-taxi","fab fa-teamspeak","fab fa-telegram","fab fa-telegram-plane","fab fa-tencent-weibo","fas fa-terminal","fas fa-text-height","fas fa-text-width","fas fa-th","fas fa-th-large","fas fa-th-list","fab fa-themeisle","fas fa-thermometer","fas fa-thermometer-empty","fas fa-thermometer-full","fas fa-thermometer-half","fas fa-thermometer-quarter","fas fa-thermometer-three-quarters","fas fa-thumbs-down","far fa-thumbs-down","fas fa-thumbs-up","far fa-thumbs-up","fas fa-thumbtack","fas fa-ticket-alt","fas fa-times","fas fa-times-circle","far fa-times-circle","fas fa-tint","fas fa-toggle-off","fas fa-toggle-on","fas fa-toolbox","fab fa-trade-federation","fas fa-trademark","fas fa-train","fas fa-transgender","fas fa-transgender-alt","fas fa-trash","fas fa-trash-alt","far fa-trash-alt","fas fa-tree","fab fa-trello","fab fa-tripadvisor","fas fa-trophy","fas fa-truck","fas fa-truck-loading","fas fa-truck-moving","fas fa-tshirt","fas fa-tty","fab fa-tumblr","fab fa-tumblr-square","fas fa-tv","fab fa-twitch","fab fa-twitter","fab fa-twitter-square","fab fa-typo3","fab fa-uber","fab fa-uikit","fas fa-umbrella","fas fa-underline","fas fa-undo","fas fa-undo-alt","fab fa-uniregistry","fas fa-universal-access","fas fa-university","fas fa-unlink","fas fa-unlock","fas fa-unlock-alt","fab fa-untappd","fas fa-upload","fab fa-usb","fas fa-user","far fa-user","fas fa-user-alt","fas fa-user-alt-slash","fas fa-user-astronaut","fas fa-user-check","fas fa-user-circle","far fa-user-circle","fas fa-user-clock","fas fa-user-cog","fas fa-user-edit","fas fa-user-friends","fas fa-user-graduate","fas fa-user-lock","fas fa-user-md","fas fa-user-minus","fas fa-user-ninja","fas fa-user-plus","fas fa-user-secret","fas fa-user-shield","fas fa-user-slash","fas fa-user-tag","fas fa-user-tie","fas fa-user-times","fas fa-users","fas fa-users-cog","fab fa-ussunnah","fas fa-utensil-spoon","fas fa-utensils","fab fa-vaadin","fas fa-venus","fas fa-venus-double","fas fa-venus-mars","fab fa-viacoin","fab fa-viadeo","fab fa-viadeo-square","fas fa-vial","fas fa-vials","fab fa-viber","fas fa-video","fas fa-video-slash","fab fa-vimeo","fab fa-vimeo-square","fab fa-vimeo-v","fab fa-vine","fab fa-vk","fab fa-vnv","fas fa-volleyball-ball","fas fa-volume-down","fas fa-volume-off","fas fa-volume-up","fab fa-vuejs","fas fa-walking","fas fa-wallet","fas fa-warehouse","fab fa-weibo","fas fa-weight","fab fa-weixin","fab fa-whatsapp","fab fa-whatsapp-square","fas fa-wheelchair","fab fa-whmcs","fas fa-wifi","fab fa-wikipedia-w","fas fa-window-close","far fa-window-close","fas fa-window-maximize","far fa-window-maximize","fas fa-window-minimize","fas fa-window-restore","far fa-window-restore","fab fa-windows","fas fa-wine-glass","fab fa-wolf-pack-battalion","fas fa-won-sign","fab fa-wordpress","fab fa-wordpress-simple","fab fa-wpbeginner","fab fa-wpexplorer","fab fa-wpforms","fas fa-wrench","fas fa-x-ray","fab fa-xbox","fab fa-xing","fab fa-xing-square","fab fa-y-combinator","fab fa-yahoo","fab fa-yandex","fab fa-yandex-international","fab fa-yelp","fas fa-yen-sign","fab fa-yoast","fab fa-youtube","fab fa-youtube-square"];

@Component({
    templateUrl: './icons.component.html'
})

export class IconsComponent {

    searchAnticon : any
    searchFontAwsome : any
    index = 0
    anticonTheme = 'outlined'
    anticonDisplayedNames = {};
    anticonCategoryNames = [];
    currentTheme = 'outline';
    fontawesomeNames = fontawesome;
    
    trackByFn = (item: string) => {
        return `${item}-${this.currentTheme}`;
    }

    onAnticonClick(e: MouseEvent, icon: string): void {
        const copiedString = `<i nz-icon type="${icon}" theme="${this.currentTheme}"></i>`;
        this._copy(copiedString).then(() => {
            this.message.success('Copied');
        });
    }

    onFontawesomeClick (e: MouseEvent, icon: string): void {
        const copiedString = `<i class="${icon}"></i>`;
        this._copy(copiedString).then(() => {
            this.message.success('Copied');
        });
    }

    private _copy(value: string): Promise<string> {
        const promise = new Promise<string>((resolve): void => {
            let copyTextArea = null as HTMLTextAreaElement;
            try {
                copyTextArea = this.dom.createElement('textarea');
                copyTextArea.style.height = '0px';
                copyTextArea.style.opacity = '0';
                copyTextArea.style.width = '0px';
                this.dom.body.appendChild(copyTextArea);
                copyTextArea.value = value;
                copyTextArea.select();
                this.dom.execCommand('copy');
                resolve(value);
            } finally {
                if (copyTextArea && copyTextArea.parentNode) {
                    copyTextArea.parentNode.removeChild(copyTextArea);
                }
            }
        });

        return (promise);
    }

    setAnticonDisplayed(value: string): void {
        // tslint:disable
        const names = Object.keys(aniticons)
        .map(category => ({
            name : category,
            icons: aniticons[ category ].filter(name => manifest[ value ].indexOf(name) > -1)
        }))
        .filter(({ icons }) => Boolean(icons.length));

        this.anticonDisplayedNames = names;
        this.anticonCategoryNames = names.map(({ name }) => name);
        this.currentTheme = value;
    }

    setFontAwesomeDisplayed(): void {
        
    }

    constructor(@Inject(DOCUMENT) private dom: any,  private _iconService: NzIconService, private message: NzMessageService) {
        this._iconService.addIcon(AccountBookFill);
    }

    ngOnInit() {
        this.setAnticonDisplayed('outline');
    }
}  