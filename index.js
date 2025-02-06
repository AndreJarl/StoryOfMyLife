let birth = document.querySelector(".birth");
let elem = document.querySelector(".elem");
let high = document.querySelector(".high");
let college = document.querySelector(".college");

let navbirth = document.querySelector(".navbirth");
let navelem = document.querySelector(".navelem");
let navhigh = document.querySelector(".navhigh");
let navcollege = document.querySelector(".navcollege");

let right = document.querySelector(".right");
let hero = document.querySelector(".hero");

birth.addEventListener("click", function(){
    right.innerHTML = ` 
       <div class="rightimg">
                <img src="images/birth2.jpg" alt="" srcset="">
                <img src="images/birth1.jpg" alt="" srcset="">
             </div>
              <p class="title">Birth</p>
              <p class="subtitle">I was born on August 22, 2004, as the second child among three siblings. 
              As a child, I was full of energy and curiosity, always eager to explore the world around me.
               I was also quite careless, often getting into little adventures without a second thought.
              </p>
         </div>
     </div>
    `
});

elem.addEventListener("click", function(){
    right.innerHTML = ` 
       <div class="rightimg">
                <img src="images/elem.jpg" alt="" srcset="">
                <img src="images/elem2.jpg" alt="" srcset="">
             </div>
              <p class="title">Elementary Days</p>
              <p class="subtitle">During my elementary days, I was your typically obedient and courteous student. 
              My teachers often described me as smart, and I consistently earned honors for my academic performance.
              </p>
         </div>
     </div>
    `
});

high.addEventListener("click", function(){
    right.innerHTML = ` 
       <div class="rightimg">
                <img src="images/high.jpg" alt="" srcset="">
                <img src="images/high2.jpg" alt="" srcset="">
             </div>
              <p class="title">Highschool Days</p>
              <p class="subtitle">High school was a time of growth, challenges, and self-discovery. 
              At first, I carried over my carefree and curious nature from elementary, often prioritizing fun over studies.
               However, as the years went by, I started to realize the importance of discipline and hard work.
              </p>
         </div>
     </div>
    `
});

college.addEventListener("click", function(){
    right.innerHTML = ` 
       <div class="rightimg">
                <img src="images/college.jpg" alt="" srcset="">
                <img src="images/college1.jpg" alt="" srcset="">
             </div>
              <p class="title">College Life - present</p>
              <p class="subtitle">Entering college was a whole new chapter in my life—one filled with excitement, challenges, and growth. Unlike my earlier years, I quickly realized that college required more discipline, responsibility, and perseverance. It was no longer just about passing exams but about truly understanding my field and preparing for my future.

As an aspiring computer engineer, I immersed myself in coding, projects, and hands-on experiences that tested both my knowledge and creativity. There were late nights, tough deadlines, and moments of doubt, but each obstacle only pushed me to work harder.
              </p>
         </div>
     </div>
    `
});
