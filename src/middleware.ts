import { NextResponse, type NextRequest } from "next/server";
import {
  DEFAULT_LOCALE,
  localeFromAcceptLanguage,
  localeFromCountry,
} from "@/lib/i18n/geo";

const GEO_COOKIE = "rs-geo-locale";
const COUNTRY_COOKIE = "rs-geo-country";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30;

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  if (request.cookies.get(GEO_COOKIE)?.value) {
    return response;
  }

  const country =
    request.headers.get("x-vercel-ip-country") ??
    request.headers.get("cf-ipcountry") ??
    request.headers.get("x-country-code") ??
    null;

  const locale =
    localeFromCountry(country) ??
    localeFromAcceptLanguage(request.headers.get("accept-language")) ??
    DEFAULT_LOCALE;

  response.cookies.set(GEO_COOKIE, locale, {
    maxAge: COOKIE_MAX_AGE,
    sameSite: "lax",
    path: "/",
  });

  if (country) {
    response.cookies.set(COUNTRY_COOKIE, country, {
      maxAge: COOKIE_MAX_AGE,
      sameSite: "lax",
      path: "/",
    });
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/|api/|favicon|.*\\..*).*)"],
};
