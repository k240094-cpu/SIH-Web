
// Mobile Menu Toggle
document.getElementById('mobile-menu-btn').addEventListener('click', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function updateCarousel() {
    const track = document.getElementById('carousel-track');
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

function previousSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

// Auto-rotate carousel
setInterval(nextSlide, 5000);

// JavaScript Popup Functions (Required by assignment)
function showWelcomePopup() {
    const popup = window.open('', 'Welcome', 'width=400,height=300,scrollbars=yes,resizable=yes');
    popup.document.write(`
                <html>
                <head>
                    <title>Welcome to Wanderlust Trails</title>
                    <style>
                        body { font-family: 'Arial', sans-serif; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-align: center; }
                        h1 { color: #fff; margin-bottom: 20px; }
                        p { font-size: 16px; line-height: 1.6; margin-bottom: 20px; }
                        button { background: #FF6B35; color: white; padding: 10px 20px; border: none; border-radius: 25px; cursor: pointer; font-size: 16px; }
                        button:hover { background: #e55a2e; }
                    </style>
                </head>
                <body>
                    <h1>🌍 Welcome, Fellow Traveler!</h1>
                    <p>Thank you for joining our community of adventure seekers. Get ready to discover amazing destinations, insider tips, and inspiring stories from around the globe!</p>
                    <p>Your journey to extraordinary experiences starts here.</p>
                    <button onclick="window.close()">Start Exploring!</button>
                </body>
                </html>
            `);
}

function showMorePosts() {
    const popup = window.open('', 'MorePosts', 'width=500,height=400,scrollbars=yes,resizable=yes');
    popup.document.write(`
                <html>
                <head>
                    <title>More Travel Stories</title>
                    <style>
                        body { font-family: 'Arial', sans-serif; padding: 20px; background: #f8f9fa; }
                        h1 { color: #2D5016; margin-bottom: 20px; }
                        .story { background: white; padding: 15px; margin-bottom: 15px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
                        .story h3 { color: #355E3B; margin-bottom: 10px; }
                        .story p { color: #666; line-height: 1.6; }
                        button { background: #2D5016; color: white; padding: 10px 20px; border: none; border-radius: 25px; cursor: pointer; margin-top: 20px; }
                    </style>
                </head>
                <body>
                    <h1>📚 More Travel Stories</h1>
                    <div class="story">
                        <h3>🏝️ Island Hopping in Thailand</h3>
                        <p>Discover the pristine beaches and vibrant culture of Thailand's most beautiful islands.</p>
                    </div>
                    <div class="story">
                        <h3>🏔️ Trekking in Patagonia</h3>
                        <p>An epic journey through one of the world's last wilderness frontiers.</p>
                    </div>
                    <div class="story">
                        <h3>🌸 Cherry Blossom Season in Japan</h3>
                        <p>Experience the magic of sakura season in Japan's most picturesque locations.</p>
                    </div>
                    <button onclick="window.close()">Close Window</button>
                </body>
                </html>
            `);
}

// Alert Box (Required by assignment)
function showTravelAlert() {
    alert("🌟 Don't forget to check out our latest packing lists and travel tips before your next adventure! Safe travels!");
}

// Show alert after 3 seconds of page load
setTimeout(showTravelAlert, 3000);

// Lazy Loading for Images
document.addEventListener('DOMContentLoaded', function () {
    const lazyImages = document.querySelectorAll('.lazy');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// asia 
function toggleAccordion(button) {
    const content = button.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
}

// Mobile Menu Toggle
document.getElementById('mobile-menu-btn').addEventListener('click', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});



// Japan Info Popup (Required JavaScript popup #1)
function showJapanInfo() {
    const popup = window.open('', 'JapanInfo', 'width=500,height=450,scrollbars=yes,resizable=yes');
    popup.document.write(`
                <html>
                <head>
                    <title>Japan Travel Guide</title>
                    <style>
                        body { 
                            font-family: 'Arial', sans-serif; 
                            padding: 30px; 
                            background: linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%); 
                            color: white; 
                            margin: 0;
                        }
                        .guide-box {
                            background: rgba(255,255,255,0.1);
                            padding: 25px;
                            border-radius: 15px;
                            backdrop-filter: blur(10px);
                        }
                        h1 { color: #FFD700; text-align: center; margin-bottom: 20px; }
                        .highlight { background: rgba(255,255,255,0.2); padding: 15px; border-radius: 8px; margin: 15px 0; }
                        .must-visit { color: #FF6B35; font-weight: bold; }
                        button { 
                            background: #2D5016; 
                            color: white; 
                            padding: 12px 24px; 
                            border: none; 
                            border-radius: 25px; 
                            cursor: pointer; 
                            font-size: 16px; 
                            margin-top: 20px;
                            display: block;
                            margin-left: auto;
                            margin-right: auto;
                        }
                        button:hover { background: #355E3B; }
                    </style>
                </head>
                <body>
                    <div class="guide-box">
                        <h1>🌸 Japan Travel Guide</h1>
                        
                        <div class="highlight">
                            <h3 class="must-visit">🏯 Must-Visit Places:</h3>
                            <p>• Tokyo - Modern metropolis with traditional districts<br>
                            • Kyoto - Ancient capital with 2,000 temples<br>
                            • Mount Fuji - Sacred mountain and hiking destination<br>
                            • Osaka - Food capital of Japan<br>
                            • Hiroshima - Peace memorial and historical significance</p>
                        </div>
                        
                        <div class="highlight">
                            <h3 class="must-visit">🍱 Unique Experiences:</h3>
                            <p>• Stay in a traditional ryokan<br>
                            • Experience a tea ceremony<br>
                            • Ride the bullet train (Shinkansen)<br>
                            • Visit during cherry blossom season<br>
                            • Explore anime and manga culture</p>
                        </div>
                        
                        <button onclick="window.close()">Start Planning!</button>
                    </div>
                </body>
                </html>
            `);
}

// Thailand Info Popup
function showThailandInfo() {
    const popup = window.open('', 'ThailandInfo', 'width=500,height=450,scrollbars=yes,resizable=yes');
    popup.document.write(`
                <html>
                <head>
                    <title>Thailand Travel Guide</title>
                    <style>
                        body { 
                            font-family: 'Arial', sans-serif; 
                            padding: 30px; 
                            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                            color: white; 
                            margin: 0;
                        }
                        .guide-box {
                            background: rgba(255,255,255,0.1);
                            padding: 25px;
                            border-radius: 15px;
                            backdrop-filter: blur(10px);
                        }
                        h1 { color: #FFD700; text-align: center; margin-bottom: 20px; }
                        .highlight { background: rgba(255,255,255,0.2); padding: 15px; border-radius: 8px; margin: 15px 0; }
                        .must-visit { color: #FF6B35; font-weight: bold; }
                        button { 
                            background: #2D5016; 
                            color: white; 
                            padding: 12px 24px; 
                            border: none; 
                            border-radius: 25px; 
                            cursor: pointer; 
                            font-size: 16px; 
                            margin-top: 20px;
                            display: block;
                            margin-left: auto;
                            margin-right: auto;
                        }
                        button:hover { background: #355E3B; }
                    </style>
                </head>
                <body>
                    <div class="guide-box">
                        <h1>🏝️ Thailand Travel Guide</h1>
                        
                        <div class="highlight">
                            <h3 class="must-visit">🏖️ Must-Visit Places:</h3>
                            <p>• Bangkok - Vibrant capital with Grand Palace<br>
                            • Phuket - Stunning beaches and nightlife<br>
                            • Chiang Mai - Mountain city with temples<br>
                            • Koh Phi Phi - Pristine island paradise<br>
                            • Ayutthaya - Ancient royal capital ruins</p>
                        </div>
                        
                        <div class="highlight">
                            <h3 class="must-visit">🌶️ Unique Experiences:</h3>
                            <p>• Thai cooking classes<br>
                            • Traditional Thai massage<br>
                            • Floating markets exploration<br>
                            • Elephant sanctuary visits<br>
                            • Full moon parties on islands</p>
                        </div>
                        
                        <button onclick="window.close()">Start Planning!</button>
                    </div>
                </body>
                </html>
            `);
}

// India, Nepal, China, Indonesia functions (similar structure)
function showIndiaInfo() {
    alert("🇮🇳 India Travel Alert!\n\nIndia offers incredible diversity:\n\n• Golden Triangle (Delhi-Agra-Jaipur)\n• Kerala backwaters and houseboats\n• Goa beaches and Portuguese heritage\n• Rajasthan palaces and desert safaris\n• Himalayan hill stations\n\nTip: Respect local customs and dress modestly when visiting religious sites!");
}

function showNepalInfo() {
    alert("🏔️ Nepal Adventure Alert!\n\nNepal is perfect for:\n\n• Everest Base Camp trekking\n• Annapurna Circuit hiking\n• Kathmandu cultural exploration\n• Pokhara lake activities\n• Buddhist monastery visits\n\nTip: Altitude sickness preparation is essential for high-altitude treks!");
}

function showChinaInfo() {
    alert("🏯 China Discovery Alert!\n\nChina highlights include:\n\n• Great Wall of China\n• Forbidden City in Beijing\n• Terracotta Warriors in Xi'an\n• Li River cruises in Guilin\n• Modern Shanghai skyline\n\nTip: Learn basic Mandarin phrases and respect local customs!");
}

function showIndonesiaInfo() {
    alert("🌺 Indonesia Paradise Alert!\n\nIndonesia offers:\n\n• Bali cultural experiences\n• Yogyakarta royal heritage\n• Komodo National Park\n• Raja Ampat diving paradise\n• Jakarta urban adventures\n\nTip: Island hopping requires careful planning - book domestic flights early!");
}

// Asia Contact Popup (Required JavaScript popup #2)
function showAsiaContactPopup() {
    const popup = window.open('', 'AsiaContact', 'width=450,height=350,scrollbars=yes,resizable=yes');
    popup.document.write(`
                <html>
                <head>
                    <title>Asia Travel Specialists</title>
                    <style>
                        body { 
                            font-family: 'Arial', sans-serif; 
                            padding: 30px; 
                            background: linear-gradient(135deg, #2D5016 0%, #355E3B 100%); 
                            color: white; 
                            text-align: center;
                            margin: 0;
                        }
                        .contact-box {
                            background: rgba(255,255,255,0.1);
                            padding: 25px;
                            border-radius: 15px;
                            backdrop-filter: blur(10px);
                        }
                        h1 { color: #FFD700; margin-bottom: 20px; }
                        .specialist { 
                            background: rgba(0,0,0,0.2); 
                            padding: 15px; 
                            margin: 15px 0; 
                            border-radius: 8px;
                            text-align: left;
                        }
                        .specialist h3 { color: #87CEEB; margin-bottom: 8px; }
                        button { 
                            background: #FF6B35; 
                            color: white; 
                            padding: 12px 24px; 
                            border: none; 
                            border-radius: 25px; 
                            cursor: pointer; 
                            font-size: 16px; 
                            margin-top: 20px;
                        }
                        button:hover { background: #e55a2e; }
                    </style>
                </head>
                <body>
                    <div class="contact-box">
                        <h1>🌏 Asia Travel Specialists</h1>
                        <p>Our expert team is ready to help plan your perfect Asian adventure!</p>
                        
                        <div class="specialist">
                            <h3>📧 Email Consultation</h3>
                            <p>Send us your travel dates and interests: asia@wanderlusttrails.com</p>
                        </div>
                        
                        <div class="specialist">
                            <h3>📞 Phone Consultation</h3>
                            <p>Speak with our Asia experts: +61 2 9000 1234</p>
                        </div>
                        
                        <div class="specialist">
                            <h3>💬 Live Chat Support</h3>
                            <p>Available Mon-Fri 9AM-6PM AEST for instant help</p>
                        </div>
                        
                        <button onclick="window.close()">Contact Us Now!</button>
                    </div>
                </body>
                </html>
            `);
}

// Show travel tip alert after page loads
setTimeout(() => {
    alert("🎋 Asia Travel Tip!\n\nBest time to visit most Asian countries is during their cool, dry seasons (Oct-Mar for Southeast Asia, Mar-May & Sep-Nov for East Asia).\n\nDon't forget to respect local customs and dress codes, especially when visiting temples and religious sites!");
}, 2000);
