var campos = [
    document.querySelector("#data"),
    document.querySelector("#quantidade"),
    document.querySelector("#valor"),
];

// console.log(campos);

document.querySelector('.form').addEventListener('submit', function (event) {
    var tr = document.createElement('tr');
    event.preventDefault();
    campos.forEach(function (campo) {
        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    })
}
);