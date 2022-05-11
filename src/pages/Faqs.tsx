import { Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/styles';

import { FaqsCategory, FaqsForm, FaqsHero, FaqsList } from '@/components/_external-pages/faqs';
import Page from '@/components/Page';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }: any) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11)
  }
}));

// ----------------------------------------------------------------------

export default function Faqs() {
  return (
    <RootStyle title="Faqs | Minimal-UI">
      <FaqsHero />

      <Container sx={{ mt: 15, mb: 10 }}>
        <FaqsCategory />

        <Typography variant="h3" sx={{ mb: 5 }}>
          Frequently asked questions
        </Typography>

        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <FaqsList />
          </Grid>
          <Grid item xs={12} md={6}>
            <FaqsForm />
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}