import Container from "@mui/material/Container";
import PageHeader from "./../components/PageHeader";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const AboutPage = () => {
  return (
    <Container maxWidth="lg">
      <PageHeader
        title="About"
        subtitle="On this page you can find explanations about using the application"
      />

      <Grid container spaicing={0}>
        <Grid item xs={12} md={8} alignSelf="center">
          <Typography
            sx={{ mb: 3 }}
            variant="h5"
            color="initial"
            display="block"
          >
            Introducing React Business Card: Elevate Your Professional Presence
          </Typography>
          <Typography
            sx={{ mb: 3 }}
            variant="body2"
            color="initial"
            display="block"
          >
            In today's fast-paced business world, making a memorable first
            impression is crucial. With React Business Card, you can
            effortlessly showcase your professional identity and stand out from
            the crowd. Built with cutting-edge technology, our solution offers
            unparalleled flexibility, customization, and sophistication.
          </Typography>
          <Typography
            sx={{ mb: 3 }}
            variant="body1"
            color="initial"
            display="block"
          >
            Key Features:
          </Typography>
          <Typography
            sx={{ mb: 3 }}
            variant="body2"
            color="initial"
            display="block"
          >
            1. *Dynamic Content Rendering*: React Business Card empowers you to
            dynamically render your contact information, including name, title,
            company, phone number, email, and website, ensuring that your card
            stays up-to-date at all times. <br />
            <br />
            2. *Interactive Design*: Impress clients and colleagues with an
            interactive and visually stunning design. Incorporate animations,
            transitions, and hover effects to captivate your audience and leave
            a lasting impact. <br />
            <br /> 3. *Customizable Templates*: Choose from a wide range of
            beautifully crafted templates or unleash your creativity by
            designing your own unique layout. With React's component-based
            architecture, the possibilities are endless.
            <br />
            <br /> 4. *Responsive Layout*: Ensure seamless viewing across all
            devices with a fully responsive layout. Whether your audience is
            accessing your business card on a desktop, tablet, or smartphone,
            rest assured that it will look impeccable. <br />
            <br />
            5. *Integration with APIs*: Seamlessly integrate with APIs to fetch
            real-time data such as social media profiles, portfolio projects, or
            latest blog posts, enriching your business card with dynamic and
            relevant content.
            <br />
            <br /> 6. *Easy Deployment*: Deploy your React Business Card
            effortlessly using platforms like GitHub Pages, Netlify, or Vercel.
            Share your card's URL with potential clients, recruiters, or
            networking contacts to make connecting a breeze. <br />
            <br />
            7. *SEO-Friendly*: Enhance your online visibility with SEO-friendly
            features such as meta tags, structured data, and optimized content.
            Ensure that your business card ranks high in search engine results
            and attracts the right audience.
            <br />
            <br /> 8. *Scalability*: As your professional journey evolves, so
            can your React Business Card. Easily update content, add new
            sections, or integrate additional functionalities to reflect your
            growth and accomplishments. Take your professional presence to the
            next level with React Business Card. Empower yourself with a modern,
            interactive, and customizable solution that leaves a lasting
            impression on every interaction. Elevate your brand, showcase your
            expertise, and unlock new opportunities with React Business Card
            today.
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            display: { md: "flex", xs: "none" },
            justifyContent: "center",
          }}
        ></Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
