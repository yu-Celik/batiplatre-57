import iconMap, { IconName } from '@/app/utils/iconMap';

export const loadIcon = (iconName: IconName) => {
  return iconMap[iconName] || null;
};