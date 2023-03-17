<script setup>

import Card from '../components/Card.vue'
import CardHorizontal from '../components/CardHorizontal.vue'
import CardOverlays from '../components/CardOverlays.vue'
import CardNoImg from '../components/CardNoImg.vue';
import AricleBox from '../components/ArticleBox.vue';

const article1 = {
   source: {
      id: 'wired',
      name: 'Wired'
   },
   author: 'Boone Ashworth',
   title: 'OnePlus Pad Android Tablet: Details, Specs, Release Date',
   description: 'Plus: Netflix expands its efforts to end password sharing, Apple’s “buy now, pay later” entry creeps closer, and we scrutinize your Bitcoin spending.',
   url: 'https://www.wired.com/story/oneplus-pad-android-tablet/',
   urlToImage: 'https://media.wired.com/photos/63e69faddcab861f7a47469f/191:100/w_1280,c_limit/OnePlus-Pad-Gear-Roundup-Featured-Gear.jpg',
   publishedAt: '2023-02-14T12:00:00Z'
}
const article2 = {

   source: {
      id: null,
      name: "The Daily Caller"
   },
   author: "Harold Hutchison",
   title: "Jim Jordan Spars With Dem Rep Over Censorship Of ‘Lawful Speech’ On Twitter",
   description: "Republican Rep. Jim Jordan of Ohio and Democratic Rep. Daniel Goldman of New York sparred over allegations surrounding censorship by government agencies.",
   url: "https://dailycaller.com/2023/03/09/jim-jordan-daniel-goldman-weaponization-censorship/",
   urlToImage: "https://cdn01.dailycaller.com/wp-content/uploads/2023/03/DCNF-Jordan-Goldman-Twitter-Censorship-Featured.jpg",
   publishedAt: "2023-03-09T21:00:30Z",
   content: "Republican Rep. Jim Jordan of Ohio and Democratic Rep. Daniel Goldman of New York sparred Thursday over allegations surrounding censorship by government agencies.\r\n“We’re here talking about Twitter. … [+2598 chars]"
}

const article3 = {

   source: {
      id: "bbc-news",
      name: "BBC News"
   },
   author: "BBC News",
   title: "How Shrinking perpetuates Hollywood's most sexist cliché",
   description: "The Apple TV+ series is the latest screen hit to use a dead family member or romantic partner as a narrative driver for its male hero. When will this crass trope end, asks Ralph Jones.",
   url: "https://www.bbc.com/culture/article/20230315-how-shrinking-perpetuates-hollywoods-most-sexist-clich",
   urlToImage: "https://ychef.files.bbci.co.uk/live/624x351/p0f8xhss.jpg",
   publishedAt: "2023-03-16T15:37:24.0043602Z",
   content: "Why do male writers in TV, film and literature continue to engage in this trope? What does it tell us about the gender dynamics in fiction? And is there any hope on the horizon that it may be consign… [+2383 chars]"
}

const article4 = {

   source: {
      id: "cnn",
      name: "CNN"
   },
   author: "Lisa Respers France",
   title: "Ariana Madix breaks silence on 'Vanderpump Rules' cheating scandal as ratings soar - CNN",
   description: "Ariana Madix returned to social media Wednesday to release a statement in the midst of a cheating scandal involving her now former boyfriend and a fellow cast member on \"Vanderpump Rules.\"",
   url: "https://www.cnn.com/2023/03/16/entertainment/ariana-madix-vanderpump-ratings/index.html",
   urlToImage: "https://media.cnn.com/api/v1/images/stellar/prod/230316104940-ariana-madix-vanderpump-2022-file.jpg?c=16x9&q=w_800,c_fill",
   publishedAt: "2023-03-16T15:06:00Z",
   content: "Ariana Madix returned to social media Wednesday to release a statement in the midst of a cheating scandal involving her now former boyfriend and a fellow cast member on Vanderpump Rules.\r\nMadix offer… [+1812 chars]"
}


</script>

<template>
   <main>
   <div class="container-fluid">

      <AricleBox categories="general" />

      
      <!-- Card Example -->
      <div>
         <!--Modify to pass by article Object to increase readability-->
         <!-- <Card :article="article1" /> -->
      </div>
      <!-- END Card Example -->

      <!-- Latest News -->
      <div class="row px-4 pt-4 pb-5" style="background-color: #F4E4C1;">
         <h2 class="mx-3" style="color:#05668D; font-weight: bold;">Latest news</h2>

            <div class="container">
               <div class="row">
                  <div class="col-lg-8 p-4">
                     <Card :article="article2" class="h-100" />
                  </div>
                  <div class="col-lg-4">
                     <div class="row row-cols-1 p-4 g-4">
                        <CardNoImg :article="article1" />
                        <CardNoImg :article="article3" />
                     </div>
                  </div>
               </div>
               <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 p-3 g-4">
                  <div class="col">
                     <Card :article="article4" class="h-100" />
                  </div>
                  <div class="col">
                     <Card :article="article1" class="h-100" />
                  </div>
                  <div class="col">
                     <Card :article="article2" class="h-100" />
                  </div>
                  <div class="col">
                     <Card :article="article3" class="h-100" />
                  </div>
               </div>
            </div>

         </div>
         <!-- END Latest News -->

         <!-- Local News Section Section -->
         <!-- <div class="col-lg-4 stretch-card grid-margin">
                              <h3>Local news</h3>

                              <div class="card my-3">
                                 <div class="card-body">
                                    <div class="list-group card-scrollable">
                                       <div
                                          class="list-group-item list-group-item-action border-0 d-flex pt-3 pb-4 align-items-center justify-content-between">
                                          <div class="pr-3">
                                             <h6>Virus Kills Member Of Advising Iran’s Supreme</h6>
                                             <div class="fs-10">10 Minutes ago</div>
                                          </div>
                                          <div class="rotate-img">
                                          </div>
                                       </div>

                                       <div
                                          class="list-group-item list-group-item-action border-0 d-flex pt-3 pb-4 align-items-center justify-content-between">
                                          <div class="pr-3">
                                             <h6>Virus Kills Member Of Advising Iran’s Supreme</h6>
                                             <div class="fs-10">10 Minutes ago</div>
                                          </div>
                                          <div class="rotate-img">
                                          </div>
                                       </div>

                                       <a href="#!" class="list-group-item list-group-item-action border-0">A third link item</a>
                                       <a href="#!" class="list-group-item list-group-item-action border-0">A fourth link item</a>
                                       <a href="#!" class="list-group-item list-group-item-action border-0">A fifth link item</a>

                                    </div>
                                 </div>
                              </div>
                           </div> -->
         <!-- END Local News Section -->

         <AricleBox categories="general" />

         <div class="row my-0  d-flex align-items-stretch">
            <!-- General News Topic -->
            <div class="px-5 pt-4 pb-5" style="background-color:#E4C580;">
               <a href="#!" class="text-decoration-none text-reset">
                  <h3 class="pt-2 pb-3" style="color: #05668D;">General</h3>
               </a>

               <div class="row row-cols-1 row-cols-md-3 g-4">
                  <div class="col">
                     <Card :article="article3" class="h-100" />
                  </div>
                  <div class="col">
                     <Card :article="article4" class="h-100" />
                  </div>
                  <div class="col">
                     <Card :article="article1" class="h-100" />
                  </div>
               </div>
               <div class="row row-cols-1 row-cols-md-2 g-4 mt-3">
                  <div class="col-lg-6">
                     <Card :article="article2" class="h-100" />
                  </div>
                  <div class="col-lg-6">
                     <Card :article="article3" class="h-100" />
                  </div>
               </div>

            </div>
            <!-- END General News Topic -->
         </div>

         <div class="row my-0">
            <!-- Business News Topic -->
            <div class="col-lg-6 px-5 pt-4 pb-5" style="background-color: #028090;">
               <a href="#!" class="text-decoration-none text-reset" style="font-weight: bold;">
                  <h3 class="pt-2 pb-3" style="color:#E4C580; font-weight: bold;">Business</h3>
               </a>

               <div class="row row-cols-1 row-cols-md-2 g-4">
                  <div class="col">
                     <Card :article="article1" class="h-100" />
                  </div>
                  <div class="col">
                     <Card :article="article2" class="h-100" />
                  </div>
                  <div class="col">
                     <Card :article="article3" class="h-100" />
                  </div>
                  <div class="col">
                     <Card :article="article4" class="h-100" />
                  </div>
               </div>

            </div>
            <!-- Business News Topic -->
            <!-- Entertainment News Topic -->
            <div class="col-lg-6 px-5 pt-4 pb-5" style="background-color: #02C39A;">
               <a href="#!" class="text-decoration-none text-reset">
                  <h3 class="pt-2 pb-3" style="color:#F4E4C1">Entertainment</h3>
               </a>

               <div class="row">
                  <div class="col">
                     <Card :article="article4" />
                  </div>
               </div>
               <div class="row pt-4 row-cols-1 row-cols-md-2 g-4">
                  <div class="col">
                     <Card :article="article1" class="h-100" />
                  </div>
                  <div class="col">
                     <Card :article="article4" class="h-100" />
                  </div>
               </div>

            </div>
            <!-- END Entertainment News Topic -->
         </div>

         <div class="row">
            <!-- Health News Topic -->
            <div class="col-lg-6 px-5 pt-4 pb-5" style="background-color: #F4E4C1;">
               <a href="#!" class="text-decoration-none text-reset">
                  <h3 class="pt-2 pb-3" style="color:#05668D;">Health</h3>
               </a>

               <div class="row">
                  <div class="col">
                     <Card :article="article2" />
                  </div>
               </div>
               <div class="row pt-4 row-cols-1 row-cols-md-2 g-4">
                  <div class="col">
                     <Card :article="article3" class="h-100" />
                  </div>
                  <div class="col">
                     <Card :article="article4" class="h-100" />
                  </div>
               </div>

            </div>
            <!-- END Health News Topic -->
            <!-- Science News Topic -->
            <div class="col-lg-6 px-5 pt-4 pb-5" style="background-color: #E4C580;">
               <a href="#!" class="text-decoration-none text-reset">
                  <h3 class="pt-2 pb-3" style="color:#028090">Science</h3>
               </a>

               <div class="row row-cols-1 row-cols-md-2 g-4">
                  <div class="col">
                     <Card :article="article1" class="h-100" />
                  </div>
                  <div class="col">
                     <Card :article="article2" class="h-100" />
                  </div>
                  <div class="col">
                     <Card :article="article3" class="h-100" />
                  </div>
                  <div class="col">
                     <Card :article="article4" class="h-100" />
                  </div>
               </div>

            </div>
            <!-- END Science News Topic -->
         </div>

         <div class="row my-0">
            <!-- Sports News Topic -->
            <div class="col-md-6 px-5 pt-4 pb-5" style="background-color: #02C39A;">
               <a href="#!" class="text-decoration-none text-reset">
                  <h3 class="pt-2 pb-3" style="color:#F4E4C1">Sports</h3>
               </a>

               <div class="row row-cols-1 row-cols-md-2 g-4">
                  <div class="col">
                     <Card :article="article1" class="h-100" />
                  </div>
                  <div class="col">
                     <Card :article="article2" class="h-100" />
                  </div>
                  <div class="col">
                     <Card :article="article3" class="h-100" />
                  </div>
                  <div class="col">
                     <Card :article="article4" class="h-100" />
                  </div>
               </div>

            </div>
            <!-- END Sports News Topic -->
            <!-- Tech News Topic -->
            <div class="col-lg-6 px-5 pt-4 pb-5" style="background-color: #028090;">
               <a href="#!" class="text-decoration-none text-reset">
                  <h3 class="pt-2 pb-3" style="color:#E4C580">Technology</h3>
               </a>

               <div class="row">
                  <div class="col">
                     <Card :article="article4" />
                  </div>
               </div>
               <div class="row pt-4 row-cols-1 row-cols-md-2 g-4">
                  <div class="col">
                     <Card :article="article1" class="h-100" />
                  </div>
                  <div class="col">
                     <Card :article="article4" class="h-100" />
                  </div>
               </div>

            </div>
            <!-- END Tech News Topic -->
         </div>
      </div>
   </main>
</template>

<style>
h3 {
   font-weight: bold;
}
</style>