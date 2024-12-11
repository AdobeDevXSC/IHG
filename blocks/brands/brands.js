import { createOptimizedPicture } from '../../scripts/aem.js';

async function fetchJson(link) {
  const response = await fetch(link?.href);
  if (response.ok) {
    const jsonData = await response.json();
    const data = jsonData?.data;
    return data;
  }
  return 'an error occurred';
}

function sortData(data) {
  const initialSortedData = data.sort((a, b) => {    
    if (a.outerImage === "true" && b.outerImage !== "true") {
        return -1;
    }
    if (a.outerImage !== "true" && b.outerImage === "true") {
        return 1;
    }
    return 0;
  });

  // Move the second "true" outerImage to the last position
  const firstOuterImageIndex = initialSortedData.findIndex(item => item.outerImage === "true");
  const secondOuterImageIndex = initialSortedData.findIndex(
      (item, index) => item.outerImage === "true" && index > firstOuterImageIndex
  );

  if (secondOuterImageIndex !== -1) {
      const [secondOuterImage] = initialSortedData.splice(secondOuterImageIndex, 1);
      initialSortedData.push(secondOuterImage);
  }
  return initialSortedData;
}


export default async function decorate(block) {
  const link = block.querySelector('a');

  function createBlock(data){  
    const ul = document.createElement('ul');
  
    data.forEach((item) => {
      const picture = createOptimizedPicture(item.image, item.brand, false, [{ width: 200 }]);
      // picture.lastElementChild.width = '200';
      // picture.lastElementChild.height = '100';
  
      const createdCard = document.createElement('li');
  
      createdCard.innerHTML = `
        <div class="brand-body">
          ${picture.outerHTML}
        </div>
      `;
      ul.append(createdCard);
    });
  
    block.textContent = '';
    block.append(ul);
  }

  if (link) {
    const brandsData = await fetchJson(link);
    const sortedData = sortData(brandsData);
    createBlock(sortedData);
  }
}