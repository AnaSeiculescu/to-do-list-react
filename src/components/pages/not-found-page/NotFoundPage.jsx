import { useSearchParams } from 'react-router-dom';

export function NotFoundPage() {
    const [searchParams] = useSearchParams();
    console.log('searchParams: ', searchParams.get('source'));

    return (
        <>
            <h2>404 PAGE NOT FOUND</h2>
            <h4>The page you are looking for: &quot;...{searchParams.get('source')}&quot; does not exist!</h4>
        </>
    );
}
