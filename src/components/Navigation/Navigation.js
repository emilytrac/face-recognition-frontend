import React from "react";

const Navigation = ({onRouteChange, isSignedIn}) => {
    if (isSignedIn) {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                {/* will call function */}
                <p onClick={() => onRouteChange('signout')} className='f3 link dim pa3 pointer'>Sign Out</p>
            </nav>
            );    
    } else {
        return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            {/* will call function */}
            <p onClick={() => onRouteChange('signin')} className='f3 link dim pa3 pointer'>Sign In</p>
            <p onClick={() => onRouteChange('register')} className='f3 link dim pa3 pointer'>Register</p>
        </nav>
        );
    }
}

export default Navigation;