const joke = document.querySelector('.joke');
const btn = document.querySelector('#btn');
const btnHindi = document.querySelector('#btn-hindi');
btn.addEventListener('click' ,function fetchData(){
    fetch('https://official-joke-api.appspot.com/random_joke').
    then(resp => resp.json()).
    then( data => {
        joke.innerHTML = `<img src="img/eye.png" width="50px"> ${data.setup} <br> <span class="punch">${data.punchline}</span><img src="img/funny.png" class="img-funny" width="100px">`;
    });
}     
    );
    
    btnHindi.addEventListener('click' ,function fetchData(){
        fetch('https://gofugly.in/api/content/18').
        then(resp => resp.json()).
        then( data => {
            console.log(data);
                var x = Math.floor((Math.random() * 10) + 1 +(Math.random() * 1000));
                joke.innerHTML = `<img src="img/eye.png" width="50px"> ${data.result[x].joke} <br> <span class="punch"></span><img src="img/funny.png" class="img-funny" width="100px">`;
        
        });
    }     
        );
   

      