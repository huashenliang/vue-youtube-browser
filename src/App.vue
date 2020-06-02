<template>
  <v-app id="inspire" > 
    <v-app-bar
      app
      clipped-left
      color="red"
      dense
    >      
      <v-icon
        class="mx-4"
        large
      >
        mdi-youtube
      </v-icon>
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">Youtube Example using Vue</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-row
        align="center"
        style="max-width: 700px"
      >
   
        <v-text-field
          :append-icon-cb="() => {}"
          placeholder="Search Your Video Here..."
          single-line
          append-icon="mdi-magnify"
          color="white"
          hide-details
          @input="onTermChange"
        >  </v-text-field>
      </v-row>
    </v-app-bar>
 

    <v-content>
      <v-row >
        <VideoDetail :video="selectedVideo" />
        <v-col>
         <VideoList :videos="videos" @videoSelect="onVideoSelect"/>
        </v-col>
      </v-row>
    </v-content>
  </v-app>
</template>

<script>
import axios from 'axios';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail'; 


const API_KEY = 'Your Key here';


  export default {
    name: 'App',
    components: {
      VideoList,
      VideoDetail
    },
   data(){
    return {
      videos: [],
      selectedVideo: null
    };
  },
    created () {
      this.$vuetify.theme.dark = true
    },
    methods: {
    onTermChange(searchTerm){
        axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            key: API_KEY,
            type: 'video',
            part: 'snippet',
            q: searchTerm
          }
        }).then(res => {
            this.videos = res.data.items;
        })
    },
    onVideoSelect(video){
      console.log(video)
        this.selectedVideo = video
    }
  }
  }
</script>