import type {
  BaseImagen,
  BaseContent,
  BaseStory,
  BaseData,
  BaseEnlace,
} from "./StoryTypes";

export interface Data extends BaseData {
  readonly story: Story;
}

export interface Story extends BaseStory {
  readonly content: Content;
}

export interface Content extends BaseContent {
  readonly nombre_local: string;
  readonly nombre_visitante: string;
  readonly logo_local: BaseImagen;
  readonly logo_visitante: BaseImagen;
  readonly academia: string;
  readonly fecha: Date;
  readonly lugar: string;
  readonly enlace_partido?: BaseEnlace;
  readonly goles_local: number;
  readonly goles_visitante: number;
  readonly component: string;
}
