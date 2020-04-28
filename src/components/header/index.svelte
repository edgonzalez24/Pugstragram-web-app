<script>
import {likeCount} from '../../store/store.js'
</script>
<header class="header">
  <div class="header-container">
    <div class="header-content">
      <div class="header-logo">
        <h1>Pugstagram</h1>
      </div>
      <div class="header-nav">
        <ul>
          <li><i class="fas fa-heart"/></li>
          {$likeCount === 0 ? '' : $likeCount}
          <li><i class="fas fa-user-alt"/></li>
        </ul>
      </div>
    </div>
  </div>
</header>
<style>
  .header {
    background-color: white;
    position: fixed;
    width: 100%;
  }
  .header-container {
    grid-template-columns: minmax(auto, 936px);
    display: grid;
    justify-content: center;
    background-color: white;
    border-bottom: 1px solid rgba(38, 38, 38, 0.4);
  }
  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5em;
  }
  .header ul {
    list-style: none;
  }
  .header li {
    display: inline-block;
    margin: 0 0 0 1em;
  }
  .header i {
    font-size: 16px;
    color: rgba(38, 38, 38, 0.7);
    cursor: pointer;
  }

  h1 {
    padding: 0;
    margin: 0;
    font-size: 28px;
    color: black;
    font-family: "Pacifico", cursive;
    cursor: pointer;
    position: relative;
    background: #fff;
    mix-blend-mode: multiply;
    display: inline-block;
  }

  h1:before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at top left, #f09433, #bc1888);
    mix-blend-mode: screen;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>