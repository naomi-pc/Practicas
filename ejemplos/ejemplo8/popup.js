window.onload = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (activeTab) => {
        const tabId = activeTab[0].id;
        mostrarGato();
    });
};
const mostrarGato = () => {
    document.getElementById(
        "cat_image"
    ).src = 'https://cataas.com/c/s/Hola%20mundo?width=350';
};