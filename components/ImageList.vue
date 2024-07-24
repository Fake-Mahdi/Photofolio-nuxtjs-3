<template>
  <div class="hello">
        
        <section style="margin-top: 50px; border-bottom: 0.5px solid rgb(82, 82, 82);">
            <div class="container">
                <div class="row" id="display">
                    <div v-for="index in imageCount" :key="index" class="col-lg-3 col-md-4 col-sm-12 col-xs-12">
                  <img :src="`images/gallery-${index}.jpg`" class="img-responsive s" alt="">
                    </div>
                </div>
            </div>
        </section>
            
  </div>
</template>

<script>
export default {
  name: 'ImageList',
  data() {
    return {
      imageCount: 16 // Number of images
    };
  }
}
</script>
<style >
*
{
    padding: 0px;
    margin: 0px;
}
body
{
    
    overflow: none;
    background-color: black;
}
.s{
  border-radius: 24px;
}
.navbar{
    margin-bottom: 0px;
    }
    .navbar-inverse
    {
        background-color: black;
        color: white;
    }
    
    .navbar-inverse .navbar-nav>li>a
    {
        font-size: 14px;
        color: white;
    }
    .navbar-default .navbar-nav>li>a:hover {
      
        background-color: grey;
    }
    .navbar-brand {
        color: black;
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