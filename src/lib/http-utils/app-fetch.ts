import { HttpMethod } from "@/constant/http-method";
import addQueryParameters from "./add-query-parameters";

export function getFetch(
  url: string,
  params?: IParameter,
  token?: string
): Promise<Response> {
  let finalUrl = url;
  let headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (params !== undefined) {
    finalUrl = addQueryParameters(url, params);
  }

  if (token !== undefined) {
    headers = {
      ...headers,
      Authorization: `Bearer ${token}`,
    };
  }

  return fetch(finalUrl, {
    headers: headers,
    method: HttpMethod.Get,
  });
}

export function postFetch(
  url: string,
  body: object,
  token?: string
): Promise<Response> {
  let headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (token !== undefined) {
    headers = {
      ...headers,
      Authorization: `Bearer ${token}`,
    };
  }

  return fetch(url, {
    headers,
    method: HttpMethod.Post,
    body: JSON.stringify(body),
  });
}

export function putFetch(
  url: string,
  body: object,
  token?: string
): Promise<Response> {
  let headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (token !== undefined) {
    headers = {
      ...headers,
      Authorization: `Bearer ${token}`,
    };
  }

  return fetch(url, {
    headers,
    method: HttpMethod.Put,
    body: JSON.stringify(body),
  });
}

export function patchFetch(
  url: string,
  body: object,
  token?: string
): Promise<Response> {
  let headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (token !== undefined) {
    headers = {
      ...headers,
      Authorization: `Bearer ${token}`,
    };
  }

  return fetch(url, {
    headers,
    method: HttpMethod.Patch,
    body: JSON.stringify(body),
  });
}

export function deleteFetch(
  url: string,
  token?: string
): Promise<Response> {
  let headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  if (token !== undefined) {
    headers = {
      ...headers,
      Authorization: `Bearer ${token}`,
    };
  }

  return fetch(url, {
    headers,
    method: HttpMethod.Delete,
  });
}
