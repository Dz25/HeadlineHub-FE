<script>
import Card from '../Card.vue';

export default {
    name: "technology",
    props: {},
    data() {
        return {
            article1:[ {
                source: { id: "wired", name: "Wired" },
                author: "jay Ashworth",
                title: "OnePlus Pad Android Tablet: Details, Specs, Release Date",
                description: "Plus: Netflix expands its efforts to end password sharing, Apple’s “buy now, pay later” entry creeps closer, and we scrutinize your Bitcoin spending.",
                url: "https://www.wired.com/story/oneplus-pad-android-tablet/",
                urlToImage: "https://media.wired.com/photos/63e69faddcab861f7a47469f/191:100/w_1280,c_limit/OnePlus-Pad-Gear-Roundup-Featured-Gear.jpg",
                publishedAt: "2023-02-14T12:00:00Z"
            }, {
                source: { id: "wired", name: "Wired" },
                author: "raj Ashworth",
                title: "OnePlus Pad Android Tablet: Details, Specs, Release Date",
                description: "Plus: Netflix expands its efforts to end password sharing, Apple’s “buy now, pay later” entry creeps closer, and we scrutinize your Bitcoin spending.",
                url: "https://www.wired.com/story/oneplus-pad-android-tablet/",
                urlToImage: "https://media.wired.com/photos/63e69faddcab861f7a47469f/191:100/w_1280,c_limit/OnePlus-Pad-Gear-Roundup-Featured-Gear.jpg",
                publishedAt: "2023-02-14T12:00:00Z"
            }, {
                source: { id: "wired", name: "Wired" },
                author: "petr Ashworth",
                title: "OnePlus Pad Android Tablet: Details, Specs, Release Date",
                description: "Plus: Netflix expands its efforts to end password sharing, Apple’s “buy now, pay later” entry creeps closer, and we scrutinize your Bitcoin spending.",
                url: "https://www.wired.com/story/oneplus-pad-android-tablet/",
                urlToImage: "https://media.wired.com/photos/63e69faddcab861f7a47469f/191:100/w_1280,c_limit/OnePlus-Pad-Gear-Roundup-Featured-Gear.jpg",
                publishedAt: "2023-02-14T12:00:00Z"
            }, {
                source: { id: "wired", name: "Wired" },
                author: "oz Ashworth",
                title: "OnePlus Pad Android Tablet: Details, Specs, Release Date",
                description: "Plus: Netflix expands its efforts to end password sharing, Apple’s “buy now, pay later” entry creeps closer, and we scrutinize your Bitcoin spending.",
                url: "https://www.wired.com/story/oneplus-pad-android-tablet/",
                urlToImage: "https://media.wired.com/photos/63e69faddcab861f7a47469f/191:100/w_1280,c_limit/OnePlus-Pad-Gear-Roundup-Featured-Gear.jpg",
                publishedAt: "2023-02-14T12:00:00Z"
            }, {
                source: { id: "wired", name: "Wired" },
                author: "pam Ashworth",
                title: "OnePlus Pad Android Tablet: Details, Specs, Release Date",
                description: "Plus: Netflix expands its efforts to end password sharing, Apple’s “buy now, pay later” entry creeps closer, and we scrutinize your Bitcoin spending.",
                url: "https://www.wired.com/story/oneplus-pad-android-tablet/",
                urlToImage: "https://media.wired.com/photos/63e69faddcab861f7a47469f/191:100/w_1280,c_limit/OnePlus-Pad-Gear-Roundup-Featured-Gear.jpg",
                publishedAt: "2023-02-14T12:00:00Z"
            }], pageSize: 2,
        currentPage: 1,
        };
    },computed: {
      paginatedItems() {
        const startIndex = (this.currentPage - 1) * this.pageSize;
        const endIndex = startIndex + this.pageSize;
        return this.article1.slice(startIndex, endIndex);
      },
      totalPages() {
        return Math.ceil(this.article1.length / this.pageSize);
      },
    },
    methods: {
        changePage(pageNumber) {
  if (typeof pageNumber === "number") {
    this.currentPage = pageNumber;
  } else if (pageNumber === -1) {
    this.currentPage--;
  } else if (pageNumber === 1) {
    this.currentPage++;
  }
  if (this.currentPage < 1) {
    this.currentPage = 1;
  } else if (this.currentPage > this.totalPages) {
    this.currentPage = this.totalPages;
  }
},
    },
    components: { Card }
};
</script>

<template>
   <div>
    <div class="card-grid">
        <div v-for="news in paginatedItems" :key="news.author"> <Card :article="news"/></div>
       
       
       
    </div>
    <div class="pagination-num">
        <button @click="changePage(-1)" :disabled="currentPage === 1">Prev</button>
        <button v-for="page in totalPages" :key="page" @click="changePage(page)" :class="{ active: currentPage === page }">{{ page }}</button>
        <button @click="changePage(1)" :disabled="currentPage === totalPages">Next</button>
      </div><div>{{ article1.length }}</div>
</div>
  </template>


<style scoped>
.card-grid{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}
.active {
    background-color: #ccc;
  }
  .pagination-num{
    text-align:center ;
    margin: 20px;
  }
</style>