const fatchingAllData = () =>{
    fetch('https://openapi.programming-hero.com/api/ai/tools')
      .then(res => res.json())
      .then(data => getingData(data.data.tools))
}

const getingData = (data) =>{
    data.slice(0,6).forEach(datas => {
        // console.log(datas);
        const {image,features} = datas
       
        let cardContainer = document.getElementById('card-container');

        cardContainer.innerHTML += `
        <div class="card grid col-md-4 col-12 p-3" >
        <img src="${image ? image : 'no Img found'}" class="card-img-top" alt="...">
        <div class="card-body">
        <h4>Features</h4>
        
         <div class="pb-2">
         <a href="" class="text-decoration-none d-block text-black">1. <span> ${features[0] ? features[0] : 'Not Available'}</span></a>
         <a href="" class="text-decoration-none d-block text-black">2. <span> ${features[1] ? features[1] : 'Not Available'}</span></a>
         <a href="" class="text-decoration-none d-block text-black">3. <span> ${features[2] ? features[3] : 'Not Available'}</span></a>
         </div>

         <hr>
         
        </div>
      </div>
        `
    });
}

fatchingAllData()