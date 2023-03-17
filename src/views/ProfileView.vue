<script>
import Card from '../components/Card.vue'
import { ref, computed } from 'vue';
import ArticleModal from '../components/ArticleModal.vue';

export default {
    components: {
        ArticleModal,
    },
    setup() {
        const savedArticles = ref([]);

        const saveArticle = (article) => {
            savedArticles.value.push(article);
        };

        const formattedSavedArticles = computed(() => {
            // format the saved articles here if necessary
            return savedArticles.value;
        });

        return {
            savedArticles,
            saveArticle,
            formattedSavedArticles,
        };
    },
};


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
    <div class="container-fluid">
        <div class="row px-4 py-4" style="background-color: #F4E4C1;">
            <h1 class="mx-3" style="color:#05668D; font-weight: bold;">Saved Articles</h1>
<!-- 
            <div>
                <div v-for="article in savedArticles" :key="article.url">
                    <h3>{{ article.title }}</h3>
                    <p>{{ article.description }}</p>
                    <a :href="article.url">Read more</a>
                </div>
                <div>
                    <ArticleModal v-for="article in articles" :key="article.url" :article="article"
                        @save-article="saveArticle" />
                </div>
            </div> -->

            <!-- <ul>
                    <li v-for="(article, index) in savedArticles" :key="index">
                        <h3>{{ article.title }}</h3>
                        <p>{{ article.description }}</p>
                        Add more details about the article here
                    </li>
                </ul> -->
            <!--             
                <div v-if="savedArticles.length > 0">
                    <div v-for="(article, index) in savedArticles" :key="index">
                        <NewsCard :data="article" :id="index" :summary="article.description" />
                    </div>
                </div>
                <div v-else>
                    <p>No saved articles yet.</p>
                </div> -->


            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
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
                <div class="col">
                    <Card :article="article2" class="h-100" />
                </div>
                <div class="col">
                    <Card :article="article3" class="h-100" />
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
                <div class="col">
                    <Card :article="article4" class="h-100" />
                </div>
                <div class="col">
                    <Card :article="article1" class="h-100" />
                </div>
                <div class="col">
                    <Card :article="article3" class="h-100" />
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
                <div class="col">
                    <Card :article="article1" class="h-100" />
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>