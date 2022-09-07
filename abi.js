const abi = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "caller",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "task",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "completed",
          "type": "bool"
        }
      ],
      "name": "TaskAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "ID",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "completed",
          "type": "bool"
        }
      ],
      "name": "TaskCompleted",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_task",
          "type": "string"
        }
      ],
      "name": "addTask",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "taskID",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_addr",
          "type": "address"
        }
      ],
      "name": "completeTask",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_addr",
          "type": "address"
        }
      ],
      "name": "getTask",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "task",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "completed",
              "type": "bool"
            }
          ],
          "internalType": "struct TodoList.Todo[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "taskID",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_addr",
          "type": "address"
        }
      ],
      "name": "removeTask",
      "outputs": [],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_task",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "taskID",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_addr",
          "type": "address"
        }
      ],
      "name": "updateTask",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]

  export default abi;