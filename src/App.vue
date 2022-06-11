<template>
  <div class="page-content page-home">
    <!-- home logo -->
    <div class="row">
      <div class="home-logo col-sm-8 col-sm-offset-2">
        <p class="couple-title">Josh & Nguhi</p>
      </div>
    </div>
    <!-- /home-logo -->
    <!-- Countdown container -->
    <div class="row">
      <div class="countdown-container">
        <!-- icon -->
        <div class="countdown-icon">
          <img src="img/ico-heart2.png" alt="" />
        </div>
        <!-- /icon -->
        <!-- countdown title top -->
        <h2 class="countdown-title countdown-title1">
          <span class="countdown-title-borders">October 15, 2022 in Midlothian, TX</span>
        </h2>
        <!-- /countdown title top -->
        <!-- countdown ( Edit it on main.js )-->
        <div class="row">
          <div class="col-xs-8 col-xs-offset-2">
            <div id="countdown" class="row"></div>
          </div>
        </div>
        <!-- /countdown -->
        <!-- countdown title bot -->
        <h3 class="countdown-title countdown-title2">
          <span class="countdown-title-borders">Until we get Married!</span>
        </h3>
        <!-- countdown title /bot -->
      </div>
    </div>
    <!-- /Countdown Container -->
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
