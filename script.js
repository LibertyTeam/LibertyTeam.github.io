if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('head').prepend('<meta http-equiv="refresh" content="0; url=Mobile/index.html">')
} else {
    $('head').prepend('<meta http-equiv="refresh" content="0; url=Desktop/index.html">')
}
