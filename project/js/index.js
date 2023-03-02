const fatchingAllData = () =>{
    fetch('https://openapi.programming-hero.com/api/ai/tools')
      .then(res => res.json())
      .then(data => getingData(data.data.tools))
}

const getingData = (data) =>{

   const showLess=  data.slice(0,6);
    showLess.forEach(datas => {
        const showAllCards = document.getElementById('showAllCards');
        if (showLess.length >= 6) {
            
            showAllCards.classList.remove('d-none')
        }
        else{
            showAllCards.classList.add('d-none')
        }
        const {name,image,features} = datas
       
        let cardContainer = document.getElementById('card-container');

        cardContainer.innerHTML += `
        <div class="card grid col-md-4 col-12 p-3 pb-1" >
        <img src="${image ? image : 'no Img found'}" class="card-img-top" alt="...">
        <div class="card-body">
        <h4>Features</h4>
        
         <div class="pb-2">
         <a href="" class="text-decoration-none d-block text-black">1. <span> ${features[0] ? features[0] : 'Not Available'}</span></a>
         <a href="" class="text-decoration-none d-block text-black">2. <span> ${features[1] ? features[1] : 'Not Available'}</span></a>
         <a href="" class="text-decoration-none d-block text-black">3. <span> ${features[2] ? features[3] : 'Not Available'}</span></a>
         </div>

         <hr>
         <div class="d-flex justify-content-between align-items-center mt-3">
           <div>
           <h4>${name}</h4>
           <p>date</p>
           </div>
           <div>
           <div> <a href="" class=" "></a> <span class="img-fluid btn btn-outline-danger rounded-circle" > <img style="width: 25px;" src="img/key.png" alt="" class="text-danger"> </span></div>
          </div>
          </div>
          </div>
      </div>
        `
    });
}

fatchingAllData()