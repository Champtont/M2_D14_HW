const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZWUzY2Q0YmUzZDAwMTU4NDVmZDAiLCJpYXQiOjE2NjgwODMyNjAsImV4cCI6MTY2OTI5Mjg2MH0.uNsrqEp_HPgrPhAwjziunQVeY6iQ11AA-FDwQ5LlOaI";

async function getInfo() {
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/product/",
    {
      headers: {
        Authorization: `Bearer ${key}`,
      },
    }
  );
  const data = await response.json();
  console.log(data);
  return data;
}

function renderProducts(data) {
  const cardSector = document.getElementById("productrow");

  data.forEach(({ name, price, brand, imageURL, _id }, index) => {
    const cards = document.createElement("div");

    cards.classList.add("col-sm-12 col-md-6 col-lg-4 courtscards");
    cards.innerHTML = `
        <div id="card" class="row">
        <div id="cardtext" class="col-8">
        <h4>${index + 1} ${name}</h4>
        <ul>
        <li>${brand}</li>
        <li>${price}</li>
        <li>${_id}</li>
        </ul>
        </div>
        <img src="${imageURL}" class="img-fluid col-4" />
        </div>`;

    cardSector.appendChild(cards);
  });
}
