var shareButton = document.getElementById('shareLocation');

shareButton.addEventListener('click', function () {

    // Check if navigator.share is supported by the browser
    if (navigator.share) {
        console.log("Congrats! Your browser supports Web Share API")

        // navigator.share accepts objects which must have atleast title, text or
        // url. Any text or title or text is possible
        navigator.share({
                title: "مشاركة عنوان موقع",
                text: "قم بالضغط على الرابط لإظهار العنوان على الخريطة",
                url: QRurl
            })
            .then(function () {
                console.log("Shareing successfull")
            })
            .catch(function () {
                console.log("Sharing failed")
            })

    } else {
        console.log("Sorry! Your browser does not support Web Share API")
    }
})