<template>
  <div class="wrapper">
      <div id="lyric-container">
   <span class="lyrics" style="white-space: pre;">
             {{lyrics}}
              <div class="loader" v-if="loading">Loading data...</div>
    </span>
        <div id="default" v-if="noLyrics"> No Lyrics Found...  </div>
      </div>
 
  </div>
</template>

<script>
 import ApiService from '../service/geniusService';
export default {
    data() {
        return {
                 apiURL: 'https://api.lyrics.ovh/v1/',
                 response: [],
                 lyrics: "",
                 loading: false,
                 noLyrics: false
        }
    }, 
    mounted() {
        this.fetchSong(this.$route.params.artist, this.$route.params.song);
    },
    methods: {
        fetchSong(artist, name) {
            const result = ApiService.get(this.apiURL + artist + '/' + name).then((resp) => {
                this.lyrics = resp.data.lyrics.replace(/[^\n]/g, '');
                this.lyrics = resp.data.lyrics.replace('Paroles de la chanson', '');
                this.lyrics = this.lyrics.replace(this.$route.params.artist, '');
                this.lyrics = this.lyrics.replace('par', '');
                if(resp.status === 404) {
                    this.noLyrics = true;
                }
                console.log(result);
            }).catch(error => {
                console.log(error);
                           this.noLyrics = true;
            }).finally(() => {this.loading = false})
        }
    }

}
</script>

<style scoped>

.wrapper {
    height: 85vh;
    width: 100%;
    overflow-y: scroll;
    scrollbar-width: none;
    margin-top: 25px;
    display: flex;
    justify-content: center;

}


.lyrics {
    text-align: center;
    padding: 1px;
    font-size: 10px;
    width: auto;
    min-height: 50%;
    max-height: 80%;
    text-align: center;
    color: white;
    border: 1px solid black;
    overflow-y: scroll;
    margin: 15px;
}

#lyric-container {
    width: 80%;
    background-color: rgb(0, 0, 0, 0.25);
    height: 85%;
    padding: 10px;
    margin-top: 60px;
    overflow: scroll;
}

</style>