import { fetchRepoLanguage, fetchRepos, fetchUser } from "./fetch.js";
import { $ } from "./utils.js";

google.charts.load("current", { packages: ["corechart"] });

const USER_NAME = "ljk4268";

function getDataTable(object) {
  return Object.entries(object);
}

function convertNullableText(text) {}

function attachUserLink() {
  $(".overview").href = `https://github.com/${USER_NAME}`;
  $(".repositories").href = `https://github.com/${USER_NAME}?tab=repositories`;
  $(".projects").href = `https://github.com/${USER_NAME}?tab=projects`;
}

// 데이터 가져오고 렌더링 하는 부분.
function renderUserInfo(userInfo) {
  $(".profile img").src = userInfo.avatar_url;
  $(".nickname").innerText = USER_NAME;
  $(".name").innerText = userInfo.name;
  $(".words").innerText = userInfo.bio;
  $(".followers").innerText = userInfo.followers;
  $(".following").innerText = userInfo.following;
  $(".location").innerText = convertNullableText(userInfo.location);
  $(".email").innerText = convertNullableText(userInfo.email);
}

function renderLanguageChart(dataTable) {
  if (!dataTable) {
    return;
  }

  const dataTableHeader = ["언어", "작성된 코드 라인"];

  const data = google.visualization.arrayToDataTable([
    dataTableHeader,
    ...dataTable
  ]);

  const options = {
    title: "",
    pieHole: 0.4
  };

  const chart = new google.visualization.PieChart(
    document.querySelector("#language-chart")
  );
  chart.draw(data, options);
}

function renderRepoList(repos) {
  for(let i = 0; i < repos.length; i++){
    $(".wrapper").innerHTML += `<div class="repository">
    <span class="title">${repos[i].name}</span>
    <span class="public">${repos[i].private ? 'Private':'Public'}</span>
  </div>`
  }
}


function renderPortfolio() {
  fetchRepos(USER_NAME).then((repos) => renderRepoList(repos));

  const totalLanguage = {};

  const languageDataTable = getDataTable(totalLanguage);
  // renderLanguageChart(languageDataTable);
}
// async만 있으면 나 기다릴거야. 말만하는 거고 
// .then()이랑 같이 붙으면 나 기다릴거야.를 행동으로도 실천하는 놈이 되는거야.
// 진짜 기다려서 내가 원하는 위치에 데이터 찍어준다고 ㅇㅇ 
fetchUser(USER_NAME).then((repos) => renderUserInfo(repos));

renderPortfolio();
attachUserLink();





