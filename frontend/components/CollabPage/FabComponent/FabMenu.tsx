import * as React from 'react';
import { Fab, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { StopwatchProps } from "./Stopwatch";
import Stopwatch from './Stopwatch';
import VideoAudioChat from '../VideoComm';

interface FabMenuProps {
    stopwatchProps: StopwatchProps;
    username1: string | null;
    username2: string;
}

const FabMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [stopwatchOpen, setStopwatchOpen] = React.useState(false);
    const [videoOpen, setVideoOpen] = React.useState(false);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClickVideo = () => {
        setAnchorEl(null);
    };
    
    const handleClickStopwatch = () => {
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Fab
                color="primary"
                aria-label="add"
                style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                }}
                onClick={handleClick}
            >
                <MenuIcon />
            </Fab>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem onClick={handleClickVideo}>Video</MenuItem>
                <MenuItem onClick={handleClickStopwatch}>Stopwatch</MenuItem>
            </Menu>
        </div>
    );
};

export default FabMenu;
