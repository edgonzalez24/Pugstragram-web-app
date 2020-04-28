<script>
  import Profile from '../profile/index.svelte';
  import Stories from '../stories/index.svelte';
  import Footer from '../footer/index.svelte';
  export let nickname ; 
  export let name;
</script>
<div class="sidebar" >
  <div class="sidebar-container">
    <Profile {nickname} {name}/>
    <Stories />
    <Footer />
  </div>
</div>

<style>
  .sidebar {
    position: relative;
    padding: 4.5em 0 0 0;
  }
  .sidebar-container {
    position: fixed;
  }
</style>