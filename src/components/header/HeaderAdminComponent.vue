<template>
  <nav class="navbar navbar-expand-lg custome-bg p-2 " data-bs-theme="dark">
    <div class="container-fluid p-0 ml-md-5">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse blue-color-bg " id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item ">
            <RouterLink
              to="/students"
              active-class="active"
              class="nav-link "
            >
              <div class="link-container">
                <i class="bi bi-file-earmark-person-fill"></i>
                {{ $t('titles.academicInfo') }}
              </div>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              to="/academic/info"
              active-class="active"
              class="nav-link "
            >
              <div class="link-container">
                <i class="bi bi-building-fill-add"></i>
                {{ $t('titles.history') }}
              </div>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              to="/noti/center"
              active-class="active"
              class="nav-link "
            >
              <div class="link-container">
                <i class="bi bi-bell-fill"></i>
                {{ $t('titles.notiCenter') }}
              </div>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped>
.nav-link {
  color: var(--color-background);
}

.nav-link.active {
  background: var(--color-background);
  color: var(--blue-color);
}

.custome-bg {
  background: var(--blue-color);
  color: #fff;
}

@media (min-width: 698px) { /* Pantallas más pequeñas que 576px */
  .navbar-collapse {
    background: var(--blue-color); /* Fondo azul para el menú desplegable */
    
  }
}
</style>
