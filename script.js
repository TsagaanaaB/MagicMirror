let cameraStream;

function openCamera() {
    const openCameraButton = document.getElementById('openCameraButton');
    const cameraFeed = document.getElementById('cameraFeed');

    if (!cameraStream) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
                cameraStream = stream;
                cameraFeed.srcObject = stream;
                openCameraButton.textContent = 'Мой';
            })
            .catch((error) => {
                console.error('Error accessing camera:', error);
            });
    } else {
        closeCamera();
    }
}

function closeCamera() {
    const openCameraButton = document.getElementById('openCameraButton');
    const cameraFeed = document.getElementById('cameraFeed');

    if (cameraStream) {
        const tracks = cameraStream.getTracks();
        tracks.forEach(track => track.stop());
        cameraFeed.srcObject = null;
        cameraStream = null;
        openCameraButton.textContent = 'Мой';
    }
}
