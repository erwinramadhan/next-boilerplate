import qs from "qs";

export default function addQueryParameters(url: string, queryObject: any): string {
  const query = qs.stringify(queryObject, {
    encode: false // prettify URL
  });

  return url + '?' + query;
}
