import React from 'react';
import img1 from '../Photos/1.jpg';
import img2 from '../Photos/h11.jpg';
import { Box, Container, Divider, Grid, Typography, } from '@mui/material';


const About1 = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url('${img1}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '20vh',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
        }}
      >
        <Typography variant="h3" align="center">About-Us</Typography>
        <Typography variant="h6" align="center" sx={{ color: '#00b0ff', mt: 1 }}>
          हाक तुमची साथ आमची एक हात माणुसकीचा
        </Typography>
      </Box>

      {/* New Section Above Footer */}
      <Container>
        <Grid container spacing={3} mt={5} px={3} >
          <Grid item xs={12} md={7} mt={6} px={1}  >
            <Typography variant="h3" gutterBottom fontWeight={500} fontSize={28} letterSpacing={1} lineHeight={1.5} >Welcome to More Welfare Trust!</Typography>
            <Typography variant="body1" paragraph mt={2} mb={4} px={1} color={'#f44336'} letterSpacing={1} lineHeight={2}>
              This is your chance to earn goodwill with the community, feel good about helping someone in need, and uplift those who are not as fortunate as you.
            </Typography>
            <Typography variant="body1" paragraph mt={2} mb={4} px={1} letterSpacing={1} lineHeight={1.5} >
              India is a country where we find extreme contrasts of wealth and poverty co-exist in everyday life. We understand people's needs are very diverse and they span a wide spectrum because of ages, social contexts, and family structures. We attempt to bridge this gap between the rich and the poor by fulfilling their day-to-day basic needs through a systematic and disciplined structure of organization.
            </Typography>
            <Typography variant="body1" paragraph mt={2} mb={4} px={1} letterSpacing={1} lineHeight={1.5}>
              We request you to join us in making this social transformation, by whatever way possible to you. You can help us in many ways such as donating and facilitating the donations for people living in and around your society, volunteering at the distribution center, giving us your valuable suggestions, and lastly by giving donations to run this organization in a better way.
            </Typography>



            {/* Additional content here */}
          </Grid>
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                backgroundImage: `url('${img2}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100%',
                width: '100%',

                borderRadius: '8px',
                alignItems:'center',
                mt:5
              }}
            />
          </Grid>


          <Typography variant="body1" paragraph mt={2} mb={4} px={1} letterSpacing={1} lineHeight={2} >
            <b>  We are benefiting the society in following three ways. </b>
          </Typography>
          <ul style={{ lineHeight: 2, listStyle: 'none' }}>
            <li>
              1. About 35 needy ladies from Mahila Bachat Gat and 15 needy gents are working on this project. We are happy that we could give them job due to the activity of Goodwill India. In future this number of employment is going to increase.
            </li>
            <li>2. Needy and unprivileged people got costly used Clothes at throw away prices i.e. at the rate of cost incurred in processing the Clothes like sorting, alteration, measurement, washing, packing and delivering it at their area. Three delivery vans and four full time drivers are working on this transportation work.</li>

            <li>3. Well to do people got clearance to their huge quantity of idle used Clothes laying in there home. They got satisfaction that these Clothes are going in the hands of unprivileged people and fulfilling there one of the necessity of life Roti,Kapada aur Makan.</li>

            <Divider sx={{ mt: 2, mb: 2 }} />
            <Typography letterSpacing={1.5} lineHeight={2}>
              We collect these Clothes from all over the Pune i.e. from resident, societies, big houses etc. People now have started collection drive of collecting Clothes in huge quantity. They are aware of social initiative of Goodwill India and helping more and more.

              We are happy to announce that we could distribute 167000 Clothes within this three and half year period. Large number of poor people have been benefited and we see them in branded Clothes instead of torn and shabby Clothes. We are managing 13 distribution outlets in nearby areas of Pune like Saswad, Alandi , Chakan,Warje, Shivane, Dhairy, 4 places at Pimpri Chinchwad and so on where distribution is done once in a week.


              In Addition to above ,we have sent 1000 Clothes to flood affected people at Uttarakhand, 1000 Clothes to Punruthan Samarsata Gurukul, hundreds of Clothes to many Zilla Parishad Schools, 150 new uniforms received in donation to the school in Kokan, tribal people in Mutha area and so on.


              We also received donation of 26 computers from individuals and (15 computers) from Tata Consultancy Services. These were distributed to the rural schools where this facility was not available. You may see the letters received from different schools as an acknowledgment on our web site goodwillindia.org.in


              We everyday collecting huge quantity of toys from the people. We mostly are giving these toys to retarded children in their school and to the boys at distribution centre. You made them to enjoy in there childhood which they were not expecting in their life.


              130 girls from poor, destitute family were given Kitchen Full Utensils Sets in their proposed marriage at that time. They were selected from different areas i.e. Pune, Bhore, Solapur, Latur and Nearby areas of Pune with submission of full documents evidence like marriage invitation card, recommendation letters. Residential proof and inspection of our representative at their home. See the photos on our web site.


              We humbly request you to arrange collection camp for Clothes, utensils, toys. good condition furniture etc. at your end. We shall provide all type of help like advertise material, our staff and vehicle for transportation etc. At the end, we request you to visit our workshop and get more information about our work.

            </Typography>



          </ul>
        </Grid>
      </Container>
    </>
  )
}

export default About1;
