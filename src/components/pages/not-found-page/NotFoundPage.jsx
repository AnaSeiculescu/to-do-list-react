import { useSearchParams } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../utils/constants';

export function NotFoundPage() {
    const [searchParams] = useSearchParams();
    console.log('searchParams: ', searchParams.get('source'));

    const navigate = useNavigate();
    const userAuthData = useAuth();
    const isSignedIn = !!userAuthData.token;

    const textColorStyle = {
        color: 'white',
    };
    const textNotFoundMarginStyle = {
        marginTop: '0',
        marginBottom: '30px',
    };
    const text404FontStyle = {
        fontSize: '108px',
        margin: '0',
    };
    const textMessageStyle = {
        color: '#C9CBCA',
    };
    const textOhOhStyle = {
        color: '#C9CBCA',
        position: 'absolute',
        top: '50px',
        left: '50%',
        transform: 'translateX(-50%)',
    };

    const combined404Styles = { ...textColorStyle, ...text404FontStyle };
    const combinedNotFoundStyles = { ...textColorStyle, ...textNotFoundMarginStyle };
    const combinedOhOhStyles = { ...textColorStyle, ...textOhOhStyle };

    const handleNavigateToValidPage = () => {
        if (isSignedIn) {
            navigate('/home-page');
            return;
        }
        navigate('/login');
    };

    return (
        <Stack
            sx={{
                paddingBottom: '30px',
                '&::before': {
                    content: '""',
                    backgroundImage: 'url(../../pictures/page_not_found.jpg)',
                    width: '100vw',
                    height: '100vh',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    zIndex: '-1',
                },
            }}
        >
            <h1 style={combinedOhOhStyles}>oh, oh...</h1>
            <h1 style={combined404Styles}>404</h1>
            <h2 style={combinedNotFoundStyles}>PAGE NOT FOUND</h2>
            <h4 style={textMessageStyle}>
                The page you are looking for: &quot;...{searchParams.get('source')}&quot; does not exist!
            </h4>
            <Stack direction="row" sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                    variant="contained"
                    sx={{
                        width: '200px',
                        height: '60px',
                        fontSize: '16px',
                        fontWeight: '600',
                        bgcolor: 'white',
                        color: 'black',
                        boxShadow: '2px 2px 6px beige',
                    }}
                    onClick={handleNavigateToValidPage}
                >
                    {isSignedIn ? 'Go To Home Page' : 'Go To Sign In'}
                </Button>
            </Stack>
        </Stack>
    );
}
