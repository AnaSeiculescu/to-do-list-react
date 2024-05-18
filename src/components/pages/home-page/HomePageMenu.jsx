import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { grey } from '@mui/material/colors';
import { Button } from '@mui/material';
import { useContext } from 'react';
import { UserContext } from '../../../UserContext';
import { useAuth } from '../../../utils/constants';

const mySecondaryColor = grey[500];
const drawerWidth = 300;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 3),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'space-between',
}));

export function HomePageMenu({ theme, open, handleDrawerClose, handleDrawerOpen }) {
    const { userInput } = useContext(UserContext);
    const { logOut } = useAuth();
    const handleLogOut = () => {
        logOut();
    };
    console.log('username= ', userInput);
    return (
        <Box>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 4, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Agenda
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        boxShadow: 3,
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <Typography fontWeight="fontWeightBold" variant="h5">
                        Power organizer
                    </Typography>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider sx={{ width: '85%', textAlign: 'center', margin: '0 auto' }} />
                <Typography
                    style={{ width: '260px', textAlign: 'left', padding: theme.spacing(2, 3) }}
                    fontWeight="fontWeightBold"
                >
                    Welcome, {userInput.username}
                    <Typography style={{ fontSize: '14px' }} color={mySecondaryColor}>
                        Sort your todos by date using the view on the right
                    </Typography>
                </Typography>
                <Divider sx={{ width: '85%', textAlign: 'center', margin: '0 auto' }} />

                <Button
                    variant="contained"
                    sx={{
                        bgcolor: 'black',
                        color: 'white',
                        boxShadow: 3,
                        width: '85%',
                        margin: '0 auto',
                        marginTop: 'auto',
                        marginBottom: '20px',
                    }}
                    onClick={handleLogOut}
                >
                    Sign out
                </Button>
            </Drawer>
        </Box>
    );
}
