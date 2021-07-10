const list=document.querySelector('#Comparer');
const b1=document.querySelector('#b1');
const b5=document.querySelector('#b5');
const form= document.querySelector('#f1');
const form2= document.querySelector('#f2');
const div55=document.querySelector('#div55');
const div1=document.querySelector('#div1');
var z=1;
var i=1;


function renderComparer(doc)
{
    var table=document.getElementById('Comparer');
    var row = table.insertRow(z++);
    var no = row.insertCell(0);
    var fan = row.insertCell(1);
    var ac = row.insertCell(2);
    var fridge = row.insertCell(3);
    var tv = row.insertCell(4);
    var iron = row.insertCell(5);
    var geyser = row.insertCell(6);
    var tubelights = row.insertCell(7);
    var induction = row.insertCell(8);

    no.innerHTML=doc.data().No;
    fan.innerHTML= doc.data().Fan;
    ac.innerHTML= doc.data().AC;
    fridge.innerHTML= doc.data().Fridge;
    tv.innerHTML=doc.data().TV;
    iron.innerHTML=doc.data().Iron;
    geyser.innerHTML=doc.data().Geyser;
    tubelights.innerHTML=doc.data().Tubelights;
    induction.innerHTML=doc.data().Induction;

    // let li=document.createElement('table');
    // let No=document.createElement('span');
    // let Fan= document.createElement('span');
    // let AC= document.createElement('span');
    // let Fridge=document.createElement('span');
    // let TV=document.createElement('span');
    // let Iron =document.createElement('span');
    // let Geyser =document.createElement('span');
    // let Tubelights =document.createElement('span');
    // let Induction =document.createElement('span');
    
    // li.setAttribute('data-id', doc.id);
   //  No.textContent=doc.data().No;
   //  Fan.textContent= doc.data().Fan;
   //  AC.textContent= doc.data().AC;
   //  Fridge.textContent= doc.data().Fridge;
   //  TV.textContent=doc.data().TV;
   // Iron.textContent=doc.data().Iron;
   // Geyser.textContent=doc.data().Geyser;
   // Tubelights.textContent=doc.data().Tubelights;
   // Induction.textContent=doc.data().Induction;

    // li.appendChild(No);
    // li.appendChild(Fan);
    // li.appendChild(AC);
    // li.appendChild(Fridge);
    // li.appendChild(TV);
    // li.appendChild(Iron);
    // li.appendChild(Geyser);
    // li.appendChild(Tubelights);
    // li.appendChild(Induction);
    // list.appendChild(li);
    
}

/*
function renderPrediction(doc)
{  
    var table=document.getElementById('Prediction');
    var row = table.insertRow(i++);
    var fan = row.insertCell(0);
    var ac = row.insertCell(1);
    

    
    fan.innerHTML= doc.data().Fan;
    ac.innerHTML= doc.data().AC;
   


    
    let li=document.createElement('table');
    let Fan= document.createElement('span');
    let AC= document.createElement('span');
    
    li.setAttribute('data-id', doc.id);
    Fan.textContent= doc.data().Fan;
    AC.textContent= doc.data().AC;
    
    li.appendChild(Fan);
    li.appendChild(AC);
    list.appendChild(li);
  
   
    
}

*/



b1.addEventListener('click',(e)  =>{
    e.preventDefault();
    var y=form.No.value;
    div1.style.display='block';
    //console.log(form.P_Name.value);
    db.collection('Comparer').add({
        No: form.No.value,
      Fan: form.Fan.value,
      AC: form.AC.value,
       Fridge: form.Fridge.value,
       TV: form.TV.value,
       Iron: form.Iron.value,
       Geyser: form.Geyser.value,
       Tubelights: form.Tubelights.value,
       Induction: form.Induction.value,
        
    });
    
    db.collection('Comparer').where('No' ,'in', [y, 'Ideal']).get().then((snapshot) =>       //.where('No' ,'==', 'Default')
{
    snapshot.docs.forEach(doc => {
        renderComparer(doc);
    })
    

});

 
   
})


/*
b5.addEventListener('click',(e)  =>{
  // e.preventDefault();
    //console.log("Hello");
    div55.style.display='block';
    var x=form2.Temp.value;
   // div1.style.display='block';
    //console.log(form.P_Name.value);
    
    
    db.collection('Prediciton').where('type' ,'==', x).get().then((snapshot) =>       //.where('No' ,'==', 'Default')
{
    snapshot.docs.forEach(doc => {
        //console.log(doc.data());
        renderPrediction(doc);
    })
    

});
})

 */
