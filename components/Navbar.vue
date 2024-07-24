<template>
    <div>
        <div  class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
          <div class="navbar-header">

            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#togle" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
            </button>
            
            <NuxtLink class="navbar-brand" style="color: white; font-size: 30px;" to="/">PhotoFolio</NuxtLink>
            
          </div>
          <div class="collapse navbar-collapse"  id="togle">
            <ul class="nav navbar-nav navbar-right">
                <li><NuxtLink to="/">HOME</NuxtLink></li>
                <li><NuxtLink to="/about">ABOUT</NuxtLink></li>
                <li><NuxtLink to="/service">SERVICES</NuxtLink></li>
                <li><NuxtLink to="/cantact">CONTACT</NuxtLink></li>
              </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  
}
</script>

<style>

* {
  padding: 0;
  margin: 0;
}
body {
  background-color: black;
}
.navbar {
  margin-bottom: 0;
}
.navbar-inverse {
  background-color: black;
  color: white;
}
.navbar-inverse .navbar-nav > li > .nav-link {
  font-size: 14px;
  color: white;
}
.navbar-brand {
  color: white;
  font-size: 30px;
}
</style>