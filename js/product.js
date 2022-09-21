const latestCollection = document.querySelector('.main__lastCollection-cards')
const topCollection = document.querySelector('.main__topCollection-cards')

/*
const latestProducts = products.products.map(({ id, title, price, url, category }) => {
    const template = `
        <div class="main__topCollection-cards_card">
            <div class="main__topCollection-cards_card-header">
                <img src="${image}" width='285px' height='324px'>
                <i class='bx bxs-heart' ></i>
            </div>
            <div class="main__topCollection-cards_card-desc">
                <h1>
                    ${title.slice(0, 30)}
                </h1>
                <div>
                    <p>$${price}</p>
                    <div>
                    <img src="./images/star.svg" alt="star">
                    <img src="./images/star.svg" alt="star">
                    <img src="./images/star.svg" alt="star">
                    <img src="./images/star.svg" alt="star">
                    <img src="./images/star.svg" alt="star">
                    </div>
                </div>
            </div>
        </div>
    `
    return template
})

latestCollection.innerHTML = latestProducts.join('')
*/



async function latestCollections(more) {
    let numberOfTopProducts = more || 8;

    const data = await (await fetch(`https://fakestoreapi.com/products?limit=${numberOfTopProducts}`)).json();
    console.log(data);

    const result = [];

    for (let i = 0; i < numberOfTopProducts; i++) {

        const { title, price, image } = data[i]

        const template = `
        <div class="main__lastCollection-cards_card">
            <div class="main__lastCollection-cards_card-image">
                <img src="${image}" width='285px' height='324px'>
                <i class='bx bxs-heart' ></i>
            </div>
            <div class="main__lastCollection-cards_card-desc">
                <div>
                    <h2>${title.slice(0, 30)}</h2>    
                    <button class="btn">Add to Cart</button>            
                </div>
                <div>
                    <p>$${price}</p>
                    <div>
                        <img src="./images/star.svg" alt="star">
                        <img src="./images/star.svg" alt="star">
                        <img src="./images/star.svg" alt="star">
                        <img src="./images/star.svg" alt="star">
                        <img src="./images/star.svg" alt="star">
                    </div>
                </div>
            </div>
        </div>
        `

        result.push(template);
    }
    latestCollection.innerHTML = result.join('');
}
latestCollections();

const loadMore = () => {
    latestCollections(20);
    document.getElementById('load-more').style.display = 'none';
}