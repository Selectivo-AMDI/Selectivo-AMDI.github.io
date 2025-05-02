import type { ISbRichtext } from "@storyblok/astro";

import type {
  BaseData,
  BaseStory,
  BaseContent,
  BaseImagen,
} from "./StoryTypes";

export interface Data extends BaseData {
  readonly story: Story;
}

export interface Story extends BaseStory {
  readonly content: Content;
}

export interface Content extends BaseContent {
  readonly autor: string;
  readonly cuerpo: ISbRichtext;
  readonly titulo: string;
  readonly portada: BaseImagen;
  readonly fecha: Date;
  readonly component: string;
}
