function clone(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("test")
        }, 2000)
    })
}

async function msg(callback){
    const msg = await clone()
    console.log("Message:", msg)
    callback()
}

msg(getResult)

function getResult(){
    console.log("exe after");
}
