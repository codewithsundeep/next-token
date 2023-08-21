import {sign,verify} from './dist/index.js'

async function testing(){
let token=await sign({a:'shubham',b:'CodemasterSundeep'},'secretcodemaster')
console.log("token is ",token)
let vf=await verify(token,'secretcodemastershubham')
console.log("payload is verified",vf)
}
testing()