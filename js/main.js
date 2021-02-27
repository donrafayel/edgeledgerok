// function initMap(): void {
//   map = new google.maps.Map(document.getElementById(".map") as HTMLElement, {
//     center: { lat: 22.330370, lng: 91.832630 },
//     zoom: 8,
//   });
// }
function initmap() {
  const loc = { lat: 22.33037, lng: 91.83263 };
  const map = new google.maps.map(document.querySelector(".map"), {
    zoom: 14,
    center: loc,
  });
  const marker = new google.maps.marker({ position: loc, map: map });
}
