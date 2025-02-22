import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useMediaQuery } from '@mui/material'; // Import to handle media queries

// Define style for the modal with mobile responsiveness
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%', // Default width for small screens (90% of viewport width)
  //maxWidth: 1000, // Max width for larger screens
  maxHeight: '90vh', // Set maximum height to 80% of the viewport height
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  overflowY: 'auto', // Allow vertical scrolling if content overflows
  p: 4,
};

type PackageModalProps = {
  open: boolean;
  handleClose: () => void;
  packageComp: React.ReactNode; // Accept the component as a prop
};

const PackageModal = ({ open, handleClose, packageComp }: PackageModalProps) => {
  // Use MediaQuery hook to detect small screens
  const isMobile = useMediaQuery('(max-width:600px)'); // Checks if the screen width is 600px or less

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: isMobile ? '90%' : '600px', // Adjust width for mobile devices
            maxWidth: isMobile ? '100%' : '600px', // Ensure max-width stays reasonable
            maxHeight: isMobile ? '70vh' : '80vh', // For mobile, allow slightly more height
            padding: isMobile ? '16px' : '32px', // Less padding for mobile to fit more content
          }}
        >
          {packageComp} {/* Render the component passed as prop */}
        </Box>
      </Modal>
    </div>
  );
};

export default PackageModal;
