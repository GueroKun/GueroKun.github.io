if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
        .then(reg => {
            console.log("Service Worker registrado")
        })
        .catch(err => console.log('ServiceWorker error'))
    })
}