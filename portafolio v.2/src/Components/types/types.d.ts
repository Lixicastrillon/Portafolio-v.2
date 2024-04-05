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
  url: string;
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
  duration: string;
  image: string;
}

export interface Skills {
  id: string;
  name: string;
  icon: IconType;
}

export interface FormErrors {
  name?: string | null;
  email?: string | null;
  message?: string | null;
}
