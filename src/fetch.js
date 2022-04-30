const CLIENT_ID = 'Iv1.3dec3f734969bc97';
const CLIENT_SECRET = '347c8390653cdaf546029109f2fe5bc8c6a61873';

export async function fetchUser(userName) {
  const response = await fetch(`https://api.github.com/users/${userName}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`);
  const data = await response.json()

  return data;
}

export async function fetchRepos(userName) {
  const response = await fetch(`https://api.github.com/users/${userName}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`);
  const data = await response.json()

  return data;
}



export async function fetchRepoLanguage(userName, repoName) {
  const response = await fetch(`https://api.github.com/repos/${userName}/${repoName}/languages?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`);
  const data = await response.json()

  return data;

}

