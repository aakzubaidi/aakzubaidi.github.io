var shareButton = document.getElementById('share-button');

shareButton.addEventListener('click', function () {

    // Check if navigator.share is supported by the browser
    if (navigator.share) {
        console.log("Congrats! Your browser supports Web Share API")

        // navigator.share accepts objects which must have atleast title, text or
        // url. Any text or title or text is possible
        navigator.share({
                title: "Bits and pieces: Web Share API article",
                text: "Web Share API feature is awesome. You must check it",
                url: window.location.href
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