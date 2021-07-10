var table=document.getElementById('Prediction');
const b5=document.querySelector('#b5');
const form2= document.querySelector('#f2');
const div55=document.querySelector('#div55');
var i=1;


function renderPrediction(doc)
{  
    
    var row = table.insertRow(i++);
    var type = row.insertCell(0)
    var fan = row.insertCell(1);
    var ac = row.insertCell(2);
    
    type.innerHTML=doc.data().type;
    fan.innerHTML= doc.data().Fan;
    ac.innerHTML= doc.data().AC;
   
   


   /*
    
    let li=document.createElement('table');
    let Fan= document.createElement('span');
    let AC= document.createElement('span');
    
    li.setAttribute('data-id', doc.id);
    Fan.textContent= doc.data().Fan;
    AC.textContent= doc.data().AC;
    
    li.appendChild(Fan);
    li.appendChild(AC);
    list.appendChild(li);
  */
   
    
}


b5.addEventListener('click',(e)  =>{
      e.preventDefault();
      div55.style.display='block';
      var x=form2.Temp.value;
     // div1.style.display='block';
      //console.log(x);
      
      
     return db.collection('Prediction').where('type' ,'==', x).get().then((snapshot) =>       //.where('No' ,'==', 'Default')
      {
        console.log("Hello");
        snapshot.docs.forEach(doc => {
           // console.log(doc.data()[0]);
            renderPrediction(doc);
        })
      });
})
  
   
     
  