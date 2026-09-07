<script setup></script>

<template>
  <nav class="main-menu">
    <ul>
      <li>
        <router-link to="/">
          <i class="bi bi-house-door-fill fa fa-2x"></i>
          <span class="nav-text"> صفحه اصلی </span>
        </router-link>
      </li>
      <li>
        <router-link to="/about">
          <i class="bi bi-file-person-fill fa fa-2x"></i>
          <span class="nav-text"> درباره ما </span>
        </router-link>
      </li>
      <li>
        <router-link to="/contact-us">
          <i class="bi bi-telephone-fill fa fa-2x"></i>
          <span class="nav-text"> تماس با ما </span>
        </router-link>
      </li>
    </ul>
  </nav>

  <router-view />
</template>

<style>
  @font-face {
    font-family: "Vazir";
    src: url("./fonts/Vazir.eot");
    /* IE9 Compat Modes */
    src:
      url("./fonts/Vazir.eot?#iefix") format("embedded-opentype"),
      url("./fonts/Vazir.woff2") format("woff2"),
      url("./fonts/Vazir.woff") format("woff"),
      url("./fonts/Vazir.ttf") format("truetype");
    /* Safari, Android, iOS */
  }

  body {
    font-family: "Vazir" !important;
    direction: rtl;
    display: flow-root;
    margin: 0;
    height: 100vh;
    background:
      radial-gradient(circle at 94.02% 88.03%, #54a4ff, transparent 100%),
      radial-gradient(circle at 25.99% 27.79%, #ff94fb, transparent 100%),
      radial-gradient(circle at 50% 50%, #000000, #000000 100%);
    background-repeat: no-repeat;
  }

  .fa-2x {
    font-size: 2em;
  }
  .fa {
    position: relative;
    display: table-cell;
    width: 60px;
    height: 36px;
    text-align: center;
    vertical-align: middle;
    font-size: 20px;
  }

  .main-menu {
    background: #212121;
    position: fixed;
    top: 0;
    height: 100%;
    right: 0;
    width: 60px;
    overflow: hidden;
    -webkit-transition: width 0.05s linear;
    transition: width 0.05s linear;
    -webkit-transform: translateZ(0) scale(1, 1);
    z-index: 1000;
  }

  .main-menu:hover {
    width: 250px;
    overflow: visible;
  }

  .main-menu > ul {
    margin: 7px 0;
  }

  .main-menu li {
    position: relative;
    display: block;
    width: 250px;
  }

  .main-menu li > a {
    position: relative;
    display: table;
    border-collapse: collapse;
    border-spacing: 0;
    color: #999;
    font-size: 16px;
    text-decoration: none;
    -webkit-transform: translateZ(0) scale(1, 1);
    -webkit-transition: all 0.1s linear;
    transition: all 0.1s linear;
  }

  .main-menu .nav-icon {
    position: relative;
    display: table-cell;
    width: 60px;
    height: 36px;
    text-align: center;
    vertical-align: middle;
    font-size: 18px;
  }

  .main-menu .nav-text {
    position: relative;
    display: table-cell;
    vertical-align: middle;
    width: 190px;
  }

  .main-menu > ul.logout {
    position: absolute;
    left: 0;
    bottom: 0;
  }

  .no-touch .scrollable.hover {
    overflow-y: hidden;
  }

  .no-touch .scrollable.hover:hover {
    overflow-y: auto;
    overflow: visible;
  }

  a:hover,
  a:focus {
    text-decoration: none;
  }

  nav {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
  }

  nav ul,
  nav li {
    outline: 0;
    margin: 0;
    padding: 0;
  }
  .main-menu li:hover > a,
  nav.main-menu li.active > a,
  .dropdown-menu > li > a:hover,
  .dropdown-menu > li > a:focus,
  .dropdown-menu > .active > a,
  .dropdown-menu > .active > a:hover,
  .dropdown-menu > .active > a:focus,
  .no-touch .dashboard-page nav.dashboard-menu ul li:hover a,
  .dashboard-page nav.dashboard-menu ul li.active a {
    color: #fff;
    background-color: #000000;
  }

  h1 {
    margin-top: 6rem;
    text-align: center;
    font-weight: 100;
    font-size: 4rem;
    color: white;
    letter-spacing: 6px;
    text-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
  }

  @media screen and (max-width: 426px) {
    h1 {
      font-size: 2rem;
    }
  }

  @media screen and (max-width: 769px) {
    h1 {
      margin-left: 6rem;
      text-align: left;
    }
  }
</style>
