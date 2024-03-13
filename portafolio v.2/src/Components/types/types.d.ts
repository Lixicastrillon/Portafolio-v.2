import { IconType } from "react-icons";

export interface BarMenuItems {
  id: string;
  label: string;
  icon: IconType;
  url: string;
}

export interface BarMenuCard {
  id: string;
  displayName: string;
  photoUrl: string;
  title: string;
  infoprofile: { urls: string; icons: IconType }[];
}

export interface ProjCard {
  id: string;
  image: string;
  url: string;
  logo: string;
  description: string;
}

export interface ProfileCard {
  id: string;
  icon: string;
  title: string;
  certificate: string;
  duration: string;
}

export interface Skills {
  id: string;
  name: string;
  image: string;
}
