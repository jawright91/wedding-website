<template>
  <div>
    <!-- === PAGE BACKGROUND === -->
    <!-- Background container -->
    <div class="page-background-container viewport">
      <!-- background-mask -->
      <div class="bg-mask viewport"></div>
      <!-- /background-mask -->
      <!-- background-slideshow -->
      <div class="bg-slideshow">
        <!-- slideshow-item -->
        <div class="page-background viewport" style="background-image: url('images/background-image.JPG')"></div>
        <!-- /slideshow-item -->
      </div>
      <!--/Background-slideshow -->
    </div>
    <!-- Background-container -->
    <!-- === /PAGE BACKGROUND === -->

    <!-- Main Content
================================================== -->
    <div id="body" class="viewport animated">
      <div class="container">
        <div class="boxed-content">
          <!-- Header -->
          <header id="header" class="navbar navbar-default navbar-static-top">
            <div class="clearfix">
              <!-- logo -->
              <div class="hd-logo">
                <a href="/"><img src="images/logo.png" title="" alt="" /></a>
              </div>
              <!-- /logo -->
              <!-- responsive menu -->

              <a
                type="button"
                class="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse"
                v-on:click="test()"
              >
                <span class="sr-only">Navigation Menu</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </a>

              <!-- /responsive menu -->
              <!-- menu -->
              <nav class="hd-nav nav navbar-nav navbar-right navbar-collapse collapse">
                <ul class="nav navbar-nav hd-list-menu clearfix">
                  <li>
                    <router-link to="/ceremony">
                      <a v-on:click="hideCountdown()">
                        <span class="link-title">Ceremony</span>
                        <span class="link-subtitle">Location and time Time</span>
                      </a>
                    </router-link>
                  </li>
                  <!-- <li>
                    <router-link to="/gallery">
                      <a v-on:click="hideCountdown()">
                        <span class="link-title">Gallery</span>
                        <span class="link-subtitle">Our pictures</span>
                      </a>
                    </router-link>
                  </li> -->
                  <li>
                    <router-link to="/hotels">
                      <a v-on:click="hideCountdown()">
                        <span class="link-title">Hotels</span>
                        <span class="link-subtitle">Local accomodations</span>
                      </a>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/registry">
                      <a v-on:click="hideCountdown()">
                        <span class="link-title">Registry</span>
                        <span class="link-subtitle">Our Gift List</span>
                      </a>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/rsvp">
                      <a v-on:click="hideCountdown()">
                        <span class="link-title">RSVP</span>
                        <span class="link-subtitle">Let us Know</span>
                      </a>
                    </router-link>
                  </li>
                </ul>
              </nav>
              <!-- /menu -->
            </div>
          </header>
          <!-- /header -->
          <!-- content -->
          <div class="page-content page-home">
            <!-- home logo -->
            <div v-if="displayCountdown">
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
                    <img src="images/ico-heart2.png" alt="" />
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
            </div>
            <router-view />
            <!-- /Countdown Container -->
          </div>
          <!-- /content -->
          <!-- footer -->
          <footer id="footer">
            <p class="footer-icon"><img src="images/ico-heart2.png" alt="" /></p>
            <!-- <p class="quote-content">"."</p> -->
            <!-- <p class="quote-author"></p> -->
          </footer>
          <!-- /footer -->
        </div>
      </div>
    </div>
    <!-- /Main Content
================================================== -->
  </div>
</template>

<style></style>
<script>
export default {
  methods: {
    test: function () {
      console.log("test");
    },
    hideCountdown: function () {
      this.displayCountdown = false;
    },
    showCountdown: function () {
      this.displayCountdown = true;
    },
    refresh: function () {
      location.reload();
    },
  },
  data: function () {
    return {
      displayCountdown: true,
    };
  },
};
</script>
