require('./index.css');

const ua = navigator.userAgent.toLowerCase();
if(ua.includes('firefox')) require('./grid.moz.css');
if(ua.includes('webkit')) require('./grid.webkit.css');
