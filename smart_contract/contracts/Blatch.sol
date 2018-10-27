pragma solidity ^0.4.24;
pragma experimental ABIEncoderV2;

contract Blatch {

    address private hospital;

    struct Video {
        string videoHash;   // video hash 값
        string doctor;     // 집도의 성
        string patient;    // 환자 성
        string surgeryName; // 수술명
        string surgeryDate; // 수술 날짜
        string savePath;    // video 저장 위치
        string saveDate;    // video 저장 일시
    }

    mapping(uint => Video) public videos;

    constructor() public {
        hospital = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == hospital, "Only owner can call this function.");
        _;
    }

    // video 가 hash 된 string 을 가져와서 상태변수 변경.
    // onlyOwner 를 사용하여 병원측만 해당 변수를 바꿀 수 있음.
    function setVideo(uint videoNum, string videoHash, string savePath) public onlyOwner{
        videos[videoNum].videoHash = videoHash;
        videos[videoNum].savePath = savePath;
    }
    
    // video hash 값을 확인하는 함수. 실제 상태변수 변경 X
    function getVideo(uint videoNum) public view returns (Video){
        return videos[videoNum];
    }
}
