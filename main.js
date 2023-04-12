ref=document.getElementById("ref");
		var full=document.getElementById("full"); 
		var ll=document.getElementById("l1"); 
		var tl=document.getElementById("t1"); 
		var ml=document.getElementById("m1"); 
		
		var lion=document.getElementById("cricket");
		var tiger=document.getElementById("football");
		var monkey=document.getElementById("kabadi");
		
		full.addEventListener("scroll",function(){
			var x=ref.offsetTop;
			if(x<cricket.offsetTop+football.offsetHeight/2){
				ll.classList.add("class");
				tl.classList.remove("class");
				ml.classList.remove("class");
			}
			else if(x>=cricket.offsetTop+football.offsetHeight/2 && x<=football.offsetTop+kabadi.offsetHeight/2){
				ll.classList.remove("class");
				tl.classList.add("class");
				ml.classList.remove("class");
			}
			else{
				ll.classList.remove("class");
				tl.classList.remove("class");
				ml.classList.add("class");
			}
		})