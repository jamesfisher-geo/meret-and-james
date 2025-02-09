<template>
    <div class="rsvp-container">
      <h1 class="rsvp-title">RSVP</h1>
      <div class="form-container">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfhCLhKV63J1zxGMyvuKiagq5Pv85nnYX-VUdzJHDh5mVlG4w/viewform?embedded=true" width="1280" height="1447" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </div>
    </div>
  </template>
  
  <style scoped>
  .rsvp-container {
    max-width: 900px;
    margin: 2rem auto;
    padding: 0 1.5rem;
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
    display: flex;
    justify-content: center;
  }
  
  .google-form {
    width: 100%;
    min-height: 800px;
    border: none;
  }
  
  @media (max-width: 768px) {
    .rsvp-title {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
    }
  
    .google-form {
      min-height: 1000px;
    }
  }
  </style>