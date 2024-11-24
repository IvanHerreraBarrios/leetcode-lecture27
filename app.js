//763 problem

var partitionLabels = function(s) {
    if(s.length === 0) return []

    let limit = 0
    for(let i=0; i <= limit; i++){
        for(let j=i+1; j < s.length; j++){
            if(s[i] === s[j] && j > limit) limit = j
        }
    }

    const result = partitionLabels(s.slice(limit+1))
    return [limit+1].concat(result)
};

//941 valid mountain

var validMountainArray = function(arr) {
    if(arr.length < 3) return false
    if(arr[0] >= arr[1]) return false

    let ascending = true
    for(let i=0; i < arr.length -1; i++){
        if(arr[i] === arr[i+1]) return false

        if(ascending && arr[i] > arr[i+1]){
            ascending = false
        } else if(!ascending && arr[i] < arr[i+1]){
            return false
        }
    }

    return !ascending
};


//solution 2
var validMountainArray = function(arr) {
    let length = arr.length
    let i = 0

    while(i < length-1 && arr[i] < arr[i+1]){
        i += 1
    }

    if(i===0 || i===length-1) return false

    while(i < length-1 && arr[i] > arr[i+1]){
        i += 1
    }

    return i === length-1
};