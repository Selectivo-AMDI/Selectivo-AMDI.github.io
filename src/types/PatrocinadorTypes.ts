import type {
  BaseContent,
  BaseData,
  BaseImagen,
  BaseStory,
  BaseEnlace,
} from "./StoryTypes";

export interface Data extends BaseData {
  readonly story: Story;
}

export interface Story extends BaseStory {
  readonly content: Content;
}

export interface Content extends BaseContent {
  readonly url_nota?: BaseEnlace;
  readonly alt: string;
  readonly logo: BaseImagen;
  readonly nombre: string;
  readonly component: string;
}
