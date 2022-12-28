export type OverlayVoiceType = {
  title: string | null;
  content: any;
};

export type OverlayType = {
  id: string;
  title: string;
  subtitle: string;
  voices: OverlayVoiceType[];
};
