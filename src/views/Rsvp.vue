<template>
    <div class="rsvp-container">
      <h1 class="rsvp-title">RSVP</h1>
      <div class="form-container">
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLSfhCLhKV63J1zxGMyvuKiagq5Pv85nnYX-VUdzJHDh5mVlG4w/viewform?embedded=true" 
          class="google-form"
          frameborder="0" 
          marginheight="0" 
          marginwidth="0">
          Loading…
        </iframe>
      </div>
    </div>
  </template>
  
  <style scoped>
  .rsvp-container {
    width: 100%;
    margin: 2rem auto;
    padding: 0 1rem;
  }
  
  .rsvp-title {
    font-family: 'Playfair Display', serif;
    font-size: 3rem;
    text-align: center;
    margin-bottom: 2rem;
    color: var(--color-text);
  }
  
  .form-container {
    width: 100%;
  }
  
  .google-form {
    width: 100%;
    height: 1400px;
    border: none;
  }
  
  @media (max-width: 768px) {
    .rsvp-title {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
    }
  
    .google-form {
      height: 1600px; /* Increased height for mobile */
    }
  }
  </style>