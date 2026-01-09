export default function JsonLd() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Sabrotortas',
        image: 'https://sabrotortas.cl/logo.webp',
        description: 'Servicios de catering profesional, tortas decoradas personalizadas y organización de eventos en Santiago. Resolución Sanitaria N° 12343/2006.',
        url: 'https://sabrotortas.cl',
        telephone: '+56977794373',
        email: 'ventas@sabrotortas.cl',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Huechuraba',
            addressRegion: 'Metropolitana',
            addressCountry: 'CL'
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: '-33.3656',
            longitude: '-70.7261'
        },
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday'
                ],
                opens: '09:00',
                closes: '19:00'
            },
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Saturday',
                opens: '10:00',
                closes: '14:00'
            }
        ],
        priceRange: '$$'
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}
