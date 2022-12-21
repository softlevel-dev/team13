import { ProfileItem } from "./Profile";

type GeoPoint = {
    latitude: number;
    longitude: number;
    title: string;
    content: string;
    photos: string[];
}

type TravelItem = {
    id: string;
    title: string;
    content: string;
    points: GeoPoint[];
    photos: string[];
    owner: ProfileItem
    duration : number;
    active: boolean;
}

export type {TravelItem, GeoPoint}