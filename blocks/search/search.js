export default async function decorate(block) {
  const container = document.createElement('div');
  container.classList.add('wrapper');

  container.innerHTML = `
    <div class="input-elements">
      <div class="input-wrapper">
        <label for="destination">Destination*</label>
        <input id="destination" type="text" placeholder="City, Airport, Attraction or Address" value=""></input>
      </div>
      <div class="input-wrapper">
        <label for="checkin">Check In</label>
        <input id="checkin" type="text" placeholder="" value="12/11/2024" disabled></input>
      </div>
      <div class="input-wrapper">
        <label for="checkout">Check Out</label>
        <input id="checkout" type="text" placeholder="" value="12/12/2024" disabled></input>
      </div>
      <div class="submit-btn-wrapper">
        <button type="button">Search</button>
      </div>
    </div>
    <div class="link">
      <a href="#" title="Manage Reservations">Manage Reservations</a>
    </div>
  `;

  block.textContent = '';
  block.append(container);
}