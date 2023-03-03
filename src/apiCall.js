export const getData = () => {
  let data = []
  return fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/denver,CO/2023-02-15/2023-02-17?key=4W7R6KHFXTA5YECCKYQH63LN5')
          .then(res => res.json())
          .then(res => data.push(res))
          .catch((error) =>
      console.log(
        'There was a problem loading your data. Please try again.',
        error
      )
    );
}