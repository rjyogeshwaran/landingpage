import Navigation from './components/Navigation'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import IconsGrid from './components/IconsGrid'
import showCase1 from "./components/Images/bg-showcase-1.jpg"
import showCase2 from "./components/Images/bg-showcase-2.jpg"
import showCase3 from "./components/Images/bg-showcase-3.jpg"
import Testimonial from './components/Testimonial'
import testPic1 from "./components/Images/testimonials-1.jpg"
import testPic2 from "./components/Images/testimonials-2.jpg"
import testPic3 from "./components/Images/testimonials-3.jpg"
import Footer from './components/Footer'

import './App.css'

function App() {

  let icons = [{
    name: "Fully Response",
    para: "This theme will look great on any device, no matter the size!",
    icon: "window"
},
{
    name: "Bootstrap 5 Ready",
    para: "Featuring the latest build of the new Bootstrap 5 framework!",
    icon: "layers"
    },
    {
        name: "Easy to Use",
        para: "Ready to use with your own content, or customize the source files!",
        icon: "terminal"
    }]
  
  let showcase = [{
    isOrder: true,
    isOrder1: true,
    bgImage: showCase1,
    name: "Fully Responsive Design",
    para:"When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!"
  },
  {
    isOrder: false,
    isOrder1: false,
    bgImage: showCase2,
    name: "Updated For Bootstrap 5",
    para:"Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!"
    },
    {
      isOrder: true,
      isOrder1: true,
      bgImage: showCase3,
      name: "Easy to Use & Customize",
      para:"Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!"
    }
    
  
  ]

  let testimony = [{
    name: "Margaret E.",
    para: '"This is fantastic! Thanks so much guys!"',
    images: testPic1
  },
  {
    name: "Fred S.",
    para: "Bootstrap is amazing. I've commave been using it to create lots of super nice landing pages",
    images: testPic2
    },
    {
      name: "Sarah W.",
      para: 'Thanks so much for making these free resources available to us!',
      images: testPic3
    },]

  return <>
     
    <Navigation />
    <Header />
    <section class="features-icons bg-light text-center">
            <div class="container">
                <div class="row g-0">
    {icons.map((e, i) => {
      return <IconsGrid icons={e} key = {i} />
    })
        }
        </div>
        </div>
    </section>
    <section class="showcase">
            <div class="container-fluid p-0">
        {
          showcase.map((e, i) => {
            return <Dashboard showcase={e} key={i}/>
          })
          }
      </div>
    </section>
    <section class="testimonials text-center bg-light">
            <div class="container">
                <h2 class="mb-5">What people are saying...</h2>
        <div class="row">
          {
            testimony.map((e, i) => {
             return <Testimonial testimony={e} key={i}/>
           })
          }
          
        </div>
      </div>
      </section>
    <Footer/>
    </>
  
}

export default App
