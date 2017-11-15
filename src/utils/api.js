import axios from 'axios';

const webtask = axios.create({
  baseURL: 'https://wt-863e332a77d038d29fa50d15961b5367-0.run.webtask.io',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

/**
 * Downloads latest release from Github
 * @param {String} [default: 'balance-open']
 */
export const downloadLatestRelease = (repo = 'balance-open') =>
  webtask
    .post('/github-latest-release', {
      owner: 'balancemymoney',
      repo
    })
    .then(({ data }) => {
      const url = data.assets[0].browser_download_url;
      const link = document.createElement('a');
      document.body.appendChild(link);
      link.href = url;
      link.click();
      link.remove();
    });
