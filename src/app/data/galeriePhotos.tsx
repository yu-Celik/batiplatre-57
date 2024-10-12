import { peintureImg, platerieImg, amenagementCombleImg, carrelageImg, poseDeSolImg } from "./imagesSlideHome";

export const photos = [
    ...peintureImg.map(img => ({ ...img, category: 'Maçonnerie et extension' })),
    ...platerieImg.map(img => ({ ...img, category: 'Façade isolation ext et toiture' })),
    ...amenagementCombleImg.map(img => ({ ...img, category: 'Électricité et sol chauffant' })),
    ...carrelageImg.map(img => ({ ...img, category: 'Plâtrerie et isolation intérieur' })),
    ...poseDeSolImg.map(img => ({ ...img, category: 'Menuiserie et plomberie' })),
    ...poseDeSolImg.map(img => ({ ...img, category: 'Peinture, pose de sol et carrelage' })),
];