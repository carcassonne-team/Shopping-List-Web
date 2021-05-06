<template>
  <section id="hero" class="d-flex align-items-center">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
          <h1>Stwórz właśną listę zakupów!</h1>
          <h2>Nasza aplikacja pozwoli ci na stworzenie listy zakupów na każdym urządzeniu!</h2>
          <h2>Dołącz do nas!</h2>
          <div class="d-flex justify-content-center justify-content-lg-start">
            <router-link to="/register" class="btn-get-started scrollto">Zarejestruj się</router-link>
            <router-link to="/login" class="glightbox btn-watch-video">Zaloguj się</router-link>
          </div>
        </div>
        <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
          <img src="../../assets/shopping_list.jpg" class="img-fluid animated" alt="">
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>
@import url('../../assets/css/guest.css');
</style>