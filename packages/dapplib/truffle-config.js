require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom security chat crater remember smile guess kiwi flock ghost'; 
let testAccounts = [
"0xa0baffeaeb9097a2b45bcc2a536d77e664ec5107182fb7baf6e630eaceb411ce",
"0xc685b634829705402f45924541d799e27eb2a1985022e3f0e19d48eeac64ffe2",
"0x269e21958aebe9039ba38bcdc89ae1bcc043038248408113c51c9a0cf4e4a243",
"0x727e9ddf9e6d28fda7cacbb83d94ef03abccbe3ca0db2e74c89cd4461becda01",
"0x61f62109a02133fb38ac214d7b91fac71038e562b4cfce0ce4bd386533d4b517",
"0x66130023179d028b6342e7af4fb4b64b9326870b2b5a08e0e6e2f766dd2b29d8",
"0xbf6ab618884832580e909cbe257a8fc8bb747ab59ceb33b5960ae560687d698d",
"0xe70bcc865e45a430a3f57355f434afb3e50b162f229d6d425c6e0a4120301164",
"0x3433b82d90e2ed42a89b122174ee0f8c4a92df6a8c457a38ee5f7d49d33987fc",
"0x0d40a8e44184bafc3b81e68f90a18de03bb6f2b1d217be1b824857e129c08491"
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
            version: '^0.8.0'
        }
    }
};

