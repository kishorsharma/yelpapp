(function showStarRating() {
    // get all the star-rating elements
    const elements = document.getElementsByClassName('star-rating');
    for (var i = 0; i < elements.length; i++) {
        // retrieve star rating
       const rating = Number(elements[i].dataset.rating);
       const half_star_count = rating % 1 === 0 ? 0 : 1; // either 1 or 0 based on remainder
       const full_star_count = Math.floor(rating); // 4.5 -> 4 full stars
       const empty_star_count = 5 - Math.ceil(rating); // 3.5 -> 1 empty star
       insertStars(full_star_count, 'full', elements[i]);
       insertStars(half_star_count, 'half', elements[i]);
       insertStars(empty_star_count, 'empty', elements[i]);
    }
})();

// to insert stars into an element
function insertStars(count, type, element) {
    for (var i = 0; i < count; i++) {
        switch(type) {
            case 'full':
                const full_star_image = document.createElement('img');
                full_star_image.src="../images/star-full.png";
                element.appendChild(full_star_image);
                break;
            case 'half':
                const half_star_image = document.createElement('img');
                half_star_image.src="../images/star-half.png";
                element.appendChild(half_star_image);
                break;
            default:
                const empty_star_image = document.createElement('img');
                empty_star_image.src="../images/star-empty.png";
                element.appendChild(empty_star_image);
                break;
        }
    }
}
