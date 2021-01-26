window.onload = function(){
    const button = document.querySelector('#button');
    const affichage = document.querySelector('#affichage');
    button.addEventListener('click',function(){searchMusic()});
}
async function searchMusic(){
     let Tmp = document.getElementById("search").value.replaceAll(' ','+');
     if (Tmp==''){
         console.log('vide');
         return false;
     }
     const response = await fetch('https://itunes.apple.com/search?attributeType=music&term='+Tmp);
     const data = await response.json();
     let HtmlAff='<h2>Resultats</h2><br>';
     let img;
     data.results.forEach(element =>{
         console.log(element);
         HtmlAff+='<div id="ligne"> <div id="image"> <img src="'+element.artworkUrl100+'"/> </div> <div id="texte"> ' +
             '<h2>'+element.trackName+'</h2> <h4>'+element.artistName+'</h4> <h4>'+element.collectionName+'</h4> </div> <div id="audio"> ' +
             '<audio controls id preload src="'+element.previewUrl+'"></audio> </div> </div>';
         affichage.innerHTML=HtmlAff;
     });
     /*console.log(data);
     /*data.forEach(obj => {
         Object.entries(obj).forEach(([key,value]) => {
             console.log(`${key} ${value}`);
         });
         console.log('-----------------');
     });*/

    /*
     await fetch('https://itunes.apple.com/search?term='+Tmp)
         .then(response =>{
            console.log('Sucess!');
            //console.log(response.json);
             const result = response.json();
             //console.log(result);
             result.forEach(obj => {
                 Object.entries(obj).forEach(([key,value]) => {
                     console.log('${key} ${value}');
                 });
                 console.log('-----------------');
             });
         })
         .then(undefined,error =>{
            console.log('Failed!'+error);
         });
    */
}