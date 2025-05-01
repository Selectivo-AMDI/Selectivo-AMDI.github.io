/*
Documentación de las interfaces:
https://www.storyblok.com/docs/api/content-delivery/v2/stories/the-story-object
*/

import type { SbBlokData, ISbStoryData } from '@storyblok/astro';

export interface BaseData {
    readonly cv:      number;
    readonly rels?:   BaseStory[];
    readonly links?:  BaseStory[];
    readonly story:   BaseStory;
    readonly stories: BaseStory[];
}

export interface BaseStory extends Omit<ISbStoryData, "first_published_at" | "sort_by_date" |"created_at" | "published_at"> {
    readonly created_at:          Date;
    readonly published_at?:       Date;
    readonly sort_by_date?:       Date;
    readonly first_published_at?: Date;
}

export interface BaseContent extends SbBlokData {}

export interface BaseImagen {
    readonly id:              number;
    readonly alt:             string;
    readonly name:            string;
    readonly focus:           string;
    readonly title:           string;
    readonly source:          string;
    readonly filename:        string;
    readonly copyright:       string;
    readonly fieldtype:       string;
    readonly is_external_url: boolean;
}

export interface BaseMetaData {
    readonly alt?:       string;
    readonly title?:     string;
    readonly source?:    string;
    readonly copyright?: string;
}

export interface BaseEnlace {
    readonly id:         number;
    readonly url:        string;
    readonly target:     string;
    readonly linktype:   string;
    readonly fieldtype:  string;
    readonly cached_url: string;
}