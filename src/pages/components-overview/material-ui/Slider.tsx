import { VolumeDown, VolumeUp } from '@mui/icons-material';
import { Box, Container, Grid, Slider, Typography } from '@mui/material';
import { styled } from '@mui/styles';
import { useState } from 'react';

import HeaderBreadcrumbs from '@/components/HeaderBreadcrumbs';
import Page from '@/components/Page';
import { PATH_PAGE } from '@/routes/paths';

import { Block } from '../Block';

const marks = [
  { value: 0, label: '0°C' },
  { value: 20, label: '20°C' },
  { value: 37, label: '37°C' },
  { value: 100, label: '100°C' }
];

const prices = [
  { value: 0, label: '$0' },
  { value: 25, label: '250' },
  { value: 50, label: '500' },
  { value: 75, label: '750' },
  { value: 100, label: '1000' }
];

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  '& > *': { mx: '8px !important' }
};

const RootStyle = styled(Page)(({ theme }: any) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15)
}));

function valuePrice(value: any) {
  return value > 0 ? `$${value}0` : value;
}

function valueLabelFormatPrice(value: any) {
  return value > 0 ? `$${value}` : value;
}

function valuetext(value: any) {
  return `$${value}°C`;
}

function valueLabelFormat(value: any) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}

export default function SliderComponent() {
  const [value, setValue] = useState<number>(30);
  const [price, setPrice] = useState([25, 75]);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  const handleChangePrice = (event: any, newValue: number[]) => {
    setPrice(newValue);
  };

  return (
    <RootStyle title="Components: Slider | Minimal-UI">
      <Box
        sx={{
          pt: 6,
          pb: 1,
          mb: 10,
          bgcolor: (theme: any) => (theme.palette.mode === 'light' ? 'grey.200' : 'grey.800')
        }}
      >
        <Container maxWidth="lg">
          <HeaderBreadcrumbs
            heading="Slider"
            links={[{ name: 'Components', href: PATH_PAGE.components }, { name: 'Slider' }]}
            moreLink="https://next.material-ui.com/components/slider"
          />
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Block title="Volume" sx={style}>
              <Grid container spacing={2}>
                <Grid item>
                  <VolumeDown />
                </Grid>
                <Grid item xs>
                  <Slider
                    value={value}
                    onChange={handleChange}
                    aria-labelledby="continuous-slider"
                  />
                </Grid>
                <Grid item>
                  <VolumeUp />
                </Grid>
              </Grid>
            </Block>
          </Grid>

          <Grid item xs={12} md={4}>
            <Block title="Disabled" sx={style}>
              <Slider disabled defaultValue={30} />
            </Block>
          </Grid>

          <Grid item xs={12} md={4}>
            <Block title="Temperature" sx={style}>
              <Slider
                defaultValue={30}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                step={10}
                marks
                min={10}
                max={110}
              />
            </Block>
          </Grid>

          <Grid item xs={12} md={4}>
            <Block title="Size" sx={style}>
              <Slider
                size="medium"
                marks
                min={10}
                step={10}
                max={110}
                defaultValue={30}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
              />

              <Slider
                marks
                min={10}
                step={10}
                max={110}
                defaultValue={30}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
              />
            </Block>
          </Grid>

          <Grid item xs={12} md={4}>
            <Block title="Small steps" sx={style}>
              <Slider
                defaultValue={0.00000005}
                getAriaValueText={valuetext}
                step={0.00000001}
                marks
                min={-0.00000005}
                max={0.0000001}
                valueLabelDisplay="auto"
              />
            </Block>
          </Grid>

          <Grid item xs={12} md={4}>
            <Block title="Custom marks" sx={style}>
              <Slider
                defaultValue={20}
                getAriaValueText={valuetext}
                step={10}
                valueLabelDisplay="auto"
                marks={marks}
              />
            </Block>
          </Grid>

          <Grid item xs={12} md={4}>
            <Block title="Restricted values" sx={style}>
              <Slider
                defaultValue={20}
                valueLabelFormat={valueLabelFormat}
                getAriaValueText={valuetext}
                step={null}
                valueLabelDisplay="auto"
                marks={marks}
              />
            </Block>
          </Grid>

          <Grid item xs={12} md={8}>
            <Block title="Range" sx={style}>
              <Box sx={{ width: '100%' }}>
                <Slider
                  scale={(x) => x * 10}
                  step={10}
                  marks={prices}
                  value={price}
                  onChange={handleChangePrice}
                  valueLabelDisplay="on"
                  getAriaValueText={valuePrice}
                  valueLabelFormat={valueLabelFormatPrice}
                />
              </Box>
              <Box
                sx={{
                  p: 2,
                  width: '100%',
                  borderRadius: 1,
                  bgcolor: 'grey.50012'
                }}
              >
                <Typography variant="subtitle2" gutterBottom>
                  Min: {valuePrice(price[0])}
                </Typography>
                <Typography variant="subtitle2">Max: {valuePrice(price[1])}</Typography>
              </Box>
            </Block>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
