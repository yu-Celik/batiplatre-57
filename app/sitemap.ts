import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    return [
        {
            url: 'https://www.batiplatre57.fr/',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
    ]
}

