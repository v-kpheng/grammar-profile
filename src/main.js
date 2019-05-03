class Media {
  constructor() {
    const hasGetUserMedia =
          !!(navigator.mediaDevices &&
             navigator.mediaDevices.getUserMedia);

    if (!hasGetUserMedia) {
      alert('Your browser does not have getUserMedia() support');
    }

    this.constraints = {
      video: true,
      audio: true
    };
  }
  stream(element) {
    const { constraints } = this;

    navigator.mediaDevices.getUserMedia(constraints).
      then((stream) => {
        element.srcObject = stream;
      });
  }
};

const media = new Media();
const videoContainer = document.getElementById('video');

media.stream(videoContainer);
