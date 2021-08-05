import { UserDataStore } from "./stores/UserDataStore";

export type Stores = {
  userData: UserDataStore;
};

export type OverlayVoiceType = {
  title: string | null;
  content: any;
};
