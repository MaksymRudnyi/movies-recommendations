import * as React from 'react';

import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ConfirmModal = ({ open, url, title, onClose }) => {
    const [openAlert, setOpenAlert] = React.useState(false);

  return (
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Paper
    
            component="form"
                sx={{ p: '2px 4px', marginTop: '24px', display: 'flex', alignItems: 'center', width: '100%' }}
            >
        
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="List URL"
                inputProps={{ 'aria-label': 'list URL' }}
                value={url}
            />

            <IconButton sx={{ p: '10px' }} aria-label="preivew">
                <VisibilityIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

            <CopyToClipboard text={url}
                onCopy={() => setOpenAlert(true)}>
                <IconButton color="primary" sx={{ p: '10px' }} aria-label="copy to clipboard">
                    <ContentCopyIcon />
                </IconButton>
            </CopyToClipboard>
            
            </Paper>
            
            {openAlert ? (
                <Alert
                action={
                    <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                        setOpenAlert(false);
                    }}
                    >
                    <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
                sx={{ mb: 2 }}
                >
                Copied!
                </Alert>
            ) : null}
        </Box>
      </Modal>
  );
}

ConfirmModal.propTypes = {
    open: PropTypes.bool,
    url: PropTypes.string,
    title: PropTypes.string,
    onClose: PropTypes.func
}

export default ConfirmModal