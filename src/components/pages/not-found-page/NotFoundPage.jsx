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
            <h1 style={{ color: 'white' }}>404</h1>
            <h2 style={{ color: 'white' }}>PAGE NOT FOUND</h2>
            <h4 style={{ color: 'white' }}>
                The page you are looking for: &quot;...{searchParams.get('source')}&quot; does not exist!
            </h4>
            <Stack direction="row" sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                    variant="contained"
                    sx={{ bgcolor: 'white', color: 'black', boxShadow: '2px 2px 5px beige' }}
                    onClick={handleNavigateToValidPage}
                >
                    {isSignedIn ? 'Go To Home Page' : 'Go To Sign In'}
                </Button>
            </Stack>
        </Stack>
    );
}
