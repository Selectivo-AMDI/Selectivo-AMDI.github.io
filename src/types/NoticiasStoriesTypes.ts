import type { CryptoType } from "./CryptoType";

export interface NoticiasData {
    stories: Story[];
    cv:      number;
    rels:    any[];
    links:   any[];
}

export interface Story {
    name:               string;
    created_at:         Date;
    published_at?:      Date;
    id:                 number;
    uuid:               CryptoType;
    content:            Content;
    slug:               string;
    full_slug:          string;
    sort_by_date:       null;
    position:           number;
    tag_list:           any[];
    is_startpage:       boolean;
    parent_id:          number;
    meta_data:          null;
    group_id:           string;
    first_published_at?:Date;
    release_id?:        number;
    lang:               string;
    path?:              string;
    alternates:         any[];
    default_full_slug?: any;
    translated_slugs?:  any;
}

export interface Content {
    _uid:               string;
    Autor:             string;
    Cuerpo:            string;
    Titulo:            string;
    component:          string;
    Imagen_portada:    ImagenPortada;
    Fecha_publicacion: string;
    _editable:          string;
    foto_autor?:        FotoAutor;
    nombre_autor?:      string;
}

export interface ImagenPortada {
    id:                number;
    alt?:              string;
    name?:             string;
    focus?:            string;
    title?:            string;
    source?:           string;
    filename:          string;
    copyright?:        string;
    fieldtype:         string;
    meta_data:         MetaData;
    is_external_url:   boolean;
}

export interface MetaData {
    alt?: string;
    title?: string;
    source?: string;
    copyright?: string;
}