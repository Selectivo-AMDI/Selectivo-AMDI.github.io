import type { BaseContent, BaseStory, BaseImagen, BaseData } from "./StoryTypes";

export interface Data extends BaseData {
    readonly story: Story;
}

export interface Story extends BaseStory {
    readonly content: Content;
}

export interface Content extends BaseContent {
    readonly imagen: BaseImagen;
    readonly nombre: string;
    readonly rol:    string;
}
