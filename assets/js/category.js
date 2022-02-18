const changeCategory = (e) => {
  content.style.gridTemplateColumns = "repeat(1, minmax(0, 1fr))";
  content.innerHTML = `
        <div class="text-center"><h2>Memuat... </h2></div>
    `;
  setTimeout(function () {
    content.style.gridTemplateColumns = "";
    content.innerHTML = "";
    e.value === "0" ? getAllItems() : getItemByCategory(e.value);
  }, 1000);
};

const getAllItems = () => {
  for (let count = 0; count < data.length; count++) {
    content.innerHTML += `<div class="card__item">
          <a href="./food/index.html?id=${data[count].id}">
            <div class="card__header">
              <img
                src="${data[count].pic}"
                width="100%"
                alt="${data[count].name}"
              />
            </div>
            <h3>${data[count].name}</h3>
          </a>
          <div class="card__body">
            <div class="content__badge flex items-center col-gap4">
              <span class="badge text-center"
                ><i class="fa-regular fa-clock mr-3"></i>${data[count].time} menit</span
              >
              <span class="badge text-center" onclick="likes()"
                ><i class="fa-regular fa-heart mr-3 red"></i>${data[count].likes}</span
              >
            </div>
          </div>
        </div>`;
  }
};

const getItemByCategory = (category) => {
  let lost = 0;
  for (let count = 0; count < data.length; count++) {
    if (category === data[count].country) {
      content.innerHTML += `<div class="card__item">
            <a href="./food/index.html?id=${data[count].id}">
              <div class="card__header">
                <img
                  src="${data[count].pic}"
                  width="100%"
                  alt="${data[count].name}"
                />
              </div>
              <h3>${data[count].name}</h3>
            </a>
            <div class="card__body">
              <div class="content__badge flex items-center col-gap4">
                <span class="badge text-center"
                  ><i class="fa-regular fa-clock mr-3"></i>${data[count].time} menit</span
                >
                <span class="badge text-center" onclick="likes()"
                  ><i class="fa-regular fa-heart mr-3 red"></i>${data[count].likes}</span
                >
              </div>
            </div>
          </div>`;
    } else {
      lost++;
    }
  }
  lost === data.length
    ? alert(
        "Maaf atas ketidaknyamanannya, data tidak dapat dimuat karena berbeda kata kunci."
      )
    : console.log("success");
};

const likes = () => {
  alert("Terima kasih sudah menyukai resep ini!");
};

const params = new URL(document.location).searchParams;
const food = params.get("food");
const content = document.getElementById("content__category");

food ? getItemByCategory(food) : getAllItems();
