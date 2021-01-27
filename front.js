window.onload = () => {;
    const sortBt = document.querySelector("#sortButton");
    const in1 = document.querySelector("#input1");
    const aA = document.querySelector("#arrayArea");
    const algoBt1 = document.querySelector("#algorithm1");
    const algoBt2 = document.querySelector("#algorithm2");
    const algoBt3 = document.querySelector("#algorithm3");
    const algoBt4 = document.querySelector("#algorithm4");

    var dropdown = () => {
        sortBt.addEventListener("mouseenter", () =>  {
            algoBt1.style.opacity = 1;
            algoBt2.style.opacity = 1;
            algoBt3.style.opacity = 1;
            algoBt4.style.opacity = 1;
            setTimeout(removeDropdown(), 5555);
        })
    }

    var removeDropdown = () => {
        sortBt.addEventListener("click", () =>  {
            algoBt1.style.opacity = 0;
            algoBt2.style.opacity = 0;
            algoBt3.style.opacity = 0;
            algoBt4.style.opacity = 0;
        })
    } 

    var merge = () => {
        algoBt1.addEventListener("click", () => {
            setUp();
        })
    }

    var setUp = () => {
        var val1 = in1.value;
        var newVal1 = parseInt(val1);
        var arr = Array.from(String(newVal1), Number);
        algo1(arr, 0, arr.length - 1);
    }

    var algo1 = (arr, index, end) => {
        while (end > index) {
            var attach = Math.floor((index + end) / 2);

            setTimeout(algo1(arr, index, end), 5000);
            setTimeout(algo1(arr, attach + 1, end), 5000);
            setTimeout(algo1Merge(arr, index, middle, end), 5000);
        }
    }

    var algo1Merge = (arr, index, attach, end) => {
        let leftarrlength = attach - index + 1
        let rightarrlength = end - attach;
        let rightarr = [];
        let leftarr = [];
        for (let i = 0; i < leftArrayLength; ++i)
          leftArray[i] = array[start + i];
        for (let i = 0; i < rightArrayLength; ++i)
          rightArray[i] = array[middle + 1 + i];
        let leftindex = 0, rightindex = 0;
        let currentindex = index;;
        while (leftindex < leftarrlength && rightindex < rightarrlength) {
          if (leftarr[leftindex] <= rightarr[rightindex])
            arr[currentindex] = leftarr[leftindex++];
          else
            arr[currentindex] = rightarr[rightindex++]
          currentindex++;
        }
        while (leftindex < leftarrlength) arr[currentindex++] = leftarr[leftindex++]
        while (rightindex < rightarrlength) arr[currentindex++] = rightarr[rightindex++]
        aA.innerHTML = arr;
    }

    var getArray1 = () => {
        in1.addEventListener("keyup", (e) => {
            if (e.keyCode === 13) {
            }
        })
    }

    getArray1();
    dropdown();
    merge();
}
