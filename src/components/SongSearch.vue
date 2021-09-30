<template>
  <div class="wrapper">

      <div class="results">
               <ul>
                   <li class="list-item" v-for="result, i in call.data" :key="i">
                       <div class="desc" v-on:click="send('/' + result.artist.name + '/songs/' + result.title)">
                        <span class="title">{{result.title}}  </span> <img :src="result.album.cover_small" class="image" alt="">
                       </div>
                       <audio controls :src="result.preview" type = "audio/mp3" ref="audio" volume="0.1"/>
                    </li>
               </ul>
      </div>

      
      <form action="" id="form" autocomplete="off">
          <input type="text" id="search" placeholder="Enter artist / song name"/>
          <button id="search-btn" v-on:click="submit()">Search</button>
      </form>

  </div>
</template>

<script>
 import ApiService from '../service/geniusService';
export default {
    data() {
        return {
            apiURL: 'https://api.lyrics.ovh',
            call: [
            ],
        }
    },
    mounted() {
    },
    methods: {
        submit() {
        // const form = document.getElementById('form');
        const search = document.getElementById('search');
        let searchValue = search.value.trim();

        if(!searchValue) {
            alert('Nothing to search...')
        } else {
            this.searchSong(searchValue);
        }
        },
        searchSong(searchValue) {
            const result = ApiService.get(this.apiURL +/suggest/ + searchValue).then((data) => {

                this.call = data.data;
            })
            console.log(result);
        },
        getUrl(result) {
            return result.album.cover_small;
        },
        toggleSound() {
            let audio = this.$refs.audio
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
        },
        setRef(ref) {
            this.refs.push(ref);
        },
        send(route) {
           this.$router.push(route);
    }

    }


}
</script>

<style scoped>

.wrapper {
    height: 100vh;
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#form {
    margin: 20px;
    width: 80%;
    position: fixed;
    bottom: 15%;
    padding: 10px;
    background-color: rgba(250, 250, 250, 0.3)
}

ul {
    padding: 0;
    overflow: scroll;
}

.results {
    display: flex;
    justify-content: center;
    width: 90%;
    min-height: 300px;
    height: 90%;
    padding-bottom: 250px;
    padding-top: 60px;
  overflow: scroll;
  -ms-overflow-style: none;
  /* for Internet Explorer, Edge */
  scrollbar-width: none;
  /* for Firefox */

}

.list-item {
    color: white;
    border: 1px solid black;
    background-color: rgba(255, 255, 255, 0.2);
    margin: 15px;
    display: flex;
    width: 90%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}

.title {
    padding: 5px;
}

.image {
    padding: 5px;
}

#search {
    height: 32px;
    width: 80%;
}

#search-btn {
    margin: 5px;
    background-color: #965349;
    border-radius: 2px;
    box-shadow: none;
    border: none;
}

.desc {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
}

audio {
    width: 100%;
    height: 25px;
}

</style>