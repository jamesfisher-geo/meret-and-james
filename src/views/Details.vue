<template>
    <div class="details-container">
      <section class="details-section">
        <h2 class="section-title">Location</h2>
        <div class="section-content">
            <a href="https://dsk-brooklyn.com/">
                Die Stammkneipe (DSK Brooklyn)
            </a>
            <p>710 Fulton Street, Fort Greene - Brooklyn</p>
            <p class="time-detail">Ceremony and Dinner at 7:00pm</p>
            <p class="time-detail">Reception to follow</p>
          <!-- You might want to add a button or link to maps here -->
        </div>
      </section>
  
      <section class="details-section">
        <h2 class="section-title">Dress Code</h2>
        <div class="section-content">
          <p>Dressy Casual</p>
          <p class="dress-suggestion">
            Wear what makes you feel comfortable!
          </p>
        </div>
      </section>
  
      <section class="details-section">
        <h2 class="section-title">Travel</h2>
        <div class="section-content">
          <h3>Getting Here</h3>
          <div class="travel-option">
            <h4>By Air</h4>
            <p>The Fort Greene area of Brooklyn is accessible by public transit from any of the major NY airports (JFK, LaGuardia, or Newark Liberty)</p>
          </div>
          <div class="travel-option">
            <h4>By Train</h4>
            <p>From The North:</p>
            <p>The Metro-North railroad runs on lines to Grand Central Station from New Haven (CT), Waterbury (CT), Danbury (CT), Wassaic (NY), and Poughkeepsie (NY)</p>
            <p>From Grand Central, the easiest route via the Subway is the Downtown/Brooklyn-bound 4/5 train from Grand Central to Atlantic Terminal - Barkleys Center followed by a 6 minute walk. Additionally, the Queens-bound 7 train to Court Square station, followed by the Brooklyn-bound G train to Fulton Street station.</p>
            <p>From The South or West:</p>
            <p>New Jersey Transit operates several lines that route from central and northern New Jersey to Penn Station</p>
            <p>From Penn Station, the easiest route via the Subway is on the Brooklyn C train to Lafayette Ave</p>

          </div>
          <div class="travel-option">
            <h4>By Car</h4>
            <p>There are several parking garages in the area</p>
            <p>Street parking is free on the weekends where available. Downtown Brooklyn is crowded. The neighborhoods of Fort Greene or Clinton Hill are more likely to have available spaces</p>
          </div>
        </div>
      </section>
  
      <section class="details-section">
        <h2 class="section-title">Hotels</h2>
        <div class="section-content">
          <div class="hotel-block">
            <h3>Holiday Inn -  Downtown Brooklyn</h3>
            <p>300 Schermerhorn Street, Brooklyn, NY</p>
            <!-- <p class="hotel-rate">Room block rate: $229/night</p>
            <p>Block code: MERETJAMES2025</p>
            <p>Cut-off date: February 28, 2025</p> -->
          </div>
          
          <div class="hotel-block">
            <h3>Fairfield Inn & Suites New York Brooklyn</h3>
            <p>181 3rd Ave, Brooklyn, NY 11217</p>
            <!-- <p class="hotel-rate">Room block rate: $199/night</p>
            <p>Block code: MJ2025WEDDING</p>
            <p>Cut-off date: February 28, 2025</p> -->
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  // Add any necessary imports or logic here
  </script>
  
  <style scoped>
  .details-container {
    max-width: 800px;
    margin: 2rem auto;
    padding: 0 1rem;
  }
  
  .details-section {
    margin-bottom: 3rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--color-border);
  }
  
  .details-section:last-child {
    border-bottom: none;
  }
  
  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }
  
  .section-content {
    font-family: 'Playfair Display', serif;
    line-height: 1.6;
  }
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--color-text);
  }
  
  h4 {
    font-size: 1.2rem;
    margin: 1rem 0;
    color: var(--color-text);
  }
  
  .time-detail {
    font-style: italic;
    margin: 0.5rem 0;
  }
  
  .dress-suggestion {
    margin: 0.5rem 0;
  }
  
  .weather-note {
    margin-top: 1rem;
    font-style: italic;
    color: #666;
  }
  
  .travel-option {
    margin-bottom: 1.5rem;
  }
  
  .hotel-block {
    margin-bottom: 2rem;
    padding: 1rem;
    background-color: #f8f8f8;
    border-radius: 8px;
  }
  
  .hotel-rate {
    font-weight: bold;
    margin: 0.5rem 0;
  }

  a {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: var(--color-text);
  }
  
  @media (max-width: 768px) {
    .details-container {
      margin: 1rem auto;
    }
  
    .section-title {
      font-size: 1.75rem;
    }
  
    h3 {
      font-size: 1.25rem;
    }
  
    .hotel-block {
      padding: 0.75rem;
    }
  }
  </style>