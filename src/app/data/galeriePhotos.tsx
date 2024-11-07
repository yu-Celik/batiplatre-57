import { peintureImg, platerieImg, amenagementCombleImg, poseDeSolImg, menuiserieImg, electriciteImg, façadeIsolationImg, maçonnerieImg } from "./imagesSlideHome";

export const photos = [
    ...maçonnerieImg.map(img => ({ ...img, category: 'Maçonnerie et extension' })),
    ...façadeIsolationImg.map(img => ({ ...img, category: 'Façade isolation ext et toiture' })),
    ...electriciteImg.map(img => ({ ...img, category: 'Électricité et sol chauffant' })),
    ...platerieImg.map(img => ({ ...img, category: 'Plâtrerie et isolation intérieur' })),
    ...peintureImg.map(img => ({ ...img, category: 'Peinture, pose de sol et carrelage' })),
    ...menuiserieImg.map(img => ({ ...img, category: 'Menuiserie et plomberie' })),
];