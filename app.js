'use strict'
// получение геолокации
// function getMyCoordinates() {
//     return new Promise((resolve, reject) => {
//         navigator.geolocation.getCurrentPosition(
//             ({ coords }) => {
//                 resolve({ 
//                     latitude: coords.latitude,
//                     longitude: coords.longitude,
//                 });
//             },
//             (err) => {
//                 reject(err);
//             }
//         );
//     });
// }

// async function getMyCity() {
//     try {
//         const { latitude, longitude } = await getMyCoordinates();
//         const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`);
//         if (!response.ok) {
//             throw new Error(response.status)
//         }
//         const data = await response.json();
//         console.log(data);
//     } catch(e) {
//         console.log(e);
//     }
// }

// getMyCity();

// const wrapper = document.querySelector('.wrapper');

// async function getActivity() {
//     const res = await fetch('https://bored.api.lewagon.com/api/activity');
//     return res.json();
// }

// async function generate() {
//     try {
//         wrapper.innerHTML = '';
//         const data = await Promise.all([
//             getActivity(),
//             getActivity(),
//             getActivity(),
//         ]);
//         console.log(data);
//         for (const el of data) {
//             const element = document.createElement('div');
//             element.innerHTML = `${el.activity}`;
//             wrapper.appendChild(element);
//         }
//     } catch(e) {
//         console.error(e)
//     }
// }


async function race(promises) {
    if (!Array.isArray(promises)) {
        throw new Error('Должен быть массив промисов');
    }

    return new Promise((resolve, reject) => {
        promises.forEach(async (promise) => {
            try {
                const result = await Promise.resolve(promise);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        });
    });
}