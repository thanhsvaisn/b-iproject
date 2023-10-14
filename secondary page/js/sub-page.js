
var divProductIntroduction = document.getElementById('div__product-Introduction');
var containerDetails = document.createElement('div');
containerDetails.classList.add('container-details-project');
containerDetails.innerHTML = `
    <div class="content-details-project">
    <h3 class="">Washing Machine</h3>
    <div class="">18 Products</div>
    <p class="">Compare the products and choose the one that better suits your needs.</p>
    <button type="button" class="btn-show-details">Open Details
        <div type="inline" class="">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
        <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
    </div>
    </button>
`
divProductIntroduction.appendChild(containerDetails);