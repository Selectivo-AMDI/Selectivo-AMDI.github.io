import type { CryptoType } from "./CryptoType";

export interface Data {
    stories: Story[];
    cv:      number;
    rels:    any[];
    links:   any[];
}

export interface Story {
    name:               string;
    created_at:         Date;
    published_at:       Date;
    id:                 number;
    uuid:               CryptoType;
    content:            Content;
    slug:               string;
    full_slug:          string;
    sort_by_date?:      Date;
    position:           number;
    tag_list?:          any[];
    is_startpage:       boolean;
    parent_id:          number;
    meta_data:          null;
    group_id:           CryptoType;
    first_published_at?:Date;
    release_id:         number;
    lang:               string;
    path?:              string;
    alternates:         any[];
    default_full_slug?: string;
    translated_slugs?:  string[];
}

export interface Content {
    _uid:           CryptoType;
    Local:          string;
    Academia:       string;
    Visitante:      string;
    component:      string;
    Logo_local:     Logo;
    Fecha_partido:  Date;
    Lugar_partido:  string;
    Enlace_en_vivo: EnlaceEnVivo;
    Logo_visitante: Logo;
    _editable:      string;
    Goles_local?:    number;
    Goles_visitante?: number;
}

export interface EnlaceEnVivo {
    id?:         string;
    url?:        string;
    target:     string;
    linktype:   string;
    fieldtype:  string;
    cached_url?: string;
}

export interface Logo {
    id:              number;
    alt?:            string;
    name?:            string;
    focus?:          string;
    title?:          string;
    source?:         string;
    filename:        string;
    copyright?:      string;
    fieldtype:       string;
    meta_data:       MetaData;
    is_external_url: boolean;
}

export interface MetaData {
}
