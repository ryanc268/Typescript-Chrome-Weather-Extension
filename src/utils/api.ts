import { OpenweatherData } from "../interface/OpenWeatherData";

const WEATHER_API_KEY = "1358185489a1550ed2489145956d89dc";

export type OpenWeatherDataTempScale = "metric" | "imperial";

export async function fetchWeatherData(
  city: string,
  tempScale: OpenWeatherDataTempScale
): Promise<OpenweatherData> {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${tempScale}&appid=${WEATHER_API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Selected City not found!");
  }

  const data: OpenweatherData = await res.json();

  return data;
}

export function getWeatherIconSrc(iconCode: string) {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}
