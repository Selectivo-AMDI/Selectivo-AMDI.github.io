export type PartidosStoryTypes = {
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
    content:            Content;
    slug:               string;
    full_slug:          string;
    sort_by_date:       null;
    position:           number;
    tag_list:           any[];
    is_startpage:       boolean;
    parent_id:          null;
    meta_data:          null;
    group_id:           string;
    first_published_at: null;
    release_id:         null;
    lang:               string;
    path:               string;
    alternates:         any[];
    default_full_slug:  null;
    translated_slugs:   null;
}

export type Content = {
    _uid:           string;
    Local:          string;
    Academia:       string;
    Visitante:      string;
    component:      string;
    Logo_local:     Logo;
    Fecha_partido:  string;
    Lugar_partido:  string;
    Enlace_en_vivo: EnlaceEnVivo;
    Logo_visitante: Logo;
    _editable:      string;
}

export type EnlaceEnVivo = {
    id:         string;
    url:        string;
    target:     string;
    linktype:   string;
    fieldtype:  string;
    cached_url: string;
}

export type Logo = {
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
