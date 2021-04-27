const listRepos = async (username) => {
  const repos = await fetch(
    `https://api.github.com/users/${username}/repos?type=owner&sort=updated`
  )
    .then((res) => res.json())
    .catch((e) => {
      console.error(e);
    });

  const markup = repos
    .map(
      (repo) =>
        `<li>
        <a a href="${repo.html_url}">${repo.name}</a>
        (🌟 ${repo.stargazers_count})
      </li>
      `
    )
    .join(" ");

  console.log("this is markup", markup);
  const result = document.getElementById("result");
  console.log(result);
  result.innerHTML = ` <ul> ${markup} </ul>`;
};

listRepos("prashantpr7");
