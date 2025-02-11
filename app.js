'use strict'

function getCurrentLocation(callback) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                callback(null, position);
            },
            (error) => {
                callback(error);
            }
        );
    } else {
        callback(new Error("Геолокация не поддерживается этим браузером."));
    }
}

function getCurrentLocationPromise() {
    return new Promise((resolve, reject) => {
        getCurrentLocation((error, position) => {
            if (error) {
                reject(error);
            } else {
                resolve(position);
            }
        });
    });
}

document.getElementById("getLocationButton").addEventListener("click", () => {
    getCurrentLocationPromise()
        .then((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            document.getElementById("locationOutput").textContent = `Широта: ${latitude}, Долгота: ${longitude}`;
        })
        .catch((error) => {
            document.getElementById("locationOutput").textContent = `Ошибка: ${error.message}`;
        })
        .finally(() => {
            console.log("Запрос геолокации завершен.");
        });
});