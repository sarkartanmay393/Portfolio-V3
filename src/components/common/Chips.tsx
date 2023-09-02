import Chip from '@mui/material/Chip'

interface CustomChipProps {
  label: string;
  variant: 'filled' | 'outlined';
  width?: string | number;
  height?: string | number;
  icon?: React.ReactElement;
  size?: 'small' | 'medium';
}

const CustomChip = ({ label, variant, width, height, icon, size = "small" }: CustomChipProps) => {
  return (
    <Chip size={size} label={label} variant={variant} icon={icon} sx={{
      width: { width },
      height: { height },
      borderRadius: '6px',
      padding: '4px',
    }} />
  );
}


export { CustomChip };