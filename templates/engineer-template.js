let htmlString = "";

function buildEngineerCard(engineers) {
  // Loop through to data
  engineers.forEach(engineer => {
    htmlString += `
    <div class="col-lg-4">
    <div class="card border-primary mb-3" style="max-width: 20rem;">
      <div class="card-header">
        <i class="fa fa-gears"></i> Engineer
      </div>
      <div class="card-body">
        <h4 class="card-title">${engineer.name}</h4>
        <p class="card-text">
            <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  ID
                  <span class="badge badge-primary badge-pill">${
                    engineer.id
                  }</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  Email
                  <span class="badge badge-primary badge-pill"><a href="mailto:${
                    engineer.email
                  }">${engineer.email}</a></span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  Github
                  <span class="badge badge-primary badge-pill"><a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></span>
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

module.exports = { buildEngineerCard };
