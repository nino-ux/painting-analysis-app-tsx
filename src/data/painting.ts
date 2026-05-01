import { Painting } from "../types";

export const paintingData: Painting = {
  id: 'starry-night',
  title: 'The Starry Night',
  artist: 'Vincent van Gogh',
  year: 1889,
  imageUrl: 'https://uploads6.wikiart.org/images/vincent-van-gogh/the-starry-night-1889(1).jpg',
  categories: [
    {
      id: 'basic',
      name: 'Basic Elements',
      elements: [
        { id: 'lines', name: 'Swirling Lines', type: 'clue' },
        { id: 'shapes', name: 'Organic Shapes', type: 'info' },
      ],
    },
    {
      id: 'composition',
      name: 'Composition',
      subcategories: [
        {
          id: 'foreground',
          name: 'Foreground',
          elements: [
            { id: 'cypress', name: 'Cypress Tree', type: 'clue' },
            { id: 'village', name: 'Village', type: 'info' },
          ],
        },
        {
          id: 'sky',
          name: 'Sky',
          elements: [
            { id: 'stars', name: 'Stars', type: 'info' },
            { id: 'moon', name: 'Moon', type: 'clue' },
          ],
        },
      ],
    },
  ],
};
