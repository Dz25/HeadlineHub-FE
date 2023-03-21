<script setup>



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



</script>

<template>
   <main>
      <div class="container-fluid">
         <!-- Card Example -->
         <div>
            <!--Modify to pass by article Object to increase readability-->
            <Card :article="article1" />
         </div>
         <!-- END Card Example -->

         <!-- Latest News -->
         <div class="row my-4 pb-3">
            <h2>Latest news</h2>

            <div class="col-lg-9">
               <div class="card text-white">
                  <img src="../assets/img/post-landscape-3.jpg" class="card-img" alt="...">
                  <div class="card-img-overlay">
                     <h5 class="card-title">Card title</h5>
                     <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                        additional
                        content. This content is a little bit longer.</p>
                     <p class="card-text">Last updated 3 mins ago</p>
                  </div>
               </div>
            </div>

            <div class="col-lg-3">
               <Card :article="article2" />
               <NoImgNews />
               <NoImgNews />
            </div>
         </div>

         <div class="row my-4  d-flex align-items-stretch">
            <!-- Local News Section Section -->
            <div class="col-lg-4 stretch-card grid-margin">
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
            </div>
            <!-- END Local News Section -->
            <!-- General News Topic -->
            <div class="col-lg-8">
               <h3><a href="#!" class="text-decoration-none text-reset">General</a></h3>

               <div class="row">
                  <div class="col-lg-8">
                     <Card />
                  </div>
                  <div class="col-lg-4">
                     <Card />
                  </div>
               </div>
               <div class="row">
                  <div class="col-lg-4">
                     <NoImgNews />
                  </div>
                  <div class="col-lg-4">
                     <NoImgNews />
                  </div>
                  <div class="col-lg-4">
                     <NoImgNews />
                  </div>
               </div>
            </div>
            <!-- END General News Topic -->
         </div>

         <div class="row my-4">
            <!-- Business News Topic -->
            <div class="col-lg-6">
               <h3>Business</h3>

               <div class="row">
                  <div class="col-lg-7">
                     <Card />
                     <Card />
                  </div>
                  <div class="col-lg-5">
                     <NoImgNews />
                     <NoImgNews />
                     <NoImgNews />
                  </div>
               </div>
            </div>
            <!-- Business News Topic -->
            <!-- Entertainment News Topic -->
            <div class="col-lg-6">
               <h3>Entertainment</h3>

               <div class="row">
                  <div class="col-lg-12">
                     <Card />
                  </div>
               </div>
               <div class="row">
                  <div class="col-lg-6">
                     <Card />
                  </div>
                  <div class="col-lg-6">
                     <Card />
                  </div>
               </div>
            </div>
            <!-- END Entertainment News Topic -->
         </div>

         <div class="row">
            <!-- Health News Topic -->
            <div class="col-lg-6">
               <h3>Health</h3>

               <div class="row">
                  <div class="col-lg-12">
                     <Card />
                  </div>
               </div>
               <div class="row">
                  <div class="col-lg-6">
                     <Card />
                  </div>
                  <div class="col-lg-6">
                     <Card />
                  </div>
               </div>
            </div>
            <!-- END Health News Topic -->
            <!-- Science News Topic -->
            <div class="col-lg-6">
               <h3>Science</h3>

               <div class="row">
                  <div class="col-lg-5">
                     <NoImgNews />
                     <NoImgNews />
                     <NoImgNews />
                  </div>
                  <div class="col-lg-7">
                     <Card />
                     <Card />
                  </div>
               </div>
            </div>
            <!-- END Science News Topic -->
         </div>

         <div class="row my-4">
            <!-- Sports News Topic -->
            <div class="col-md-6">
               <h3>Sports</h3>

               <div class="row">
                  <div class="col-lg-7">
                     <Card />
                     <Card />
                  </div>
                  <div class="col-lg-5">
                     <NoImgNews />
                     <NoImgNews />
                     <NoImgNews />
                  </div>
               </div>
            </div>
            <!-- END Sports News Topic -->
            <!-- Tech News Topic -->
            <div class="col-lg-6">
               <h3>Health</h3>

               <div class="row">
                  <div class="col-lg-12">
                     <Card />
                  </div>
               </div>
               <div class="row">
                  <div class="col-lg-6">
                     <Card />
                  </div>
                  <div class="col-lg-6">
                     <Card />
                  </div>
               </div>
            </div>
            <!-- END Tech News Topic -->
         </div>
      </div>
   </main>
</template>
