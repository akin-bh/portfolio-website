
## Portfolio 




## Features

- ### **Easy to Setup 💯** 
- ### **Free to Use ( OpenSource ) 🥳** 
- ### **No Additional Frameworks 🤘** 
- ### **No Additional Libraries 🙌** 
- ### **Multi Page 💎** 
# Anuj Bhattarai — Personal Portfolio

This repository contains the static portfolio website for Anuj Bhattarai. It is a lightweight, responsive HTML/CSS/JS site showcasing projects, experience, education, achievements, and contact information.

## Live preview
If you host this repository (for example using GitHub Pages), the site will be available at your GitHub Pages URL.

## Structure
- `index.html` — Home page (Hero, About, Experience, Projects, Achievements, Contact)
- `project-1.html`, `project-2.html`, `project-3.html` — Case study pages (examples)
- `css/style.css` — Main stylesheet
- `index.js` — Small UI scripts (menu toggle, optional carousel)
- `assets/` — Images and icons used by the site
- `sass/` — SASS source files (if you prefer to recompile styles locally)

## Quick local run
1. Clone the repo (if you haven't already):

```bash
git clone https://github.com/akin-bh/portfolio-website.git
cd portfolio-website
```

2. Open `index.html` in your browser or use a simple local server. Example with Python 3:

```bash
# from the repository root
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

3. If you use the SASS source (optional), install Node dependencies and compile:

```bash
npm install
npm run compile:scss
```

## Making edits
- Update content directly in `index.html` for text changes.
- Replace images in `assets/` (use the same filename or update the `src`).
- CSS changes: edit `css/style.css` or modify SASS files in `sass/` and recompile.

## Deployment
You can publish this site using GitHub Pages or any static site host (Netlify, Vercel, etc.). For GitHub Pages, enable pages from the `main` branch in the repository settings.

## Contact
- Email: (add your email here)
- LinkedIn: (add your LinkedIn URL)

---

If you'd like a different README format (badges, screenshots, or a longer bio), tell me what to include and I'll update it.
        </div>
        <a href="./#contact" class="btn btn--med btn--theme dynamicBgClr"
          >Contact</a
        >
      </div>
      <div class="about__content-skills">
        <h3 class="about__content-title">My Skills</h3>
        <div class="skills">
          <div class="skills__skill">HTML</div>
          <div class="skills__skill">CSS</div>
          <div class="skills__skill">JavaScript</div>
          <div class="skills__skill">React</div>
          <div class="skills__skill">SASS</div>
          <div class="skills__skill">GIT</div>
          <div class="skills__skill">Shopify</div>
          <div class="skills__skill">Wordpress</div>
          <div class="skills__skill">Google ADS</div>
          <div class="skills__skill">Facebook Ads</div>
          <div class="skills__skill">Android</div>
          <div class="skills__skill">IOS</div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- END About Section -->
```

### Projects

- On `.heading-sec__sub`, put a short description about the section.
- `.projects__row` is the row for each project in your portfolio.
- One `.projects__row` for each project in your portfolio ( so for example, if you have 3 projects then you need 3 `.projects__row` one by one).

- Inside each `projects__row`, there are 4 main elements.

  - Project Image is located at `.projects__row-img` where you can add the URL for your project mockup/image. You can use websites like [Media Modifier](https://mediamodifier.com/) and [SmartMockups](https://smartmockups.com) to generate mockups for free. Just make sure to crop the extra white space around your mockup so the mockups can look bigger and the size of the mockup file will be less.

  - `.projects__row-content-title` is where you need to add your Project title.
  - `.projects__row-content-desc` is where you need to add a short 2-3 lines description of your project. As there's going to be a separate page for each project so there you can add all the details for each project on the specific project page.
  - The Anchor tag ( **Case Study** button) on press will take you to the details page for each project ( For example: If you click the **Case Study** button of Project 1 then it will take you to the `project-1.html` file where you will have all the details about that particular project).

Currently, I have already added a separate for each project ( considering there are 3 projects ) the file names are `project-1.html`, `project-2.html`, and `project-3.html`. They all contain the same code only the project title, description and image will change. If you like to add more projects then you can just create a new file for it and paste the same code that we have in `project-1.html` as the code is going to be the same and the only thing that you need to change is the data inside each project.

```html
<!-- **** Projects Section of Homepage **** -->
<section id="projects" class="projects sec-pad">
  <div class="main-container">
    <h2 class="heading heading-sec heading-sec__mb-bg">
      <span class="heading-sec__main">Projects</span>
      <span class="heading-sec__sub">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
        tempora explicabo quae quod deserunt eius sapiente
      </span>
    </h2>

    <div class="projects__content">
      <div class="projects__row">
        <div class="projects__row-img-cont">
          <img
            src="./assets/jpeg/project-mockup-example.jpeg"
            alt="Software Screenshot"
            class="projects__row-img"
            loading="lazy"
          />
        </div>
        <div class="projects__row-content">
          <h3 class="projects__row-content-title">Project 1</h3>
          <p class="projects__row-content-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
            tempora, explicabo quae quod deserunt eius sapiente praesentium.
          </p>
          <a
            href="./project-1.html"
            class="btn btn--med btn--theme dynamicBgClr"
            target="_blank"
            >Case Study</a
          >
        </div>
      </div>
      <div class="projects__row">
        <div class="projects__row-img-cont">
          <img
            src="./assets/jpeg/project-mockup-example.jpeg"
            alt="Software Screenshot"
            class="projects__row-img"
            loading="lazy"
          />
        </div>
        <div class="projects__row-content">
          <h3 class="projects__row-content-title">Project 2</h3>
          <p class="projects__row-content-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
            tempora, explicabo quae quod deserunt eius sapiente praesentium.
          </p>
          <a
            href="./project-2.html"
            class="btn btn--med btn--theme dynamicBgClr"
            target="_blank"
            >Case Study</a
          >
        </div>
      </div>
      <div class="projects__row">
        <div class="projects__row-img-cont">
          <img
            src="./assets/jpeg/project-mockup-example.jpeg"
            alt="Software Screenshot"
            class="projects__row-img"
            loading="lazy"
          />
        </div>
        <div class="projects__row-content">
          <h3 class="projects__row-content-title">Project 3</h3>
          <p class="projects__row-content-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
            tempora, explicabo quae quod deserunt eius sapiente praesentium.
          </p>
          <a
            href="./project-3.html"
            class="btn btn--med btn--theme dynamicBgClr"
            target="_blank"
            >Case Study</a
          >
        </div>
      </div>
    </div>
  </div>
</section>
<!-- END Projects Section -->
```

### Contact Section

- On `.heading-sec__sub`, put a short description about the section.
- `.contact__form-field` is the field inside form. Currently, there are 3 fields but you can add more fields as per your need but just make sure to change the name of **label** and **input/textarea** inside it.

If you like to know how to submit forms so you can receive the form details in your email then highly recommend using **formspree.io** as it's easier to set up and free to use. If you are using **Netlify** to host the site then Netlify has an inbuilt form receiver which you can use instead of **formspree**.

```html
<!-- **** Contact Section of Homepage **** -->
<section id="contact" class="contact sec-pad dynamicBg">
  <div class="main-container">
    <h2 class="heading heading-sec heading-sec__mb-med">
      <span class="heading-sec__main heading-sec__main--lt">Contact</span>
      <span class="heading-sec__sub heading-sec__sub--lt">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
        tempora explicabo quae quod deserunt eius sapiente
      </span>
    </h2>
    <div class="contact__form-container">
      <form action="#" class="contact__form">
        <div class="contact__form-field">
          <label class="contact__form-label" for="name">Name</label>
          <input
            required
            placeholder="Enter Your Name"
            type="text"
            class="contact__form-input"
            name="name"
            id="name"
          />
        </div>
        <div class="contact__form-field">
          <label class="contact__form-label" for="email">Email</label>
          <input
            required
            placeholder="Enter Your Email"
            type="text"
            class="contact__form-input"
            name="email"
            id="email"
          />
        </div>
        <div class="contact__form-field">
          <label class="contact__form-label" for="message">Message</label>
          <textarea
            required
            cols="30"
            rows="10"
            class="contact__form-input"
            placeholder="Enter Your Message"
            name="message"
            id="message"
          ></textarea>
        </div>
        <button type="submit" class="btn btn--theme contact__btn">
          Submit
        </button>
      </form>
    </div>
  </div>
</section>
<!-- END Contact Section -->
```



### Footer Section

- Inside h4 tag with the class `heading heading-sm text-lt` add your name.
- On `.main-footer__short-desc` put a short description about yourself.
- On Anchor tag inside `.main-footer__social-cont`, fill the href attribute with a link related to your social media account.

```html
<!-- **** Footer Section **** -->
<footer class="main-footer">
  <div class="main-container">
    <div class="main-footer__upper">
      <div class="main-footer__row main-footer__row-1">
        <h2 class="heading heading-sm main-footer__heading-sm">
          <span>Social</span>
        </h2>
        <div class="main-footer__social-cont">
          <a target="_blank" rel="noreferrer" href="#">
            <img
              class="main-footer__icon"
              src="./assets/png/linkedin-ico.png"
              alt="icon"
            />
          </a>
          <a target="_blank" rel="noreferrer" href="#">
            <img
              class="main-footer__icon"
              src="./assets/png/github-ico.png"
              alt="icon"
            />
          </a>
          <a target="_blank" rel="noreferrer" href="#">
            <img
              class="main-footer__icon"
              src="./assets/png/twitter-ico.png"
              alt="icon"
            />
          </a>
          <a target="_blank" rel="noreferrer" href="#">
            <img
              class="main-footer__icon"
              src="./assets/png/yt-ico.png"
              alt="icon"
            />
          </a>
          <a target="_blank" rel="noreferrer" href="#">
            <img
              class="main-footer__icon main-footer__icon--mr-none"
              src="./assets/png/insta-ico.png"
              alt="icon"
            />
          </a>
        </div>
      </div>
      <div class="main-footer__row main-footer__row-2">
            <h4 class="heading heading-sm text-lt">Anuj Bhattarai</h4>
        <p class="main-footer__short-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit facilis
          tempora explicabo quae quod deserunt
        </p>
      </div>
    </div>

    <div class="main-footer__lower">
      &copy; Copyright 2021. Made by
      <a rel="noreferrer" target="_blank" href="https://rammaheshwari.com"
  >Anuj Bhattarai</a
      >
    </div>
  </div>
</footer>
<!-- END Footer Section -->
```

<br/>

---

<br/>

## Step 3 - Project Page

Each project will have its own Page. The project page will have important details about the project like the Project Title, Description, Technologies, Project Links, etc.

### Project Hero Section

- On `.heading-primary` add the Project Title.
- On `.text-primary` add a short description about the Project.
- On Anchor Tag that says **Live Link** with class `btn btn--bg`, add the Project Live Link as the value for the href attribute.

<!-- **** Project Section **** -->

```html
<section class="project-cs-hero">
  <div class="project-cs-hero__content">
    <h1 class="heading-primary">Project 1</h1>
    <div class="project-cs-hero__info">
      <p class="text-primary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos in
        numquam incidunt earum quaerat cum fuga, atque similique natus nobis
        sit.
      </p>
    </div>
    <div class="project-cs-hero__cta">
      <a href="#" class="btn btn--bg" target="_blank">Live Link</a>
    </div>
  </div>
</section>
```

<!-- **** END Project Hero Section **** -->

### Project Details Section

- On `.project-details__showcase-img`, change the value of **src** to the location/link of Project Mockup.
- On `.project-details__desc-para` to add a detailed paragraph describing your project. Use multiple `.project-details__desc-para` elements for multiple paragraphs.
- On `.skills` mention the skills that were used to build the project inside `.skills__skill` to mention each skill.
- On Anchor Tag that says **Live Link** with class `btn btn--med btn--theme project-details__links-btn`, add the Project Live Link as the value for the href attribute.
- On Anchor Tag that says **Code Link** with class `btn btn--med btn--theme-inv project-details__links-btn`, add the Project's Code Link ( Repository Link ) as the value for the href attribute.

<!-- **** Project Details Section **** -->

```html
<section class="project-details">
  <div class="main-container">
    <div class="project-details__content">
      <div class="project-details__showcase-img-cont">
        <img
          src="./assets/jpeg/project-mockup-example.jpeg"
          alt="Project Image"
          class="project-details__showcase-img"
        />
      </div>
      <div class="project-details__content-main">
        <div class="project-details__desc">
          <h3 class="project-details__content-title">Project Overview</h3>
          <p class="project-details__desc-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque alias
            tenetur minus quaerat aliquid, aut provident blanditiis, deleniti
            aspernatur ipsam eaque veniam voluptatem corporis vitae mollitia
            laborum corrupti ullam rem. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Neque alias tenetur minus quaerat aliquid, aut
            provident blanditiis, deleniti aspernatur ipsam eaque veniam
            voluptatem corporis vitae mollitia laborum corrupti ullam rem?
          </p>
          <p class="project-details__desc-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque alias
            tenetur minus quaerat aliquid, aut provident blanditiis, deleniti
            aspernatur ipsam eaque veniam voluptatem corporis vitae mollitia
            laborum corrupti ullam rem?
          </p>
        </div>
        <div class="project-details__tools-used">
          <h3 class="project-details__content-title">Tools Used</h3>
          <div class="skills">
            <div class="skills__skill">HTML</div>
            <div class="skills__skill">CSS</div>
            <div class="skills__skill">JavaScript</div>
            <div class="skills__skill">React</div>
            <div class="skills__skill">SASS</div>
            <div class="skills__skill">GIT</div>
            <div class="skills__skill">Shopify</div>
            <div class="skills__skill">Wordpress</div>
            <div class="skills__skill">Google ADS</div>
            <div class="skills__skill">Facebook Ads</div>
            <div class="skills__skill">Android</div>
            <div class="skills__skill">IOS</div>
          </div>
        </div>
        <div class="project-details__links">
          <h3 class="project-details__content-title">See Live</h3>
          <a
            href="#"
            class="btn btn--med btn--theme project-details__links-btn"
            target="_blank"
            >Live Link</a
          >
          <a
            href="#"
            class="btn btn--med btn--theme-inv project-details__links-btn"
            target="_blank"
            >Code Link</a
          >
        </div>
      </div>
    </div>
  </div>
</section>
```

<!-- **** END Project Details Section **** -->

<br>

---

<br>


## Deployment 📦

Once you have done with your setup. You need to put your website online!

I highly recommend to use [Netlify](https://netlify.com) to achieve this on the EASIEST WAY

Whenever you wanna host a new site on Netlify. You will need to press the **Create New Site** button from the Netlify's dashboard once you login into Netlify.

Once you press the **Create Site Button** then you will have to follow the 3 steps:

1. You will have to select your Github account.

2. Then select the Repository which you wanna host, in this case its your Portfolio website ( Clone of Dopefolio )

3. In the 3rd step, you will have to modify the **Site settings and deploy**, keep everything as it is but just make sure to modify the **Build command** and set its value to **npm run build** and then modify the **Publish directory** and set its value to **/** as shown in the  **image** below

<div align="center">
  <img src="https://i.ibb.co/hDTTrPB/Set-Build-Command-to.png" alt="Dopefolio Build Command Example and Publish Directory Value" width="100%" />
  <br>
</div>

<br>

Then hit the **Deploy site** button and your **Portfolio Site** is live 🥳

<br>

---

<br>

## Give a Star ⭐

If you like this project then give it a **Github** star by pressing the **Star** button ⭐

<br>

---

<br>

## Author 👨‍💻

- **Anuj Bhattarai** - Portfolio owner

<br>

#### Note: 
If you'd like to contact me regarding opportunities or work, update this section with your preferred contact method (email / LinkedIn / Twitter).


<br>

---

<br>

## Special Thanks ❤️

Special thanks to [Jacobo Martínez](https://github.com/cobidev) for inspiring me to create something useful for the Developer Community. **Jacobo** is the creator of [Simplefolio](https://github.com/cobidev/simplefolio) which is another great Portfolio website Template for Developers. Check it out and show him some love ❤️

<br>

---

<br>

## License 📄

This project is licensed under the  **GPL-3.0** License - see the [LICENSE](LICENSE) file for details

