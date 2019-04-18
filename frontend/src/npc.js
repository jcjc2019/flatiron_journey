
function talkToJosh(joshConvo){
   const p = document.createElement('p')
   p.style.marginLeft = "250px"
   p.style.top = "10px"
   p.innerText = "Good morning loves! We'll start our journey to programming world now! Mod1 is OOP Ruby. Let's use the superhero and hero abilities as example...."
   bg.appendChild(p)

   joshConvo.addEventListener('click', function(){
      p.classList.toggle('show')
   })
}


function talkToMonsterLight(monsterLightConvo){
   const p = document.createElement('p')
   p.style.marginLeft = "1180px"
   p.style.top = "20px"
   p.innerText = "I am the Mod 1 challenge! How is Ruby treating you so far? What? you want to continue your journey? Hold on hold on, pass me first!"
   bg.appendChild(p)
   
   monsterLightConvo.addEventListener('click', function(){
   p.classList.toggle('show')
   })
}


function talkToPurpleMonster(purpleMonsterConvo){
   const p = document.createElement('p')
   p.style.marginLeft = "2010px"
   p.style.top = "20px"
   p.innerText = "Baaaaaang! I am the Mod 2 challenge! Are you getting along with Rails? ActiveRecord is awesome but you have to understand how SQL works. So, tell me what is 'CRUD'?"
   bg.appendChild(p)

   purpleMonsterConvo.addEventListener('click', function(){
      p.classList.toggle('show')
      })
}

function talkToDragon(dragonConvo){
   const p = document.createElement('p')
   p.style.marginLeft = "3400px"
   p.style.top = "180px"
   p.innerText = "Hey you stop here! Yeah it'd you, don't look at others. Are you ready for the Mod 3 challenge! Show me how to fetch the info from server.... or POST? PATCH?? Oh I forget about the headers...Urgh... "
   bg.appendChild(p)
  
   dragonConvo.addEventListener('click', function(){
      p.classList.toggle('show')
      })
}


function talkToRedDragon(redDragonConvo){
   const p = document.createElement('p')
   p.style.marginLeft = "4750px"
   p.style.top = "40px"
   p.innerText = "Impressed! I didn't expect you can last this long. Now where are here in Mod 5, get ready for the challenge! Show me how to grab dynamic user info using React. No no, you don't hardcode it, I mean DRY. Gosh why you can't remember DRY principle...."
   bg.appendChild(p)

   redDragonConvo.addEventListener('click', function(){
      p.classList.toggle('show')
      })
}

function talkToFinal(finalConvo){
   const p = document.createElement('p')
   p.style.marginLeft = "6100px"
   p.style.top = "40px"
   p.innerText = "Muahahahahahahah...I am the final project! Now is the time to shine (or die). Let's put it all together, let me see if you are qualified to graduate. Josh, what do you think of this project?"
   bg.appendChild(p)

   finalConvo.addEventListener('click', function(){
      p.classList.toggle('show')
      })
}