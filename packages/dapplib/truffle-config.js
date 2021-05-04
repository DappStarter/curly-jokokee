require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process only venture stove dash pumpkin uniform grace civil army gate'; 
let testAccounts = [
"0x3d2815abc900e5622edd8c7b20597b65c266c3daba841a0172dd0bb43c683963",
"0x5a4d2556fd4c8d39ddb31b7b0b349d7a830eb916a154a212ba645106efbd154e",
"0x41e6207d1e39a75164e2761df47b94f2c90708082669af5c35962880ce787d6c",
"0x2f8f0f6545b153ce76695def29654baa066b69f0955a8dff241753363791b32c",
"0x82a93af89070a2d2b509659db86b68a633b89c389bb99383c1fa67a41014a0b9",
"0x7b9d51be6aa33895d0f6efb4fa14bd8ff1cc8fbc1c0f6c2a5a9474d353416025",
"0x389e7f4441a1f44027334150e7b45a7af517d8d786e4c440d90d95265be5d402",
"0xd5811548dde88c6366e1e16f5071f0d05dab669edb15e057f8576adab22e0f25",
"0x665e4f316373ffb5142d251a06229b6cd7da526c49ea23cca39a6931173da32b",
"0x174a783774c583589463d0f9f4952dba5cdc7cfa8a4e324055f07d5a3753868e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
