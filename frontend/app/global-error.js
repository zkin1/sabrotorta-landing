'use client'

export default function GlobalError({ error, reset }) {
    return (
        <html>
            <body>
                <div style={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px',
                    textAlign: 'center',
                    backgroundColor: '#fdf2f8'
                }}>
                    <h1 style={{ fontSize: '3rem', color: '#ec4899', marginBottom: '1rem' }}>
                        ¡Algo salió mal!
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '2rem' }}>
                        Lo sentimos, ocurrió un error inesperado.
                    </p>
                    <button
                        onClick={() => reset()}
                        style={{
                            backgroundColor: '#ec4899',
                            color: 'white',
                            padding: '12px 32px',
                            borderRadius: '9999px',
                            border: 'none',
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        }}
                    >
                        Intentar de nuevo
                    </button>
                </div>
            </body>
        </html>
    )
}
