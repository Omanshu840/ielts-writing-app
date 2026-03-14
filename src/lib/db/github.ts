import { Band9Essay } from "../band9-essays"

export async function getBand9Essays(): Promise<Band9Essay[]> {
  const response = await fetch("https://raw.githubusercontent.com/Omanshu840/data/refs/heads/main/ielts-writing/band9-essays.json");
  return await response.json() as Band9Essay[];
}