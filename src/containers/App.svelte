<script>
  import {onMount} from 'svelte';
  import Header from '../components/header/index.svelte' ;
  import Main from '../components/main/index.svelte' ;
  import TimeLine from '../components/timeline/index.svelte' ;
  import Sidebar from '../components/sidebar/index.svelte' ;


  let data = {} ;
  const API = 'https://us-central1-pugstagram-co.cloudfunctions.net/data'
  onMount(async () => {
    const response = await fetch(API);
    data = await response.json();
  });

</script>
<Header />
<Main>
  <TimeLine posts={data.posts}/>
  <Sidebar {...data.user}/>
</Main>
<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

:global(body){
  background-color: #fafafa;
  color: rgb(38, 38, 38 , 0.7);
  font-family: "Lato" , sans-serif;
  margin: 0;
  padding: 0
}

:global(h1,h2 , h3) {
  margin: 0;
  padding: 0
}
</style>