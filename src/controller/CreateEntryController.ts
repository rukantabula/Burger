
export const ratingLabels = new Map([
    ['taste', 'Taste'],
    ['texture', 'Texture'],
    ['visualPresentation', 'Visual Presentation']
]);

export const getRatingLabel = (category: string): string =>  ratingLabels.get(category) || category.replace(/_/g, ' ');
