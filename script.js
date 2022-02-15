// document.querySelector('a').addEventListener('click', function(event) {
//     event.preventDefault();
//     this.textContent = "Yandex";
// });
// document.querySelector('a').addEventListener('contextmenu', function(event) {
//     event.preventDefault();
//     this.style.background = "red";
// });
// document.querySelector('a').addEventListener('dblclick', function(event) {
//     event.preventDefault();
//     this.remove();
// })
// document.body.addEventListener('click', function(event) {
//     let div = document.createElement('div');
//     document.body.append(div);


// let size = (Math.random() *50).toFixed(0);
// let half = size / 2;

// div.style.width = `${size}px`;
// div.style.height = `${size}px`;
// div.style.borderRadius = `${half}px`;
// let red = (Math.random() * 255).toFixed(0);
// let green = (Math.random() * 255).toFixed(0);
// let blue = (Math.random() * 255).toFixed(0);
// div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

// div.style.position = 'absolute';
// div.style.top = `${event.clientY - half}px`;
// div.style.left = `${event.clientX - half}px;`

// });

let list = ['Apple', 'Banana', 'Cherry'];

let ul = document.createElement('ul');
document.body.append(ul);

list.forEach(function(item) {
    let li = document.createElement('li');
    li.textContent = item;
    ul.append(li);
});
li.addEventListener('click', function() {
    li.style.textDecoration = 'line-through';
});
li.addEventListener('dblclick', function() {
    li.remove();})

    let input = document.createElement('input');

    document.body.append(input);
    let button = document.createElement('button');
    button.textContent = "Add";
    document.body.append(button);
    button.addEventListener('click', function() {
        let li = document.createElement('li');
        li.textContent = item;
        ul.append(li);
    });
    li.addEventListener('click', function() {
        li.style.textDecoration = 'line-through';
    });  
    })