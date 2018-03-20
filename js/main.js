(function(){

		window.onload = function(){

			/*
		        best practice is to pull all the element into variables to avoid searching the DOM for these elements more than once

		        Note: You can use getElementById or querySelector. Both noted in code below
	      	*/
			var incrementButton = document.querySelector("#increment"); //document.getElementById("increment")
			var decrementButton = document.querySelector("#decrement"); //document.getElementById("decrement")
			var counter			= document.querySelector("#counter"); //document.getElementById("counter")
			var clearButton = document.querySelector("#clear");




			//make the counter go up when clicking the + button
			incrementButton.addEventListener("click", function(){

				//calculate the new value for our counter
				var newCounterValue = parseInt(counter.innerHTML) + 1;
					
				//update the counter in the DOM
				counter.innerHTML = newCounterValue;






			})

			//make the counter go up when clicking the - button
			decrementButton.addEventListener("click", function(){

				//calculate the new value for our counter
				var newCounterValue = parseInt(counter.innerHTML) - 1;

	

				//only update the counter value on the screen if the counter is > 0
				if(counter.innerHTML = - 1){
					 counter.innerHTML = newCounterValue;
				}
				

			})


var clear = function() {
    a = 0;
    document.getElementById('counter').innerHTML = 0;
}
var clearButton = document.querySelector("#clear");


clearButton.addEventListener("click", function() {
    clear();
})




		}

	})();