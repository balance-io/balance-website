import * as firebase from 'firebase/app';
import 'firebase/database';
import { getUrlParameter } from './helpers';

/**
 * @desc Initialize Firebase config
 */
firebase.initializeApp({
  apiKey: 'AIzaSyBlPlXzGfxf8bP7pZ_lzG9QOxVUsFakX18',
  authDomain: 'balance-referral-program.firebaseapp.com',
  databaseURL: 'https://balance-referral-program.firebaseio.com',
  projectId: 'balance-referral-program',
  storageBucket: 'balance-referral-program.appspot.com',
  messagingSenderId: '244142561763'
});

/**
 * @desc Firebase database instance
 */
const database = firebase.database();

/**
 * @desc get database values
 * @param  {String} reference
 * @return {Promise}
 */
export const databaseGet = reference =>
  new Promise((resolve, reject) =>
    database
      .ref(reference)
      .once('value')
      .then(snapshot => resolve(snapshot.val()))
      .catch(error => reject(error))
  );

/**
 * @desc update referral leaderboard score
 * @param  {String}  referralID
 * @param  {String}  type
 * @return {Promise}
 */
export const updateLeaderboard = async (referralID, type) => {
  const _referralID = referralID.substr(0, 2) === 'id' ? referralID : `id${referralID}`;
  const reference = database.ref(`referrals/${_referralID}`);
  const snapshot = await reference.once('value');
  let { traffic, score, downloads } = snapshot.val();
  if (type === 'conversion') {
    traffic += 1;
    // score += 5;
  } else if (type === 'download') {
    downloads += 1;
    // score += 50;
    score += 1;
  }
  reference.set({ traffic, score, downloads });
  database.ref(`scores/id${referralID}`).set(score);
};

/**
 * @desc get referral leaderboard score
 * @param  {String}  referralID
 * @param  {String}  type
 * @return {Promise}
 */
export const getLeaderboard = referralID =>
  new Promise((resolve, reject) =>
    database
      .ref(`scores`)
      .orderByValue()
      .once('value', snapshot => {
        let scores = {};
        snapshot.forEach(data => {
          scores[data.key] = data.val();
        });
        const _referralID = referralID.substr(0, 2) === 'id' ? referralID : `id${referralID}`;
        const position =
          Object.keys(scores)
            .reverse()
            .indexOf(_referralID) + 1;
        databaseGet(`referrals/${_referralID}`).then(referralData => {
          const referral = { position, ...referralData };
          resolve(referral);
        });
      })
  );

/**
 * @desc handle referrals
 */
export const handleReferrals = () => {
  const referral = getUrlParameter('ref');
  if (referral && !localStorage.getItem('referral_link')) {
    const uniqueID = localStorage.getItem('referrer_id');
    if (uniqueID) {
      databaseGet(`unique_id/${uniqueID}`).then(referralID => {
        const _referralID = referralID.substr(0, 2) === 'id' ? referralID : `id${referralID}`;
        if (referralID !== _referralID && !localStorage.getItem('referral_link')) {
          localStorage.setItem('referral_link', referral);
          updateLeaderboard(referral, 'conversion');
        }
      });
    } else {
      localStorage.setItem('referral_link', referral);
      updateLeaderboard(referral, 'conversion');
    }
  }
};
