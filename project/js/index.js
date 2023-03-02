const fatchingAllData = () =>{
    fetch('https://openapi.programming-hero.com/api/ai/tools')
      .then(res => res.json())
      .then(data => getingData(data.data.tools))
      spinner(true)
}

const getingData = (data) =>{

   const showLess=  data.slice(0,6);
    showLess.forEach(datas => {
        const showAllCards = document.getElementById('showAllCards');
        if (showLess.length >= 6) {
            
            showAllCards.classList.remove('d-none')
        }
        
        const {id,name,image,features} = datas
       
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
           <div> <span class="img-fluid btn btn-outline-danger rounded-circle" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="getDataOfModal('${id}')"> <img style="width: 25px;" src="img/key.png" alt="" class="text-danger"> </span></div>
          </div>
          </div>
          </div>
      </div>
        `
        spinner(false) 
    });
    
    document.getElementById('showMorCard').addEventListener('click',function () {
        
        let cardContainer = document.getElementById('card-container');
        cardContainer.innerHTML = ''
        if (data < 6) {
            showAllCards.classList.add('d-none')
        }
        data.forEach(data =>{
            spinner(true)
            const {id,name,image,features} = data
            
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
           <div><span class="img-fluid btn btn-outline-danger rounded-circle" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="getDataOfModal('${id}')"> <img style="width: 25px;" src="img/key.png" alt="" class="text-danger"> </span></div>
          </div>
          </div>
          </div>
      </div>
        `
        })
        spinner(false)
    })
}
const spinner = (isLoading) =>{
    const spinner = document.getElementById('spinner');
    if (isLoading) {
        spinner.classList.remove('d-none')
    }
    else{
        spinner.classList.add('d-none') 
    }

}
const getDataOfModal = (id) =>{
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
      .then(res => res.json())
      .then(data => setDataOfModal(data.data))
}

const setDataOfModal = (data) =>{
console.log(data);
const {description,features,integrations,pricing} = data;
console.log(features);
let modalContainer = document.getElementById('modalContainer');
modalContainer.innerHTML = `
               <div class="border bg-danger bg-opacity-25 border-danger rounded w-50 p-4 justify-content-center align-item-center">
                    <h4 class="pb-3">${description}</h4>
                    <div class="d-flex gap-4 ">

                    <div class="w25 border text-center p-3 text-success bg-white rounded">
                    <h5 class="w-2 ">${pricing[0].price ? pricing[0].price : "Free of cost"}</h5>
                    <h5 class="w-2 ">${pricing[0].plan ? pricing[0].plan : "No data Found"}</h5>
                    </div>

                    <div class="w25 border text-center p-3 text-success bg-white rounded">
                    <h5 class="w-2 ">${pricing[1].price ? pricing[1].price : "Free of cost"}</h5>
                    <h5 class="w-2 ">${pricing[1].plan ? pricing[1].plan : "No data Found"}</h5>
                    </div>


                    <div class="w25 border text-center p-3 text-success bg-white rounded">
                    <h5 class="w-2 ">${pricing[2].price ? pricing[2].price : "Free of cost"}</h5>
                    <h5 class="w-2 ">${pricing[2].plan ? pricing[2].plan : "No data Found"}</h5>
                    </div>
                    
                  </div>
                  <footer class="mt-4">
                        <div class=" container d-flex justify-content-between">
                            <div class="w-50">
                                <h5>Features</h5>
                                <span class="d-block">${features}integrations</span>
                                <span class="d-block">hello</span>
                                <span class="d-block">hello</span>
                            </div>
                            <div class="w-50">
                            <h5>Integrations</h5>
                            <span class="d-block">${integrations? integrations[0]: 'nodata found'}</span>
                            <span class="d-block">${integrations? integrations[1]: 'nodata found'}</span>
                            <span class="d-block">${integrations? integrations[2]: 'nodata found'}</span>
                            </div>
                        </div>
                  </footer>
               </div>
                <div class="border border-primary w-50"></div>
         
`
}

fatchingAllData()