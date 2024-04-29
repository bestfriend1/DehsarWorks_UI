export const staticAssetURL: string = "http://localhost:4006";
//export const staticAssetURL: string = "https://api.dehsarworks.com";
export const serverURL: string = `${staticAssetURL}/api/v1/`;

export interface Project {
  _id: string;
  title: string;
  category: string;
  template: string;
  buildingType: string;
  photographs: string;
  priority:number;

  projectAddress: string;
  client: string;
  designperiod: string;
  constructionPeriod: string;
  status: string;
  highlightedDescription: string;
  generalDescription: string;
  principalArchitect: string;
  projectArchitect: string;
  landscapeArchitect: string;
  structuralDesigner: string;
  constructionFirm: string;
  supportedBy: string;
  accolades: string[];

  displayImg: string;
  hoverImg: string;
  photoLink0: string;
  photoLink1: string;
  photoLink2: string;
  photoLink3: string;
  photoLink4: string;
  photoLink5: string;
  photoLink6: string;
  photoLink7: string;
  photoLink8: string;
  photoLink9: string;
  photoLink10: string;
  photoLink11: string;
  videolink: string;

  carousel0: string[];
  __v: number;
}

export interface Story{
  _id: string;
  title: string;
  date: string;
  description: string;
  image0: string;
  priority:number;
  youtubeLink:string;
  imgs: string[];
  __v: number;
}

export interface Team{
  _id: string;
  name: string;
  designation: string;
  priority: number;
  picLink: string,
  instaLink:string,
  fbLink:string,
  behanceLink:string,
  __v: number;
}

export function getCookieExpiryDate(numberOfDaysToAdd?: number) {
  let currentDate = new Date();

  // Add days to the current date
  // Change this value to add a different number of days
  if (!numberOfDaysToAdd) {
    numberOfDaysToAdd = 3;
  }

  currentDate.setDate(currentDate.getDate() + numberOfDaysToAdd);

  return currentDate;
}
