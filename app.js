const API = 'https://dog.ceo/api/breeds/image/random/51';
const column = document.querySelector('.column');
const button = document.querySelector('.button');
const clear = document.querySelector('#clear')
function markup(el){
  const markup =   `
  <div class="card">
        <div class="card-image">
            <figure class="image-dog">
                <img src="${el}">
            </figure>            
        </div>
    </div>`
    return markup;
};



const dogs = async()=>{
    const response = await fetch(API);
    const json = await response.json()
    column.innerHTML = '';
    json.message.forEach(dog=>{
       
        column.insertAdjacentHTML('beforeend',markup(dog))
    });

}




button.addEventListener('click',()=>{
    dogs();
});

clear.addEventListener('click',()=>{
  column.innerHTML = '';
})
