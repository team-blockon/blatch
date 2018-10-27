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
        name: 'doctor',
        type: 'string'
      },
      {
        name: 'patient',
        type: 'string'
      },
      {
        name: 'surgeryName',
        type: 'string'
      },
      {
        name: 'surgeryDate',
        type: 'string'
      },
      {
        name: 'savePath',
        type: 'string'
      },
      {
        name: 'saveDate',
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
        name: 'videoHash',
        type: 'string'
      },
      {
        name: 'savePath',
        type: 'string'
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
            name: 'doctor',
            type: 'string'
          },
          {
            name: 'patient',
            type: 'string'
          },
          {
            name: 'surgeryName',
            type: 'string'
          },
          {
            name: 'surgeryDate',
            type: 'string'
          },
          {
            name: 'savePath',
            type: 'string'
          },
          {
            name: 'saveDate',
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
