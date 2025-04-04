
// Current year in footer
document.getElementById('currentYear').innerText = new Date().getFullYear();

// Mobile menu toggle functionality
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.add('hidden');
    }
  });
}

// Smooth scrolling for all buttons with data-section attribute
document.querySelectorAll('button[data-section]').forEach(button => {
  button.addEventListener('click', function() {
    const targetId = this.getAttribute('data-section');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Close mobile menu if open
      if (mobileMenu) {
        mobileMenu.classList.add('hidden');
      }
      
      // Smooth scroll to the section
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Hero section specific button handlers
const contactBtn = document.getElementById('contact-btn');
const learnMoreBtn = document.getElementById('learn-more-btn');
const scrollDownBtn = document.getElementById('scroll-down-btn');

if (contactBtn) {
  contactBtn.addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({
      behavior: 'smooth'
    });
  });
}

if (learnMoreBtn) {
  learnMoreBtn.addEventListener('click', () => {
    document.getElementById('about').scrollIntoView({
      behavior: 'smooth'
    });
  });
}

if (scrollDownBtn) {
  scrollDownBtn.addEventListener('click', () => {
    document.getElementById('about').scrollIntoView({
      behavior: 'smooth'
    });
  });
}

// Navbar background change on scroll
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
});

// Contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Basic form validation
    if (!name || !email || !subject || !message) {
      alert('Please fill in all fields');
      return;
    }
    
    // Here you would normally send the form data to a server
    // For demonstration, we'll just show an alert
    alert(`Thank you for your message, ${name}! I will get back to you shortly.`);
    
    // Reset the form
    contactForm.reset();
  });
}

// Ensure the GPT Engineer (Lovable) script is present
const ensureLovableScriptInDom = () => {
  // Check if the script is already in the document
  const existingScript = document.querySelector('script[src="https://cdn.gpteng.co/gptengineer.js"]');
  
  if (!existingScript) {
    // Create the script element
    const script = document.createElement('script');
    script.src = 'https://cdn.gpteng.co/gptengineer.js';
    script.type = 'module';
    
    // Get the first script in the document to insert before it
    const firstScript = document.querySelector('script');
    if (firstScript) {
      firstScript.parentNode.insertBefore(script, firstScript);
    } else {
      // If no scripts exist, append to head or body
      const parent = document.head || document.body;
      parent.appendChild(script);
    }
    
    console.log('Lovable script was successfully added to the document');
  }
};

// Run when the DOM is loaded
document.addEventListener('DOMContentLoaded', ensureLovableScriptInDom);


