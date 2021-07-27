const container = document.querySelector(".data-container");
function generatebars(num = 200) {
    
  //for loop to generate 200 bars
  for (let i = 0; i < num; i += 1) {
  
    // To generate random values from 1 to 500
    const value = Math.floor(Math.random() * 500) + 1; 
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${value * 1}px`;
    bar.style.transform = `translateX(${i * 6}px)`;
    const barLabel = document.createElement("label");
    barLabel.classList.add("bar_id");
    barLabel.innerHTML = value;
    bar.appendChild(barLabel);
    container.appendChild(bar);
  }
}

async function selectionsort(delay = 1) {
    let bars = document.querySelectorAll(".bar");
     var min_idx = 0;
     for (var i = 0; i < bars.length; i += 1) {
      min_idx = i;
      bars[i].style.backgroundColor = "darkblue";
      for (var j = i + 1; j < bars.length; j += 1) {
    
        bars[j].style.backgroundColor = "red";
          
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, delay)
        );
     
        var val1 = parseInt(bars[j].childNodes[0].innerHTML);
        var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);
          
        // Compare val1 & val2
        if (val1 < val2) {
          if (min_idx !== i) {
            bars[min_idx].style.backgroundColor = "  rgb(24, 190, 255)";
          }
          min_idx = j;
        } else {
    
          // Provide skyblue color to the jth bar
          bars[j].style.backgroundColor = "  rgb(24, 190, 255)";
        }
      }
    
      // To swap ith and (min_idx)th bar
      var temp1 = bars[min_idx].style.height;
      var temp2 = bars[min_idx].childNodes[0].innerText;
      bars[min_idx].style.height = bars[i].style.height;
      bars[i].style.height = temp1;
      bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
      bars[i].childNodes[0].innerText = temp2;
        
      // To pause the execution of code for 1 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
    
      // Provide skyblue color to the (min-idx)th bar
      bars[min_idx].style.backgroundColor = "  rgb(24, 190, 255)";
    
      // Provide lightgreen color to the ith bar
      bars[i].style.backgroundColor = " rgb(49, 226, 13)";
    }
}

async function insertionsort(delay = 1) {
    let bars = document.querySelectorAll(".bar");
    
    // Provide lightgreen colour to 0th bar
    bars[0].style.backgroundColor = " rgb(49, 226, 13)";
    for (var i = 1; i < bars.length; i += 1) {
    
      // Assign i-1 to j
      var j = i - 1;
      var key = parseInt(bars[i].childNodes[0].innerHTML);
      var height = bars[i].style.height;
    
      //Provide darkblue color to the ith bar 
      bars[i].style.backgroundColor = "darkblue";
        
      // To pause the execution of code for 1 milliseconds
      await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    
      // For placing selected element at its correct position 
      while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) {
          
        // Provide darkblue color to the jth bar
        bars[j].style.backgroundColor = "darkblue";
          
        // For placing jth element over (j+1)th element
        bars[j + 1].style.height = bars[j].style.height;
        bars[j + 1].childNodes[0].innerText = bars[j].childNodes[0].innerText;
    
        // Assign j-1 to j
        j = j - 1;
    
        // To pause the execution of code for 1 milliseconds
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, delay)
        );
          
        // Provide lightgreen color to the sorted part
        for(var k=i;k>=0;k--){
          bars[k].style.backgroundColor = " rgb(49, 226, 13)";
        }
      }
    
      // Placing the selected element to its correct position
      bars[j + 1].style.height = height;
      bars[j + 1].childNodes[0].innerHTML = key;
         
      // To pause the execution of code for 1 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
        
      // Provide light green color to the ith bar
      bars[i].style.backgroundColor = " rgb(49, 226, 13)";
    }
  }


async function bubblesort(delay =1){
    var blocks = document.querySelectorAll(".bar");
  
    // BubbleSort Algorithm
    for (var i = 0; i < blocks.length-1; i++) {
        for (var j = 0; j < blocks.length - i - 1; j++) {
  
            // To change background-color of the
            // blocks to be compared
            blocks[j].style.backgroundColor = "#FF4949";
            blocks[j + 1].style.backgroundColor = "#FF4949";
  
            // To wait for 1 msec
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, delay)
            );
            var value1 = parseInt(blocks[j].childNodes[0].innerHTML);
            var value2 = parseInt(blocks[j + 1].childNodes[0].innerHTML);
  
            // To compare value of two blocks
            if (value1 > value2) {
                var temp1 = blocks[j].style.height;
                var temp2 = blocks[j].childNodes[0].innerText;
                blocks[j].style.height = blocks[j+1].style.height;
                blocks[j+1].style.height = temp1;
                blocks[j].childNodes[0].innerText =blocks[j+1].childNodes[0].innerText;
                blocks[j+1].childNodes[0].innerText = temp2;
                blocks = document.querySelectorAll(".bar");
            }
  
            // Changing the color to the previous one
            blocks[j].style.backgroundColor = "#6b5b95";
            blocks[j + 1].style.backgroundColor = "#6b5b95";
        }
  
        //changing the color of greatest element 
        //found in the above traversal
        blocks[blocks.length - i - 1].style.backgroundColor = "#13CE66";
    }
}


async function partition(l, r) {
    var blocks = document.querySelectorAll(".bar");
    
    // Storing the value of pivot element
    var pivot = parseInt(blocks[r].childNodes[0].innerHTML);
    var i = l - 1;
    blocks[r].style.backgroundColor = "red";
    
    for (var j = l; j <= r - 1; j++) {
      blocks[j].style.backgroundColor = "yellow";

      // To wait for 1 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 1)
      );
      var value = parseInt(blocks[j].childNodes[0].innerHTML);
    
      // To compare value of two blocks
      if (value < pivot) {
        i++;
        var temp1 = blocks[i].style.height;
        var temp2 = blocks[i].childNodes[0].innerText;
        blocks[i].style.height = blocks[j].style.height;
        blocks[j].style.height = temp1;
        blocks[i].childNodes[0].innerText =blocks[j].childNodes[0].innerText;
        blocks[j].childNodes[0].innerText = temp2;
        blocks[i].style.backgroundColor = "orange";
        if (i != j) blocks[j].style.backgroundColor = "pink";
        //To wait for 1 milliseconds
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, 1)
        );
      } else blocks[j].style.backgroundColor = "pink";
    }
    // Swapping the ith with pivot element
    i++;
    var temp1 = blocks[i].style.height;
    var temp2 = blocks[i].childNodes[0].innerText;
    blocks[i].style.height = blocks[r].style.height;
    blocks[r].style.height = temp1;
    blocks[i].childNodes[0].innerText =blocks[r].childNodes[0].innerText;
    blocks[r].childNodes[0].innerText = temp2;
    blocks[r].style.backgroundColor = "pink";
    blocks[i].style.backgroundColor = "green";
    
    // To wait for 1 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 1)
    );
    for (var k = 0; k < 200; k++) 
    blocks[k].style.backgroundColor = "rgb(49, 226, 13)";


    return i;
  }


async function quicksort(l, r) {
    if (l < r) {
      var pivot_idx = await partition(l, r);
      await quicksort(l, pivot_idx - 1);
      await quicksort(pivot_idx + 1, r);
    }
}


generatebars();

function generate()
{
  window.location.reload();
}

function disable(){
    document.getElementById("Button1").disabled = true;
    document.getElementById("Button2").disabled = true;
    document.getElementById("Button3").disabled = true;
    document.getElementById("Button4").disabled = true;
    document.getElementById("Button5").disabled = true;
}

function enable(){
    document.getElementById("Button1").disabled = false;
    document.getElementById("Button2").disabled = false;
    document.getElementById("Button3").disabled = false;
    document.getElementById("Button4").disabled = false;
    document.getElementById("Button5").disabled = false;
}