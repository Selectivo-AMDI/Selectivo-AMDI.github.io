import type {
  BaseData,
  BaseStory,
  BaseContent,
  BaseImagen,
  BaseEnlace,
} from "./StoryTypes";

export interface Data extends BaseData {
  readonly stories: Story[];
}

export interface Story extends BaseStory {
  readonly content: Content;
}

export interface Content extends BaseContent {
  readonly nombre_local: string;
  readonly academia: string;
  readonly nombre_visitante: string;
  readonly logo_local: BaseImagen;
  readonly fecha: Date;
  readonly lugar: string;
  readonly estado: string;
  readonly enlace_partido?: BaseEnlace;
  readonly logo_visitante: BaseImagen;
  readonly goles_local: number;
  readonly goles_visitante: number;
}
