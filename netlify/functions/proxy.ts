import { Context } from "@netlify/edge-functions";

const pickHeaders = (headers: Headers, keys: (string | RegExp)[]): Headers => {
  const picked = new Headers();
  for (const key of headers.keys()) {
    if (keys.some((k) => (typeof k === "string" ? k === key : k.test(key)))) {
      const value = headers.get(key);
      if (typeof value === "string") {
        picked.set(key, value);
      }
    }
  }
  
  picked.set("Referer", "https://poe.com/")
  picked.set("Cookie", "p-b=6VaGMaRaFmBrV3dzybC4Lg%3D%3D; p-lat=b7xbYBJ%2FTPJnppeufI6IbyGsUV4KV0oTjF2kApBsAg%3D%3D; __cf_bm=VkhxSvsksNSQDd1V1FoAb4CYKV1jZoGSLKMPXkq.Y.U-1713953847-1.0.1.1-4dbRQq9NLfr09sxO9jxZWzU2Q00Jv0qww5Lh73srHIJFLYjIAzS_zD92eU.e83FH1DeL4aj3n6VeAlftzmBfuA; cf_clearance=xV.j6Sqr6lgWmZnt2Ou.dPNJ5jUnc8UcVjYWL23l138-1713953848-1.0.1.1-sojMZ9fDcoFEZnASNcT.ZqETZJ8.mESEhiWnTmjnfBAC7P7XDtTcmI1H.AzmcwGnnnqaF3G22Ga_s5yhD2oRRg")
  picked.set("authority", "poe.com")
  return picked;
};

const CORS_HEADERS: Record<string, string> = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "*",
  "access-control-allow-headers": "*",
};

export default async (request: Request, context: Context) => {

  if (request.method === "OPTIONS") {
    return new Response(null, {
      headers: CORS_HEADERS,
    });
  }

  const { pathname, searchParams } = new URL(request.url);
  if(false && pathname === "/") {
    let blank_html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Google PaLM API proxy on Netlify Edge</title>
</head>
<body>
  <h1 id="google-palm-api-proxy-on-netlify-edge">Google PaLM API proxy on Netlify Edge</h1>
  <p>Tips: This project uses a reverse proxy to solve problems such as location restrictions in Google APIs. </p>
  <p>If you have any of the following requirements, you may need the support of this project.</p>
  <ol>
  <li>When you see the error message &quot;User location is not supported for the API use&quot; when calling the Google PaLM API</li>
  <li>You want to customize the Google PaLM API</li>
  </ol>
  <p>For technical discussions, please visit <a href="https://simonmy.com/posts/使用netlify反向代理google-palm-api.html">https://simonmy.com/posts/使用netlify反向代理google-palm-api.html</a></p>
</body>
</html>
    `
    return new Response(blank_html, {
      headers: {
        ...CORS_HEADERS,
        "content-type": "text/html",
      },
    });
  }

  const url = new URL(pathname, "https://poe.com");
  searchParams.delete("_path");

  searchParams.forEach((value, key) => {
    url.searchParams.append(key, value);
  });

  const headers = pickHeaders(request.headers, ["content-type", "x-goog-api-client", "x-goog-api-key", "accept-encoding"]);

  const response = await fetch(url, {
    body: request.body,
    method: request.method,
    duplex: 'half',
    headers,
  });

  const responseHeaders = {
    ...CORS_HEADERS,
    ...Object.fromEntries(response.headers),
    "content-encoding": null
  };

  return new Response(response.body, {
    headers: responseHeaders,
    status: response.status
  });
};
