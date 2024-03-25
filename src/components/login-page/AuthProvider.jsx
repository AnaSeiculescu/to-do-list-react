import { AuthContext } from '../utils/constants';

const AuthProvider = ({ children }) => {
    return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export default AuthProvider;
