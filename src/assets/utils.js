import tea from "./images/tea-light-thumb.jpeg";
import pink from "./images/pink-light-thumb.jpeg";
import white from "./images/white-light-thumb.jpeg";

export const catalogs = [
  { thumb: "tea cup", image: tea },
  { thumb: "pink cup", image: pink },
  { thumb: "white cup", image: white },
  { thumb: "white-test cup", image: white },
  { thumb: "pink cup", image: pink },
];


export const generateUUID = () => {
  var d = new Date().getTime();//Timestamp
  var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16;//random number between 0 and 16
      if(d > 0){//Use timestamp until depleted
          r = (d + r)%16 | 0;
          d = Math.floor(d/16);
      } else {//Use microseconds since page-load if supported
          r = (d2 + r)%16 | 0;
          d2 = Math.floor(d2/16);
      }
      return (c === 'x' ? r : ((r & 0x3) | (0x8))).toString(16);
  });
}

// Allowed subdomain for the app
export const allowedSubdomain = ['localhost', 'stage','www','web' ]
