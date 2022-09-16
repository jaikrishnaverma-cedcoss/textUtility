import React from 'react';
import { useState } from 'react';
function NumberToWords() {
    const [text,setText]=useState(0)
    const Ones  = ["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten",
                "Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],
      Tens  = ["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety","Hundred"],
      Scale = ["","Thousand","Million","Billion","Trillion","Quadrillion","Quintillion","Sextillion"];

    
    const toNumber=(n)=>{
        if (n == 0) return "Zero";                                   // check for zero
        n = ("0".repeat(2*(n+="").length % 3) + n).match(/.{3}/g);   // create triplets array
        if (n.length > Scale.length) return "Too Large";             // check if larger than scale array
        let out= ""; return n.forEach((Triplet,pos) => {             // loop into array for each triplet
        if (+Triplet) { out+=' ' +(+Triplet[0] ? Ones[+Triplet[0]]+' '+ Tens[10] : "") +
              ' ' + (+Triplet.substr(1)< 20 ? Ones[+Triplet.substr(1)] :
                     Tens[+Triplet[1]] + (+Triplet[2] ? "-" : "") + Ones[+Triplet[2]]) +
              ' ' +  Scale[n.length-pos-1]; }
        }),out.replace(/\s+/g,' ').trim();
    }
    return ( 
        <>
        <div className="main row flexJCC" style={{color:"white"}}>
        <div className="col dbg2 w33 card">
            <h3 className="m1">Number to Words</h3>
            <label htmlFor="" className='p1'>Please Enter No.</label>
            <input type="text" onChange={(e)=>setText(e.target.value)} value={text}/>
            <p className='p3 btn-danger bRd5'>{toNumber(text)}</p>
        </div>
        </div>
        </>
     );
}

export default NumberToWords;