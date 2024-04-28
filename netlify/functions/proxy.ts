import { Context } from "@netlify/edge-functions";

const pickHeaders = (headers: Headers, keys: (string | RegExp)[]): Headers => {
  const picked = new Headers();
  for (const key of headers.keys()) {
    if (keys.some((k) => (typeof k === "string" ? k === key : k.test(key)))) {
      const value = headers.get(key);
      if (typeof value === "string") {
        picked.set(key, value.replace("radiant-cajeta-4ecfa9.netlify.app", "poe.com"));
        //picked.set(key, value);
      }
    }
    const value = headers.get(key);
    if (typeof value === "string") {
      picked.set(key, value.replace("radiant-cajeta-4ecfa9.netlify.app", "poe.com"));
      //picked.set(key, value);
    }
  }

  
  
  // picked.set("Cookie", "p-b=6VaGMaRaFmBrV3dzybC4Lg%3D%3D; p-lat=b7xbYBJ%2FTPJnppeufI6IbyGsUV4KV0oTjF2kApBsAg%3D%3D; __cf_bm=VkhxSvsksNSQDd1V1FoAb4CYKV1jZoGSLKMPXkq.Y.U-1713953847-1.0.1.1-4dbRQq9NLfr09sxO9jxZWzU2Q00Jv0qww5Lh73srHIJFLYjIAzS_zD92eU.e83FH1DeL4aj3n6VeAlftzmBfuA; cf_clearance=xV.j6Sqr6lgWmZnt2Ou.dPNJ5jUnc8UcVjYWL23l138-1713953848-1.0.1.1-sojMZ9fDcoFEZnASNcT.ZqETZJ8.mESEhiWnTmjnfBAC7P7XDtTcmI1H.AzmcwGnnnqaF3G22Ga_s5yhD2oRRg")
  //picked.set("Cookie", "SID=g.a000iwg0W1SJYMHYHG5WBSMxdjU7P-Qu2TFrAyMINndJBoFC9lsx67D3e88CYUYa0_pIHNf8RAACgYKAS4SAQASFQHGX2MiaeBB2yo7-VEOE3f73bEBFRoVAUF8yKosXf6xDsjfE8EP2lWSgQDB0076; __Secure-1PSID=g.a000iwg0W1SJYMHYHG5WBSMxdjU7P-Qu2TFrAyMINndJBoFC9lsxDOy42AFyvU7-WyrAErcWTwACgYKAYISAQASFQHGX2MiB4WWniNr1cvtsk6J5NGk9RoVAUF8yKpjhIM1xrm6r2YfeDmgS8I10076; __Secure-3PSID=g.a000iwg0W1SJYMHYHG5WBSMxdjU7P-Qu2TFrAyMINndJBoFC9lsxyiJAdYorvLF20cywFYZfJwACgYKAbUSAQASFQHGX2Mi3mhl629QFgxlB4gQVi3-0BoVAUF8yKpspbPJ16u8335dWXgdlOnX0076; HSID=AlrMbZ5f-ZlwYpfmY; SSID=Ayu938vGfRLJ3EZtX; APISID=Wv0WKnTj-WxUZlMs/AfxbG9T5z0m4lG_TB; SAPISID=doMN18EoWVJAv_Bp/A6NyK4o503eKBynMF; __Secure-1PAPISID=doMN18EoWVJAv_Bp/A6NyK4o503eKBynMF; __Secure-3PAPISID=doMN18EoWVJAv_Bp/A6NyK4o503eKBynMF; SEARCH_SAMESITE=CgQI_poB; AEC=AQTF6Hxp3WXhLlqfYor-YtJ_Z7_bU42PGgnZtB1GfcLEXOV9pkEtbP4As2k; _ga=GA1.1.1721363101.1714027331; NID=513=CP6jIKoL13Zx-nW1n5ElPWALs6c-PFPXw_PED1nwLnVPX2YOjhYo5uorJ8LwS4ewn2tgdcKJXdEqLpU_A0i-szWt1OpNrcB15_5JJ0cx4zOefnPUHZQ_zYVOgfeSZ8tDEP82bLh0rGlrV48HXf5I-QA6SesBAOvyJxbFSIPWukDaOAD7RU9dpxiG_VAyWaNYw7klw8gSYwIGTZUDkcxanBA9Qt3kkxMbK_KRCztC88J3kBlr5M24Twfwz3IFInQhc66JnSauRtrsSdGmo1gh0qadAJIVja1X6KR7J16mfYA; __Secure-1PSIDTS=sidts-CjEBLwcBXNNNothXGFY0lmIN-6jK2W3viVvzqstLeBqc5BOyze4lPke_4jfSYPgofhu9EAA; __Secure-3PSIDTS=sidts-CjEBLwcBXNNNothXGFY0lmIN-6jK2W3viVvzqstLeBqc5BOyze4lPke_4jfSYPgofhu9EAA; _ga_WC57KJ50ZZ=GS1.1.1714027330.1.1.1714028149.0.0.0; SIDCC=AKEyXzVnv6kBfxK4s4s6xoX3HUG5ttLTu1btoCVXJw97HNMKBunTNsAGeNx1s2QqPvw7T44T5Jk; __Secure-1PSIDCC=AKEyXzXyoOkwKWBzLNCfJF1bVyy6fxgI1KNFA5OpssK6LQp1CSZ6mZeXmoBHokwjI-bYYD2VpUc; __Secure-3PSIDCC=AKEyXzUDuUKA7ehmE2tfCBlzHznH_gSsFcZtUHyoa34G3w12tdxSc4MmKta8zgBB58ADyqM_WFI")
  /*picked.set("authority", "poe.com")
  picked.set("Origin", "https://poe.com")
  picked.set("Referer", "https://poe.com/")*/
  //picked.set("X-Goog-Api-Key", "AIzaSyBGb5fGAyC-pRcRU6MUHb__b_vKha71HRE")
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
