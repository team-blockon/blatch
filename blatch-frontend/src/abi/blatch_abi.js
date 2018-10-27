const abi = [
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    name: 'videos',
    outputs: [
      {
        name: 'videoHash',
        type: 'string'
      },
      {
        name: 'video_no',
        type: 'uint256'
      },
      {
        name: 'doctor',
        type: 'bytes32'
      },
      {
        name: 'patient',
        type: 'bytes32'
      },
      {
        name: 'surgeryName',
        type: 'string'
      },
      {
        name: 'surgeryDate',
        type: 'string'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    constant: false,
    inputs: [
      {
        name: 'videoNum',
        type: 'uint256'
      },
      {
        components: [
          {
            name: 'videoHash',
            type: 'string'
          },
          {
            name: 'video_no',
            type: 'uint256'
          },
          {
            name: 'doctor',
            type: 'bytes32'
          },
          {
            name: 'patient',
            type: 'bytes32'
          },
          {
            name: 'surgeryName',
            type: 'string'
          },
          {
            name: 'surgeryDate',
            type: 'string'
          }
        ],
        name: 'data',
        type: 'tuple'
      }
    ],
    name: 'setVideo',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [
      {
        name: 'videoNum',
        type: 'uint256'
      }
    ],
    name: 'getVideo',
    outputs: [
      {
        components: [
          {
            name: 'videoHash',
            type: 'string'
          },
          {
            name: 'video_no',
            type: 'uint256'
          },
          {
            name: 'doctor',
            type: 'bytes32'
          },
          {
            name: 'patient',
            type: 'bytes32'
          },
          {
            name: 'surgeryName',
            type: 'string'
          },
          {
            name: 'surgeryDate',
            type: 'string'
          }
        ],
        name: '',
        type: 'tuple'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  }
];

export default abi;
