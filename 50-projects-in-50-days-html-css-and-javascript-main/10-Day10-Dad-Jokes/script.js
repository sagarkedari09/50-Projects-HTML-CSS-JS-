const sounds = ['applause','boo','gasp','tada','victory','wrong'];

sounds.forEach(sound =>{
     const btn = document.createElement('button');
     btn.innerText = sound;

     btn.addEventListener('click',()=>{
          stopSound();
          document.getElementsByClassName(sound)[0].play();
     })
     btn.className = `{$sound}-btn bt`;
     document.getElementsByClassName('buttons')[0].append(btn);
})
const stopSound = ()=>{
     sounds.forEach(sound=>{
          const song = document.getElementsByClassName(sound)[0];
          song.pause();
          song.currentTime=0;
     })
}

