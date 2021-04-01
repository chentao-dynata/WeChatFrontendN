const protocol = 'https://';
// const host = 'https://nova-flare-qa.researchnow.com';
const host = 'goggles.qa.mw.dynata.com/';
// const host = 'wechat-integration.surveysampling.com/';
// const host = 'tutamen.serveo.net/';

// const api = 'api/1/';
const api = 'api/v1/'
// const api = 'wechat-server/api/v1/';
const baseURL = protocol + host + api;

const config = {
  registrationUrl: `${baseURL}respondent/registration`,
  loginUrl: `${baseURL}respondent/login`,
  forgotPassword: `${baseURL}respondent/password/reset`,
  balanceUrl: `${baseURL}respondent/balance`,
  surveyHistoryUrl: `${baseURL}respondent/history/survey`,
  getRewardsUrl: `${baseURL}respondent/reward/locale/zh_CN`,
  validateAlipay: `${baseURL}form/element/validate`,
  redeemUrl: `${baseURL}respondent/redeem`,
  rewardHistoryUrl: `${baseURL}respondent/history/reward`,

  // claimUrl: `${baseURL}claim/get-member-points-info`,
  claimUrl: `${baseURL}balance`,
  contactUrl: `${baseURL}contact`,
  giveMeSomeSurvey: `${baseURL}give-me-some-survey`,
  memberPointsUrl: `${baseURL}global-member-points`,
  updateUserUrl: `${baseURL}update-user`,
  // payClaimUrl: `${baseURL}claim/play-claim`,
  profileUrl: `${baseURL}profile`,
  pushMessageUrl: `${baseURL}handle-message-push`,
  // surveyHistoryUrl: `${baseURL}surveyHistory`,
  getRespondentIdUrl: `${baseURL}convert/entityToRespondent`,

  // from MemWeb
  checkPostCode: `${baseURL}postal/zh_CN/`

};

module.exports = config;
