// The code in this file will load on every page of your site
$w.onReady(() => {

    let currentYear = new Date().getFullYear();

    $w("#copyrightText").text = `© ${currentYear} RISE Holding. All Rights Reserved.`;

});
