<template>
    <div class="story-container">
      <section class="story-section">
        <h1 class="story-title">Our Story</h1>
        
        <div class="story-moment">
          <div class="moment-content">
            <h2>How We Met</h2>
            <p>
              Back in 2023, Meret was living in Hamburg, Germany, studying for her master’s in Criminology. She had always been an adventurer, and solo trips were nothing new to her. She had gone on several adventures across Europe, and now had set her sights on a trip to New York City. A place she had dreamed of visiting since she was a kid. “Maybe I could get someone from the city to show me around”, Meret thought, so she downloaded Bumble. One of the first people the app presented to her was James. On his profile, he stated that he enjoys trying different foods, and that he loves soccer - it was a match made in heaven. Meret immediately messaged.

            </p>
          </div>
          <div class="moment-image">
            <img src="../assets/first_date.jpeg" alt="Meret and James at DSK" />
          </div>
        </div>
  
        <div class="story-moment reverse">
          <div class="moment-content">
            <h2>First Date</h2>
            <p>
              After literal months of talking online, Meret finally landed in New York City. James had been so excited for this moment. Wasting no time, he arranged to meet Meret for a beer at a charming German beer garden called “Die Stammkneipe” ("the local pub" in English). There was an instant spark when James showed Meret places he’d been to on Google maps, explained rock formations and asked about her favorite soccer teams. What began as a simple drink evolved into an evening-long adventure: Walking through Fort Greene, admiring Manhattan's skyline from Brooklyn Bridge Park, and wandering among the brownstones of Brooklyn Heights well into the night. They spent hours sharing stories, talking about their families, and getting to know each other.
            </p>
          </div>
          <div class="moment-image">
            <img src="../assets/first_date_2.jpeg" alt="Our first date" />
          </div>
        </div>
  
        <div class="story-moment">
          <div class="moment-content">
            <h2>The First Week</h2>
            <p>
              Meret and James shared an incredible week together. While visiting the Metropolitan Museum of Art, they discovered their shared passion for art and archaeology. Meret tried her first birria taco and was instantly hooked. They spent their days taking long walks in Central Park, exploring the Brooklyn Botanic Garden, riding the ferry, playing soccer together, and enjoying evenings in Fort Greene Park and Prospect Park. When James was briefly out of town, Meret even joined his friends for bar trivia night. This first week together sparked a deep relationship built on friendship.
            </p>
          </div>
          <div class="moment-image">
            <img src="../assets/nyc.jpg" alt="The proposal" />
          </div>
        </div>

        <div class="story-moment reverse">
          <div class="moment-content">
            <h2>Travel Adventures</h2>
            <p>
              When Meret inevitably returned to Hamburg, the pair kept in touch. Through video calls, quick chats, and long talks, their relationship continued to grow. Then, an amazing opportunity presented itself when Meret was invited to Athens, Greece for an international Criminology conference. Without any concerns, she asked James to be her travel partner. Together, they not only had a wonderful time in Athens, but also in Hamburg, where James visited Meret soon after. That December in Hamburg, Meret and James decided to officially date, despite living on different continents. Since then, they have traveled to many interesting places, including Weimar, Lisbon, Porto, Berlin, Potsdam, The Finger Lakes, and San Diego.
            </p>
          </div>
          <div class="moment-image">
            <img src="../assets/acropolis.jpg" alt="Our first date" />
          </div>
        </div>

        <div class="story-moment">
          <div class="moment-content">
            <h2>Since then</h2>
            <p>
              In 2024, Meret began a graduate program in Albany, NY, and suddenly the distance between James and her shrank. They spent weekends and school breaks exploring upstate towns and trying new dumpling shops in NYC. On Sunday, February 2, James proposed along the banks of the Hudson River during a trip to Cold Spring, NY. Meret and James are delighted to celebrate the beginning of their marriage and the continuation of their partnership surrounded by friends and family. We hope you can join us on March 29!

            </p>
          </div>
          <div class="moment-image">
            <img src="../assets/proposal.jpg" alt="The proposal" />
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