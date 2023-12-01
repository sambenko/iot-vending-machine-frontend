import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export const DeviceStatsCard = styled(Card)(({ theme }) => ({
  maxWidth: 800,
  margin: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
}));

export const CardContentStyled = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const CardMediaStyled = styled(CardMedia)({
  height: 300,
  width: '100%',
});

export const CardHeader = styled('div')({
  textAlign: 'center',
  marginBottom: '10px',
  marginTop: '10px',
});

export const DataContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  marginTop: '20px',
});
