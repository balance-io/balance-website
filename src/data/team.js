import jin from '../assets/team/jin.png';
import christian from '../assets/team/christian.png';
import richard from '../assets/team/richard.png';

import jinFace from '../assets/team-emoji/jin-face.png';
import jinFun from '../assets/team-emoji/jin-fun.png';
import jinWork from '../assets/team-emoji/jin-work.png';
import jinParty from '../assets/team-emoji/jin-party.png';

import christianFace from '../assets/team-emoji/christian-face.png';
import christianFun from '../assets/team-emoji/christian-fun.png';
import christianWork from '../assets/team-emoji/christian-work.png';
import christianParty from '../assets/team-emoji/christian-party.png';

import richardFace from '../assets/team-emoji/richard-face.png';
import richardFun from '../assets/team-emoji/richard-fun.png';
import richardWork from '../assets/team-emoji/richard-work.png';
import richardParty from '../assets/team-emoji/richard-party.png';

export default [
  {
    name: `Jin Chung`,
    profileImg: jin,
    twitter: `jinrummie`,
    role: `Engineer`,
    description: `Jin met Richard at Hacker School (now Recurse Center). Then she worked on machine learning infrastructure at eBay.`,
    emojis: [
      { name: 'jinFace', img: jinFace },
      { name: 'jinFun', img: jinFun },
      { name: 'jinWork', img: jinWork },
      { name: 'jinParty', img: jinParty }
    ]
  },
  {
    name: `Christian Baroni`,
    profileImg: christian,
    twitter: `chrisbaroni`,
    role: `Designer`,
    description: `Christian has designed user interfaces and icons for Microsoft Office, Stripe and several successful startups.`,
    emojis: [
      { name: 'christianFace', img: christianFace },
      { name: 'christianFun', img: christianFun },
      { name: 'christianWork', img: christianWork },
      { name: 'christianParty', img: christianParty }
    ]
  },
  {
    name: `Richard Burton`,
    profileImg: richard,
    twitter: `ricburton`,
    role: `Designer`,
    description: `Richard bumped into Gavin and Vitalik in 2014 and spent time designing interface concepts for Ethereum before the sale.`,
    emojis: [
      { name: 'richardFace', img: richardFace },
      { name: 'richardFun', img: richardFun },
      { name: 'richardWork', img: richardWork },
      { name: 'richardParty', img: richardParty }
    ]
  }
];
