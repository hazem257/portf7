const apiUrl = 'https://mp3quran.net/api/v3';
const reciters = 'reciters';
const lang = 'ar';

async function getReciters(){
  const selReciters = document.querySelector('#chooseReciters')
  const res = await fetch(`${apiUrl}/reciters?language=${lang}`)
  const data = await res.json()
  selReciters.innerHTML =   `<option value ="">اختر قارئ</option>`;
  data.reciters.forEach(reciter =>selReciters.innerHTML +=   `<option value ="${reciter.id}">${reciter.name}</option>`);
   selReciters.addEventListener(`change`,e =>getMoshaf(e.target.value))
}
getReciters()
async function getMoshaf(reciter){
  const chooseMoshaf = document.querySelector('#chooseMoshaf')
  //console.log(reciter)
  const res = await fetch(`${apiUrl}/reciters?language=${lang}&reciter=${reciter}`)
  const data = await res.json()
  const moshafs =data.reciters[0].moshaf
  chooseMoshaf.innerHTML =`<option value =""data-server=""data-surahList ="">اختر الرواية</option>`
moshafs.forEach(moshaf =>{
  chooseMoshaf.innerHTML +=`<option value ="${moshaf.id}"data-server="${moshaf.server}"data-surahList ="${moshaf.surah_list}">${moshaf.name}</option>`
  //console.log(moshaf.name)
});
chooseMoshaf.addEventListener(`change`,e =>{
  const selectedMoshaf = chooseMoshaf.options[chooseMoshaf.selectedIndex]
  const suraServer =selectedMoshaf.dataset.server
  const surahList =selectedMoshaf.dataset.surahlist
  getSurah(suraServer,surahList)
})
  

}
async function getSurah(suraServer , surahList){
  const chooseSurah = document.querySelector("#chooseSurah")
  //console.log(suraServer)
  const res = await fetch(`https://mp3quran.net/api/v3/suwar`)
  const data = await res.json()
  const surahNames = data.suwar 

  surahList =  surahList.split(',')
    chooseSurah.innerHTML =`<option value ="">اختر السورة</option>`
  surahList.forEach(surah=>{
    const padSurah = surah.padStart(3,'0')
surahNames.forEach(surahName =>{
  if(surahName.id == surah){
//  console.log(surahName.name)
    chooseSurah.innerHTML +=`<option value ="${suraServer}${padSurah}.mp3""${surahName.id}">${surahName.name}</option>`

  }
})
  })
chooseSurah.addEventListener(`change`,e =>{
  const selectedSurah = chooseSurah.options[chooseSurah.selectedIndex]
 playSurah(selectedSurah.value);
})


} 
function playSurah(suraMp3){
  const audioPlayer= document.querySelector('#audioPlayer')
  audioPlayer.src =suraMp3;
  audioPlayer.play()
};
function playLive(channel){
  if(Hls.isSupported()) {
    var video = document.getElementById('liveVideo');
    var hls = new Hls();
    hls.loadSource(`${channel}`);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED,function() {
      video.play();
  });
 }

}