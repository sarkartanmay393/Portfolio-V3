import Chip from '@mui/material/Chip'

interface CustomChipProps {
  label: string;
  variant: 'filled' | 'outlined';
  width?: string | number;
  height?: string | number;
  icon?: React.ReactElement;
}

const CustomChip = ({ label, variant, width, height, icon }: CustomChipProps) => {
  return (
    <Chip label={label} variant={variant} icon={icon} sx={{
      width: { width },
      height: { height },
      paddingX: '8px',
    }} />
  );
}


export { CustomChip };