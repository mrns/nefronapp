<template>
  <div>
    <!-- START NAV -->
    <nav class="navbar is-white">
      <div class="container">
        <div class="navbar-brand">
          <router-link class="navbar-item brand-text" to="/">NefronApp</router-link>
          <div class="navbar-burger burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navMenu" class="navbar-menu">
          <div class="navbar-start">
            <router-link to="/alimentos" class="navbar-item">Alimentos</router-link>
            <router-link to="/recetas" class="navbar-item">Recetas</router-link>
            <router-link to="/dieta" class="navbar-item">Dieta</router-link>
            <router-link to="/calendario" class="navbar-item">Calendario</router-link>
            <router-link to="/reportes" class="navbar-item">Reportes</router-link>
          </div>
        </div>
      </div>
    </nav>
    <!-- END NAV -->
  </div>
</template>
