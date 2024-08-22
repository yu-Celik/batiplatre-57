import { peintureImg, platerieImg, amenagementCombleImg, carrelageImg, poseDeSolImg } from "./imagesSlideHome";

export const photos = [
    ...peintureImg.map(img => ({ ...img, category: 'peinture' })),
    ...platerieImg.map(img => ({ ...img, category: 'platerie' })),
    ...amenagementCombleImg.map(img => ({ ...img, category: 'amenagement comble' })),
    ...carrelageImg.map(img => ({ ...img, category: 'carrelage' })),
    ...poseDeSolImg.map(img => ({ ...img, category: 'pose de sol' }))
];