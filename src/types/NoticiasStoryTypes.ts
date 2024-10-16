export type NoticiasStoryTypes = {
    story: Story;
    cv:    number;
    rels:  any[];
    links: any[];
}

export type Story = {
    name:               string;
    created_at:         Date;
    published_at:       null;
    id:                 number;
    uuid:               string;
    content:            StoryContent;
    slug:               string;
    full_slug:          string;
    sort_by_date:       null;
    position:           number;
    tag_list:           any[];
    is_startpage:       boolean;
    parent_id:          number;
    meta_data:          null;
    group_id:           string;
    first_published_at: null;
    release_id:         null;
    lang:               string;
    path:               null;
    alternates:         any[];
    default_full_slug:  null;
    translated_slugs:   null;
}

export type StoryContent = {
    _uid:      string;
    body:      Body[];
    component: string;
    _editable: string;
}

export type Body = {
    _uid:              string;
    Autor:             Autor[];
    Cuerpo:            Cuerpo;
    Titulo:            string;
    component:         string;
    Imagen_portada:    ImagenPortada;
    Fecha_publicacion: string;
    _editable:         string;
}

export type Autor = {
    _uid:         string;
    component:    string;
    foto_autor:   ImagenPortada;
    nombre_autor: string;
    _editable:    string;
}

export type ImagenPortada = {
    id:              number;
    alt:             string;
    name:            string;
    focus:           string;
    title:           string;
    source:          string;
    filename:        string;
    copyright:       string;
    fieldtype:       string;
    meta_data:       MetaData;
    is_external_url: boolean;
}

export type MetaData = {
}

export type Cuerpo = {
    type:    string;
    content: CuerpoContent[];
}

export type CuerpoContent = {
    type:     FluffyType;
    content?: ContentContent[];
    attrs?:   Attrs;
}

export type Attrs = {
    level: number;
}

export type ContentContent = {
    text:   string;
    type:   PurpleType;
    marks?: Mark[];
}

export type Mark = {
    type: string;
}

export enum PurpleType {
    Text = "text",
}

export enum FluffyType {
    Heading = "heading",
    Paragraph = "paragraph",
}
