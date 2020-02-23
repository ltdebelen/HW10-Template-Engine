let htmlString = "";

function buildManagerCard(managers) {
  // Loop through to data
  managers.forEach(manager => {
    htmlString += `
    <div class="col-lg-4">
    <div class="card border-primary mb-3" style="max-width: 20rem;">
      <div class="card-header">
        <i class="fa fa-coffee"></i> Manager
      </div>
      <div class="card-body">
        <h4 class="card-title">${manager.name}</h4>
        <p class="card-text">
            <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  ID
                  <span class="badge badge-primary badge-pill">${manager.id}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  Email
                  <span class="badge badge-primary badge-pill">${manager.email}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  Office Number
                  <span class="badge badge-primary badge-pill">${manager.officeNumber}</span>
                </li>
            </ul>
        </p>
      </div>
    </div>
  </div>
    `;
  });

  return htmlString;
}

module.exports = { buildManagerCard };
