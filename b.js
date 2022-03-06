/**
 * 
 * @param {function} fn 
 */
// const n = 5;
// const inso = (fn) => {
//         for(let i = 0;i<n; i++){
//             consolo.log(" ")
//            for(let u ;u<=i;u++){
//                console.log("*")
//            }
//         }
// };
// inso(n)

let n =5;
const tamgiac = function(n) {
        for(let i = 0;i<=n; i++){
        let hinh ="";
           for(let u=0 ;u<i;u++){  
            hinh+="*";
           }
           console.log(hinh)
        }
};
const tamgiacn = function(n) {
        for(let i = n;i>0; i--){
        let hinh ="";
           for(let j=1 ;j<=i;j++){
            hinh += "*";
           } 
           console.log(hinh)
        }
};
const tamgiacr = function(n) {
        for(let i = n;i>0; i--){
        let hinh ="";
           for(let j=0 ;j<=i;j--){
                if(i==0||i==n||j==0||j==i){
                hinh += "*";
                }else{
                        hinh+=" ";
                };
           } 
           console.log(hinh)
        }
};
const chunhatso = function(n) {
        for(let i = 0;i<=n; i++){
        let hinh ="";
           for(let j=0 ;j<=n-1;j++){
                if(i==0||i==n){
                        hinh += "";
                }else{
                        if(j==0||j==i){
                                hinh += "0";
                        }else{
                                hinh+="2";
                        };
                };
           } 
           console.log(hinh)
        }
};
chunhatso(n);
