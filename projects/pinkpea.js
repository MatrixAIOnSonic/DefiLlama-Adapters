const utils = require("./helper/utils");

async function fetch() {
  const data = await utils.fetchURL(`https://pinkpea.finance/api/tvl`);
  console.log(data, Math.floor(Number(data.data.data.aurora_tvl)));
  return Math.floor(Number(data.data.data.aurora_tvl));
}

module.exports = { fetch };
