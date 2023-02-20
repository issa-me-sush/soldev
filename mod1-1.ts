import {PublicKey,Connection,clusterApiUrl} from "@solana/web3.js"

async function getBalanceUsingWeb3(address: PublicKey): Promise<number> {
    const connection = new Connection(clusterApiUrl('devnet'));
    return connection.getBalance(address);
}

const publicKey = new PublicKey('3Azukpwy82t3maLYiZUgLj8BzcvX9Mt4oK38poDfrLNd')
getBalanceUsingWeb3(publicKey).then(balance => {
    console.log(balance)
})
