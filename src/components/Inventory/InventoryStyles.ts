import { styled } from '@mui/material/styles';

export const InventoryContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  border: `theme.pallette.divider`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  margin: theme.spacing(2),
  color: theme.palette.text.primary,
}));
