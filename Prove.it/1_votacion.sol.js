//SPDX-License-Identifier: MIT
pragma solidity >=0.7.4;

contract votacion {
    address public sindico;
    string public pauta;

    enum Opcion {si, no, nulo, abstencion}

    mapping (Opcion=>address []) voto;
    mapping (address=> bool) votantes;

    constructor (string memory _pauta){
        sindico = msg.sender;
        pauta = _pauta;
    }

    function votar (Opcion _opcion) public {
        require (!votantes [msg.sender], "Esta persona ya ha votado");
        voto[_opcion].push(msg.sender);
        votantes [msg.sender] = true;
        

    }

    function verResultado (Opcion _opcion) public view returns (address[] memory) {
        return (voto [_opcion]);

    }

}