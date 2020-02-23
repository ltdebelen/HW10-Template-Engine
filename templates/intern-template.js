let htmlString = "";

function buildInternCard(interns) {
  // Loop through to data
  interns.forEach(intern => {
    htmlString += `
    <div class="col-lg-4">
    <div class="card border-primary mb-3" style="max-width: 20rem;">
      <div class="card-header">
        <i class="fa fa-user"></i> Intern
      </div>
      <div class="card-body">
        <h4 class="card-title">${intern.name}</h4>
        <p class="card-text">
            <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  ID
                  <span class="badge badge-primary badge-pill">${
                    intern.id
                  }</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  Email
                  <span class="badge badge-primary badge-pill"><a href="mailto:${
                    intern.email
                  }">${intern.email}</a></span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  School
                  <span class="badge badge-primary badge-pill">${intern.getSchool()}</span>
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

module.exports = { buildInternCard };
