<template>
  <div class="intro" id="intro">
      <div class="container">
          <div class="row">
              <div class="col-md-4 text">
                  <h2>Why <br> Extra Income</h2>
                  <p>We exist to provide everyone access to investment opportunities and to help you make you better investment decisions that suits your risk appetite, thus gaining financial freedom.</p>
                  <router-link to="/about" class="about__link">Learn more <i class="fas fa-long-arrow-alt-right 7x"></i></router-link>
              </div>
              <div class="col-md-1"></div>
              <div class="col-md-7 pt-5">
                          <p>Extra Income Investment company is an investment platform whereby you generate 50% returns on investment added to your capital in 4 working days as a first timer. 
                        Note: Recommitment is 100% of your investment.<br /></p>
                        <p>How we make it happen</p>
                        <hr>
                        <div class="row">
                            <div class="col-md-6">
                                      <p><i class="fa fa-check-square"></i> Binary Trading Options</p>
                                        <p><i class="fa fa-check-square"></i> I.Q Options Trading </p>
                                        <!-- <p><i class="fa fa-check-square"></i>Volatality Indices</p>
                                        <p><i class="fa fa-check-square"></i> Mining of Bitcoin</p> -->
                            </div>
                            <div class="col-md-6">
                                <p><i class="fa fa-check-square"></i>Volatality Indices</p>
                                <p><i class="fa fa-check-square"></i> Mining of Bitcoin</p>
                            </div>
                        </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../assets/styles/colors';
.intro{
    margin-top: 1rem;
    padding: 7rem 0;
    background: #f8f9fc;
        h2{
            font-weight: bolder;
            // color:$primary-color;
            padding-bottom: 1rem;
            line-height: 1.5;
        }
        p{
            color:#00093a;
            line-height: 1.7;
            opacity: .7;
            padding-bottom: .7rem;
        }
        .about__link{
            text-transform: capitalize;
            font-weight: bold;
            // color: $tertiary-color;
            // border-bottom: 1px dashed $tertiary-color;
            font-size: 1.1rem;
            text-decoration: none;
            padding: .4rem 0;
        }
        .fa-long-arrow-alt-right{
            animation-name: animate;
            animation-duration: 3s;
            animation-iteration-count: infinite;
            animation-direction: alternate;
        }
        .card__wrapper{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            grid-gap: 2rem;
            .card__content{
                background: #fff;
                border-radius: 4px;
                padding: 2rem;
                border: 1px solid #f4f4f4;
                position: relative;
                .boder__images{
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    .img{
                        max-width: 80px;
                        height: auto;
                    }
                }
                .icons{
                    max-width:70px;
                    height: auto;
                }
                h4{
                    font-weight: bold;
                    // color: $primary-color;
                    padding-top: 1.2rem;
                    line-height: 1.45;
                }
                p{
                    opacity: .6;
                    padding-top: .8rem;
                    font-weight: 400;
                    line-height: 1.7;
                    color:#00093a;
                }
            }
        }
}

//Animation for button arrow
@keyframes animate {
    from{
        opacity: 0;
    }
    to{
        transform: translateX(30px);
        opacity: 1;
    }
}

//Medida Queries
@media only screen and (max-width: 600px){
.card__wrapper{
    margin-top: 2rem;
}
}
</style>