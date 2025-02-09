<template>
    <div class="story-container">
      <section class="story-section">
        <h1 class="story-title">Our Story</h1>
        
        <div class="story-moment">
          <div class="moment-content">
            <h2>How We Met</h2>
            <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
          </div>
          <div class="moment-image">
            <img src="../assets/meretandjames_burlington.jpeg" alt="Meret and James at DSK" />
          </div>
        </div>
  
        <div class="story-moment reverse">
          <div class="moment-content">
            <h2>First Date</h2>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          <div class="moment-image">
            <img src="../assets/meretandjames_burlington.jpeg" alt="Our first date" />
          </div>
        </div>
  
        <div class="story-moment">
          <div class="moment-content">
            <h2>The Proposal</h2>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          <div class="moment-image">
            <img src="../assets/meretandjames_burlington.jpeg" alt="The proposal" />
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <style scoped>
  .story-container {
    max-width: 900px;
    margin: 2rem auto;
    padding: 0 1.5rem;
  }
  
  .story-title {
    font-family: 'Playfair Display', serif;
    font-size: 3rem;
    text-align: center;
    margin-bottom: 3rem;
    color: var(--color-text);
  }
  
  .story-moment {
    display: flex;
    align-items: center;
    margin-bottom: 4rem;
    gap: 3rem;
  }
  
  .story-moment.reverse {
    flex-direction: row-reverse;
  }
  
  .moment-content {
    flex: 1;
  }
  
  .moment-content h2 {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: var(--color-text);
  }
  
  .moment-content p {
    font-family: 'Playfair Display', serif;
    line-height: 1.8;
    font-size: 1.1rem;
    color: var(--color-text);
  }
  
  .moment-image {
    flex: 1;
    max-width: 400px;
  }
  
  .moment-image img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .moment-image img:hover {
    transform: scale(1.02);
  }
  
  @media (max-width: 768px) {
    .story-title {
      font-size: 2.5rem;
      margin-bottom: 2rem;
    }
  
    .story-moment {
      flex-direction: column;
      gap: 1.5rem;
      margin-bottom: 3rem;
    }
  
    .story-moment.reverse {
      flex-direction: column;
    }
  
    .moment-content h2 {
      font-size: 1.75rem;
      margin-bottom: 1rem;
    }
  
    .moment-content p {
      font-size: 1rem;
    }
  
    .moment-image {
      max-width: 100%;
    }
  
    .moment-image img {
      height: 300px;
    }
  }
  </style>