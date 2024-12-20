# top-modulados-site
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Top Modulados - Custom Furniture Solutions</title>
    <style>
        :root {
            --black: #000000;
            --red: #FF0000;
            --gray: #808080;
            --white: #FFFFFF;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Montserrat', sans-serif;
        }

        /* Header Styles */
        .header {
            position: fixed;
            top: 0;
            width: 100%;
            background-color: var(--black);
            padding: 1rem;
            z-index: 1000;
        }

        .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            color: var(--white);
            font-size: 1.5rem;
            font-weight: bold;
        }

        .nav-menu {
            display: flex;
            gap: 2rem;
        }

        .nav-link {
            color: var(--white);
            text-decoration: none;
            transition: color 0.3s ease;
        }

        .nav-link:hover {
            color: var(--red);
        }

        .hamburger {
            display: none;
            color: var(--white);
            font-size: 2rem;
            cursor: pointer;
        }

        @media (max-width: 768px) {
            .nav-menu {
                display: none;
                flex-direction: column;
                gap: 1rem;
                position: absolute;
                top: 60px;
                right: 10px;
                background-color: var(--black);
                padding: 1rem;
                border-radius: 8px;
            }

            .hamburger {
                display: block;
            }
        }

        /* Hero Section */
        .hero {
            height: 100vh;
            background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
                        url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
            background-size: cover;
            background-position: center;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 2rem;
        }

        .hero-content {
            color: var(--white);
        }

        .hero-title {
            font-size: 3rem;
            margin-bottom: 1rem;
        }

        .hero-subtitle {
            font-size: 1.5rem;
            margin-bottom: 2rem;
        }

        .cta-button {
            background-color: var(--red);
            color: var(--white);
            padding: 1rem 2rem;
            border: none;
            border-radius: 5px;
            font-size: 1.2rem;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .cta-button:hover {
            background-color: #cc0000;
        }

        /* Benefits Section */
        .benefits {
            padding: 4rem 2rem;
            max-width: 1200px;
            margin: 0 auto;
        }

        .benefits-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .benefit-card {
            text-align: center;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        .benefit-icon {
            font-size: 3rem;
            color: var(--red);
            margin-bottom: 1rem;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .hero-title {
                font-size: 2rem;
            }
            
            .hero-subtitle {
                font-size: 1.2rem;
            }
        }
    </style>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/your-kit-code.js" crossorigin="anonymous"></script>
</head>
<body>

<header class="header" aria-label="Main Navigation">
    <nav class="nav-container">
        <div class="logo">Top Modulados</div>
        <div class="hamburger" onclick="toggleMenu()">☰</div>
        <div class="nav-menu" role="navigation">
            <a href="/" class="nav-link" aria-label="Home">Home</a>
            <a href="/builder" class="nav-link" aria-label="Project Builder">Project Builder</a>
            <a href="/budget" class="nav-link" aria-label="Budget">Budget</a>
            <a href="/about" class="nav-link" aria-label="About Us">About Us</a>
            <a href="/contact" class="nav-link" aria-label="Contact">Contact</a>
        </div>
    </nav>
</header>

<main>
    <section class="hero">
        <div class="hero-content">
            <h1 class="hero-title">Create Your Dream Furniture</h1>
            <p class="hero-subtitle">Custom designs tailored to your space</p>
            <button class="cta-button" onclick="window.location.href='/builder'">Create Your Project Now</button>
        </div>
    </section>

    <section class="benefits">
        <div class="benefits-grid">
            <div class="benefit-card">
                <i class="fas fa-pencil-ruler benefit-icon"></i>
                <h3>Custom Design</h3>
                <p>Create furniture that perfectly fits your space</p>
            </div>
            <div class="benefit-card">
                <i class="fas fa-calculator benefit-icon"></i>
                <h3>Instant Budget</h3>
                <p>Get real-time pricing for your project</p>
            </div>
            <div class="benefit-card">
                <i class="fas fa-sync benefit-icon"></i>
                <h3>Updated Prices</h3>
                <p>Always get the most current market prices</p>
            </div>
        </div>
    </section>
</main>

<script>
    function toggleMenu() {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    }

    // Add scroll effect to header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        header.style.background = window.scrollY > 100 ? 'rgba(0,0,0,0.9)' : 'var(--black)';
    });
</script>

</body>
</html>
git add .
git commit -m "Alterações no design e conteúdo"
git push origin main