import Caver from 'caver-js'

var blatchABI  = require('/blatch-frontend/src/abi/blatch_abi')

Caver.klay.defaultAccount = '1a12d17ffb3e33a5cc092c909bc2d4fc5fd47df6';
const blatchAddress = '0x77080191ca6a2d5b113ef53d6ebb297084c4f952';

export const getAccountInfo = () => {
    return new Promise(async (resolve, reject) => {
        const klaytnAccount = await Caver.klay.defaultAccount;
        const klayBalance = await Caver.klay.getBalance(klaytnAccount)
    })
};

export const saveVideo = ( video_no, video_data ) => {
    return new Promise((resolve, reject) => {
        try {
            blatchABI.methods.setVideo(video_no, video_data).send({
                from: Caver.klay.defaultAccount,
                to: blatchAddress,
            },
                (err, txHash) => {
                    if(!err){
                        resolve({ txHash });
                    } else {
                        reject({ msg: err });
                    }
                }
            );
        } catch (e) {
            if (e.message === 'invalid address'){
                console.log("error : " + e.message);
            }
        }
    });
};

export const getVideo = ( video_no ) => {
    return new Promise((resolve, reject) => {
        blatchABI.getVideo(video_no, (err, res) => {
            if(!err){
                resolve(res);
            } else {
                reject(err);
            }
        });
    });
};