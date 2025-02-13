const dateLastModified = new Date(document.lastModified);
const lastModified = document.querySelector("#lastModified");

lastModified.innerHTML = `Last Update: ${new Intl.DateTimeFormat(
    "en-US",
    {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }
).format(dateLastModified)} ${new Intl.DateTimeFormat(
    "en-US",
    {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }
).format(dateLastModified)}`;