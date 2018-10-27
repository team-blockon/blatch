pragma solidity ^0.4.24;

contract PatientInfo {
    // case 1 : 환자 정보 계약 생성

    address private hospital;
    string public patient_hash = '';    // 환자 개인정보 hash 값.
    string public hash_func = '';       // 해시에 쓴 함수.

    event AddPatient(string hashedStr, string hashFunc);
    event ChangePatient();

    constructor() public {
        hospital = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == hospital, "Only owner can call this function.");
        _;
    }

    // TODO : hash 된 환자 개인정보, hash 함수를 인자로 받아서 변수에 저장
    function getPatientInfo(string hashedStr, string hashFunc) public {
        patient_hash = hashedStr;
        hash_func = hashFunc;
    }

    function changePatientInfo(){

    }

    function deploy() public onlyOwner {
        emit AddPatient(patient_hash, hash_func);
    }
}