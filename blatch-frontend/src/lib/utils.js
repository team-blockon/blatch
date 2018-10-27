export function captureUserMedia(callback) {
  const params = { audio: false, video: true };

  navigator.getUserMedia(params, callback, error => {
    alert(JSON.stringify(error));
  });
}
