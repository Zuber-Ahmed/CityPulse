 const SplashScreen=()=> {
        return (
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column', gap: '20px'}}>
                <div style={{fontSize: '48px', color: '#4a6cf7'}}>
                    <i className="fas fa-ticket-alt"></i>
                </div>
                <h1 style={{fontSize: '32px', color: '#2d3748'}}>City Pulse</h1>
                <p style={{color: '#718096'}}>Local Events Explorer</p>
            </div>
        );
    }

export default SplashScreen;