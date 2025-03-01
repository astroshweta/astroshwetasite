import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; // Import close icon
import { useMediaQuery } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxHeight: '90vh',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  overflowY: 'auto',
  p: 4,
  borderRadius: '8px', // Rounded corners for the modal
  transition: 'transform 0.3s ease-out', // Smooth transition for appearance
};

type PackageModalProps = {
  open: boolean;
  handleClose: () => void;
  packageComp: React.ReactNode;
};

const PackageModal = ({ open, handleClose, packageComp }: PackageModalProps) => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          ...style,
          width: isMobile ? '90%' : '600px',
          maxWidth: isMobile ? '100%' : '600px',
          maxHeight: isMobile ? '70vh' : '80vh',
          padding: isMobile ? '16px' : '32px',
          backgroundColor: 'aliceblue',
        }}
      >
        {/* Close Button */}
        <IconButton 
  edge="end" 
  color="inherit" 
  onClick={handleClose} 
  sx={{
    position: 'fixed',
    top: 10,
    right: 10,
    zIndex: 1301,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
  }}
>
  <CloseIcon />
</IconButton>
        {packageComp}
      </Box>
    </Modal>
  );
};

export default PackageModal;
