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
  renderProducts(data);
  return data;
}

const removeThis = (event) => {};

function renderProducts(data) {
  const cardSector = document.getElementById("productrow");

  data.forEach((data) => {
    const cards = document.createElement("div");

    cards.classList.add("col-sm-12", "col-md-6", "col-lg-4", "courtscards");
    cards.innerHTML = `
    <div id="cardtext" class="card mb-2">
     <div id="card" class="row flex-nowrap">
      <div class="card-body col-8">
        <h4>${data.name}</h4>
        <ul>
        <li>${data.brand}</li>
        <li>${data.price}</li>
        <li>${data._id}</li>
        </ul>
        <a href="backOffice.html"><button class="btn btn-primary">Edit</button><a>
        <button id="delete" class="btn btn-danger">Delete</button>
      </div>
      <div class="col-4">
      <img src="${data.imageUrl}" class="img-fluid" style="width:100%; height:100%; object-fit:cover;" />
      </div>  
      </div>
        </div>`;

    cardSector.appendChild(cards);
    const deletebtn = document.getElementById("delete");

    deletebtn.addEventListener("click", removeThis);
  });
}
getInfo();
