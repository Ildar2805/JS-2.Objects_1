function simple(n) {
    const result = [];
    let i = 1;
    while (i <= n)  {
        for (let a = 2;; a++) {
            let check = 0;
            for (let b = 2; b <= a; b++) {
                if (a % b === 0 && b < a) {
                    check = 1;
                    break;
                }
            }
            if (!result.includes(a) && check == 0) {
                result[i-1] = a;
            } 
            if (result.length === i) {
                break;
            } 
        }
        i++;
    }
    return result;
}

console.log(simple(process.argv[2]));
