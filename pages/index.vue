<template>
  <div>
        <section style="margin-top: 100px;">
            <div class="container">
                    <div class="text-center">

                        <div class="space text-center">
                            <h1 style="color: white; font-family: 'Cardo', sans-serif; font-weight: bold;">I'm <span style="color:#27a776">Jenny Wilson</span> a Professional Photographer from New York City</h1>
                        </div>

                            <div class="space2" style="margin-top: 30px; color: grey; font-size: 18px;"><p>Blanditiis praesentium aliquam illum tempore incidunt debitis dolorem magni est deserunt sed qui libero. Qui voluptas amet.</p></div>
                        <div class="text-center"><button type="button" class="btn2 btn-success">AVAILABLE FOR HIRE</button></div>
                    </div>
            </div>
        </section>

        <ImageList />

        
  </div>
</template>

<script>
export default {
  name: 'Homesection',
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
.page-enter-active,
.page-leave-active {
  transition: all 0.8s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
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
.hero-section {
  margin-top: 100px;
}
.hero-title {
  color: white;
  font-family: 'Cardo', sans-serif;
  font-weight: bold;
}
.highlight {
  color: #27a776;
}
.hero-subtitle {
  margin-top: 30px;
  color: grey;
  font-size: 18px;
}
.btn-success {
  background-color: #27a776;
  font-size: 14px;
  color: white;
  border: 1px solid rgb(134, 177, 147);
  padding: 12px 40px;
  border-radius: 4px;
}
footer {
  background-color: black;
  color: white;
  padding: 20px;
  text-align: center;
  font-size: 16px;
}
.name {
  font-weight: bold;
}

.space
    {
        max-width: 450px;
        margin: 0px auto;

    }
    .space2
    {
        max-width: 500px;
        margin: 0px auto;
        margin-bottom: 25px;

    }
    .btn2
     {
        font-family: 'inter', sans-serif;
        background-color: #27a776;
        font-size: 14px;
        color: white;
        border: 1px solid rgb(134, 177, 147);
        padding: 12px 40px;
        border-radius: 4px;
        
     }
     .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {
        position: relative;
        min-height: 1px;
        padding: 10px;
    }

    footer {
        background-color: rgb(0, 0, 0);
        color: #fff;
        padding: 20px;
        text-align: center;
        font-size: 16px;
      }
      
      /* Name styles */
      .name {
        font-weight: bold;
      }
</style>
