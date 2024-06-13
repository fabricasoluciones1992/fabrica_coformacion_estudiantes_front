<script setup>
</script>

<template>
  <footer class="w-100 footer ">
    <section class="">
      <div class="container  text-md-start">
        <div class="row ">
          <div class="col-md-2 col-lg-4 col-xl-4 align-content-center">
            <div class="text-uppercase">
              <img alt="Uniempresarial logo" class="logo img-fluid d-inline-block" src="../assets/LogoSinFondo.png"
                width="400" height="150" />
            </div>
          </div>
          <div class="col-md-4 col-lg-3 col-xl-4 mx-auto mt-3 ps-5">
            <h2 class="text-uppercase fw-bold sub">{{ $t('footer.contact') }}</h2>
            <h3 class="fw-bold mb-0 sub">{{ $t('footer.phoneLabel') }}</h3>
            <p class="sub text-reset">{{ $t('footer.phone') }}</p>
          </div>

          <div class="col-md-6 col-lg-5 col-xl-4 mx-auto mt-3 ps-5">
            
            <h3 class="fw-bold mb-0 sub">{{ $t('footer.adressLabel') }}</h3>
            <p class="sub text-reset mt-0">{{ $t('footer.adress') }} </p>

            <h3 class="fw-bold mb-0 sub">{{ $t('footer.mailLabel') }}</h3>
            <p class="sub">
              <a href="mailto:notificacionesjudiciales@uniempresarial.edu.co"
                class="text-reset text-break">notificacionesjudiciales@uniempresarial.edu.co</a>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Copyright -->
    <div class=" Copyright px-sm-2 px-5 px-md-5">
      <div class="container text-md-start mx-md-4 px-md-4">
        <div class="row align-items-center">
          <div class="col col-md-4 col-sm-4 col-12 mt-2">
            <h3 class=" fw-bold sub">{{ $t('footer.made') }}</h3>
          </div>
          <div class="col col-md-4 col-sm-4 col-12 ">
            <h3 class="sub"><span class="fw-bold sub">{{ $t('footer.fabrica') }}</span></h3>
            <p class="sub mb-0 text-break">rvargas@uniempresarial.edu.co</p>
            <p class="sub">Ricardo Vargas</p>

          </div>
          <div class="col col-md-3 col-sm-4 col-12 px-md-4">
            <h3 class="sub"><span class=" fw-bold sub">{{ $t('footer.lider') }}</span></h3>
            <p class="sub">Ing. Kellyn Delgado Jaimes</p>

          </div>
        </div>
      </div>
    </div>
    <!-- Copyright -->
  </footer>
</template>

<style>
.footer {
  /* Establece el pie de página como un elemento flexible */
  background-color: var(--slate--Gray--color);
  display: flex;
  flex-direction: column;

}

.Copyright {
  background-color: var(--dark--slate--gray--color);

}

.img {
  width: 150px;
  height: auto;
}
.sub {
  font-size: small;
}
</style>
