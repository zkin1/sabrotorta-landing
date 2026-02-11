export default function sitemap() {
    const baseUrl = 'https://sabrotortas.cl'

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
    ]
}
