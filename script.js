// your code here
function submit(){
	const name=document.querySelector("#name").value
	const year=document.querySelector("#year").value

	if(name && year){
		document.querySelector("#url").textContent =`https://localhost:8080/?name=${name}&year=${year}`
	}
 else if(name){
	 document.querySelector("#url").textContent =`https://localhost:8080/?name=${name}`
 }
else if(year){
	document.querySelector("#url").textContent = `https://localhost:8080/?year=${year}`
}
else document.querySelector("#url").textContent ="https://localhost:8080/"
}