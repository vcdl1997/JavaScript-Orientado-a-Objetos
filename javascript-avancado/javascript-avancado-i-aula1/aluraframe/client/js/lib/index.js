var campos = [
	document.querySelector("#data"),
	document.querySelector("#quantidade"),
	document.querySelector("#valor")
];

console.log(campos);

var tbody = document.querySelector("table tbody");

document.querySelector(".form").addEventListener("submit", (event)=>{
	event.preventDefault();

	var tr = document.createElement("tr");

	campos.forEach((campo)=>{
		var td = document.createElement("td");
		td.textContent = campo.value;
		tr.appendChild(td);
	});	

	var tdVolume = document.createElement("td");
	tdVolume.textContent = Number(campos[1].value) * Number(campos[2].value);
	tr.appendChild(tdVolume);
	tbody.appendChild(tr);

	campos[0].value = '';
	campos[1].value = 1;
	campos[2].value = 0;

	campos[0].focus();
});
