import React from "react";
import Layout from "../component/Layout/Layout";
import { Box, Typography } from "@mui/material";
import "../styles/AboutStyles.css"

const About = () => {
  return (
    <Layout>
      <div className="about">
      <Box
        sx={{
          my: 3,
          mx: 1,
          "& h4": {
            textAlign: "center",
            fontFamily: "fantasy",
            fontWeight: "bold",
          },
          "& p": { textAlign: "justify", fontFamily: "serif" },
          "@media (max-width:600px)": { "& h4": { fontSize: "1.2rem" } },
        }}
      >
        {/* <h1 className="about-heading">Welcome to our restaurant</h1> */}

        <h2>
          Welcome to QuickBite - Where Culinary Excellence Meets Cozy
          Elegance
        </h2>
        <p>
          Step into a world where passion for food meets warm hospitality. At
          QuickBite, we invite you to embark on a culinary journey that
          transcends the ordinary. Our Home page is the gateway to an experience
          that blends delectable flavors with a welcoming atmosphere.
          Our Home is where hospitality thrives. Picture yourself in our inviting space, where modern aesthetics meet timeless charm. Whether you're planning an intimate dinner, a family celebration, or a casual get-together, QuickBite sets the stage for memorable moments.
        </p>
        
        <h2>Discover Our Culinary Artistry</h2>
        <p>
          Indulge your senses in a symphony of flavors crafted by our skilled
          chefs. From sizzling appetizers to mouthwatering main courses and
          divine desserts, our menu is a celebration of culinary creativity.
          Each dish tells a story of quality ingredients and expert
          craftsmanship.
          <br/>
          At
          QuickBite, we invite you to embark on a culinary journey that
          transcends the ordinary. Our Home page is the gateway to an experience
          that blends delectable flavors with a welcoming atmosphere.
        </p>
        
        <h2>Immerse Yourself in Ambiance</h2>
        <p>
          Our Home is where hospitality thrives. Picture yourself in our
          inviting space, where modern aesthetics meet timeless charm. Whether
          you're planning an intimate dinner, a family celebration, or a casual
          get-together, QuickBite sets the stage for memorable moments.
          Our Home page is the gateway to an experience
          that blends delectable flavors with a welcoming atmosphere.
        </p>
        

        <h2>Events and Specials</h2>

        <p>
          Stay tuned for our latest events and specials. From themed nights to
          exclusive chef's creations, there's always something exciting
          happening at QuickBite. Join us as we elevate your dining
          experience with unique offerings and seasonal delights.
          Our Home page is the gateway to an experience
          that blends delectable flavors with a welcoming atmosphere.

<br/>
<br/>
          Come home to QuickBite, where every meal is a celebration, and
          every guest is family. We can't wait to welcome you into our culinary
          haven.
        </p>

        
      </Box>
      </div>
     
    </Layout>
  );
};

export default About;
