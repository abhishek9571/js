let dataSection = document.querySelector('.sectiondata')


console.log(dataSection);

dataSection.addEventListener('click',(e)=>{

 if(e.target.nodeName === "BUTTON"){
    console.log(e.target.parentElement);
    e.target.parentElement.remove()
 }

})
async function data (){


    let data = await window.fetch("https://jsonplaceholder.typicode.com/posts")
    let rawdata = await data.json()
    console.log(rawdata);
    let fetchedData = " "


   rawdata.map((newdata)=>{

    fetchedData +=`
    
    <aside class="dataSection">

    <p class="pdata">${newdata.id}</p>
    <h1 class="titledata">${newdata.title}</h1>
    <p class="bodydata"> ${newdata.body}</p>
        <button class="btn">delete</button>
                
            </aside>
    
    `

    dataSection.innerHTML = fetchedData
   })
}

data()

