<template>
    <div>
        <Navbar />
        <section style="margin-top: 90px;" class="description">
        <div class="container">
            <div class="text-center"><p style="font-family: 'Cardo', sans-serif; font-size: 60px; color: white;" >Contact</p></div>
            <div class="space2" style="margin-top: 15px; color: white; font-size: 17px;"><p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p></div>
        </div>
      </section>


      <section style="margin-top: 50px;">
        <div class="container">
            <div style="margin-left: 100px;" class="row text-center">
                <div  class="col-lg-4 col-md-4 col-xs-12 col-sm-12">
                    <div class="text-left">
                        <h4 style="font-weight: bold; font-size: 20px; color: gray;">LOCATION :</h4>
                    </div>
                    <div class="text-left">
                        <p style="color: white ; font-size: 15px;">A108 Adam Street, New York, NY 535022</p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-4 col-xs-12 col-sm-12">
                    <div class="text-left">
                        <h4 style="font-weight: bold; font-size: 20px; color: gray;">Email :</h4>
                    </div>
                    <div class="text-left">
                        <p style="color: white ; font-size: 15px;">info@example.com</p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-4 col-xs-12 col-sm-12">
                    <div class="text-left">
                        <h4 style="font-weight: bold; font-size: 20px; color: gray;">Call :</h4>
                    </div>
                    <div class="text-left">
                        <p style="color: white ; font-size: 15px;">+1 5589 55488 55</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section style="margin-top: 10px;">
        <div class="container">
            <div class="formulaire">
               <div class="adjust">
                <div class="col-lg-6 col-md-6 col-xs-6">
                    <input type="email" class="form-control" id="email" placeholder="Your Name" name="email">
                </div>
                  <div class="col-lg-6 col-md-6 col-xs-6">
                    <input type="email" class="form-control" id="email" placeholder="Your email" name="email">
                </div>
                <div style="margin-top: 20px;" class="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                    <input type="email" class="form-control" id="email" placeholder="Subject" name="email">
                </div>
                <div style="margin-top: 20px;" class="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                    <textarea name="" id="" placeholder="Message"></textarea>
                </div>

                <div class="text-center"><button type="button" class="btn2 btn-success">Send Message</button></div>
               </div>
            </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2023 Mahdi Boukhouima - All rights reserved</p>
        <p class="name">Mahdi Boukhouima</p>
      </footer>
    </div>
</template>

<script>
export default {
  name: 'cantact',

}
</script>

<style>
*
{
    margin: 0px;
    padding: 0px;
}
body
{
    
   
    background-color: black;
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
    .space2
    {
        max-width: 500px;
        margin: 0px auto;
        margin-bottom: 25px;
        text-align: center;

    }
    .space2 p
    {
        margin: 0px 0px 0px;
    }
    .formulaire
    {
        max-width: 800px;
        background-color: black;
        height: 400px;
        margin: 0px auto; 
        }
    .adjust
    {
        margin-top: 50px;
    }

    .adjust input
    {
        background-color: black;
        border: 1px black solid;
        height: 40px;
        background-color: rgb(20, 20, 20);
        
    }

    .adjust textarea
    {
        border-radius: 10px;
        height: 150px;
        border: 1px black solid;
        width: 99.5%;
        padding: 15px;
        background-color: rgb(20, 20, 20);
        
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
        margin-top: 25px;
        
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