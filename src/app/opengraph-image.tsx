import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Bohemia München - Authentische Tschechische Küche';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#8B4513',
          backgroundImage: 'linear-gradient(135deg, #8B4513 0%, #D2691E 100%)',
          fontSize: 32,
          fontWeight: 600,
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          }}
        />
        
        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
            textAlign: 'center',
            color: 'white',
            zIndex: 1,
          }}
        >
          {/* Logo/Title */}
          <div
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              marginBottom: '20px',
              textShadow: '0 4px 8px rgba(0,0,0,0.3)',
              fontFamily: 'serif',
            }}
          >
            Bohemia München
          </div>
          
          {/* Subtitle */}
          <div
            style={{
              fontSize: '36px',
              marginBottom: '30px',
              opacity: 0.9,
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Authentische Tschechische Küche
          </div>
          
          {/* Rating */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'rgba(255,255,255,0.2)',
              padding: '15px 30px',
              borderRadius: '50px',
              marginBottom: '20px',
            }}
          >
            <div style={{ fontSize: '28px', marginRight: '10px' }}>⭐⭐⭐⭐⭐</div>
            <div style={{ fontSize: '32px', fontWeight: 'bold' }}>4.9/5</div>
          </div>
          
          {/* Location */}
          <div
            style={{
              fontSize: '24px',
              opacity: 0.8,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            📍 Am Lilienberg 5, München
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div
          style={{
            position: 'absolute',
            top: '50px',
            left: '50px',
            fontSize: '48px',
            opacity: 0.3,
          }}
        >
          🍺
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '50px',
            right: '50px',
            fontSize: '48px',
            opacity: 0.3,
          }}
        >
          🍽️
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
