const fatchingAllData = () =>{
    fetch('https://openapi.programming-hero.com/api/ai/tools')
      .then(res => res.json())
      .then(data => getingData(data.data.tools))
      spinner(true)
}

const getingData = (data) =>{
    let datar = []
    // console.log(datar);
   const showLess=  data.slice(0,6);
    showLess.forEach(datas => {
        const showAllCards = document.getElementById('showAllCards');
        
        if (showLess.length >= 6) {
            
            showAllCards.classList.remove('d-none')
        }
        
        const {id,name,image,published_in,features} = datas;

        console.log(published_in);
        let dat = {published_in} 
        datar.push(dat)
        


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
         <div class="d-flex justify-content-between align-items-center mt-3 position-relative">
           <div>
           <h4>${name}</h4>
           <p>${published_in}</p>
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
    //sorting date 
    datar.sort(function (a,b) {
        const aa = new Date(a.published_in)
        const bb = new Date(b.published_in)
        return aa-bb
    })
    console.log(...datar);



    document.getElementById('showMorCard').addEventListener('click',function () {
        document.getElementById('showMorCard').style.display = 'none'
        let cardContainer = document.getElementById('card-container');
        cardContainer.innerHTML = ''
        data.forEach(data =>{
            spinner(true)
            const {id,name,image,published_in,features} = data
            
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
           <p>${published_in}</p>
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

const {description,image_link,input_output_examples,features,integrations,pricing,accuracy} = data;

let values = Object.values(features)
// modal section
let modalContainer = document.getElementById('modalContainer');
modalContainer.innerHTML = `
               <div class="border bg-danger bg-opacity-25 border-danger rounded w-50 p-4 justify-content-center align-item-center">
                    <h4 class="pb-3">${description}</h4>
                    <div class="d-flex gap-4 ">

                    <div class="w25 border text-center p-3 text-success bg-white rounded">
                    <h5 class="w-2 ">${input_output_examples? pricing[0].price : 'Free of Cost/'}</h5>
                    <h5 class="w-2 ">${input_output_examples?  pricing[0].plan  : "Basic"}</h5>
                    </div>

                    <div class="w25 border text-center p-3 text-warning bg-white rounded">
                    <h5 class="w-2 ">${input_output_examples? pricing[1].price : "Free of Cost/"}</h5>
                    <h5 class="w-2 ">${input_output_examples? pricing[1].plan : "Pro"}</h5>
                    </div>


                    <div class="w25 border text-center p-3 text-danger bg-white rounded">
                    <h5 class="w-2 ">${input_output_examples? pricing[2].price : 'Free of Cost/'}</h5>
                    <h5 class="w-2 ">${input_output_examples?  pricing[2].plan  : "Enterprise"}</h5>
                    </div>
                    
                  </div>
                  <footer class="mt-4">
                        <div class=" container d-flex justify-content-between">
                            <div class="w-50">
                                <h5>Features</h5>
                                <span class="d-block fs-6">${values[0].feature_name? values[0].feature_name : 'Not Found'}</span>
                                <span class="d-block">${values[1].feature_name ? values[1].feature_name : 'Not Found'}</span>
                                <span class="d-block">${values[2].feature_name ? values[2].feature_name: 'Not Found'}</span>
                            </div>
                            <div class="w-50 text-center">
                            <h5>Integrations</h5>
                            <span class="d-block">${integrations == undefined  ? integrations[0]: 'Not Found'}</span>
                            <span class="d-block">${integrations == undefined  ? integrations[1] : 'Not Found'}</span>
                            <span class="d-block">${integrations == undefined  ? integrations[2] : 'Not Found'}</span>
                            </div>
                        </div>
                  </footer>
               </div>
               
            <div class="border border-primary w-50 position-relative">

                <div class="card" >
                <img src="${image_link[0]}" class="card-img-top" alt="...">
                <div class="card-body">
                 <h3>${input_output_examples? input_output_examples[0].input : 'not found'}</h3>
                  <p class="">${input_output_examples? input_output_examples[0].output : 'not found'}</p>
                </div>
              </div>
              
              <div id="accoracy" class="d-none position-absolute top-0 end-0 bg-danger px-3 py-2 text-white" ><span>${accuracy.score? (accuracy.score * 100) : 'not found'}</span>% accuracy</div>
            </div>
         
`
if (accuracy.score) {
    const accoracy = document.getElementById('accoracy');
    accoracy.classList.remove('d-none')
    
}

}

fatchingAllData()
document.getElementById('sortBtn').addEventListener('click',function () {
    console.log('btn');
})
