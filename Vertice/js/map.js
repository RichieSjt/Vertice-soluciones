// const appendChild = Element.prototype.appendChild;

// const urlCatchers = [
// "/AuthenticationService.Authenticate?",
// "/QuotaService.RecordEvent?"
// ];

// Element.prototype.appendChild = function (element) {
// const isGMapScript = element.tagName === 'SCRIPT' && /maps\.googleapis\.com/i.test(element.src);
// const isGMapAccessScript = isGMapScript && urlCatchers.some(url => element.src.includes(url));

// if (!isGMapAccessScript) {
//     return appendChild.call(this, element);
//   }

//   return element;
// };
// // Initialize and add the map
// function initMap() {
//     // The location of Uluru
//     const uluru = { lat: 19.3636305478263, lng: -99.13046874575542 };
//     // The map, centered at Uluru
//     const map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 15,
//         center: uluru,
//     });
//     // The marker, positioned at Uluru
//     const marker = new google.maps.Marker({
//         position: uluru,
//         map: map,
//     });
// }