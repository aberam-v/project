let java = new Promise(function(resolve, reject) {
    let operation = true;
    if (operation) {
        resolve("Successful!");
    } else {
        reject("Failed!");
    }
});
async function example() {
    console.log("thread one executed");

    let result = await new Promise(function(resolve) {
        setTimeout(function() {
            resolve("thread two is executed");
        }, 4000);
    });

    console.log(result);
    console.log("thread three is executed");
}
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));