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
        setTimeout(algo1(arr, 0, arr.length - 1), 5000);
    }

    const algo1 = (arr, index, end) => {
      if (index < end) {
        const attach = Math.floor((index + end) / 2);
        setTimeout(algo1(arr, index, attach), 5000);
        setTimeout(algo1(arr, attach + 1, end), 5000);
        setTimeout(algo1Merge(arr, index, attach, end), 5000);
      }
      return 0;
    }

    const algo1Merge = (arr, index, attach, end) => {
      const leftarrlength = attach - index + 1;
      const rightarrlength = end - attach;
      const rightarr = [];
      const leftarr = [];
      for (let i = 0; i < leftarrlength; ++i)
        leftarr[i] = arr[index + i];
      for (let i = 0; i < rightarrlength; ++i)
        rightarr[i] = arr[attach + 1 + i];
      while (leftarr.length && rightarr.length) {
        if (leftarr[0] < rightarr[0]) arr[index] = leftarr.shift();
        else arr[index] = rightarr.shift();
        index++;
      }
      arr.splice(index, [...leftarr, ...rightarr].length, ...[...leftarr, ...rightarr]);
      console.log(arr)
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

