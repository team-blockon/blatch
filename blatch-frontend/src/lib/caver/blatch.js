import caver from 'lib/caver';
import blatchABI from 'abi/blatch_abi';

caver.klay.defaultAccount = '0x1a12d17ffb3e33a5cc092c909bc2d4fc5fd47df6';
const blatchAddress = '0xe604b7db5bd2ec7f8edd5c35b9856769071c252c';

const blatchContract = new caver.klay.Contract(blatchABI, blatchAddress);

export const saveVideo = (video_no, videoHash, videoPath) => {
  return new Promise((resolve, reject) => {
    try {
      blatchContract.methods
        .setVideo(video_no, videoHash, videoPath)
        .send(
          {
            from: caver.klay.defaultAccount,
            gas: 200000
          },
          (err, txHash) => {
            if (!err) {
              resolve({ txHash });
            } else {
              reject({ msg: err });
            }
          }
        )
        .once('confirmation', (confirmationNumber, receipt) => {
          console.log('video save success', receipt);
        });
    } catch (e) {
      console.log('error : ' + e.message);
    }
  });
};

export const getVideo = video_no => {
  return new Promise((resolve, reject) => {
    blatchContract.methods.getVideo(video_no, (err, res) => {
      if (!err) {
        resolve(res);
      } else {
        reject(err);
      }
    });
  });
};
