function rotateArray(arr) {
    let rotNum = Number(arr.pop());
    for (let i = 0; i < rotNum; i++) {
        arr.unshift(arr.pop(arr[i]));
    }
    console.log((arr.join(` `)));
}
rotateArray(['1', '2', '3', '4', '2']

);
