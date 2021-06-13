import fs from 'fs';
import readline from 'readline';
import {fileURLToPath} from 'url';
import {dirname} from 'path';
import {getHand, getWinner} from "../../../reusable/poker.js";
import {reduceSum, sequence} from "../../../reusable/myMath.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log("XOR decryption");
console.log(`Each character on a computer is assigned a unique code and the preferred standard is ASCII (American Standard Code for Information Interchange). For example, uppercase A = 65, asterisk (*) = 42, and lowercase k = 107.

A modern encryption method is to take a text file, convert the bytes to ASCII, then XOR each byte with a given value, taken from a secret key. The advantage with the XOR function is that using the same encryption key on the cipher text, restores the plain text; for example, 65 XOR 42 = 107, then 107 XOR 42 = 65.

For unbreakable encryption, the key is the same length as the plain text message, and the key is made up of random bytes. The user would keep the encrypted message and the encryption key in different locations, and without both "halves", it is impossible to decrypt the message.

Unfortunately, this method is impractical for most users, so the modified method is to use a password as a key. If the password is shorter than the message, which is likely, the key is repeated cyclically throughout the message. The balance for this method is using a sufficiently long password key for security, but short enough to be memorable.

Your task has been made easy, as the encryption key consists of three lower case characters. Using p059_cipher.txt (right click and 'Save Link/Target As...'), a file containing the encrypted ASCII codes, and the knowledge that the plain text must contain common English words, decrypt the message and find the sum of the ASCII values in the original text.`);
console.log("https://projecteuler.net/problem=59");
const start = performance.now();

const data = fs.readFileSync(__dirname+"/p059_cipher.txt",'utf8').split(',').map(x=>parseInt(x));
const testwords = fs.readFileSync(__dirname+"/p059_commonWords.txt",'utf8').split(',').map(x=>x.toLowerCase());

const lettersInAscci = sequence(26,"a".charCodeAt(0));


const decrypt = (key)=>{
    return data.map((n,i)=>String.fromCharCode( n^(key[i%key.length])  ) ).join("");
}

let maxKey = null;
let maxHits = 0;

for (let i=0;i<lettersInAscci.length;i++){
    for (let j=0;j<lettersInAscci.length;j++){
        for (let k=0;k<lettersInAscci.length;k++){
            const key = [lettersInAscci[i],lettersInAscci[j],lettersInAscci[k]];
            const text = decrypt(key).toLowerCase();
            const hits=testwords.filter(w=>text.includes(w)).length;
            if (hits > maxHits){
                maxHits = hits;
                maxKey=key;
            }
        }
    }
}
const text = decrypt(maxKey);
const key = maxKey.map(n=>String.fromCharCode(n)).join("");

console.log(text,maxHits,key);

const result = reduceSum(text.split("").map(c=>c.charCodeAt(0)));
const end = performance.now();
console.log(`Solution (${((end - start) / 1000).toFixed(4)}s): `, result);
