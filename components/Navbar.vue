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
  mounted() {
    const navbar = document.querySelector('.navbar');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    // Function to collapse the navbar
    const collapseNavbar = () => {
      if (navbarCollapse && navbarCollapse.classList.contains('in')) {
        $(navbarCollapse).collapse('hide'); // Use Bootstrap's collapse method to hide
      }
    };

    // Handle click outside the navbar
    document.addEventListener('click', (event) => {
      if (navbar && navbarCollapse && !navbar.contains(event.target)) {
        collapseNavbar();
      }
    });

    // Handle the toggle button click event
    const toggleButton = document.querySelector('.navbar-toggle');
    if (toggleButton) {
      toggleButton.addEventListener('click', () => {
        $(navbarCollapse).collapse('toggle'); // Use Bootstrap's collapse method to toggle
      });
    }

    // Handle click on navbar links
    const navbarLinks = document.querySelectorAll('.nav a');
    navbarLinks.forEach(link => {
      link.addEventListener('click', () => {
        collapseNavbar(); // Collapse the navbar when a link is clicked
      });
    });
  }
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