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
        }
        navigate('/login');
    };

    return (
        <div>
            <h2>404 PAGE NOT FOUND</h2>
            <h4>The page you are looking for: &quot;...{searchParams.get('source')}&quot; does not exist!</h4>
            <Stack direction="row" sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                    variant="contained"
                    sx={{ bgcolor: 'black', color: 'white', boxShadow: 3 }}
                    onClick={handleNavigateToValidPage}
                >
                    {isSignedIn ? 'Go To Home Page' : 'Go To Sign In'}
                </Button>
            </Stack>
        </div>
    );
}
