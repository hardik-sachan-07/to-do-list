let input = document.getElementById('input');
let btn = document.getElementById('btn');
let list = document.getElementById('ul')

btn.addEventListener('click', function(){
    var para = document.createElement('p')
    para.innerText = input.value;
    list.appendChild(para);
    para.style.textAlign = 'center'
    para.style.fontSize = '1.1rem'
    para.style.color = 'white'
    para.style.marginTop = '20px'
    para.style.marginLeft = '10px'
    para.style.marginRight = '10px'
    para.style.marginBottom = '10px'
    input.value = ''
    para.addEventListener('dblclick', function(){
        para.innerText = null
    })
})