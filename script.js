const videoGrid = document.querySelector(".video-grid");

if (videoGrid) {
    videoGrid.addEventListener("click", function (event) {
        const clickedVideo = event.target.closest(".video-item");

        if (!clickedVideo) {
            return;
        }

        const currentFeatured = videoGrid.querySelector(".featured");

        if (clickedVideo === currentFeatured) {
            return;
        }

        currentFeatured.classList.remove("featured");
        clickedVideo.classList.add("featured");

        videoGrid.insertBefore(clickedVideo, videoGrid.firstElementChild);
    });
}
